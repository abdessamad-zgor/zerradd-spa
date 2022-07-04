let langParser = require("accept-language-parser");
let {parse} = require("cookie")

/**
 * Copied util from i18next but with a few modifications:
 * * It takes a custom i18n instance.
 * * It's async so the namespaces can be loaded.
 * * It only returns one language.
 */
export const getInitialProps = async (i18n) => {
	const namespaces = i18n.reportNamespaces
		? i18n.reportNamespaces.getUsedNamespaces()
		: [];
	await i18n.loadNamespaces(namespaces);

	const initialI18nStore= { [i18n.language]: {} };
	namespaces.forEach(ns => {
		initialI18nStore[i18n.language][ns] =
			i18n.getResourceBundle(i18n.language, ns) || {};
	});

	return { initialI18nStore, initialLanguage: i18n.language };
};

/**
 * Determine a user's preferred language via (in order, highest to lowest weight):
 * * `language` cookie. 
 * * Highest weight lang in Accept-Language header.
 */
export const getPreferredLanguage = (req) => {
	const acceptedLang = langParser.pick(
		['fr', 'ar'],
		req.headers["accept-language"] || "",
		{
			loose: true
		}
	);
	const cookieLang = parse(req.headers.cookie || "").language;

	return cookieLang || acceptedLang || "fr";
};

module.exports = {getInitialProps, getPreferredLanguage}