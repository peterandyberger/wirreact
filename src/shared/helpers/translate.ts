import * as dictionaryEn from '../../assets/i18n/en.json';
import * as dictionaryHu from '../../assets/i18n/hu.json';
import { get } from 'lodash';

const LS_LANGUAGE_KEY = 'ls_language_key';

export enum LanguageEnum {
    HU = 'hu',
    EN = 'en'
}

/* eslint-disable  @typescript-eslint/no-explicit-any */
const languagesCollection: Record<LanguageEnum, any> = {
    [LanguageEnum.HU]: dictionaryHu,
    [LanguageEnum.EN]: dictionaryEn,
};

const defaultLang: LanguageEnum = LanguageEnum.HU;

export function getCurrentLang (): LanguageEnum {
    if (!localStorage.getItem(LS_LANGUAGE_KEY)) {
        localStorage.setItem(LS_LANGUAGE_KEY, defaultLang);
    }
    return localStorage.getItem(LS_LANGUAGE_KEY) as LanguageEnum;
}

export function setCurrentLang (selectedLang: LanguageEnum) {
    localStorage.setItem(LS_LANGUAGE_KEY, selectedLang);
}

export function translate (label: string, selectedLang: LanguageEnum = getCurrentLang()): string {
    const translatedLabel = get(languagesCollection[selectedLang].default, label);
    if (!translatedLabel) {
        console.warn('@Missing translation to:', label);
    }
    return translatedLabel ?? label;
}
