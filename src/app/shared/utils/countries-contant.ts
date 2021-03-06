import * as fuzz from 'fuzzball';

export interface Country {
    name: string;
    alpha2: string;
    alpha3: string;
    numeric: string;
    locales: string[];
    default_locale: string;
    currency: string;
    languages: string[];
    capital: string;
    emoji: string;
    emojiU: string;
    fips: string;
    internet: string;
    continent: string;
    region: string;
    alternate_names?: string[];
}

export interface CLM {
    getAllCountries: () => Country[];
    getAlpha3ByAlpha2: (alpha2: string) => string;
    getLocaleByAlpha2: (alpha2: string) => string;
    getCountryNameByAlpha2: (alpha2: string) => string;
    getNumericByAlpha2: (alpha2: string) => string;
    getCurrencyByAlpha2: (alpha2: string) => string;
    getCountryByAlpha2: (alpha2: string) => Country;
    getAlpha2ByAlpha3: (alpha3: string) => string;
    getLocaleByAlpha3: (alpha3: string) => string;
    getCountryNameByAlpha3: (alpha3: string) => string;
    getNumericByAlpha3: (alpha3: string) => string;
    getCurrencyByAlpha3: (alpha3: string) => string;
    getCountryByAlpha3: (alpha3: string) => Country;
    getAlpha2ByNumeric: (numeric: string) => string;
    getAlpha3ByNumeric: (numeric: string) => string;
    getLocaleByNumeric: (numeric: string) => string;
    getCountryNameByNumeric: (numeric: string) => string;
    getCurrencyByNumeric: (numeric: string) => string;
    getCountryByNumeric: (numeric: string) => Country;
    getAlpha2ByName: (name: string, fuzzy?: boolean) => string;
    getAlpha3ByName: (name: string, fuzzy?: boolean) => string;
    getLocaleByName: (name: string, fuzzy?: boolean) => string;
    getNumericByName: (name: string, fuzzy?: boolean) => string;
    getCurrencyByName: (name: string, fuzzy?: boolean) => string;
    getCountryByName: (name: string, fuzzy?: boolean) => Country;
}

export class Countries implements CLM{

    countries = [
        {
            "name": "Afghanistan",
            "alpha2": "AF",
            "alpha3": "AFG",
            "numeric": "004",
            "locales": [
                "ps_AF",
                "fa_AF",
                "uz_Arab_AF"
            ],
            "default_locale": "ps_AF",
            "currency": "AFN",
            "languages": [
                "ps",
                "uz",
                "tk"
            ],
            "capital": "Kabul",
            "emoji": "????????",
            "emojiU": "U+1F1E6 U+1F1EB",
            "fips": "AF",
            "internet": "AF",
            "continent": "Asia",
            "region": "South Asia"
        },
        {
            "name": "Albania",
            "alpha2": "AL",
            "alpha3": "ALB",
            "numeric": "008",
            "locales": [
                "sq_AL"
            ],
            "default_locale": "sq_AL",
            "currency": "ALL",
            "languages": [
                "sq"
            ],
            "capital": "Tirana",
            "emoji": "????????",
            "emojiU": "U+1F1E6 U+1F1F1",
            "fips": "AL",
            "internet": "AL",
            "continent": "Europe",
            "region": "South East Europe"
        },
        {
            "name": "Algeria",
            "alpha2": "DZ",
            "alpha3": "DZA",
            "numeric": "012",
            "locales": [
                "ar_DZ",
                "kab_DZ"
            ],
            "default_locale": "ar_DZ",
            "currency": "DZD",
            "languages": [
                "ar"
            ],
            "capital": "Algiers",
            "emoji": "????????",
            "emojiU": "U+1F1E9 U+1F1FF",
            "fips": "AG",
            "internet": "DZ",
            "continent": "Africa",
            "region": "Northern Africa"
        },
        {
            "name": "American Samoa",
            "alpha2": "AS",
            "alpha3": "ASM",
            "numeric": "016",
            "locales": [
                "en_AS"
            ],
            "default_locale": "en_AS",
            "currency": "USD",
            "languages": [
                "en",
                "sm"
            ],
            "capital": "Pago Pago",
            "emoji": "????????",
            "emojiU": "U+1F1E6 U+1F1F8",
            "fips": "AQ",
            "internet": "AS",
            "continent": "Oceania",
            "region": "Pacific"
        },
        {
            "name": "Andorra",
            "alpha2": "AD",
            "alpha3": "AND",
            "numeric": "020",
            "locales": [
                "ca"
            ],
            "default_locale": "ca",
            "currency": "EUR",
            "languages": [
                "ca"
            ],
            "capital": "Andorra la Vella",
            "emoji": "????????",
            "emojiU": "U+1F1E6 U+1F1E9",
            "fips": "AN",
            "internet": "AD",
            "continent": "Europe",
            "region": "South West Europe"
        },
        {
            "name": "Angola",
            "alpha2": "AO",
            "alpha3": "AGO",
            "numeric": "024",
            "locales": [
                "pt"
            ],
            "default_locale": "pt",
            "currency": "AOA",
            "languages": [
                "pt"
            ],
            "capital": "Luanda",
            "emoji": "????????",
            "emojiU": "U+1F1E6 U+1F1F4",
            "fips": "AO",
            "internet": "AO",
            "continent": "Africa",
            "region": "Southern Africa"
        },
        {
            "name": "Anguilla",
            "alpha2": "AI",
            "alpha3": "AIA",
            "numeric": "660",
            "locales": [
                "en"
            ],
            "default_locale": "en",
            "currency": "XCD",
            "languages": [
                "en"
            ],
            "capital": "The Valley",
            "emoji": "????????",
            "emojiU": "U+1F1E6 U+1F1EE",
            "fips": "AV",
            "internet": "AI",
            "continent": "Americas",
            "region": "West Indies"
        },
        {
            "name": "Antarctica",
            "alpha2": "AQ",
            "alpha3": "ATA",
            "numeric": "010",
            "locales": [
                "en_US"
            ],
            "default_locale": "en_US",
            "currency": "USD",
            "languages": [

            ],
            "capital": "",
            "emoji": "????????",
            "emojiU": "U+1F1E6 U+1F1F6",
            "fips": "AY",
            "internet": "AQ",
            "continent": "Antarctica",
            "region": "Antarctica"
        },
        {
            "name": "Antigua and Barbuda",
            "alpha2": "AG",
            "alpha3": "ATG",
            "numeric": "028",
            "locales": [
                "en"
            ],
            "default_locale": "en",
            "currency": "XCD",
            "languages": [
                "en"
            ],
            "capital": "Saint John's",
            "emoji": "????????",
            "emojiU": "U+1F1E6 U+1F1EC",
            "fips": "AC",
            "internet": "AG",
            "continent": "Americas",
            "region": "West Indies"
        },
        {
            "name": "Argentina",
            "alpha2": "AR",
            "alpha3": "ARG",
            "numeric": "032",
            "locales": [
                "es_AR"
            ],
            "default_locale": "es_AR",
            "currency": "ARS",
            "languages": [
                "es",
                "gn"
            ],
            "capital": "Buenos Aires",
            "emoji": "????????",
            "emojiU": "U+1F1E6 U+1F1F7",
            "fips": "AR",
            "internet": "AR",
            "continent": "Americas",
            "region": "South America"
        },
        {
            "name": "Armenia",
            "alpha2": "AM",
            "alpha3": "ARM",
            "numeric": "051",
            "locales": [
                "hy_AM"
            ],
            "default_locale": "hy_AM",
            "currency": "AMD",
            "languages": [
                "hy",
                "ru"
            ],
            "capital": "Yerevan",
            "emoji": "????????",
            "emojiU": "U+1F1E6 U+1F1F2",
            "fips": "AM",
            "internet": "AM",
            "continent": "Asia",
            "region": "South West Asia"
        },
        {
            "name": "Aruba",
            "alpha2": "AW",
            "alpha3": "ABW",
            "numeric": "533",
            "locales": [
                "nl"
            ],
            "default_locale": "nl",
            "currency": "AWG",
            "languages": [
                "nl",
                "pa"
            ],
            "capital": "Oranjestad",
            "emoji": "????????",
            "emojiU": "U+1F1E6 U+1F1FC",
            "fips": "AA",
            "internet": "AW",
            "continent": "Americas",
            "region": "West Indies"
        },
        {
            "name": "Australia",
            "alpha2": "AU",
            "alpha3": "AUS",
            "numeric": "036",
            "locales": [
                "en_AU"
            ],
            "default_locale": "en_AU",
            "currency": "AUD",
            "languages": [
                "en"
            ],
            "capital": "Canberra",
            "emoji": "????????",
            "emojiU": "U+1F1E6 U+1F1FA",
            "fips": "AS",
            "internet": "AU",
            "continent": "Oceania",
            "region": "Pacific"
        },
        {
            "name": "Austria",
            "alpha2": "AT",
            "alpha3": "AUT",
            "numeric": "040",
            "locales": [
                "de_AT"
            ],
            "default_locale": "de_AT",
            "currency": "EUR",
            "languages": [
                "de"
            ],
            "capital": "Vienna",
            "emoji": "????????",
            "emojiU": "U+1F1E6 U+1F1F9",
            "fips": "AU",
            "internet": "AT",
            "continent": "Europe",
            "region": "Central Europe"
        },
        {
            "name": "Azerbaijan",
            "alpha2": "AZ",
            "alpha3": "AZE",
            "numeric": "031",
            "locales": [
                "az_Cyrl_AZ",
                "az_Latn_AZ"
            ],
            "default_locale": "az_Cyrl_AZ",
            "currency": "AZN",
            "languages": [
                "az"
            ],
            "capital": "Baku",
            "emoji": "????????",
            "emojiU": "U+1F1E6 U+1F1FF",
            "fips": "AJ",
            "internet": "AZ",
            "continent": "Asia",
            "region": "South West Asia"
        },
        {
            "name": "Bahamas",
            "alpha2": "BS",
            "alpha3": "BHS",
            "numeric": "044",
            "locales": [
                "en"
            ],
            "default_locale": "en",
            "currency": "BSD",
            "languages": [
                "en"
            ],
            "capital": "Nassau",
            "emoji": "????????",
            "emojiU": "U+1F1E7 U+1F1F8",
            "fips": "BF",
            "internet": "BS",
            "continent": "Americas",
            "region": "West Indies"
        },
        {
            "name": "Bahrain",
            "alpha2": "BH",
            "alpha3": "BHR",
            "numeric": "048",
            "locales": [
                "ar_BH"
            ],
            "default_locale": "ar_BH",
            "currency": "BHD",
            "languages": [
                "ar"
            ],
            "capital": "Manama",
            "emoji": "????????",
            "emojiU": "U+1F1E7 U+1F1ED",
            "fips": "BA",
            "internet": "BH",
            "continent": "Asia",
            "region": "South West Asia"
        },
        {
            "name": "Bangladesh",
            "alpha2": "BD",
            "alpha3": "BGD",
            "numeric": "050",
            "locales": [
                "bn_BD"
            ],
            "default_locale": "bn_BD",
            "currency": "BDT",
            "languages": [
                "bn"
            ],
            "capital": "Dhaka",
            "emoji": "????????",
            "emojiU": "U+1F1E7 U+1F1E9",
            "fips": "BG",
            "internet": "BD",
            "continent": "Asia",
            "region": "South Asia"
        },
        {
            "name": "Barbados",
            "alpha2": "BB",
            "alpha3": "BRB",
            "numeric": "052",
            "locales": [
                "en"
            ],
            "default_locale": "en",
            "currency": "BBD",
            "languages": [
                "en"
            ],
            "capital": "Bridgetown",
            "emoji": "????????",
            "emojiU": "U+1F1E7 U+1F1E7",
            "fips": "BB",
            "internet": "BB",
            "continent": "Americas",
            "region": "West Indies"
        },
        {
            "name": "Belarus",
            "alpha2": "BY",
            "alpha3": "BLR",
            "numeric": "112",
            "locales": [
                "be_BY"
            ],
            "default_locale": "be_BY",
            "currency": "BYN",
            "languages": [
                "be",
                "ru"
            ],
            "capital": "Minsk",
            "emoji": "????????",
            "emojiU": "U+1F1E7 U+1F1FE",
            "fips": "BO",
            "internet": "BY",
            "continent": "Europe",
            "region": "Eastern Europe"
        },
        {
            "name": "Belgium",
            "alpha2": "BE",
            "alpha3": "BEL",
            "numeric": "056",
            "locales": [
                "nl_BE",
                "en_BE",
                "fr_BE",
                "de_BE"
            ],
            "default_locale": "nl_BE",
            "currency": "EUR",
            "languages": [
                "nl",
                "fr",
                "de"
            ],
            "capital": "Brussels",
            "emoji": "????????",
            "emojiU": "U+1F1E7 U+1F1EA",
            "fips": "BE",
            "internet": "BE",
            "continent": "Europe",
            "region": "Western Europe"
        },
        {
            "name": "Belize",
            "alpha2": "BZ",
            "alpha3": "BLZ",
            "numeric": "084",
            "locales": [
                "en_BZ"
            ],
            "default_locale": "en_BZ",
            "currency": "BZD",
            "languages": [
                "en",
                "es"
            ],
            "capital": "Belmopan",
            "emoji": "????????",
            "emojiU": "U+1F1E7 U+1F1FF",
            "fips": "BH",
            "internet": "BZ",
            "continent": "Americas",
            "region": "Central America"
        },
        {
            "name": "Benin",
            "alpha2": "BJ",
            "alpha3": "BEN",
            "numeric": "204",
            "locales": [
                "fr_BJ"
            ],
            "default_locale": "fr_BJ",
            "currency": "XOF",
            "languages": [
                "fr"
            ],
            "capital": "Porto-Novo",
            "emoji": "????????",
            "emojiU": "U+1F1E7 U+1F1EF",
            "fips": "BN",
            "internet": "BJ",
            "continent": "Africa",
            "region": "Western Africa"
        },
        {
            "name": "Bermuda",
            "alpha2": "BM",
            "alpha3": "BMU",
            "numeric": "060",
            "locales": [
                "en"
            ],
            "default_locale": "en",
            "currency": "BMD",
            "languages": [
                "en"
            ],
            "capital": "Hamilton",
            "emoji": "????????",
            "emojiU": "U+1F1E7 U+1F1F2",
            "fips": "BD",
            "internet": "BM",
            "continent": "Americas",
            "region": "West Indies"
        },
        {
            "name": "Bhutan",
            "alpha2": "BT",
            "alpha3": "BTN",
            "numeric": "064",
            "locales": [
                "dz"
            ],
            "default_locale": "dz",
            "currency": "BTN",
            "languages": [
                "dz"
            ],
            "capital": "Thimphu",
            "emoji": "????????",
            "emojiU": "U+1F1E7 U+1F1F9",
            "fips": "BT",
            "internet": "BT",
            "continent": "Asia",
            "region": "South Asia"
        },
        {
            "name": "Bolivia",
            "alpha2": "BO",
            "alpha3": "BOL",
            "numeric": "068",
            "locales": [
                "es_BO"
            ],
            "default_locale": "es_BO",
            "currency": "BTN",
            "languages": [
                "es",
                "ay",
                "qu"
            ],
            "capital": "Sucre",
            "emoji": "????????",
            "emojiU": "U+1F1E7 U+1F1F4",
            "fips": "BL",
            "internet": "BO",
            "continent": "Americas",
            "region": "South America",
            "alternate_names": [
                "Plurinational State of Bolivia"
            ]
        },
        {
            "name": "Bonaire",
            "alpha2": "BQ",
            "alpha3": "BES",
            "numeric": "535",
            "locales": [
                "nl"
            ],
            "default_locale": "nl",
            "currency": "USD",
            "languages": [
                "nl"
            ],
            "capital": "Kralendijk",
            "emoji": "????????",
            "emojiU": "U+1F1E7 U+1F1F6",
            "fips": "BQ",
            "internet": "BQ",
            "continent": "Americas",
            "region": "West Indies",
            "alternate_names": [
                "Bonaire, Sint Eustatius and Saba"
            ]
        },
        {
            "name": "Bosnia and Herzegovina",
            "alpha2": "BA",
            "alpha3": "BIH",
            "numeric": "070",
            "locales": [
                "bs_BA",
                "sr_Cyrl_BA",
                "sr_Latn_BA"
            ],
            "default_locale": "bs_BA",
            "currency": "BAM",
            "languages": [
                "bs",
                "hr",
                "sr"
            ],
            "capital": "Sarajevo",
            "emoji": "????????",
            "emojiU": "U+1F1E7 U+1F1E6",
            "fips": "BK",
            "internet": "BA",
            "continent": "Europe",
            "region": "South East Europe"
        },
        {
            "name": "Botswana",
            "alpha2": "BW",
            "alpha3": "BWA",
            "numeric": "072",
            "locales": [
                "en_BW"
            ],
            "default_locale": "en_BW",
            "currency": "BWP",
            "languages": [
                "en",
                "tn"
            ],
            "capital": "Gaborone",
            "emoji": "????????",
            "emojiU": "U+1F1E7 U+1F1FC",
            "fips": "BC",
            "internet": "BW",
            "continent": "Africa",
            "region": "Southern Africa"
        },
        {
            "name": "Bouvet Island",
            "alpha2": "BV",
            "alpha3": "BVT",
            "numeric": "074",
            "locales": [
                "no"
            ],
            "default_locale": "no",
            "currency": "NOK",
            "languages": [
                "no",
                "nb",
                "nn"
            ],
            "capital": "",
            "emoji": "????????",
            "emojiU": "U+1F1E7 U+1F1FB",
            "fips": "BV",
            "internet": "BV",
            "continent": "Atlantic Ocean",
            "region": "South Atlantic Ocean"
        },
        {
            "name": "Brazil",
            "alpha2": "BR",
            "alpha3": "BRA",
            "numeric": "076",
            "locales": [
                "pt_BR"
            ],
            "default_locale": "pt_BR",
            "currency": "BRL",
            "languages": [
                "pt"
            ],
            "capital": "Bras??lia",
            "emoji": "????????",
            "emojiU": "U+1F1E7 U+1F1F7",
            "fips": "BR",
            "internet": "BR",
            "continent": "Americas",
            "region": "South America"
        },
        {
            "name": "British Indian Ocean Territory",
            "alpha2": "IO",
            "alpha3": "IOT",
            "numeric": "086",
            "locales": [
                "en"
            ],
            "default_locale": "en",
            "currency": "USD",
            "languages": [
                "en"
            ],
            "capital": "Diego Garcia",
            "emoji": "????????",
            "emojiU": "U+1F1EE U+1F1F4",
            "fips": "IO",
            "internet": "IO",
            "continent": "Asia",
            "region": "South Asia"
        },
        {
            "name": "Brunei Darussalam",
            "alpha2": "BN",
            "alpha3": "BRN",
            "numeric": "096",
            "locales": [
                "ms_BN"
            ],
            "default_locale": "ms_BN",
            "currency": "BND",
            "languages": [
                "ms"
            ],
            "capital": "Bandar Seri Begawan",
            "emoji": "????????",
            "emojiU": "U+1F1E7 U+1F1F3",
            "fips": "BX",
            "internet": "BN",
            "continent": "Asia",
            "region": "South East Asia"
        },
        {
            "name": "Bulgaria",
            "alpha2": "BG",
            "alpha3": "BGR",
            "numeric": "100",
            "locales": [
                "bg_BG"
            ],
            "default_locale": "bg_BG",
            "currency": "BGN",
            "languages": [
                "bg"
            ],
            "capital": "Sofia",
            "emoji": "????????",
            "emojiU": "U+1F1E7 U+1F1EC",
            "fips": "BU",
            "internet": "BG",
            "continent": "Europe",
            "region": "South East Europe"
        },
        {
            "name": "Burkina Faso",
            "alpha2": "BF",
            "alpha3": "BFA",
            "numeric": "854",
            "locales": [
                "fr_BF"
            ],
            "default_locale": "fr_BF",
            "currency": "XOF",
            "languages": [
                "fr",
                "ff"
            ],
            "capital": "Ouagadougou",
            "emoji": "????????",
            "emojiU": "U+1F1E7 U+1F1EB",
            "fips": "UV",
            "internet": "BF",
            "continent": "Africa",
            "region": "Western Africa"
        },
        {
            "name": "Burundi",
            "alpha2": "BI",
            "alpha3": "BDI",
            "numeric": "108",
            "locales": [
                "fr_BI"
            ],
            "default_locale": "fr_BI",
            "currency": "BIF",
            "languages": [
                "fr",
                "rn"
            ],
            "capital": "Bujumbura",
            "emoji": "????????",
            "emojiU": "U+1F1E7 U+1F1EE",
            "fips": "BY",
            "internet": "BI",
            "continent": "Africa",
            "region": "Central Africa"
        },
        {
            "name": "Cabo Verde",
            "alpha2": "CV",
            "alpha3": "CPV",
            "numeric": "132",
            "locales": [
                "kea_CV"
            ],
            "default_locale": "kea_CV",
            "currency": "CVE",
            "languages": [
                "pt"
            ],
            "capital": "Praia",
            "emoji": "????????",
            "emojiU": "U+1F1E8 U+1F1FB",
            "fips": "CV",
            "internet": "CV",
            "continent": "Africa",
            "region": "Western Africa"
        },
        {
            "name": "Cambodia",
            "alpha2": "KH",
            "alpha3": "KHM",
            "numeric": "116",
            "locales": [
                "km_KH"
            ],
            "default_locale": "km_KH",
            "currency": "KHR",
            "languages": [
                "km"
            ],
            "capital": "Phnom Penh",
            "emoji": "????????",
            "emojiU": "U+1F1F0 U+1F1ED",
            "fips": "CB",
            "internet": "KH",
            "continent": "Asia",
            "region": "South East Asia"
        },
        {
            "name": "Cameroon",
            "alpha2": "CM",
            "alpha3": "CMR",
            "numeric": "120",
            "locales": [
                "fr_CM"
            ],
            "default_locale": "fr_CM",
            "currency": "XAF",
            "languages": [
                "en",
                "fr"
            ],
            "capital": "Yaound??",
            "emoji": "????????",
            "emojiU": "U+1F1E8 U+1F1F2",
            "fips": "CM",
            "internet": "CM",
            "continent": "Africa",
            "region": "Western Africa"
        },
        {
            "name": "Canada",
            "alpha2": "CA",
            "alpha3": "CAN",
            "numeric": "124",
            "locales": [
                "en_CA",
                "fr_CA"
            ],
            "default_locale": "en_CA",
            "currency": "CAD",
            "languages": [
                "en",
                "fr"
            ],
            "capital": "Ottawa",
            "emoji": "????????",
            "emojiU": "U+1F1E8 U+1F1E6",
            "fips": "CA",
            "internet": "CA",
            "continent": "Americas",
            "region": "North America"
        },
        {
            "name": "Cayman Islands",
            "alpha2": "KY",
            "alpha3": "CYM",
            "numeric": "136",
            "locales": [
                "en"
            ],
            "default_locale": "en",
            "currency": "KYD",
            "languages": [
                "en"
            ],
            "capital": "George Town",
            "emoji": "????????",
            "emojiU": "U+1F1F0 U+1F1FE",
            "fips": "CJ",
            "internet": "KY",
            "continent": "Americas",
            "region": "West Indies"
        },
        {
            "name": "Central African Republic",
            "alpha2": "CF",
            "alpha3": "CAF",
            "numeric": "140",
            "locales": [
                "fr_CF",
                "sg_CF"
            ],
            "default_locale": "fr_CF",
            "currency": "XAF",
            "languages": [
                "fr",
                "sg"
            ],
            "capital": "Bangui",
            "emoji": "????????",
            "emojiU": "U+1F1E8 U+1F1EB",
            "fips": "CT",
            "internet": "CF",
            "continent": "Africa",
            "region": "Central Africa"
        },
        {
            "name": "Chad",
            "alpha2": "TD",
            "alpha3": "TCD",
            "numeric": "148",
            "locales": [
                "fr_TD"
            ],
            "default_locale": "fr_TD",
            "currency": "XAF",
            "languages": [
                "fr",
                "ar"
            ],
            "capital": "N'Djamena",
            "emoji": "????????",
            "emojiU": "U+1F1F9 U+1F1E9",
            "fips": "CD",
            "internet": "TD",
            "continent": "Africa",
            "region": "Central Africa"
        },
        {
            "name": "Chile",
            "alpha2": "CL",
            "alpha3": "CHL",
            "numeric": "152",
            "locales": [
                "es_CL"
            ],
            "default_locale": "es_CL",
            "currency": "CLF",
            "languages": [
                "es"
            ],
            "capital": "Santiago",
            "emoji": "????????",
            "emojiU": "U+1F1E8 U+1F1F1",
            "fips": "CI",
            "internet": "CL",
            "continent": "Americas",
            "region": "South America"
        },
        {
            "name": "China",
            "alpha2": "CN",
            "alpha3": "CHN",
            "numeric": "156",
            "locales": [
                "zh_CN",
                "zh_Hans_CN",
                "ii_CN",
                "bo_CN"
            ],
            "default_locale": "zh_CN",
            "currency": "CNY",
            "languages": [
                "zh"
            ],
            "capital": "Beijing",
            "emoji": "????????",
            "emojiU": "U+1F1E8 U+1F1F3",
            "fips": "CH",
            "internet": "CN",
            "continent": "Asia",
            "region": "East Asia"
        },
        {
            "name": "Christmas Island",
            "alpha2": "CX",
            "alpha3": "CXR",
            "numeric": "162",
            "locales": [
                "en"
            ],
            "default_locale": "en",
            "currency": "AUD",
            "languages": [
                "en"
            ],
            "capital": "Flying Fish Cove",
            "emoji": "????????",
            "emojiU": "U+1F1E8 U+1F1FD",
            "fips": "KT",
            "internet": "CX",
            "continent": "Asia",
            "region": "South East Asia"
        },
        {
            "name": "Cocos Islands",
            "alpha2": "CC",
            "alpha3": "CCK",
            "numeric": "166",
            "locales": [
                "en"
            ],
            "default_locale": "en",
            "currency": "AUD",
            "languages": [
                "en"
            ],
            "capital": "West Island",
            "emoji": "????????",
            "emojiU": "U+1F1E8 U+1F1E8",
            "fips": "CK",
            "internet": "CC",
            "continent": "Asia",
            "region": "South East Asia",
            "alternate_names": [
                "Cocos Keeling Islands"
            ]
        },
        {
            "name": "Colombia",
            "alpha2": "CO",
            "alpha3": "COL",
            "numeric": "170",
            "locales": [
                "es_CO"
            ],
            "default_locale": "es_CO",
            "currency": "COU",
            "languages": [
                "es"
            ],
            "capital": "Bogot??",
            "emoji": "????????",
            "emojiU": "U+1F1E8 U+1F1F4",
            "fips": "CO",
            "internet": "CO",
            "continent": "Americas",
            "region": "South America"
        },
        {
            "name": "Comoros",
            "alpha2": "KM",
            "alpha3": "COM",
            "numeric": "174",
            "locales": [
                "fr_KM"
            ],
            "default_locale": "fr_KM",
            "currency": "KMF",
            "languages": [
                "ar",
                "fr"
            ],
            "capital": "Moroni",
            "emoji": "????????",
            "emojiU": "U+1F1F0 U+1F1F2",
            "fips": "CN",
            "internet": "KM",
            "continent": "Africa",
            "region": "Indian Ocean"
        },
        {
            "name": "Democratic Republic of the Congo",
            "alpha2": "CD",
            "alpha3": "COD",
            "numeric": "180",
            "locales": [
                "fr_CD"
            ],
            "default_locale": "fr_CD",
            "currency": "CDF",
            "languages": [
                "fr",
                "ln",
                "kg",
                "sw",
                "lu"
            ],
            "capital": "Kinshasa",
            "emoji": "????????",
            "emojiU": "U+1F1E8 U+1F1E9",
            "fips": "CG",
            "internet": "ZR",
            "continent": "Africa",
            "region": "Central Africa"
        },
        {
            "name": "Congo",
            "alpha2": "CG",
            "alpha3": "COG",
            "numeric": "178",
            "locales": [
                "fr_CG"
            ],
            "default_locale": "fr_CG",
            "currency": "XAF",
            "languages": [
                "fr",
                "ln"
            ],
            "capital": "Brazzaville",
            "emoji": "????????",
            "emojiU": "U+1F1E8 U+1F1EC",
            "fips": "CF",
            "internet": "CG",
            "continent": "Africa",
            "region": "Central Africa"
        },
        {
            "name": "Cook Islands",
            "alpha2": "CK",
            "alpha3": "COK",
            "numeric": "184",
            "locales": [
                "en"
            ],
            "default_locale": "en",
            "currency": "NZD",
            "languages": [
                "en"
            ],
            "capital": "Avarua",
            "emoji": "????????",
            "emojiU": "U+1F1E8 U+1F1F0",
            "fips": "CW",
            "internet": "CK",
            "continent": "Oceania",
            "region": "Pacific"
        },
        {
            "name": "Costa Rica",
            "alpha2": "CR",
            "alpha3": "CRI",
            "numeric": "188",
            "locales": [
                "es_CR"
            ],
            "default_locale": "es_CR",
            "currency": "CRC",
            "languages": [
                "es"
            ],
            "capital": "San Jos??",
            "emoji": "????????",
            "emojiU": "U+1F1E8 U+1F1F7",
            "fips": "CS",
            "internet": "CR",
            "continent": "Americas",
            "region": "Central America"
        },
        {
            "name": "Croatia",
            "alpha2": "HR",
            "alpha3": "HRV",
            "numeric": "191",
            "locales": [
                "hr_HR"
            ],
            "default_locale": "hr_HR",
            "currency": "HRK",
            "languages": [
                "hr"
            ],
            "capital": "Zagreb",
            "emoji": "????????",
            "emojiU": "U+1F1ED U+1F1F7",
            "fips": "HR",
            "internet": "HR",
            "continent": "Europe",
            "region": "South East Europe"
        },
        {
            "name": "Cuba",
            "alpha2": "CU",
            "alpha3": "CUB",
            "numeric": "192",
            "locales": [
                "es"
            ],
            "default_locale": "es",
            "currency": "CUC",
            "languages": [
                "es"
            ],
            "capital": "Havana",
            "emoji": "????????",
            "emojiU": "U+1F1E8 U+1F1FA",
            "fips": "CU",
            "internet": "CU",
            "continent": "Americas",
            "region": "West Indies"
        },
        {
            "name": "Cura??ao",
            "alpha2": "CW",
            "alpha3": "CUW",
            "numeric": "531",
            "locales": [
                "nl"
            ],
            "default_locale": "nl",
            "currency": "ANG",
            "languages": [
                "nl",
                "pa",
                "en"
            ],
            "capital": "Willemstad",
            "emoji": "????????",
            "emojiU": "U+1F1E8 U+1F1FC",
            "fips": "UC",
            "internet": "CW",
            "continent": "Americas",
            "region": "West Indies"
        },
        {
            "name": "Cyprus",
            "alpha2": "CY",
            "alpha3": "CYP",
            "numeric": "196",
            "locales": [
                "el_CY"
            ],
            "default_locale": "el_CY",
            "currency": "EUR",
            "languages": [
                "el",
                "tr",
                "hy"
            ],
            "capital": "Nicosia",
            "emoji": "????????",
            "emojiU": "U+1F1E8 U+1F1FE",
            "fips": "CY",
            "internet": "CY",
            "continent": "Asia",
            "region": "South West Asia"
        },
        {
            "name": "Czechia",
            "alpha2": "CZ",
            "alpha3": "CZE",
            "numeric": "203",
            "locales": [
                "cs_CZ"
            ],
            "default_locale": "cs_CZ",
            "currency": "CZK",
            "languages": [
                "cs",
                "sk"
            ],
            "capital": "Prague",
            "emoji": "????????",
            "emojiU": "U+1F1E8 U+1F1FF",
            "fips": "EZ",
            "internet": "CZ",
            "continent": "Europe",
            "region": "Central Europe"
        },
        {
            "name": "C??te d'Ivoire",
            "alpha2": "CI",
            "alpha3": "CIV",
            "numeric": "384",
            "locales": [
                "fr_CI"
            ],
            "default_locale": "fr_CI",
            "currency": "CZK",
            "languages": [
                "fr"
            ],
            "capital": "Yamoussoukro",
            "emoji": "????????",
            "emojiU": "U+1F1E8 U+1F1EE",
            "fips": "IV",
            "internet": "CI",
            "continent": "Africa",
            "region": "Western Africa"
        },
        {
            "name": "Denmark",
            "alpha2": "DK",
            "alpha3": "DNK",
            "numeric": "208",
            "locales": [
                "da_DK"
            ],
            "default_locale": "da_DK",
            "currency": "DKK",
            "languages": [
                "da"
            ],
            "capital": "Copenhagen",
            "emoji": "????????",
            "emojiU": "U+1F1E9 U+1F1F0",
            "fips": "DA",
            "internet": "DK",
            "continent": "Europe",
            "region": "Northern Europe"
        },
        {
            "name": "Djibouti",
            "alpha2": "DJ",
            "alpha3": "DJI",
            "numeric": "262",
            "locales": [
                "fr_DJ",
                "so_DJ"
            ],
            "default_locale": "fr_DJ",
            "currency": "DJF",
            "languages": [
                "fr",
                "ar"
            ],
            "capital": "Djibouti",
            "emoji": "????????",
            "emojiU": "U+1F1E9 U+1F1EF",
            "fips": "DJ",
            "internet": "DJ",
            "continent": "Africa",
            "region": "Eastern Africa"
        },
        {
            "name": "Dominica",
            "alpha2": "DM",
            "alpha3": "DMA",
            "numeric": "212",
            "locales": [
                "en"
            ],
            "default_locale": "en",
            "currency": "XCD",
            "languages": [
                "en"
            ],
            "capital": "Roseau",
            "emoji": "????????",
            "emojiU": "U+1F1E9 U+1F1F2",
            "fips": "DO",
            "internet": "DM",
            "continent": "Americas",
            "region": "West Indies"
        },
        {
            "name": "Dominican Republic",
            "alpha2": "DO",
            "alpha3": "DOM",
            "numeric": "214",
            "locales": [
                "es_DO"
            ],
            "default_locale": "es_DO",
            "currency": "DOP",
            "languages": [
                "es"
            ],
            "capital": "Santo Domingo",
            "emoji": "????????",
            "emojiU": "U+1F1E9 U+1F1F4",
            "fips": "DR",
            "internet": "DO",
            "continent": "Americas",
            "region": "West Indies"
        },
        {
            "name": "Ecuador",
            "alpha2": "EC",
            "alpha3": "ECU",
            "numeric": "218",
            "locales": [
                "es_EC"
            ],
            "default_locale": "es_EC",
            "currency": "USD",
            "languages": [
                "es"
            ],
            "capital": "Quito",
            "emoji": "????????",
            "emojiU": "U+1F1EA U+1F1E8",
            "fips": "EC",
            "internet": "EC",
            "continent": "Americas",
            "region": "South America"
        },
        {
            "name": "Egypt",
            "alpha2": "EG",
            "alpha3": "EGY",
            "numeric": "818",
            "locales": [
                "ar_EG"
            ],
            "default_locale": "ar_EG",
            "currency": "EGP",
            "languages": [
                "ar"
            ],
            "capital": "Cairo",
            "emoji": "????????",
            "emojiU": "U+1F1EA U+1F1EC",
            "fips": "EG",
            "internet": "EG",
            "continent": "Africa",
            "region": "Northern Africa"
        },
        {
            "name": "El Salvador",
            "alpha2": "SV",
            "alpha3": "SLV",
            "numeric": "222",
            "locales": [
                "es_SV"
            ],
            "default_locale": "es_SV",
            "currency": "USD",
            "languages": [
                "es"
            ],
            "capital": "San Salvador",
            "emoji": "????????",
            "emojiU": "U+1F1F8 U+1F1FB",
            "fips": "ES",
            "internet": "SV",
            "continent": "Americas",
            "region": "Central America"
        },
        {
            "name": "Equatorial Guinea",
            "alpha2": "GQ",
            "alpha3": "GNQ",
            "numeric": "226",
            "locales": [
                "fr_GQ",
                "es_GQ"
            ],
            "default_locale": "fr_GQ",
            "currency": "XAF",
            "languages": [
                "es",
                "fr"
            ],
            "capital": "Malabo",
            "emoji": "????????",
            "emojiU": "U+1F1EC U+1F1F6",
            "fips": "EK",
            "internet": "GQ",
            "continent": "Africa",
            "region": "Western Africa"
        },
        {
            "name": "Eritrea",
            "alpha2": "ER",
            "alpha3": "ERI",
            "numeric": "232",
            "locales": [
                "ti_ER"
            ],
            "default_locale": "ti_ER",
            "currency": "ERN",
            "languages": [
                "ti",
                "ar",
                "en"
            ],
            "capital": "Asmara",
            "emoji": "????????",
            "emojiU": "U+1F1EA U+1F1F7",
            "fips": "ER",
            "internet": "ER",
            "continent": "Africa",
            "region": "Eastern Africa"
        },
        {
            "name": "Estonia",
            "alpha2": "EE",
            "alpha3": "EST",
            "numeric": "233",
            "locales": [
                "et_EE"
            ],
            "default_locale": "et_EE",
            "currency": "EUR",
            "languages": [
                "et"
            ],
            "capital": "Tallinn",
            "emoji": "????????",
            "emojiU": "U+1F1EA U+1F1EA",
            "fips": "EN",
            "internet": "EE",
            "continent": "Europe",
            "region": "Eastern Europe"
        },
        {
            "name": "Eswatini",
            "alpha2": "SZ",
            "alpha3": "SWZ",
            "numeric": "748",
            "locales": [
                "en"
            ],
            "default_locale": "en",
            "currency": "EUR",
            "languages": [
                "en",
                "ss"
            ],
            "capital": "Lobamba",
            "emoji": "????????",
            "emojiU": "U+1F1F8 U+1F1FF",
            "fips": "WZ",
            "internet": "SZ",
            "continent": "Africa",
            "region": "Southern Africa"
        },
        {
            "name": "Ethiopia",
            "alpha2": "ET",
            "alpha3": "ETH",
            "numeric": "231",
            "locales": [
                "am_ET",
                "om_ET",
                "so_ET",
                "ti_ET"
            ],
            "default_locale": "am_ET",
            "currency": "ETB",
            "languages": [
                "am"
            ],
            "capital": "Addis Ababa",
            "emoji": "????????",
            "emojiU": "U+1F1EA U+1F1F9",
            "fips": "ET",
            "internet": "ET",
            "continent": "Africa",
            "region": "Eastern Africa"
        },
        {
            "name": "Falkland Islands",
            "alpha2": "FK",
            "alpha3": "FLK",
            "numeric": "238",
            "locales": [
                "en"
            ],
            "default_locale": "en",
            "currency": "DKK",
            "languages": [
                "en"
            ],
            "capital": "Stanley",
            "emoji": "????????",
            "emojiU": "U+1F1EB U+1F1F0",
            "fips": "FA",
            "internet": "FK",
            "continent": "Americas",
            "region": "South America",
            "alternate_names": [
                "Malvinas Falkland Islands"
            ]
        },
        {
            "name": "Faroe Islands",
            "alpha2": "FO",
            "alpha3": "FRO",
            "numeric": "234",
            "locales": [
                "fo_FO"
            ],
            "default_locale": "fo_FO",
            "currency": "DKK",
            "languages": [
                "fo"
            ],
            "capital": "T??rshavn",
            "emoji": "????????",
            "emojiU": "U+1F1EB U+1F1F4",
            "fips": "FO",
            "internet": "FO",
            "continent": "Europe",
            "region": "Northern Europe"
        },
        {
            "name": "Fiji",
            "alpha2": "FJ",
            "alpha3": "FJI",
            "numeric": "242",
            "locales": [
                "en"
            ],
            "default_locale": "en",
            "currency": "FJD",
            "languages": [
                "en",
                "fj",
                "hi",
                "ur"
            ],
            "capital": "Suva",
            "emoji": "????????",
            "emojiU": "U+1F1EB U+1F1EF",
            "fips": "FJ",
            "internet": "FJ",
            "continent": "Oceania",
            "region": "Pacific"
        },
        {
            "name": "Finland",
            "alpha2": "FI",
            "alpha3": "FIN",
            "numeric": "246",
            "locales": [
                "fi_FI",
                "sv_FI"
            ],
            "default_locale": "fi_FI",
            "currency": "EUR",
            "languages": [
                "fi",
                "sv"
            ],
            "capital": "Helsinki",
            "emoji": "????????",
            "emojiU": "U+1F1EB U+1F1EE",
            "fips": "FI",
            "internet": "FI",
            "continent": "Europe",
            "region": "Northern Europe"
        },
        {
            "name": "France",
            "alpha2": "FR",
            "alpha3": "FRA",
            "numeric": "250",
            "locales": [
                "fr_FR"
            ],
            "default_locale": "fr_FR",
            "currency": "EUR",
            "languages": [
                "fr"
            ],
            "capital": "Paris",
            "emoji": "????????",
            "emojiU": "U+1F1EB U+1F1F7",
            "fips": "FR",
            "internet": "FR",
            "continent": "Europe",
            "region": "Western Europe"
        },
        {
            "name": "French Guiana",
            "alpha2": "GF",
            "alpha3": "GUF",
            "numeric": "254",
            "locales": [
                "fr"
            ],
            "default_locale": "fr",
            "currency": "EUR",
            "languages": [
                "fr"
            ],
            "capital": "Cayenne",
            "emoji": "????????",
            "emojiU": "U+1F1EC U+1F1EB",
            "fips": "FG",
            "internet": "GF",
            "continent": "Americas",
            "region": "South America"
        },
        {
            "name": "French Polynesia",
            "alpha2": "PF",
            "alpha3": "PYF",
            "numeric": "258",
            "locales": [
                "fr"
            ],
            "default_locale": "fr",
            "currency": "XPF",
            "languages": [
                "fr"
            ],
            "capital": "Papeet??",
            "emoji": "????????",
            "emojiU": "U+1F1F5 U+1F1EB",
            "fips": "FP",
            "internet": "PF",
            "continent": "Oceania",
            "region": "Pacific"
        },
        {
            "name": "French Southern Territories",
            "alpha2": "TF",
            "alpha3": "ATF",
            "numeric": "260",
            "locales": [
                "fr"
            ],
            "default_locale": "fr",
            "currency": "EUR",
            "languages": [
                "fr"
            ],
            "capital": "Port-aux-Fran??ais",
            "emoji": "????????",
            "emojiU": "U+1F1F9 U+1F1EB",
            "fips": "FS",
            "internet": "--",
            "continent": "Indian Ocean",
            "region": "Southern Indian Ocean"
        },
        {
            "name": "Gabon",
            "alpha2": "GA",
            "alpha3": "GAB",
            "numeric": "266",
            "locales": [
                "fr_GA"
            ],
            "default_locale": "fr_GA",
            "currency": "XAF",
            "languages": [
                "fr"
            ],
            "capital": "Libreville",
            "emoji": "????????",
            "emojiU": "U+1F1EC U+1F1E6",
            "fips": "GB",
            "internet": "GA",
            "continent": "Africa",
            "region": "Western Africa"
        },
        {
            "name": "Gambia",
            "alpha2": "GM",
            "alpha3": "GMB",
            "numeric": "270",
            "locales": [
                "en"
            ],
            "default_locale": "en",
            "currency": "GMD",
            "languages": [
                "en"
            ],
            "capital": "Banjul",
            "emoji": "????????",
            "emojiU": "U+1F1EC U+1F1F2",
            "fips": "GA",
            "internet": "GM",
            "continent": "Africa",
            "region": "Western Africa"
        },
        {
            "name": "Georgia",
            "alpha2": "GE",
            "alpha3": "GEO",
            "numeric": "268",
            "locales": [
                "ka_GE"
            ],
            "default_locale": "ka_GE",
            "currency": "GEL",
            "languages": [
                "ka"
            ],
            "capital": "Tbilisi",
            "emoji": "????????",
            "emojiU": "U+1F1EC U+1F1EA",
            "fips": "GG",
            "internet": "GE",
            "continent": "Asia",
            "region": "South West Asia"
        },
        {
            "name": "Germany",
            "alpha2": "DE",
            "alpha3": "DEU",
            "numeric": "276",
            "locales": [
                "de_DE"
            ],
            "default_locale": "de_DE",
            "currency": "EUR",
            "languages": [
                "de"
            ],
            "capital": "Berlin",
            "emoji": "????????",
            "emojiU": "U+1F1E9 U+1F1EA",
            "fips": "GM",
            "internet": "DE",
            "continent": "Europe",
            "region": "Western Europe"
        },
        {
            "name": "Ghana",
            "alpha2": "GH",
            "alpha3": "GHA",
            "numeric": "288",
            "locales": [
                "ak_GH",
                "ee_GH",
                "ha_Latn_GH"
            ],
            "default_locale": "ak_GH",
            "currency": "GHS",
            "languages": [
                "en"
            ],
            "capital": "Accra",
            "emoji": "????????",
            "emojiU": "U+1F1EC U+1F1ED",
            "fips": "GH",
            "internet": "GH",
            "continent": "Africa",
            "region": "Western Africa"
        },
        {
            "name": "Gibraltar",
            "alpha2": "GI",
            "alpha3": "GIB",
            "numeric": "292",
            "locales": [
                "en"
            ],
            "default_locale": "en",
            "currency": "GIP",
            "languages": [
                "en"
            ],
            "capital": "Gibraltar",
            "emoji": "????????",
            "emojiU": "U+1F1EC U+1F1EE",
            "fips": "GI",
            "internet": "GI",
            "continent": "Europe",
            "region": "South West Europe"
        },
        {
            "name": "Greece",
            "alpha2": "GR",
            "alpha3": "GRC",
            "numeric": "300",
            "locales": [
                "el_GR"
            ],
            "default_locale": "el_GR",
            "currency": "EUR",
            "languages": [
                "el"
            ],
            "capital": "Athens",
            "emoji": "????????",
            "emojiU": "U+1F1EC U+1F1F7",
            "fips": "GR",
            "internet": "GR",
            "continent": "Europe",
            "region": "South East Europe"
        },
        {
            "name": "Greenland",
            "alpha2": "GL",
            "alpha3": "GRL",
            "numeric": "304",
            "locales": [
                "kl_GL"
            ],
            "default_locale": "kl_GL",
            "currency": "DKK",
            "languages": [
                "kl"
            ],
            "capital": "Nuuk",
            "emoji": "????????",
            "emojiU": "U+1F1EC U+1F1F1",
            "fips": "GL",
            "internet": "GL",
            "continent": "Americas",
            "region": "North America"
        },
        {
            "name": "Grenada",
            "alpha2": "GD",
            "alpha3": "GRD",
            "numeric": "308",
            "locales": [
                "en"
            ],
            "default_locale": "en",
            "currency": "XCD",
            "languages": [
                "en"
            ],
            "capital": "St. George's",
            "emoji": "????????",
            "emojiU": "U+1F1EC U+1F1E9",
            "fips": "GJ",
            "internet": "GD",
            "continent": "Americas",
            "region": "West Indies"
        },
        {
            "name": "Guadeloupe",
            "alpha2": "GP",
            "alpha3": "GLP",
            "numeric": "312",
            "locales": [
                "fr_GP"
            ],
            "default_locale": "fr_GP",
            "currency": "EUR",
            "languages": [
                "fr"
            ],
            "capital": "Basse-Terre",
            "emoji": "????????",
            "emojiU": "U+1F1EC U+1F1F5",
            "fips": "GP",
            "internet": "GP",
            "continent": "Americas",
            "region": "West Indies"
        },
        {
            "name": "Guam",
            "alpha2": "GU",
            "alpha3": "GUM",
            "numeric": "316",
            "locales": [
                "en_GU"
            ],
            "default_locale": "en_GU",
            "currency": "USD",
            "languages": [
                "en",
                "ch",
                "es"
            ],
            "capital": "Hag??t??a",
            "emoji": "????????",
            "emojiU": "U+1F1EC U+1F1FA",
            "fips": "GQ",
            "internet": "GU",
            "continent": "Oceania",
            "region": "Pacific"
        },
        {
            "name": "Guatemala",
            "alpha2": "GT",
            "alpha3": "GTM",
            "numeric": "320",
            "locales": [
                "es_GT"
            ],
            "default_locale": "es_GT",
            "currency": "GTQ",
            "languages": [
                "es"
            ],
            "capital": "Guatemala City",
            "emoji": "????????",
            "emojiU": "U+1F1EC U+1F1F9",
            "fips": "GT",
            "internet": "GT",
            "continent": "Americas",
            "region": "Central America"
        },
        {
            "name": "Guernsey",
            "alpha2": "GG",
            "alpha3": "GGY",
            "numeric": "831",
            "locales": [
                "en"
            ],
            "default_locale": "en",
            "currency": "GBP",
            "languages": [
                "en",
                "fr"
            ],
            "capital": "St. Peter Port",
            "emoji": "????????",
            "emojiU": "U+1F1EC U+1F1EC",
            "fips": "GK",
            "internet": "GG",
            "continent": "Europe",
            "region": "Western Europe"
        },
        {
            "name": "Guinea",
            "alpha2": "GN",
            "alpha3": "GIN",
            "numeric": "324",
            "locales": [
                "fr_GN"
            ],
            "default_locale": "fr_GN",
            "currency": "GNF",
            "languages": [
                "fr",
                "ff"
            ],
            "capital": "Conakry",
            "emoji": "????????",
            "emojiU": "U+1F1EC U+1F1F3",
            "fips": "GV",
            "internet": "GN",
            "continent": "Africa",
            "region": "Western Africa"
        },
        {
            "name": "Guinea-Bissau",
            "alpha2": "GW",
            "alpha3": "GNB",
            "numeric": "624",
            "locales": [
                "pt_GW"
            ],
            "default_locale": "pt_GW",
            "currency": "XOF",
            "languages": [
                "pt"
            ],
            "capital": "Bissau",
            "emoji": "????????",
            "emojiU": "U+1F1EC U+1F1FC",
            "fips": "PU",
            "internet": "GW",
            "continent": "Africa",
            "region": "Western Africa"
        },
        {
            "name": "Guyana",
            "alpha2": "GY",
            "alpha3": "GUY",
            "numeric": "328",
            "locales": [
                "en"
            ],
            "default_locale": "en",
            "currency": "GYD",
            "languages": [
                "en"
            ],
            "capital": "Georgetown",
            "emoji": "????????",
            "emojiU": "U+1F1EC U+1F1FE",
            "fips": "GY",
            "internet": "GY",
            "continent": "Americas",
            "region": "South America"
        },
        {
            "name": "Haiti",
            "alpha2": "HT",
            "alpha3": "HTI",
            "numeric": "332",
            "locales": [
                "fr"
            ],
            "default_locale": "fr",
            "currency": "USD",
            "languages": [
                "fr",
                "ht"
            ],
            "capital": "Port-au-Prince",
            "emoji": "????????",
            "emojiU": "U+1F1ED U+1F1F9",
            "fips": "HA",
            "internet": "HT",
            "continent": "Americas",
            "region": "West Indies"
        },
        {
            "name": "Heard Island and McDonald Islands",
            "alpha2": "HM",
            "alpha3": "HMD",
            "numeric": "334",
            "locales": [
                "en"
            ],
            "default_locale": "en",
            "currency": "AUD",
            "languages": [
                "en"
            ],
            "capital": "",
            "emoji": "????????",
            "emojiU": "U+1F1ED U+1F1F2",
            "fips": "HM",
            "internet": "HM",
            "continent": "Indian Ocean",
            "region": "Southern Indian Ocean"
        },
        {
            "name": "Holy See",
            "alpha2": "VA",
            "alpha3": "VAT",
            "numeric": "336",
            "locales": [
                "it"
            ],
            "default_locale": "it",
            "currency": "EUR",
            "languages": [
                "it",
                "la"
            ],
            "capital": "Vatican City",
            "emoji": "????????",
            "emojiU": "U+1F1FB U+1F1E6",
            "fips": "VT",
            "internet": "VA",
            "continent": "Europe",
            "region": "Southern Europe"
        },
        {
            "name": "Honduras",
            "alpha2": "HN",
            "alpha3": "HND",
            "numeric": "340",
            "locales": [
                "es_HN"
            ],
            "default_locale": "es_HN",
            "currency": "HNL",
            "languages": [
                "es"
            ],
            "capital": "Tegucigalpa",
            "emoji": "????????",
            "emojiU": "U+1F1ED U+1F1F3",
            "fips": "HO",
            "internet": "HN",
            "continent": "Americas",
            "region": "Central America"
        },
        {
            "name": "Hong Kong",
            "alpha2": "HK",
            "alpha3": "HKG",
            "numeric": "344",
            "locales": [
                "yue_Hant_HK",
                "zh_Hans_HK",
                "zh_Hant_HK",
                "en_HK"
            ],
            "default_locale": "en_HK",
            "currency": "HKD",
            "languages": [
                "zh",
                "en"
            ],
            "capital": "City of Victoria",
            "emoji": "????????",
            "emojiU": "U+1F1ED U+1F1F0",
            "fips": "HK",
            "internet": "HK",
            "continent": "Asia",
            "region": "East Asia"
        },
        {
            "name": "Hungary",
            "alpha2": "HU",
            "alpha3": "HUN",
            "numeric": "348",
            "locales": [
                "hu_HU"
            ],
            "default_locale": "hu_HU",
            "currency": "HUF",
            "languages": [
                "hu"
            ],
            "capital": "Budapest",
            "emoji": "????????",
            "emojiU": "U+1F1ED U+1F1FA",
            "fips": "HU",
            "internet": "HU",
            "continent": "Europe",
            "region": "Central Europe"
        },
        {
            "name": "Iceland",
            "alpha2": "IS",
            "alpha3": "ISL",
            "numeric": "352",
            "locales": [
                "is_IS"
            ],
            "default_locale": "is_IS",
            "currency": "ISK",
            "languages": [
                "is"
            ],
            "capital": "Reykjavik",
            "emoji": "????????",
            "emojiU": "U+1F1EE U+1F1F8",
            "fips": "IC",
            "internet": "IS",
            "continent": "Europe",
            "region": "Northern Europe"
        },
        {
            "name": "India",
            "alpha2": "IN",
            "alpha3": "IND",
            "numeric": "356",
            "locales": [
                "as_IN",
                "bn_IN",
                "en_IN",
                "gu_IN",
                "hi_IN",
                "kn_IN",
                "kok_IN",
                "ml_IN",
                "mr_IN",
                "ne_IN",
                "or_IN",
                "pa_Guru_IN",
                "ta_IN",
                "te_IN",
                "bo_IN",
                "ur_IN"
            ],
            "default_locale": "en_IN",
            "currency": "INR",
            "languages": [
                "hi",
                "en"
            ],
            "capital": "New Delhi",
            "emoji": "????????",
            "emojiU": "U+1F1EE U+1F1F3",
            "fips": "IN",
            "internet": "IN",
            "continent": "Asia",
            "region": "South Asia"
        },
        {
            "name": "Indonesia",
            "alpha2": "ID",
            "alpha3": "IDN",
            "numeric": "360",
            "locales": [
                "id-ID"
            ],
            "default_locale": "id-ID",
            "currency": "IDR",
            "languages": [
                "id"
            ],
            "capital": "Jakarta",
            "emoji": "????????",
            "emojiU": "U+1F1EE U+1F1E9",
            "fips": "ID",
            "internet": "ID",
            "continent": "Asia",
            "region": "South East Asia"
        },
        {
            "name": "Iran",
            "alpha2": "IR",
            "alpha3": "IRN",
            "numeric": "364",
            "locales": [
                "fa_IR"
            ],
            "default_locale": "fa_IR",
            "currency": "XDR",
            "languages": [
                "fa"
            ],
            "capital": "Tehran",
            "emoji": "????????",
            "emojiU": "U+1F1EE U+1F1F7",
            "fips": "IR",
            "internet": "IR",
            "continent": "Asia",
            "region": "South West Asia",
            "alternate_names": [
                "Islamic Republic of Iran"
            ]
        },
        {
            "name": "Iraq",
            "alpha2": "IQ",
            "alpha3": "IRQ",
            "numeric": "368",
            "locales": [
                "ar_IQ"
            ],
            "default_locale": "ar_IQ",
            "currency": "IQD",
            "languages": [
                "ar",
                "ku"
            ],
            "capital": "Baghdad",
            "emoji": "????????",
            "emojiU": "U+1F1EE U+1F1F6",
            "fips": "IZ",
            "internet": "IQ",
            "continent": "Asia",
            "region": "South West Asia"
        },
        {
            "name": "Ireland",
            "alpha2": "IE",
            "alpha3": "IRL",
            "numeric": "372",
            "locales": [
                "en_IE",
                "ga_IE"
            ],
            "default_locale": "en_IE",
            "currency": "EUR",
            "languages": [
                "ga",
                "en"
            ],
            "capital": "Dublin",
            "emoji": "????????",
            "emojiU": "U+1F1EE U+1F1EA",
            "fips": "EI",
            "internet": "IE",
            "continent": "Europe",
            "region": "Western Europe"
        },
        {
            "name": "Isle of Man",
            "alpha2": "IM",
            "alpha3": "IMN",
            "numeric": "833",
            "locales": [
                "en"
            ],
            "default_locale": "en",
            "currency": "GBP",
            "languages": [
                "en",
                "gv"
            ],
            "capital": "Douglas",
            "emoji": "????????",
            "emojiU": "U+1F1EE U+1F1F2",
            "fips": "IM",
            "internet": "IM",
            "continent": "Europe",
            "region": "Western Europe"
        },
        {
            "name": "Israel",
            "alpha2": "IL",
            "alpha3": "ISR",
            "numeric": "376",
            "locales": [
                "en_IL",
                "he_IL"
            ],
            "default_locale": "he_IL",
            "currency": "ILS",
            "languages": [
                "he",
                "ar"
            ],
            "capital": "Jerusalem",
            "emoji": "????????",
            "emojiU": "U+1F1EE U+1F1F1",
            "fips": "IS",
            "internet": "IL",
            "continent": "Asia",
            "region": "South West Asia"
        },
        {
            "name": "Italy",
            "alpha2": "IT",
            "alpha3": "ITA",
            "numeric": "380",
            "locales": [
                "it_IT"
            ],
            "default_locale": "it_IT",
            "currency": "EUR",
            "languages": [
                "it"
            ],
            "capital": "Rome",
            "emoji": "????????",
            "emojiU": "U+1F1EE U+1F1F9",
            "fips": "IT",
            "internet": "IT",
            "continent": "Europe",
            "region": "Southern Europe"
        },
        {
            "name": "Jamaica",
            "alpha2": "JM",
            "alpha3": "JAM",
            "numeric": "388",
            "locales": [
                "en_JM"
            ],
            "default_locale": "en_JM",
            "currency": "JMD",
            "languages": [
                "en"
            ],
            "capital": "Kingston",
            "emoji": "????????",
            "emojiU": "U+1F1EF U+1F1F2",
            "fips": "JM",
            "internet": "JM",
            "continent": "Americas",
            "region": "West Indies"
        },
        {
            "name": "Japan",
            "alpha2": "JP",
            "alpha3": "JPN",
            "numeric": "392",
            "locales": [
                "ja_JP"
            ],
            "default_locale": "ja_JP",
            "currency": "JPY",
            "languages": [
                "ja"
            ],
            "capital": "Tokyo",
            "emoji": "????????",
            "emojiU": "U+1F1EF U+1F1F5",
            "fips": "JA",
            "internet": "JP",
            "continent": "Asia",
            "region": "East Asia"
        },
        {
            "name": "Jersey",
            "alpha2": "JE",
            "alpha3": "JEY",
            "numeric": "832",
            "locales": [
                "en"
            ],
            "default_locale": "en",
            "currency": "GBP",
            "languages": [
                "en",
                "fr"
            ],
            "capital": "Saint Helier",
            "emoji": "????????",
            "emojiU": "U+1F1EF U+1F1EA",
            "fips": "JE",
            "internet": "JE",
            "continent": "Europe",
            "region": "Western Europe"
        },
        {
            "name": "Jordan",
            "alpha2": "JO",
            "alpha3": "JOR",
            "numeric": "400",
            "locales": [
                "ar_JO"
            ],
            "default_locale": "ar_JO",
            "currency": "JOD",
            "languages": [
                "ar"
            ],
            "capital": "Amman",
            "emoji": "????????",
            "emojiU": "U+1F1EF U+1F1F4",
            "fips": "JO",
            "internet": "JO",
            "continent": "Asia",
            "region": "South West Asia"
        },
        {
            "name": "Kazakhstan",
            "alpha2": "KZ",
            "alpha3": "KAZ",
            "numeric": "398",
            "locales": [
                "kk_Cyrl_KZ"
            ],
            "default_locale": "kk_Cyrl_KZ",
            "currency": "KZT",
            "languages": [
                "kk",
                "ru"
            ],
            "capital": "Astana",
            "emoji": "????????",
            "emojiU": "U+1F1F0 U+1F1FF",
            "fips": "KZ",
            "internet": "KZ",
            "continent": "Asia",
            "region": "Central Asia"
        },
        {
            "name": "Kenya",
            "alpha2": "KE",
            "alpha3": "KEN",
            "numeric": "404",
            "locales": [
                "ebu_KE",
                "guz_KE",
                "kln_KE",
                "kam_KE",
                "ki_KE",
                "luo_KE",
                "luy_KE",
                "mas_KE",
                "mer_KE",
                "om_KE",
                "saq_KE",
                "so_KE",
                "sw_KE",
                "dav_KE",
                "teo_KE"
            ],
            "default_locale": "ebu_KE",
            "currency": "KES",
            "languages": [
                "en",
                "sw"
            ],
            "capital": "Nairobi",
            "emoji": "????????",
            "emojiU": "U+1F1F0 U+1F1EA",
            "fips": "KE",
            "internet": "KE",
            "continent": "Africa",
            "region": "Eastern Africa"
        },
        {
            "name": "Kiribati",
            "alpha2": "KI",
            "alpha3": "KIR",
            "numeric": "296",
            "locales": [
                "en"
            ],
            "default_locale": "en",
            "currency": "AUD",
            "languages": [
                "en"
            ],
            "capital": "South Tarawa",
            "emoji": "????????",
            "emojiU": "U+1F1F0 U+1F1EE",
            "fips": "KR",
            "internet": "KI",
            "continent": "Oceania",
            "region": "Pacific"
        },
        {
            "name": "North Korea",
            "alpha2": "KP",
            "alpha3": "PRK",
            "numeric": "408",
            "locales": [
                "ko"
            ],
            "default_locale": "ko",
            "currency": "KPW",
            "languages": [
                "ko"
            ],
            "capital": "Pyongyang",
            "emoji": "????????",
            "emojiU": "U+1F1F0 U+1F1F5",
            "fips": "KN",
            "internet": "KP",
            "continent": "Asia",
            "region": "East Asia",
            "alternate_names": [
                "Democratic People's Republic of Korea"
            ]
        },
        {
            "name": "South Korea",
            "alpha2": "KR",
            "alpha3": "KOR",
            "numeric": "410",
            "locales": [
                "ko_KR"
            ],
            "default_locale": "ko_KR",
            "currency": "KRW",
            "languages": [
                "ko"
            ],
            "capital": "Seoul",
            "emoji": "????????",
            "emojiU": "U+1F1F0 U+1F1F7",
            "fips": "KS",
            "internet": "KR",
            "continent": "Asia",
            "region": "East Asia",
            "alternate_names": [
                "Republic of Korea"
            ]
        },
        {
            "name": "Kuwait",
            "alpha2": "KW",
            "alpha3": "KWT",
            "numeric": "414",
            "locales": [
                "ar_KW"
            ],
            "default_locale": "ar_KW",
            "currency": "KWD",
            "languages": [
                "ar"
            ],
            "capital": "Kuwait City",
            "emoji": "????????",
            "emojiU": "U+1F1F0 U+1F1FC",
            "fips": "KU",
            "internet": "KW",
            "continent": "Asia",
            "region": "South West Asia"
        },
        {
            "name": "Kyrgyzstan",
            "alpha2": "KG",
            "alpha3": "KGZ",
            "numeric": "417",
            "locales": [
                "ky"
            ],
            "default_locale": "ky",
            "currency": "KGS",
            "languages": [
                "ky",
                "ru"
            ],
            "capital": "Bishkek",
            "emoji": "????????",
            "emojiU": "U+1F1F0 U+1F1EC",
            "fips": "KG",
            "internet": "KG",
            "continent": "Asia",
            "region": "Central Asia"
        },
        {
            "name": "Lao People's Democratic Republic",
            "alpha2": "LA",
            "alpha3": "LAO",
            "numeric": "418",
            "locales": [
                "lo"
            ],
            "default_locale": "lo",
            "currency": "LAK",
            "languages": [
                "lo"
            ],
            "capital": "Vientiane",
            "emoji": "????????",
            "emojiU": "U+1F1F1 U+1F1E6",
            "fips": "LA",
            "internet": "LA",
            "continent": "Asia",
            "region": "South East Asia"
        },
        {
            "name": "Latvia",
            "alpha2": "LV",
            "alpha3": "LVA",
            "numeric": "428",
            "locales": [
                "lv_LV"
            ],
            "default_locale": "lv_LV",
            "currency": "EUR",
            "languages": [
                "lv"
            ],
            "capital": "Riga",
            "emoji": "????????",
            "emojiU": "U+1F1F1 U+1F1FB",
            "fips": "LG",
            "internet": "LV",
            "continent": "Europe",
            "region": "Eastern Europe"
        },
        {
            "name": "Lebanon",
            "alpha2": "LB",
            "alpha3": "LBN",
            "numeric": "422",
            "locales": [
                "ar_LB"
            ],
            "default_locale": "ar_LB",
            "currency": "LBP",
            "languages": [
                "ar",
                "fr"
            ],
            "capital": "Beirut",
            "emoji": "????????",
            "emojiU": "U+1F1F1 U+1F1E7",
            "fips": "LE",
            "internet": "LB",
            "continent": "Asia",
            "region": "South West Asia"
        },
        {
            "name": "Lesotho",
            "alpha2": "LS",
            "alpha3": "LSO",
            "numeric": "426",
            "locales": [
                "en"
            ],
            "default_locale": "en",
            "currency": "ZAR",
            "languages": [
                "en",
                "st"
            ],
            "capital": "Maseru",
            "emoji": "????????",
            "emojiU": "U+1F1F1 U+1F1F8",
            "fips": "LT",
            "internet": "LS",
            "continent": "Africa",
            "region": "Southern Africa"
        },
        {
            "name": "Liberia",
            "alpha2": "LR",
            "alpha3": "LBR",
            "numeric": "430",
            "locales": [
                "en"
            ],
            "default_locale": "en",
            "currency": "LRD",
            "languages": [
                "en"
            ],
            "capital": "Monrovia",
            "emoji": "????????",
            "emojiU": "U+1F1F1 U+1F1F7",
            "fips": "LI",
            "internet": "LR",
            "continent": "Africa",
            "region": "Western Africa"
        },
        {
            "name": "Libya",
            "alpha2": "LY",
            "alpha3": "LBY",
            "numeric": "434",
            "locales": [
                "ar_LY"
            ],
            "default_locale": "ar_LY",
            "currency": "LYD",
            "languages": [
                "ar"
            ],
            "capital": "Tripoli",
            "emoji": "????????",
            "emojiU": "U+1F1F1 U+1F1FE",
            "fips": "LY",
            "internet": "LY",
            "continent": "Africa",
            "region": "Northern Africa"
        },
        {
            "name": "Liechtenstein",
            "alpha2": "LI",
            "alpha3": "LIE",
            "numeric": "438",
            "locales": [
                "de_LI"
            ],
            "default_locale": "de_LI",
            "currency": "CHF",
            "languages": [
                "de"
            ],
            "capital": "Vaduz",
            "emoji": "????????",
            "emojiU": "U+1F1F1 U+1F1EE",
            "fips": "LS",
            "internet": "LI",
            "continent": "Europe",
            "region": "Central Europe"
        },
        {
            "name": "Lithuania",
            "alpha2": "LT",
            "alpha3": "LTU",
            "numeric": "440",
            "locales": [
                "lt_LT"
            ],
            "default_locale": "lt_LT",
            "currency": "EUR",
            "languages": [
                "lt"
            ],
            "capital": "Vilnius",
            "emoji": "????????",
            "emojiU": "U+1F1F1 U+1F1F9",
            "fips": "LH",
            "internet": "LT",
            "continent": "Europe",
            "region": "Eastern Europe"
        },
        {
            "name": "Luxembourg",
            "alpha2": "LU",
            "alpha3": "LUX",
            "numeric": "442",
            "locales": [
                "fr_LU",
                "de_LU"
            ],
            "default_locale": "fr_LU",
            "currency": "EUR",
            "languages": [
                "fr",
                "de",
                "lb"
            ],
            "capital": "Luxembourg",
            "emoji": "????????",
            "emojiU": "U+1F1F1 U+1F1FA",
            "fips": "LU",
            "internet": "LU",
            "continent": "Europe",
            "region": "Western Europe"
        },
        {
            "name": "Macao",
            "alpha2": "MO",
            "alpha3": "MAC",
            "numeric": "446",
            "locales": [
                "zh_Hans_MO",
                "zh_Hant_MO"
            ],
            "default_locale": "zh_Hans_MO",
            "currency": "MOP",
            "languages": [
                "zh",
                "pt"
            ],
            "capital": "",
            "emoji": "????????",
            "emojiU": "U+1F1F2 U+1F1F4",
            "fips": "MC",
            "internet": "MO",
            "continent": "Asia",
            "region": "East Asia"
        },
        {
            "name": "Madagascar",
            "alpha2": "MG",
            "alpha3": "MDG",
            "numeric": "450",
            "locales": [
                "fr_MG",
                "mg_MG"
            ],
            "default_locale": "fr_MG",
            "currency": "MGA",
            "languages": [
                "fr",
                "mg"
            ],
            "capital": "Antananarivo",
            "emoji": "????????",
            "emojiU": "U+1F1F2 U+1F1EC",
            "fips": "MA",
            "internet": "MG",
            "continent": "Africa",
            "region": "Indian Ocean"
        },
        {
            "name": "Malawi",
            "alpha2": "MW",
            "alpha3": "MWI",
            "numeric": "454",
            "locales": [
                "en"
            ],
            "default_locale": "en",
            "currency": "MWK",
            "languages": [
                "en",
                "ny"
            ],
            "capital": "Lilongwe",
            "emoji": "????????",
            "emojiU": "U+1F1F2 U+1F1FC",
            "fips": "MI",
            "internet": "MW",
            "continent": "Africa",
            "region": "Southern Africa"
        },
        {
            "name": "Malaysia",
            "alpha2": "MY",
            "alpha3": "MYS",
            "numeric": "458",
            "locales": [
                "ms_MY"
            ],
            "default_locale": "ms_MY",
            "currency": "MYR",
            "languages": [
                "ms"
            ],
            "capital": "Kuala Lumpur",
            "emoji": "????????",
            "emojiU": "U+1F1F2 U+1F1FE",
            "fips": "MY",
            "internet": "MY",
            "continent": "Asia",
            "region": "South East Asia"
        },
        {
            "name": "Maldives",
            "alpha2": "MV",
            "alpha3": "MDV",
            "numeric": "462",
            "locales": [
                "dv"
            ],
            "default_locale": "dv",
            "currency": "MVR",
            "languages": [
                "dv"
            ],
            "capital": "Mal??",
            "emoji": "????????",
            "emojiU": "U+1F1F2 U+1F1FB",
            "fips": "MV",
            "internet": "MV",
            "continent": "Asia",
            "region": "South Asia"
        },
        {
            "name": "Mali",
            "alpha2": "ML",
            "alpha3": "MLI",
            "numeric": "466",
            "locales": [
                "bm_ML",
                "fr_ML",
                "khq_ML",
                "ses_ML"
            ],
            "default_locale": "fr_ML",
            "currency": "XOF",
            "languages": [
                "fr"
            ],
            "capital": "Bamako",
            "emoji": "????????",
            "emojiU": "U+1F1F2 U+1F1F1",
            "fips": "ML",
            "internet": "ML",
            "continent": "Africa",
            "region": "Western Africa"
        },
        {
            "name": "Malta",
            "alpha2": "MT",
            "alpha3": "MLT",
            "numeric": "470",
            "locales": [
                "en_MT",
                "mt_MT"
            ],
            "default_locale": "en_MT",
            "currency": "EUR",
            "languages": [
                "mt",
                "en"
            ],
            "capital": "Valletta",
            "emoji": "????????",
            "emojiU": "U+1F1F2 U+1F1F9",
            "fips": "MT",
            "internet": "MT",
            "continent": "Europe",
            "region": "Southern Europe"
        },
        {
            "name": "Marshall Islands",
            "alpha2": "MH",
            "alpha3": "MHL",
            "numeric": "584",
            "locales": [
                "en_MH"
            ],
            "default_locale": "en_MH",
            "currency": "USD",
            "languages": [
                "en",
                "mh"
            ],
            "capital": "Majuro",
            "emoji": "????????",
            "emojiU": "U+1F1F2 U+1F1ED",
            "fips": "RM",
            "internet": "MH",
            "continent": "Oceania",
            "region": "Pacific"
        },
        {
            "name": "Martinique",
            "alpha2": "MQ",
            "alpha3": "MTQ",
            "numeric": "474",
            "locales": [
                "fr_MQ"
            ],
            "default_locale": "fr_MQ",
            "currency": "EUR",
            "languages": [
                "fr"
            ],
            "capital": "Fort-de-France",
            "emoji": "????????",
            "emojiU": "U+1F1F2 U+1F1F6",
            "fips": "MB",
            "internet": "MQ",
            "continent": "Americas",
            "region": "West Indies"
        },
        {
            "name": "Mauritania",
            "alpha2": "MR",
            "alpha3": "MRT",
            "numeric": "478",
            "locales": [
                "ar"
            ],
            "default_locale": "ar",
            "currency": "MRU",
            "languages": [
                "ar"
            ],
            "capital": "Nouakchott",
            "emoji": "????????",
            "emojiU": "U+1F1F2 U+1F1F7",
            "fips": "MR",
            "internet": "MR",
            "continent": "Africa",
            "region": "Western Africa"
        },
        {
            "name": "Mauritius",
            "alpha2": "MU",
            "alpha3": "MUS",
            "numeric": "480",
            "locales": [
                "en_MU",
                "mfe_MU"
            ],
            "default_locale": "en_MU",
            "currency": "MUR",
            "languages": [
                "en"
            ],
            "capital": "Port Louis",
            "emoji": "????????",
            "emojiU": "U+1F1F2 U+1F1FA",
            "fips": "MP",
            "internet": "MU",
            "continent": "Africa",
            "region": "Indian Ocean"
        },
        {
            "name": "Mayotte",
            "alpha2": "YT",
            "alpha3": "MYT",
            "numeric": "175",
            "locales": [
                "fr"
            ],
            "default_locale": "fr",
            "currency": "EUR",
            "languages": [
                "fr"
            ],
            "capital": "Mamoudzou",
            "emoji": "????????",
            "emojiU": "U+1F1FE U+1F1F9",
            "fips": "MF",
            "internet": "YT",
            "continent": "Africa",
            "region": "Indian Ocean"
        },
        {
            "name": "Mexico",
            "alpha2": "MX",
            "alpha3": "MEX",
            "numeric": "484",
            "locales": [
                "es_MX"
            ],
            "default_locale": "es_MX",
            "currency": "MXV",
            "languages": [
                "es"
            ],
            "capital": "Mexico City",
            "emoji": "????????",
            "emojiU": "U+1F1F2 U+1F1FD",
            "fips": "MX",
            "internet": "MX",
            "continent": "Americas",
            "region": "Central America"
        },
        {
            "name": "Micronesia",
            "alpha2": "FM",
            "alpha3": "FSM",
            "numeric": "583",
            "locales": [
                "en"
            ],
            "default_locale": "en",
            "currency": "USD",
            "languages": [
                "en"
            ],
            "capital": "Palikir",
            "emoji": "????????",
            "emojiU": "U+1F1EB U+1F1F2",
            "fips": "",
            "internet": "FM",
            "continent": "Oceania",
            "region": "Pacific",
            "alternate_names": [
                "Federated States of Micronesia"
            ]
        },
        {
            "name": "Moldova",
            "alpha2": "MD",
            "alpha3": "MDA",
            "numeric": "498",
            "locales": [
                "ro_MD",
                "ru_MD"
            ],
            "default_locale": "ro_MD",
            "currency": "MDL",
            "languages": [
                "ro"
            ],
            "capital": "Chi??in??u",
            "emoji": "????????",
            "emojiU": "U+1F1F2 U+1F1E9",
            "fips": "MD",
            "internet": "MD",
            "continent": "Europe",
            "region": "Eastern Europe",
            "alternate_names": [
                "Republic of Moldova"
            ]
        },
        {
            "name": "Monaco",
            "alpha2": "MC",
            "alpha3": "MCO",
            "numeric": "492",
            "locales": [
                "fr_MC"
            ],
            "default_locale": "fr_MC",
            "currency": "EUR",
            "languages": [
                "fr"
            ],
            "capital": "Monaco",
            "emoji": "????????",
            "emojiU": "U+1F1F2 U+1F1E8",
            "fips": "MN",
            "internet": "MC",
            "continent": "Europe",
            "region": "Western Europe"
        },
        {
            "name": "Mongolia",
            "alpha2": "MN",
            "alpha3": "MNG",
            "numeric": "496",
            "locales": [
                "mn"
            ],
            "default_locale": "mn",
            "currency": "MNT",
            "languages": [
                "mn"
            ],
            "capital": "Ulan Bator",
            "emoji": "????????",
            "emojiU": "U+1F1F2 U+1F1F3",
            "fips": "MG",
            "internet": "MN",
            "continent": "Asia",
            "region": "Northern Asia"
        },
        {
            "name": "Montenegro",
            "alpha2": "ME",
            "alpha3": "MNE",
            "numeric": "499",
            "locales": [
                "sr_Cyrl_ME",
                "sr_Latn_ME"
            ],
            "default_locale": "sr_Cyrl_ME",
            "currency": "EUR",
            "languages": [
                "sr",
                "bs",
                "sq",
                "hr"
            ],
            "capital": "Podgorica",
            "emoji": "????????",
            "emojiU": "U+1F1F2 U+1F1EA",
            "fips": "MJ",
            "internet": "ME",
            "continent": "Europe",
            "region": "South East Europe"
        },
        {
            "name": "Montserrat",
            "alpha2": "MS",
            "alpha3": "MSR",
            "numeric": "500",
            "locales": [
                "en"
            ],
            "default_locale": "en",
            "currency": "XCD",
            "languages": [
                "en"
            ],
            "capital": "Plymouth",
            "emoji": "????????",
            "emojiU": "U+1F1F2 U+1F1F8",
            "fips": "MH",
            "internet": "MS",
            "continent": "Americas",
            "region": "West Indies"
        },
        {
            "name": "Morocco",
            "alpha2": "MA",
            "alpha3": "MAR",
            "numeric": "504",
            "locales": [
                "ar_MA",
                "tzm_Latn_MA",
                "shi_Latn_MA",
                "shi_Tfng_MA"
            ],
            "default_locale": "ar_MA",
            "currency": "MAD",
            "languages": [
                "ar"
            ],
            "capital": "Rabat",
            "emoji": "????????",
            "emojiU": "U+1F1F2 U+1F1E6",
            "fips": "MO",
            "internet": "MA",
            "continent": "Africa",
            "region": "Northern Africa"
        },
        {
            "name": "Mozambique",
            "alpha2": "MZ",
            "alpha3": "MOZ",
            "numeric": "508",
            "locales": [
                "pt_MZ",
                "seh_MZ"
            ],
            "default_locale": "pt_MZ",
            "currency": "MZN",
            "languages": [
                "pt"
            ],
            "capital": "Maputo",
            "emoji": "????????",
            "emojiU": "U+1F1F2 U+1F1FF",
            "fips": "MZ",
            "internet": "MZ",
            "continent": "Africa",
            "region": "Southern Africa"
        },
        {
            "name": "Myanmar",
            "alpha2": "MM",
            "alpha3": "MMR",
            "numeric": "104",
            "locales": [
                "my_MM"
            ],
            "default_locale": "my_MM",
            "currency": "MMK",
            "languages": [
                "my"
            ],
            "capital": "Naypyidaw",
            "emoji": "????????",
            "emojiU": "U+1F1F2 U+1F1F2",
            "fips": "BM",
            "internet": "MM",
            "continent": "Asia",
            "region": "South East Asia"
        },
        {
            "name": "Namibia",
            "alpha2": "NA",
            "alpha3": "NAM",
            "numeric": "516",
            "locales": [
                "af_NA",
                "en_NA",
                "naq_NA"
            ],
            "default_locale": "en_NA",
            "currency": "ZAR",
            "languages": [
                "en",
                "af"
            ],
            "capital": "Windhoek",
            "emoji": "????????",
            "emojiU": "U+1F1F3 U+1F1E6",
            "fips": "WA",
            "internet": "NA",
            "continent": "Africa",
            "region": "Southern Africa"
        },
        {
            "name": "Nauru",
            "alpha2": "NR",
            "alpha3": "NRU",
            "numeric": "520",
            "locales": [
                "en"
            ],
            "default_locale": "en",
            "currency": "AUD",
            "languages": [
                "en",
                "na"
            ],
            "capital": "Yaren",
            "emoji": "????????",
            "emojiU": "U+1F1F3 U+1F1F7",
            "fips": "NR",
            "internet": "NR",
            "continent": "Oceania",
            "region": "Pacific"
        },
        {
            "name": "Nepal",
            "alpha2": "NP",
            "alpha3": "NPL",
            "numeric": "524",
            "locales": [
                "ne_NP"
            ],
            "default_locale": "ne_NP",
            "currency": "NPR",
            "languages": [
                "ne"
            ],
            "capital": "Kathmandu",
            "emoji": "????????",
            "emojiU": "U+1F1F3 U+1F1F5",
            "fips": "NP",
            "internet": "NP",
            "continent": "Asia",
            "region": "South Asia"
        },
        {
            "name": "Netherlands",
            "alpha2": "NL",
            "alpha3": "NLD",
            "numeric": "528",
            "locales": [
                "nl_NL"
            ],
            "default_locale": "nl_NL",
            "currency": "EUR",
            "languages": [
                "nl"
            ],
            "capital": "Amsterdam",
            "emoji": "????????",
            "emojiU": "U+1F1F3 U+1F1F1",
            "fips": "NL",
            "internet": "NL",
            "continent": "Europe",
            "region": "Western Europe"
        },
        {
            "name": "New Caledonia",
            "alpha2": "NC",
            "alpha3": "NCL",
            "numeric": "540",
            "locales": [
                "fr"
            ],
            "default_locale": "fr",
            "currency": "XPF",
            "languages": [
                "fr"
            ],
            "capital": "Noum??a",
            "emoji": "????????",
            "emojiU": "U+1F1F3 U+1F1E8",
            "fips": "NC",
            "internet": "NC",
            "continent": "Oceania",
            "region": "Pacific"
        },
        {
            "name": "New Zealand",
            "alpha2": "NZ",
            "alpha3": "NZL",
            "numeric": "554",
            "locales": [
                "en_NZ"
            ],
            "default_locale": "en_NZ",
            "currency": "NZD",
            "languages": [
                "en",
                "mi"
            ],
            "capital": "Wellington",
            "emoji": "????????",
            "emojiU": "U+1F1F3 U+1F1FF",
            "fips": "NZ",
            "internet": "NZ",
            "continent": "Oceania",
            "region": "Pacific"
        },
        {
            "name": "Nicaragua",
            "alpha2": "NI",
            "alpha3": "NIC",
            "numeric": "558",
            "locales": [
                "es_NI"
            ],
            "default_locale": "es_NI",
            "currency": "NIO",
            "languages": [
                "es"
            ],
            "capital": "Managua",
            "emoji": "????????",
            "emojiU": "U+1F1F3 U+1F1EE",
            "fips": "NU",
            "internet": "NI",
            "continent": "Americas",
            "region": "Central America"
        },
        {
            "name": "Niger",
            "alpha2": "NE",
            "alpha3": "NER",
            "numeric": "562",
            "locales": [
                "fr_NE",
                "ha_Latn_NE"
            ],
            "default_locale": "fr_NE",
            "currency": "XOF",
            "languages": [
                "fr"
            ],
            "capital": "Niamey",
            "emoji": "????????",
            "emojiU": "U+1F1F3 U+1F1EA",
            "fips": "NG",
            "internet": "NE",
            "continent": "Africa",
            "region": "Western Africa"
        },
        {
            "name": "Nigeria",
            "alpha2": "NG",
            "alpha3": "NGA",
            "numeric": "566",
            "locales": [
                "ha_Latn_NG",
                "ig_NG",
                "yo_NG"
            ],
            "default_locale": "ha_Latn_NG",
            "currency": "NGN",
            "languages": [
                "en"
            ],
            "capital": "Abuja",
            "emoji": "????????",
            "emojiU": "U+1F1F3 U+1F1EC",
            "fips": "NI",
            "internet": "NG",
            "continent": "Africa",
            "region": "Western Africa"
        },
        {
            "name": "Niue",
            "alpha2": "NU",
            "alpha3": "NIU",
            "numeric": "570",
            "locales": [
                "en"
            ],
            "default_locale": "en",
            "currency": "NZD",
            "languages": [
                "en"
            ],
            "capital": "Alofi",
            "emoji": "????????",
            "emojiU": "U+1F1F3 U+1F1FA",
            "fips": "NE",
            "internet": "NU",
            "continent": "Oceania",
            "region": "Pacific"
        },
        {
            "name": "Norfolk Island",
            "alpha2": "NF",
            "alpha3": "NFK",
            "numeric": "574",
            "locales": [
                "en"
            ],
            "default_locale": "en",
            "currency": "AUD",
            "languages": [
                "en"
            ],
            "capital": "Kingston",
            "emoji": "????????",
            "emojiU": "U+1F1F3 U+1F1EB",
            "fips": "NF",
            "internet": "NF",
            "continent": "Oceania",
            "region": "Pacific"
        },
        {
            "name": "North Macedonia",
            "alpha2": "MK",
            "alpha3": "MKD",
            "numeric": "807",
            "locales": [
                "mk_MK"
            ],
            "default_locale": "mk_MK",
            "currency": "AUD",
            "languages": [
                "mk"
            ],
            "capital": "Skopje",
            "emoji": "????????",
            "emojiU": "U+1F1F2 U+1F1F0",
            "fips": "MK",
            "internet": "MK",
            "continent": "Europe",
            "region": "South East Europe"
        },
        {
            "name": "Northern Mariana Islands",
            "alpha2": "MP",
            "alpha3": "MNP",
            "numeric": "580",
            "locales": [
                "en_MP"
            ],
            "default_locale": "en_MP",
            "currency": "USD",
            "languages": [
                "en",
                "ch"
            ],
            "capital": "Saipan",
            "emoji": "????????",
            "emojiU": "U+1F1F2 U+1F1F5",
            "fips": "CQ",
            "internet": "MP",
            "continent": "Oceania",
            "region": "Pacific"
        },
        {
            "name": "Norway",
            "alpha2": "NO",
            "alpha3": "NOR",
            "numeric": "578",
            "locales": [
                "nb_NO",
                "nn_NO"
            ],
            "default_locale": "nb_NO",
            "currency": "NOK",
            "languages": [
                "no",
                "nb",
                "nn"
            ],
            "capital": "Oslo",
            "emoji": "????????",
            "emojiU": "U+1F1F3 U+1F1F4",
            "fips": "NO",
            "internet": "NO",
            "continent": "Europe",
            "region": "Northern Europe"
        },
        {
            "name": "Oman",
            "alpha2": "OM",
            "alpha3": "OMN",
            "numeric": "512",
            "locales": [
                "ar_OM"
            ],
            "default_locale": "ar_OM",
            "currency": "OMR",
            "languages": [
                "ar"
            ],
            "capital": "Muscat",
            "emoji": "????????",
            "emojiU": "U+1F1F4 U+1F1F2",
            "fips": "MU",
            "internet": "OM",
            "continent": "Asia",
            "region": "South West Asia"
        },
        {
            "name": "Pakistan",
            "alpha2": "PK",
            "alpha3": "PAK",
            "numeric": "586",
            "locales": [
                "en_PK",
                "pa_Arab_PK",
                "ur_PK"
            ],
            "default_locale": "en_PK",
            "currency": "PKR",
            "languages": [
                "en",
                "ur"
            ],
            "capital": "Islamabad",
            "emoji": "????????",
            "emojiU": "U+1F1F5 U+1F1F0",
            "fips": "PK",
            "internet": "PK",
            "continent": "Asia",
            "region": "South Asia"
        },
        {
            "name": "Palau",
            "alpha2": "PW",
            "alpha3": "PLW",
            "numeric": "585",
            "locales": [
                "en"
            ],
            "default_locale": "en",
            "currency": "USD",
            "languages": [
                "en"
            ],
            "capital": "Ngerulmud",
            "emoji": "????????",
            "emojiU": "U+1F1F5 U+1F1FC",
            "fips": "PS",
            "internet": "PW",
            "continent": "Oceania",
            "region": "Pacific"
        },
        {
            "name": "Palestine",
            "alpha2": "PS",
            "alpha3": "PSE",
            "numeric": "275",
            "locales": [
                "ar"
            ],
            "default_locale": "ar",
            "currency": "USD",
            "languages": [
                "ar"
            ],
            "capital": "Ramallah",
            "emoji": "????????",
            "emojiU": "U+1F1F5 U+1F1F8",
            "fips": "WE",
            "internet": "PS",
            "continent": "Asia",
            "region": "South West Asia",
            "alternate_names": [
                "State of Palestine"
            ]
        },
        {
            "name": "Panama",
            "alpha2": "PA",
            "alpha3": "PAN",
            "numeric": "591",
            "locales": [
                "es_PA"
            ],
            "default_locale": "es_PA",
            "currency": "USD",
            "languages": [
                "es"
            ],
            "capital": "Panama City",
            "emoji": "????????",
            "emojiU": "U+1F1F5 U+1F1E6",
            "fips": "PM",
            "internet": "PA",
            "continent": "Americas",
            "region": "Central America"
        },
        {
            "name": "Papua New Guinea",
            "alpha2": "PG",
            "alpha3": "PNG",
            "numeric": "598",
            "locales": [
                "en"
            ],
            "default_locale": "en",
            "currency": "PGK",
            "languages": [
                "en"
            ],
            "capital": "Port Moresby",
            "emoji": "????????",
            "emojiU": "U+1F1F5 U+1F1EC",
            "fips": "PP",
            "internet": "PG",
            "continent": "Oceania",
            "region": "Pacific"
        },
        {
            "name": "Paraguay",
            "alpha2": "PY",
            "alpha3": "PRY",
            "numeric": "600",
            "locales": [
                "es_PY"
            ],
            "default_locale": "es_PY",
            "currency": "PYG",
            "languages": [
                "es",
                "gn"
            ],
            "capital": "Asunci??n",
            "emoji": "????????",
            "emojiU": "U+1F1F5 U+1F1FE",
            "fips": "PA",
            "internet": "PY",
            "continent": "Americas",
            "region": "South America"
        },
        {
            "name": "Peru",
            "alpha2": "PE",
            "alpha3": "PER",
            "numeric": "604",
            "locales": [
                "es_PE"
            ],
            "default_locale": "es_PE",
            "currency": "PEN",
            "languages": [
                "es"
            ],
            "capital": "Lima",
            "emoji": "????????",
            "emojiU": "U+1F1F5 U+1F1EA",
            "fips": "PE",
            "internet": "PE",
            "continent": "Americas",
            "region": "South America"
        },
        {
            "name": "Philippines",
            "alpha2": "PH",
            "alpha3": "PHL",
            "numeric": "608",
            "locales": [
                "en_PH",
                "fil_PH"
            ],
            "default_locale": "en_PH",
            "currency": "PHP",
            "languages": [
                "en"
            ],
            "capital": "Manila",
            "emoji": "????????",
            "emojiU": "U+1F1F5 U+1F1ED",
            "fips": "RP",
            "internet": "PH",
            "continent": "Asia",
            "region": "South East Asia"
        },
        {
            "name": "Pitcairn",
            "alpha2": "PN",
            "alpha3": "PCN",
            "numeric": "612",
            "locales": [
                "en"
            ],
            "default_locale": "en",
            "currency": "NZD",
            "languages": [
                "en"
            ],
            "capital": "Adamstown",
            "emoji": "????????",
            "emojiU": "U+1F1F5 U+1F1F3",
            "fips": "PC",
            "internet": "PN",
            "continent": "Oceania",
            "region": "Pacific"
        },
        {
            "name": "Poland",
            "alpha2": "PL",
            "alpha3": "POL",
            "numeric": "616",
            "locales": [
                "pl_PL"
            ],
            "default_locale": "pl_PL",
            "currency": "PLN",
            "languages": [
                "pl"
            ],
            "capital": "Warsaw",
            "emoji": "????????",
            "emojiU": "U+1F1F5 U+1F1F1",
            "fips": "PL",
            "internet": "PL",
            "continent": "Europe",
            "region": "Eastern Europe"
        },
        {
            "name": "Portugal",
            "alpha2": "PT",
            "alpha3": "PRT",
            "numeric": "620",
            "locales": [
                "pt_PT"
            ],
            "default_locale": "pt_PT",
            "currency": "EUR",
            "languages": [
                "pt"
            ],
            "capital": "Lisbon",
            "emoji": "????????",
            "emojiU": "U+1F1F5 U+1F1F9",
            "fips": "PO",
            "internet": "PT",
            "continent": "Europe",
            "region": "South West Europe"
        },
        {
            "name": "Puerto Rico",
            "alpha2": "PR",
            "alpha3": "PRI",
            "numeric": "630",
            "locales": [
                "es_PR"
            ],
            "default_locale": "es_PR",
            "currency": "USD",
            "languages": [
                "es",
                "en"
            ],
            "capital": "San Juan",
            "emoji": "????????",
            "emojiU": "U+1F1F5 U+1F1F7",
            "fips": "RQ",
            "internet": "PR",
            "continent": "Americas",
            "region": "West Indies"
        },
        {
            "name": "Qatar",
            "alpha2": "QA",
            "alpha3": "QAT",
            "numeric": "634",
            "locales": [
                "ar_QA"
            ],
            "default_locale": "ar_QA",
            "currency": "QAR",
            "languages": [
                "ar"
            ],
            "capital": "Doha",
            "emoji": "????????",
            "emojiU": "U+1F1F6 U+1F1E6",
            "fips": "QA",
            "internet": "QA",
            "continent": "Asia",
            "region": "South West Asia"
        },
        {
            "name": "Romania",
            "alpha2": "RO",
            "alpha3": "ROU",
            "numeric": "642",
            "locales": [
                "ro_RO"
            ],
            "default_locale": "ro_RO",
            "currency": "RUB",
            "languages": [
                "ro"
            ],
            "capital": "Bucharest",
            "emoji": "????????",
            "emojiU": "U+1F1F7 U+1F1F4",
            "fips": "RO",
            "internet": "RO",
            "continent": "Europe",
            "region": "South East Europe"
        },
        {
            "name": "Russia",
            "alpha2": "RU",
            "alpha3": "RUS",
            "numeric": "643",
            "locales": [
                "ru_RU"
            ],
            "default_locale": "ru_RU",
            "currency": "RUB",
            "languages": [
                "ru"
            ],
            "capital": "Moscow",
            "emoji": "????????",
            "emojiU": "U+1F1F7 U+1F1FA",
            "fips": "RS",
            "internet": "RU",
            "continent": "Asia",
            "region": "Northern Asia",
            "alternate_names": [
                "Russian Federation"
            ]
        },
        {
            "name": "Rwanda",
            "alpha2": "RW",
            "alpha3": "RWA",
            "numeric": "646",
            "locales": [
                "fr_RW",
                "rw_RW"
            ],
            "default_locale": "fr_RW",
            "currency": "RWF",
            "languages": [
                "rw",
                "en",
                "fr"
            ],
            "capital": "Kigali",
            "emoji": "????????",
            "emojiU": "U+1F1F7 U+1F1FC",
            "fips": "RW",
            "internet": "RW",
            "continent": "Africa",
            "region": "Central Africa"
        },
        {
            "name": "R??union",
            "alpha2": "RE",
            "alpha3": "REU",
            "numeric": "638",
            "locales": [
                "fr_RE"
            ],
            "default_locale": "fr_RE",
            "currency": "RWF",
            "languages": [
                "fr"
            ],
            "capital": "Saint-Denis",
            "emoji": "????????",
            "emojiU": "U+1F1F7 U+1F1EA",
            "fips": "RE",
            "internet": "RE",
            "continent": "Africa",
            "region": "Indian Ocean"
        },
        {
            "name": "Saint Barth??lemy",
            "alpha2": "BL",
            "alpha3": "BLM",
            "numeric": "652",
            "locales": [
                "fr_BL"
            ],
            "default_locale": "fr_BL",
            "currency": "EUR",
            "languages": [
                "fr"
            ],
            "capital": "Gustavia",
            "emoji": "????????",
            "emojiU": "U+1F1E7 U+1F1F1",
            "fips": "TB",
            "internet": "BL",
            "continent": "Americas",
            "region": "West Indies"
        },
        {
            "name": "Saint Helena",
            "alpha2": "SH",
            "alpha3": "SHN",
            "numeric": "654",
            "locales": [
                "en"
            ],
            "default_locale": "en",
            "currency": "SHP",
            "languages": [
                "en"
            ],
            "capital": "Jamestown",
            "emoji": "????????",
            "emojiU": "U+1F1F8 U+1F1ED",
            "fips": "SH",
            "internet": "SH",
            "continent": "Atlantic Ocean",
            "region": "South Atlantic Ocean",
            "alternate_names": [
                "Saint Helena, Ascension and Tristan da Cunha"
            ]
        },
        {
            "name": "Saint Kitts and Nevis",
            "alpha2": "KN",
            "alpha3": "KNA",
            "numeric": "659",
            "locales": [
                "en"
            ],
            "default_locale": "en",
            "currency": "XCD",
            "languages": [
                "en"
            ],
            "capital": "Basseterre",
            "emoji": "????????",
            "emojiU": "U+1F1F0 U+1F1F3",
            "fips": "SC",
            "internet": "KN",
            "continent": "Americas",
            "region": "West Indies"
        },
        {
            "name": "Saint Lucia",
            "alpha2": "LC",
            "alpha3": "LCA",
            "numeric": "662",
            "locales": [
                "en"
            ],
            "default_locale": "en",
            "currency": "XCD",
            "languages": [
                "en"
            ],
            "capital": "Castries",
            "emoji": "????????",
            "emojiU": "U+1F1F1 U+1F1E8",
            "fips": "ST",
            "internet": "LC",
            "continent": "Americas",
            "region": "West Indies"
        },
        {
            "name": "Saint Martin",
            "alpha2": "MF",
            "alpha3": "MAF",
            "numeric": "663",
            "locales": [
                "fr_MF"
            ],
            "default_locale": "fr_MF",
            "currency": "EUR",
            "languages": [
                "en",
                "fr",
                "nl"
            ],
            "capital": "Marigot",
            "emoji": "????????",
            "emojiU": "U+1F1F2 U+1F1EB",
            "fips": "RN",
            "internet": "MF",
            "continent": "Americas",
            "region": "West Indies",
            "alternate_names": [
                "Saint Martin French part"
            ]
        },
        {
            "name": "Saint Pierre and Miquelon",
            "alpha2": "PM",
            "alpha3": "SPM",
            "numeric": "666",
            "locales": [
                "fr"
            ],
            "default_locale": "fr",
            "currency": "EUR",
            "languages": [
                "fr"
            ],
            "capital": "Saint-Pierre",
            "emoji": "????????",
            "emojiU": "U+1F1F5 U+1F1F2",
            "fips": "SB",
            "internet": "PM",
            "continent": "Americas",
            "region": "North America"
        },
        {
            "name": "Saint Vincent and the Grenadines",
            "alpha2": "VC",
            "alpha3": "VCT",
            "numeric": "670",
            "locales": [
                "en"
            ],
            "default_locale": "en",
            "currency": "XCD",
            "languages": [
                "en"
            ],
            "capital": "Kingstown",
            "emoji": "????????",
            "emojiU": "U+1F1FB U+1F1E8",
            "fips": "VC",
            "internet": "VC",
            "continent": "Americas",
            "region": "West Indies"
        },
        {
            "name": "Samoa",
            "alpha2": "WS",
            "alpha3": "WSM",
            "numeric": "882",
            "locales": [
                "sm"
            ],
            "default_locale": "sm",
            "currency": "WST",
            "languages": [
                "sm",
                "en"
            ],
            "capital": "Apia",
            "emoji": "????????",
            "emojiU": "U+1F1FC U+1F1F8",
            "fips": "WS",
            "internet": "WS",
            "continent": "Oceania",
            "region": "Pacific"
        },
        {
            "name": "San Marino",
            "alpha2": "SM",
            "alpha3": "SMR",
            "numeric": "674",
            "locales": [
                "it"
            ],
            "default_locale": "it",
            "currency": "EUR",
            "languages": [
                "it"
            ],
            "capital": "City of San Marino",
            "emoji": "????????",
            "emojiU": "U+1F1F8 U+1F1F2",
            "fips": "SM",
            "internet": "SM",
            "continent": "Europe",
            "region": "Southern Europe"
        },
        {
            "name": "Sao Tome and Principe",
            "alpha2": "ST",
            "alpha3": "STP",
            "numeric": "678",
            "locales": [
                "pt"
            ],
            "default_locale": "pt",
            "currency": "STN",
            "languages": [
                "pt"
            ],
            "capital": "S??o Tom??",
            "emoji": "????????",
            "emojiU": "U+1F1F8 U+1F1F9",
            "fips": "TP",
            "internet": "ST",
            "continent": "Africa",
            "region": "Western Africa"
        },
        {
            "name": "Saudi Arabia",
            "alpha2": "SA",
            "alpha3": "SAU",
            "numeric": "682",
            "locales": [
                "ar_SA"
            ],
            "default_locale": "ar_SA",
            "currency": "SAR",
            "languages": [
                "ar"
            ],
            "capital": "Riyadh",
            "emoji": "????????",
            "emojiU": "U+1F1F8 U+1F1E6",
            "fips": "SA",
            "internet": "SA",
            "continent": "Asia",
            "region": "South West Asia"
        },
        {
            "name": "Senegal",
            "alpha2": "SN",
            "alpha3": "SEN",
            "numeric": "686",
            "locales": [
                "fr_SN",
                "ff_SN"
            ],
            "default_locale": "fr_SN",
            "currency": "XOF",
            "languages": [
                "fr"
            ],
            "capital": "Dakar",
            "emoji": "????????",
            "emojiU": "U+1F1F8 U+1F1F3",
            "fips": "SG",
            "internet": "SN",
            "continent": "Africa",
            "region": "Western Africa"
        },
        {
            "name": "Serbia",
            "alpha2": "RS",
            "alpha3": "SRB",
            "numeric": "688",
            "locales": [
                "sr_Cyrl_RS",
                "sr_Latn_RS"
            ],
            "default_locale": "sr_Cyrl_RS",
            "currency": "RSD",
            "languages": [
                "sr"
            ],
            "capital": "Belgrade",
            "emoji": "????????",
            "emojiU": "U+1F1F7 U+1F1F8",
            "fips": "RI",
            "internet": "RS",
            "continent": "Europe",
            "region": "South East Europe"
        },
        {
            "name": "Seychelles",
            "alpha2": "SC",
            "alpha3": "SYC",
            "numeric": "690",
            "locales": [
                "fr"
            ],
            "default_locale": "fr",
            "currency": "SCR",
            "languages": [
                "fr",
                "en"
            ],
            "capital": "Victoria",
            "emoji": "????????",
            "emojiU": "U+1F1F8 U+1F1E8",
            "fips": "SE",
            "internet": "SC",
            "continent": "Africa",
            "region": "Indian Ocean"
        },
        {
            "name": "Sierra Leone",
            "alpha2": "SL",
            "alpha3": "SLE",
            "numeric": "694",
            "locales": [
                "en"
            ],
            "default_locale": "en",
            "currency": "SLL",
            "languages": [
                "en"
            ],
            "capital": "Freetown",
            "emoji": "????????",
            "emojiU": "U+1F1F8 U+1F1F1",
            "fips": "SL",
            "internet": "SL",
            "continent": "Africa",
            "region": "Western Africa"
        },
        {
            "name": "Singapore",
            "alpha2": "SG",
            "alpha3": "SGP",
            "numeric": "702",
            "locales": [
                "zh_Hans_SG",
                "en_SG"
            ],
            "default_locale": "en_SG",
            "currency": "SGD",
            "languages": [
                "en",
                "ms",
                "ta",
                "zh"
            ],
            "capital": "Singapore",
            "emoji": "????????",
            "emojiU": "U+1F1F8 U+1F1EC",
            "fips": "SN",
            "internet": "SG",
            "continent": "Asia",
            "region": "South East Asia"
        },
        {
            "name": "Sint Maarten",
            "alpha2": "SX",
            "alpha3": "SXM",
            "numeric": "534",
            "locales": [
                "nl"
            ],
            "default_locale": "nl",
            "currency": "ANG",
            "languages": [
                "nl",
                "en"
            ],
            "capital": "Philipsburg",
            "emoji": "????????",
            "emojiU": "U+1F1F8 U+1F1FD",
            "fips": "NN",
            "internet": "SX",
            "continent": "Americas",
            "region": "West Indies",
            "alternate_names": [
                "Sint Maarten Dutch part"
            ]
        },
        {
            "name": "Slovakia",
            "alpha2": "SK",
            "alpha3": "SVK",
            "numeric": "703",
            "locales": [
                "sk_SK"
            ],
            "default_locale": "sk_SK",
            "currency": "EUR",
            "languages": [
                "sk"
            ],
            "capital": "Bratislava",
            "emoji": "????????",
            "emojiU": "U+1F1F8 U+1F1F0",
            "fips": "LO",
            "internet": "SK",
            "continent": "Europe",
            "region": "Central Europe"
        },
        {
            "name": "Slovenia",
            "alpha2": "SI",
            "alpha3": "SVN",
            "numeric": "705",
            "locales": [
                "sl_SI"
            ],
            "default_locale": "sl_SI",
            "currency": "EUR",
            "languages": [
                "sl"
            ],
            "capital": "Ljubljana",
            "emoji": "????????",
            "emojiU": "U+1F1F8 U+1F1EE",
            "fips": "SI",
            "internet": "SI",
            "continent": "Europe",
            "region": "South East Europe"
        },
        {
            "name": "Solomon Islands",
            "alpha2": "SB",
            "alpha3": "SLB",
            "numeric": "090",
            "locales": [
                "en"
            ],
            "default_locale": "en",
            "currency": "SBD",
            "languages": [
                "en"
            ],
            "capital": "Honiara",
            "emoji": "????????",
            "emojiU": "U+1F1F8 U+1F1E7",
            "fips": "BP",
            "internet": "SB",
            "continent": "Oceania",
            "region": "Pacific"
        },
        {
            "name": "Somalia",
            "alpha2": "SO",
            "alpha3": "SOM",
            "numeric": "706",
            "locales": [
                "so_SO"
            ],
            "default_locale": "so_SO",
            "currency": "SOS",
            "languages": [
                "so",
                "ar"
            ],
            "capital": "Mogadishu",
            "emoji": "????????",
            "emojiU": "U+1F1F8 U+1F1F4",
            "fips": "SO",
            "internet": "SO",
            "continent": "Africa",
            "region": "Eastern Africa"
        },
        {
            "name": "South Africa",
            "alpha2": "ZA",
            "alpha3": "ZAF",
            "numeric": "710",
            "locales": [
                "af_ZA",
                "en_ZA",
                "zu_ZA"
            ],
            "default_locale": "af_ZA",
            "currency": "ZAR",
            "languages": [
                "af",
                "en",
                "nr",
                "st",
                "ss",
                "tn",
                "ts",
                "ve",
                "xh",
                "zu"
            ],
            "capital": "Pretoria",
            "emoji": "????????",
            "emojiU": "U+1F1FF U+1F1E6",
            "fips": "SF",
            "internet": "ZA",
            "continent": "Africa",
            "region": "Southern Africa"
        },
        {
            "name": "South Georgia and the South Sandwich Islands",
            "alpha2": "GS",
            "alpha3": "SGS",
            "numeric": "239",
            "locales": [
                "en"
            ],
            "default_locale": "en",
            "currency": "USD",
            "languages": [
                "en"
            ],
            "capital": "King Edward Point",
            "emoji": "????????",
            "emojiU": "U+1F1EC U+1F1F8",
            "fips": "SX",
            "internet": "GS",
            "continent": "Atlantic Ocean",
            "region": "South Atlantic Ocean"
        },
        {
            "name": "South Sudan",
            "alpha2": "SS",
            "alpha3": "SSD",
            "numeric": "728",
            "locales": [
                "en"
            ],
            "default_locale": "en",
            "currency": "SSP",
            "languages": [
                "en"
            ],
            "capital": "Juba",
            "emoji": "????????",
            "emojiU": "U+1F1F8 U+1F1F8",
            "fips": "OD",
            "internet": "SS",
            "continent": "Africa",
            "region": "Northern Africa"
        },
        {
            "name": "Spain",
            "alpha2": "ES",
            "alpha3": "ESP",
            "numeric": "724",
            "locales": [
                "eu_ES",
                "ca_ES",
                "gl_ES",
                "es_ES"
            ],
            "default_locale": "es_ES",
            "currency": "EUR",
            "languages": [
                "es",
                "eu",
                "ca",
                "gl",
                "oc"
            ],
            "capital": "Madrid",
            "emoji": "????????",
            "emojiU": "U+1F1EA U+1F1F8",
            "fips": "SP",
            "internet": "ES",
            "continent": "Europe",
            "region": "South West Europe"
        },
        {
            "name": "Sri Lanka",
            "alpha2": "LK",
            "alpha3": "LKA",
            "numeric": "144",
            "locales": [
                "si_LK",
                "ta_LK"
            ],
            "default_locale": "si_LK",
            "currency": "LKR",
            "languages": [
                "si",
                "ta"
            ],
            "capital": "Colombo",
            "emoji": "????????",
            "emojiU": "U+1F1F1 U+1F1F0",
            "fips": "CE",
            "internet": "LK",
            "continent": "Asia",
            "region": "South Asia"
        },
        {
            "name": "Sudan",
            "alpha2": "SD",
            "alpha3": "SDN",
            "numeric": "729",
            "locales": [
                "ar_SD"
            ],
            "default_locale": "ar_SD",
            "currency": "SDG",
            "languages": [
                "ar",
                "en"
            ],
            "capital": "Khartoum",
            "emoji": "????????",
            "emojiU": "U+1F1F8 U+1F1E9",
            "fips": "SU",
            "internet": "SD",
            "continent": "Africa",
            "region": "Northern Africa"
        },
        {
            "name": "Suriname",
            "alpha2": "SR",
            "alpha3": "SUR",
            "numeric": "740",
            "locales": [
                "nl"
            ],
            "default_locale": "nl",
            "currency": "SRD",
            "languages": [
                "nl"
            ],
            "capital": "Paramaribo",
            "emoji": "????????",
            "emojiU": "U+1F1F8 U+1F1F7",
            "fips": "NS",
            "internet": "SR",
            "continent": "Americas",
            "region": "South America"
        },
        {
            "name": "Svalbard and Jan Mayen",
            "alpha2": "SJ",
            "alpha3": "SJM",
            "numeric": "744",
            "locales": [
                "no"
            ],
            "default_locale": "no",
            "currency": "NOK",
            "languages": [
                "no"
            ],
            "capital": "Longyearbyen",
            "emoji": "????????",
            "emojiU": "U+1F1F8 U+1F1EF",
            "fips": "SV",
            "internet": "SJ",
            "continent": "Europe",
            "region": "Northern Europe"
        },
        {
            "name": "Sweden",
            "alpha2": "SE",
            "alpha3": "SWE",
            "numeric": "752",
            "locales": [
                "sv_SE"
            ],
            "default_locale": "sv_SE",
            "currency": "SEK",
            "languages": [
                "sv"
            ],
            "capital": "Stockholm",
            "emoji": "????????",
            "emojiU": "U+1F1F8 U+1F1EA",
            "fips": "SW",
            "internet": "SE",
            "continent": "Europe",
            "region": "Northern Europe"
        },
        {
            "name": "Switzerland",
            "alpha2": "CH",
            "alpha3": "CHE",
            "numeric": "756",
            "locales": [
                "fr_CH",
                "de_CH",
                "it_CH",
                "rm_CH",
                "gsw_CH"
            ],
            "default_locale": "fr_CH",
            "currency": "CHW",
            "languages": [
                "de",
                "fr",
                "it"
            ],
            "capital": "Bern",
            "emoji": "????????",
            "emojiU": "U+1F1E8 U+1F1ED",
            "fips": "SZ",
            "internet": "CH",
            "continent": "Europe",
            "region": "Central Europe"
        },
        {
            "name": "Syrian Arab Republic",
            "alpha2": "SY",
            "alpha3": "SYR",
            "numeric": "760",
            "locales": [
                "ar_SY"
            ],
            "default_locale": "ar_SY",
            "currency": "SYP",
            "languages": [
                "ar"
            ],
            "capital": "Damascus",
            "emoji": "????????",
            "emojiU": "U+1F1F8 U+1F1FE",
            "fips": "SY",
            "internet": "SY",
            "continent": "Asia",
            "region": "South West Asia"
        },
        {
            "name": "Taiwan",
            "alpha2": "TW",
            "alpha3": "TWN",
            "numeric": "158",
            "locales": [
                "zh_Hant_TW"
            ],
            "default_locale": "zh_Hant_TW",
            "currency": "SYP",
            "languages": [
                "zh"
            ],
            "capital": "Taipei",
            "emoji": "????????",
            "emojiU": "U+1F1F9 U+1F1FC",
            "fips": "TW",
            "internet": "TW",
            "continent": "Asia",
            "region": "East Asia",
            "alternate_names": [
                "Province of China Taiwan"
            ]
        },
        {
            "name": "Tajikistan",
            "alpha2": "TJ",
            "alpha3": "TJK",
            "numeric": "762",
            "locales": [
                "tg"
            ],
            "default_locale": "tg",
            "currency": "TJS",
            "languages": [
                "tg",
                "ru"
            ],
            "capital": "Dushanbe",
            "emoji": "????????",
            "emojiU": "U+1F1F9 U+1F1EF",
            "fips": "TI",
            "internet": "TJ",
            "continent": "Asia",
            "region": "Central Asia"
        },
        {
            "name": "Tanzania",
            "alpha2": "TZ",
            "alpha3": "TZA",
            "numeric": "834",
            "locales": [
                "asa_TZ",
                "bez_TZ",
                "lag_TZ",
                "jmc_TZ",
                "kde_TZ",
                "mas_TZ",
                "rof_TZ",
                "rwk_TZ",
                "sw_TZ",
                "vun_TZ"
            ],
            "default_locale": "asa_TZ",
            "currency": "TZS",
            "languages": [
                "sw",
                "en"
            ],
            "capital": "Dodoma",
            "emoji": "????????",
            "emojiU": "U+1F1F9 U+1F1FF",
            "fips": "TZ",
            "internet": "TZ",
            "continent": "Africa",
            "region": "Eastern Africa",
            "alternate_names": [
                "United Republic of Tanzania"
            ]
        },
        {
            "name": "Thailand",
            "alpha2": "TH",
            "alpha3": "THA",
            "numeric": "764",
            "locales": [
                "th_TH"
            ],
            "default_locale": "th_TH",
            "currency": "THB",
            "languages": [
                "th"
            ],
            "capital": "Bangkok",
            "emoji": "????????",
            "emojiU": "U+1F1F9 U+1F1ED",
            "fips": "TH",
            "internet": "TH",
            "continent": "Asia",
            "region": "South East Asia"
        },
        {
            "name": "Timor-Leste",
            "alpha2": "TL",
            "alpha3": "TLS",
            "numeric": "626",
            "locales": [
                "pt"
            ],
            "default_locale": "pt",
            "currency": "USD",
            "languages": [
                "pt"
            ],
            "capital": "Dili",
            "emoji": "????????",
            "emojiU": "U+1F1F9 U+1F1F1",
            "fips": "TT",
            "internet": "TL",
            "continent": "Asia",
            "region": "South East Asia"
        },
        {
            "name": "Togo",
            "alpha2": "TG",
            "alpha3": "TGO",
            "numeric": "768",
            "locales": [
                "ee_TG",
                "fr_TG"
            ],
            "default_locale": "fr_TG",
            "currency": "XOF",
            "languages": [
                "fr"
            ],
            "capital": "Lom??",
            "emoji": "????????",
            "emojiU": "U+1F1F9 U+1F1EC",
            "fips": "TO",
            "internet": "TG",
            "continent": "Africa",
            "region": "Western Africa"
        },
        {
            "name": "Tokelau",
            "alpha2": "TK",
            "alpha3": "TKL",
            "numeric": "772",
            "locales": [
                "en"
            ],
            "default_locale": "en",
            "currency": "NZD",
            "languages": [
                "en"
            ],
            "capital": "Fakaofo",
            "emoji": "????????",
            "emojiU": "U+1F1F9 U+1F1F0",
            "fips": "TL",
            "internet": "TK",
            "continent": "Oceania",
            "region": "Pacific"
        },
        {
            "name": "Tonga",
            "alpha2": "TO",
            "alpha3": "TON",
            "numeric": "776",
            "locales": [
                "to_TO"
            ],
            "default_locale": "to_TO",
            "currency": "TOP",
            "languages": [
                "en",
                "to"
            ],
            "capital": "Nuku'alofa",
            "emoji": "????????",
            "emojiU": "U+1F1F9 U+1F1F4",
            "fips": "TN",
            "internet": "TO",
            "continent": "Oceania",
            "region": "Pacific"
        },
        {
            "name": "Trinidad and Tobago",
            "alpha2": "TT",
            "alpha3": "TTO",
            "numeric": "780",
            "locales": [
                "en_TT"
            ],
            "default_locale": "en_TT",
            "currency": "TTD",
            "languages": [
                "en"
            ],
            "capital": "Port of Spain",
            "emoji": "????????",
            "emojiU": "U+1F1F9 U+1F1F9",
            "fips": "TD",
            "internet": "TT",
            "continent": "Americas",
            "region": "West Indies"
        },
        {
            "name": "Tunisia",
            "alpha2": "TN",
            "alpha3": "TUN",
            "numeric": "788",
            "locales": [
                "ar_TN"
            ],
            "default_locale": "ar_TN",
            "currency": "TND",
            "languages": [
                "ar"
            ],
            "capital": "Tunis",
            "emoji": "????????",
            "emojiU": "U+1F1F9 U+1F1F3",
            "fips": "TS",
            "internet": "TN",
            "continent": "Africa",
            "region": "Northern Africa"
        },
        {
            "name": "Turkey",
            "alpha2": "TR",
            "alpha3": "TUR",
            "numeric": "792",
            "locales": [
                "tr_TR"
            ],
            "default_locale": "tr_TR",
            "currency": "TRY",
            "languages": [
                "tr"
            ],
            "capital": "Ankara",
            "emoji": "????????",
            "emojiU": "U+1F1F9 U+1F1F7",
            "fips": "TU",
            "internet": "TR",
            "continent": "Asia",
            "region": "South West Asia"
        },
        {
            "name": "Turkmenistan",
            "alpha2": "TM",
            "alpha3": "TKM",
            "numeric": "795",
            "locales": [
                "tk"
            ],
            "default_locale": "tk",
            "currency": "TMT",
            "languages": [
                "tk",
                "ru"
            ],
            "capital": "Ashgabat",
            "emoji": "????????",
            "emojiU": "U+1F1F9 U+1F1F2",
            "fips": "TX",
            "internet": "TM",
            "continent": "Asia",
            "region": "Central Asia"
        },
        {
            "name": "Turks and Caicos Islands",
            "alpha2": "TC",
            "alpha3": "TCA",
            "numeric": "796",
            "locales": [
                "en"
            ],
            "default_locale": "en",
            "currency": "USD",
            "languages": [
                "en"
            ],
            "capital": "Cockburn Town",
            "emoji": "????????",
            "emojiU": "U+1F1F9 U+1F1E8",
            "fips": "TK",
            "internet": "TC",
            "continent": "Americas",
            "region": "West Indies"
        },
        {
            "name": "Tuvalu",
            "alpha2": "TV",
            "alpha3": "TUV",
            "numeric": "798",
            "locales": [
                "en"
            ],
            "default_locale": "en",
            "currency": "AUD",
            "languages": [
                "en"
            ],
            "capital": "Funafuti",
            "emoji": "????????",
            "emojiU": "U+1F1F9 U+1F1FB",
            "fips": "TV",
            "internet": "TV",
            "continent": "Oceania",
            "region": "Pacific"
        },
        {
            "name": "Uganda",
            "alpha2": "UG",
            "alpha3": "UGA",
            "numeric": "800",
            "locales": [
                "cgg_UG",
                "lg_UG",
                "nyn_UG",
                "xog_UG",
                "teo_UG"
            ],
            "default_locale": "cgg_UG",
            "currency": "UGX",
            "languages": [
                "en",
                "sw"
            ],
            "capital": "Kampala",
            "emoji": "????????",
            "emojiU": "U+1F1FA U+1F1EC",
            "fips": "UG",
            "internet": "UG",
            "continent": "Africa",
            "region": "Eastern Africa"
        },
        {
            "name": "Ukraine",
            "alpha2": "UA",
            "alpha3": "UKR",
            "numeric": "804",
            "locales": [
                "ru_UA",
                "uk_UA"
            ],
            "default_locale": "uk_UA",
            "currency": "UAH",
            "languages": [
                "uk"
            ],
            "capital": "Kyiv",
            "emoji": "????????",
            "emojiU": "U+1F1FA U+1F1E6",
            "fips": "UP",
            "internet": "UA",
            "continent": "Europe",
            "region": "Eastern Europe"
        },
        {
            "name": "United Arab Emirates",
            "alpha2": "AE",
            "alpha3": "ARE",
            "numeric": "784",
            "locales": [
                "ar_AE"
            ],
            "default_locale": "ar_AE",
            "currency": "AED",
            "languages": [
                "ar"
            ],
            "capital": "Abu Dhabi",
            "emoji": "????????",
            "emojiU": "U+1F1E6 U+1F1EA",
            "fips": "TC",
            "internet": "AE",
            "continent": "Asia",
            "region": "South West Asia"
        },
        {
            "name": "United Kingdom",
            "alpha2": "GB",
            "alpha3": "GBR",
            "numeric": "826",
            "locales": [
                "kw_GB",
                "en_GB",
                "gv_GB",
                "cy_GB"
            ],
            "default_locale": "en_GB",
            "currency": "GBP",
            "languages": [
                "en"
            ],
            "capital": "London",
            "emoji": "????????",
            "emojiU": "U+1F1EC U+1F1E7",
            "fips": "UK",
            "internet": "UK",
            "continent": "Europe",
            "region": "Western Europe",
            "alternate_names": [
                "United Kingdom of Great Britain and Northern Ireland"
            ]
        },
        {
            "name": "United States Minor Outlying Islands",
            "alpha2": "UM",
            "alpha3": "UMI",
            "numeric": "581",
            "locales": [
                "en_UM"
            ],
            "default_locale": "en_UM",
            "currency": "USD",
            "languages": [
                "en"
            ],
            "capital": "",
            "emoji": "????????",
            "emojiU": "U+1F1FA U+1F1F2",
            "fips": "",
            "internet": "US",
            "continent": "Americas",
            "region": "North America"
        },
        {
            "name": "United States",
            "alpha2": "US",
            "alpha3": "USA",
            "numeric": "840",
            "locales": [
                "chr_US",
                "en_US",
                "haw_US",
                "es_US"
            ],
            "default_locale": "en_US",
            "currency": "USD",
            "languages": [
                "en"
            ],
            "capital": "Washington D.C.",
            "emoji": "????????",
            "emojiU": "U+1F1FA U+1F1F8",
            "fips": "US",
            "internet": "US",
            "continent": "Americas",
            "region": "North America",
            "alternate_names": [
                "United States of America"
            ]
        },
        {
            "name": "Uruguay",
            "alpha2": "UY",
            "alpha3": "URY",
            "numeric": "858",
            "locales": [
                "es_UY"
            ],
            "default_locale": "es_UY",
            "currency": "UYW",
            "languages": [
                "es"
            ],
            "capital": "Montevideo",
            "emoji": "????????",
            "emojiU": "U+1F1FA U+1F1FE",
            "fips": "UY",
            "internet": "UY",
            "continent": "Americas",
            "region": "South America"
        },
        {
            "name": "Uzbekistan",
            "alpha2": "UZ",
            "alpha3": "UZB",
            "numeric": "860",
            "locales": [
                "uz_Cyrl_UZ",
                "uz_Latn_UZ"
            ],
            "default_locale": "uz_Cyrl_UZ",
            "currency": "UZS",
            "languages": [
                "uz",
                "ru"
            ],
            "capital": "Tashkent",
            "emoji": "????????",
            "emojiU": "U+1F1FA U+1F1FF",
            "fips": "UZ",
            "internet": "UZ",
            "continent": "Asia",
            "region": "Central Asia"
        },
        {
            "name": "Vanuatu",
            "alpha2": "VU",
            "alpha3": "VUT",
            "numeric": "548",
            "locales": [
                "bi"
            ],
            "default_locale": "bi",
            "currency": "VUV",
            "languages": [
                "bi",
                "en",
                "fr"
            ],
            "capital": "Port Vila",
            "emoji": "????????",
            "emojiU": "U+1F1FB U+1F1FA",
            "fips": "NH",
            "internet": "VU",
            "continent": "Oceania",
            "region": "Pacific"
        },
        {
            "name": "Venezuela",
            "alpha2": "VE",
            "alpha3": "VEN",
            "numeric": "862",
            "locales": [
                "es_VE"
            ],
            "default_locale": "es_VE",
            "currency": "VUV",
            "languages": [
                "es"
            ],
            "capital": "Caracas",
            "emoji": "????????",
            "emojiU": "U+1F1FB U+1F1EA",
            "fips": "VE",
            "internet": "UE",
            "continent": "Americas",
            "region": "South America",
            "alternate_names": [
                "Bolivarian Republic of Venezuela"
            ]
        },
        {
            "name": "Viet Nam",
            "alpha2": "VN",
            "alpha3": "VNM",
            "numeric": "704",
            "locales": [
                "vi_VN"
            ],
            "default_locale": "vi_VN",
            "currency": "VND",
            "languages": [
                "vi"
            ],
            "capital": "Hanoi",
            "emoji": "????????",
            "emojiU": "U+1F1FB U+1F1F3",
            "fips": "VN",
            "internet": "VN",
            "continent": "Asia",
            "region": "South East Asia"
        },
        {
            "name": "Virgin Islands (British)",
            "alpha2": "VG",
            "alpha3": "VGB",
            "numeric": "092",
            "locales": [
                "en"
            ],
            "default_locale": "en",
            "currency": "USD",
            "languages": [
                "en"
            ],
            "capital": "Road Town",
            "emoji": "????????",
            "emojiU": "U+1F1FB U+1F1EC",
            "fips": "VI",
            "internet": "VG",
            "continent": "Americas",
            "region": "West Indies"
        },
        {
            "name": "Virgin Islands (U.S.)",
            "alpha2": "VI",
            "alpha3": "VIR",
            "numeric": "850",
            "locales": [
                "en_VI"
            ],
            "default_locale": "en_VI",
            "currency": "USD",
            "languages": [
                "en"
            ],
            "capital": "Charlotte Amalie",
            "emoji": "????????",
            "emojiU": "U+1F1FB U+1F1EE",
            "fips": "VQ",
            "internet": "VI",
            "continent": "Americas",
            "region": "West Indies"
        },
        {
            "name": "Wallis and Futuna",
            "alpha2": "WF",
            "alpha3": "WLF",
            "numeric": "876",
            "locales": [
                "fr"
            ],
            "default_locale": "fr",
            "currency": "XPF",
            "languages": [
                "fr"
            ],
            "capital": "Mata-Utu",
            "emoji": "????????",
            "emojiU": "U+1F1FC U+1F1EB",
            "fips": "WF",
            "internet": "WF",
            "continent": "Oceania",
            "region": "Pacific"
        },
        {
            "name": "Western Sahara",
            "alpha2": "EH",
            "alpha3": "ESH",
            "numeric": "732",
            "locales": [
                "es"
            ],
            "default_locale": "es",
            "currency": "MAD",
            "languages": [
                "es"
            ],
            "capital": "El Aai??n",
            "emoji": "????????",
            "emojiU": "U+1F1EA U+1F1ED",
            "fips": "WI",
            "internet": "EH",
            "continent": "Africa",
            "region": "Northern Africa"
        },
        {
            "name": "Yemen",
            "alpha2": "YE",
            "alpha3": "YEM",
            "numeric": "887",
            "locales": [
                "ar_YE"
            ],
            "default_locale": "ar_YE",
            "currency": "YER",
            "languages": [
                "ar"
            ],
            "capital": "Sana'a",
            "emoji": "????????",
            "emojiU": "U+1F1FE U+1F1EA",
            "fips": "YM",
            "internet": "YE",
            "continent": "Asia",
            "region": "South West Asia"
        },
        {
            "name": "Zambia",
            "alpha2": "ZM",
            "alpha3": "ZMB",
            "numeric": "894",
            "locales": [
                "bem_ZM"
            ],
            "default_locale": "bem_ZM",
            "currency": "ZMW",
            "languages": [
                "en"
            ],
            "capital": "Lusaka",
            "emoji": "????????",
            "emojiU": "U+1F1FF U+1F1F2",
            "fips": "ZA",
            "internet": "ZM",
            "continent": "Africa",
            "region": "Southern Africa"
        },
        {
            "name": "Zimbabwe",
            "alpha2": "ZW",
            "alpha3": "ZWE",
            "numeric": "716",
            "locales": [
                "en_ZW",
                "nd_ZW",
                "sn_ZW"
            ],
            "default_locale": "en_ZW",
            "currency": "ZWL",
            "languages": [
                "en",
                "sn",
                "nd"
            ],
            "capital": "Harare",
            "emoji": "????????",
            "emojiU": "U+1F1FF U+1F1FC",
            "fips": "ZI",
            "internet": "ZW",
            "continent": "Africa",
            "region": "Southern Africa"
        },
        {
            "name": "??land Islands",
            "alpha2": "AX",
            "alpha3": "ALA",
            "numeric": "248",
            "locales": [
                "sv"
            ],
            "default_locale": "sv",
            "currency": "EUR",
            "languages": [
                "sv"
            ],
            "capital": "Mariehamn",
            "emoji": "????????",
            "emojiU": "U+1F1E6 U+1F1FD",
            "fips": "AX",
            "internet": "AX",
            "continent": "Europe",
            "region": "Northern Europe"
        }
    ];

    countryByAlpha2Code = {};
    countryByAlpha3Code = {};
    countryByNumericCode = {};
    countryByName = {};
    countryNames = [];


    constructor() {
        this.init();
    }

    init() {
        for (let i = 0; i < this.countries.length; ++i) {
            this.countryByAlpha2Code[this.countries[i]['alpha2']] = this.countries[i];
            this.countryByAlpha3Code[this.countries[i]['alpha3']] = this.countries[i];
            this.countryByNumericCode[this.countries[i]['numeric']] = this.countries[i];
            this.countryByName[this.countries[i]['name']] = this.countries[i];
            this.countryNames.push(this.countries[i]['name']);

            if (this.countries[i]['alternate_names']) {
                for (let j = 0; j < this.countries[i]['alternate_names'].length; ++j) {
                    this.countryByName[this.countries[i]['alternate_names'][j]] = this.countries[i];
                    this.countryNames.push(this.countries[i]['alternate_names'][j]);
                }
            }
        }
    }

    getAllCountries() {
        return this.countries;
    }

    getAlpha3ByAlpha2(alpha2) {
        if (this.countryByAlpha2Code[alpha2])
            return this.countryByAlpha2Code[alpha2].alpha3;
        else
            return undefined;
    }

    getLocaleByAlpha2(alpha2) {
        if (this.countryByAlpha2Code[alpha2])
            return this.countryByAlpha2Code[alpha2].default_locale;
        else
            return undefined;
    };

    getCountryNameByAlpha2(alpha2) {
        if (this.countryByAlpha2Code[alpha2])
            return this.countryByAlpha2Code[alpha2].name;
        else
            return undefined;
    };

    getNumericByAlpha2(alpha2) {
        if (this.countryByAlpha2Code[alpha2])
            return this.countryByAlpha2Code[alpha2].numeric;
        else
            return undefined;
    };

    getCurrencyByAlpha2(alpha2) {
        if (this.countryByAlpha2Code[alpha2])
            return this.countryByAlpha2Code[alpha2].currency;
        else
            return undefined;
    };

    getCountryByAlpha2(alpha2) {
        return this.countryByAlpha2Code[alpha2];
    }

    /* get values by alpha3 */
    getAlpha2ByAlpha3(alpha3) {
        if (this.countryByAlpha3Code[alpha3])
            return this.countryByAlpha3Code[alpha3].alpha2;
        else
            return undefined;
    };

    getLocaleByAlpha3(alpha3) {
        if (this.countryByAlpha3Code[alpha3])
            return this.countryByAlpha3Code[alpha3].default_locale;
        else
            return undefined;
    };

    getCountryNameByAlpha3(alpha3) {
        if (this.countryByAlpha3Code[alpha3])
            return this.countryByAlpha3Code[alpha3].name;
        else
            return undefined;
    };

    getNumericByAlpha3(alpha3) {
        if (this.countryByAlpha3Code[alpha3])
            return this.countryByAlpha3Code[alpha3].numeric;
        else
            return undefined;
    };

    getCurrencyByAlpha3(alpha3) {
        if (this.countryByAlpha3Code[alpha3])
            return this.countryByAlpha3Code[alpha3].currency;
        else
            return undefined;
    };

    getCountryByAlpha3(alpha3) {
        return this.countryByAlpha3Code[alpha3];
    }

    /* get values by numeric */
    getAlpha2ByNumeric(numeric) {
        if (this.countryByNumericCode[numeric])
            return this.countryByNumericCode[numeric].alpha2;
        else
            return undefined;
    };

    getAlpha3ByNumeric(numeric) {
        if (this.countryByNumericCode[numeric])
            return this.countryByNumericCode[numeric].alpha3;
        else
            return undefined;
    };

    getLocaleByNumeric(numeric) {
        if (this.countryByNumericCode[numeric])
            return this.countryByNumericCode[numeric].default_locale;
        else
            return undefined;
    };

    getCountryNameByNumeric(numeric) {
        if (this.countryByNumericCode[numeric])
            return this.countryByNumericCode[numeric].name;
        else
            return undefined;
    };

    getCurrencyByNumeric(numeric) {
        if (this.countryByNumericCode[numeric])
            return this.countryByNumericCode[numeric].currency;
        else
            return undefined;
    };

    getCountryByNumeric(numeric) {
        return this.countryByNumericCode[numeric];
    };

    /* get values by country name */
    getAlpha2ByName(name, fuzzy) {
        if (this.countryByName[name]) {
            return this.countryByName[name].alpha2;
        } else if (fuzzy) {
            let match = this.getClosestMatch(name);
            if (match) {
                return this.countryByName[match].alpha2;
            }
        }
        return undefined;
    };

    getAlpha3ByName(name, fuzzy) {
        if (this.countryByName[name]) {
            return this.countryByName[name].alpha3;
        } else if (fuzzy) {
            let match = this.getClosestMatch(name);
            if (match) {
                return this.countryByName[match].alpha3;
            }
        }

        return undefined;
    };

    getLocaleByName(name, fuzzy) {
        if (this.countryByName[name]) {
            return this.countryByName[name].default_locale;
        } else if (fuzzy) {
            let match = this.getClosestMatch(name);
            if (match) {
                return this.countryByName[match].default_locale;
            }
        }

        return undefined;
    };

    getNumericByName(name, fuzzy) {
        if (this.countryByName[name]) {
            return this.countryByName[name].numeric;
        } else if (fuzzy) {
            let match = this.getClosestMatch(name);
            if (match) {
                return this.countryByName[match].numeric;
            }
        }
        return undefined;
    };

    getCurrencyByName(name, fuzzy) {
        if (this.countryByName[name]) {
            return this.countryByName[name].currency;
        } else if (fuzzy) {
            let match = this.getClosestMatch(name);
            if (match) {
                return this.countryByName[match].currency;
            }
        }

        return undefined;
    };

    getCountryByName(name, fuzzy) {

        if (this.countryByName[name]) {
            return this.countryByName[name];
        } else if (fuzzy) {
            let match = this.getClosestMatch(name);
            if (match) {
                return this.countryByName[match];
            }
        }

        return undefined;

    };

    getClosestMatch(name) {

        let result = fuzz.extract(name, this.countryNames);
        if (result[0][1] >= 60) {
            return result[0][0];
        }

        return undefined;

    }
}