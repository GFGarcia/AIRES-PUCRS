/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
	/** Web3Forms access key for the open-letter signup form (announcements/carta-aberta-ao-sul-global). */
	readonly PUBLIC_WEB3FORMS_OPEN_LETTER_SIGN_UP_KEY: string;
	/** Web3Forms access key for the /contact page form. */
	readonly PUBLIC_WEB3FORMS_CONTACT_KEY: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
