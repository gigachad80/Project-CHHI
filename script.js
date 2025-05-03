
const hamburgerBtn = document.getElementById('hamburger-btn');
const countryMenu = document.getElementById('country-menu');
const countrySearchSm = document.getElementById('country-search-sm');
const countrySearchLg = document.getElementById('country-search-lg');
const countryListMobile = document.getElementById('country-list-mobile');
const countrySearchDropdownLg = document.getElementById('country-search-dropdown-lg'); // Large screen dropdown
const countryContent = document.getElementById('country-content'); // Main content area
const initialHeroContent = document.getElementById('initial-hero-content'); // Initial hero content container
const homeLogoLink = document.getElementById('home-logo-link'); // Logo link

// Data structure for countries and their links with descriptions and placeholder URLs
const countryData = {
    // Added 6 placeholder portals for each country by default
    "Afghanistan": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Afghanistan ${i + 1}.` })),
    "Albania": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Albania ${i + 1}.` })),
    "Algeria": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Algeria ${i + 1}.` })),
    "Andorra": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Andorra ${i + 1}.` })),
    "Angola": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Angola ${i + 1}.` })),
    "Antigua and Barbuda": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Antigua and Barbuda ${i + 1}.` })),
    "Argentina": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Argentina ${i + 1}.` })),
    "Armenia": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Armenia ${i + 1}.` })),
    "Australia": [
        { name: "Australian Cyber Security Centre", url: "https://www.cyber.gov.au/", description: "Leading Australia’s efforts to improve cyber security." },
        // Added 5 placeholder portals to make a total of 6
        { name: "Placeholder Portal 2", url: "https://www.example.com/", description: "Placeholder description for Australia 2." },
        { name: "Placeholder Portal 3", url: "https://www.example.com/", description: "Placeholder description for Australia 3." },
        { name: "Placeholder Portal 4", url: "https://www.example.com/", description: "Placeholder description for Australia 4." },
        { name: "Placeholder Portal 5", url: "https://www.example.com/", description: "Placeholder description for Australia 5." },
        { name: "Placeholder Portal 6", url: "https://www.example.com/", description: "Placeholder description for Australia 6." }
    ],
    "Austria": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Austria ${i + 1}.` })),
    "Azerbaijan": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Azerbaijan ${i + 1}.` })),
    "Bahamas": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Bahamas ${i + 1}.` })),
    "Bahrain": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Bahrain ${i + 1}.` })),
    "Bangladesh": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Bangladesh ${i + 1}.` })),
    "Barbados": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Barbados ${i + 1}.` })),
    "Belarus": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Belarus ${i + 1}.` })),
    "Belgium": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Belgium ${i + 1}.` })),
    "Belize": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Belize ${i + 1}.` })),
    "Benin": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Benin ${i + 1}.` })),
    "Bhutan": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Bhutan ${i + 1}.` })),
    "Bolivia": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Bolivia ${i + 1}.` })),
    "Bosnia and Herzegovina": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Bosnia and Herzegovina ${i + 1}.` })),
    "Botswana": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Botswana ${i + 1}.` })),
    "Brazil": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Brazil ${i + 1}.` })),
    "Brunei": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Brunei ${i + 1}.` })),
    "Bulgaria": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Bulgaria ${i + 1}.` })),
    "Burkina Faso": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Burkina Faso ${i + 1}.` })),
    "Burundi": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Burundi ${i + 1}.` })),
    "Cabo Verde": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Cabo Verde ${i + 1}.` })),
    "Cambodia": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Cambodia ${i + 1}.` })),
    "Cameroon": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Cameroon ${i + 1}.` })),
    "Canada": [
        { name: "Cyber Security Centre", url: "https://cyber.gc.ca/", description: "Canada's authority on cyber security." },
        { name: "Privacy Commissioner", url: "https://www.priv.gc.ca/", description: "Oversees compliance with Canada's privacy laws." },
        { name: "Report Cybercrime", url: "https://www.antifraudcentre-centreantifraude.ca/index-eng.htm", description: "Information on how to report cyber incidents in Canada." },
        // Added 3 placeholder portals to make a total of 6
        { name: "Placeholder Portal 4", url: "https://www.example.com/", description: "Placeholder description for Canada 4." },
        { name: "Placeholder Portal 5", url: "https://www.example.com/", description: "Placeholder description for Canada 5." },
        { name: "Placeholder Portal 6", url: "https://www.example.com/", description: "Placeholder description for Canada 6." }
    ],
    "Central African Republic": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Central African Republic ${i + 1}.` })),
    "Chad": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Chad ${i + 1}.` })),
    "Chile": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Chile ${i + 1}.` })),
    "China": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for China ${i + 1}.` })),
    "Colombia": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Colombia ${i + 1}.` })),
    "Comoros": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Comoros ${i + 1}.` })),
    "Congo (Dem. Rep.)": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Congo (Dem. Rep.) ${i + 1}.` })),
    "Congo (Rep.)": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Congo (Rep.) ${i + 1}.` })),
    "Costa Rica": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Costa Rica ${i + 1}.` })),
    "Côte d'Ivoire": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Côte d'Ivoire ${i + 1}.` })),
    "Croatia": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Croatia ${i + 1}.` })),
    "Cuba": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Cuba ${i + 1}.` })),
    "Cyprus": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Cyprus ${i + 1}.` })),
    "Czech Republic": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Czech Republic ${i + 1}.` })),
    "Denmark": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Denmark ${i + 1}.` })),
    "Djibouti": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Djibouti ${i + 1}.` })),
    "Dominica": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Dominica ${i + 1}.` })),
    "Dominican Republic": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Dominican Republic ${i + 1}.` })),
    "Ecuador": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Ecuador ${i + 1}.` })),
    "Egypt": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Egypt ${i + 1}.` })),
    "El Salvador": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for El Salvador ${i + 1}.` })),
    "Equatorial Guinea": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Equatorial Guinea ${i + 1}.` })),
    "Eritrea": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Eritrea ${i + 1}.` })),
    "Estonia": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Estonia ${i + 1}.` })),
    "Eswatini": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Eswatini ${i + 1}.` })),
    "Ethiopia": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Ethiopia ${i + 1}.` })),
    "Fiji": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Fiji ${i + 1}.` })),
    "Finland": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Finland ${i + 1}.` })),
    "France": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for France ${i + 1}.` })),
    "Gabon": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Gabon ${i + 1}.` })),
    "Gambia": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Gambia ${i + 1}.` })),
    "Georgia": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Georgia ${i + 1}.` })),
    "Germany": [
        { name: "BSI (Federal Office for Information Security)", url: "https://www.bsi.bund.de/EN/Home/home_node.html", description: "The central cybersecurity authority in Germany." },
        { name: "Data Protection Authority", url: "https://www.bfdi.bund.de/EN/Home/home_node.html", description: "Information on German data protection laws and regulations." },
        // Added 4 placeholder portals to make a total of 6
        { name: "Placeholder Portal 3", url: "https://www.example.com/", description: "Placeholder description for Germany 3." },
        { name: "Placeholder Portal 4", url: "https://www.example.com/", description: "Placeholder description for Germany 4." },
        { name: "Placeholder Portal 5", url: "https://www.example.com/", description: "Placeholder description for Germany 5." },
        { name: "Placeholder Portal 6", url: "https://www.example.com/", description: "Placeholder description for Germany 6." }
    ],
    "Ghana": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Ghana ${i + 1}.` })),
    "Greece": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Greece ${i + 1}.` })),
    "Grenada": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Grenada ${i + 1}.` })),
    "Guatemala": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Guatemala ${i + 1}.` })),
    "Guinea": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Guinea ${i + 1}.` })),
    "Guinea-Bissau": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Guinea-Bissau ${i + 1}.` })),
    "Guyana": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Guyana ${i + 1}.` })),
    "Haiti": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Haiti ${i + 1}.` })),
    "Honduras": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Honduras ${i + 1}.` })),
    "Hungary": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Hungary ${i + 1}.` })),
    "Iceland": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Iceland ${i + 1}.` })),
    "India": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for India ${i + 1}.` })),
    "Indonesia": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Indonesia ${i + 1}.` })),
    "Iran": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Iran ${i + 1}.` })),
    "Iraq": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Iraq ${i + 1}.` })),
    "Ireland": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Ireland ${i + 1}.` })),
    "Israel": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Israel ${i + 1}.` })),
    "Italy": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Italy ${i + 1}.` })),
    "Jamaica": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Jamaica ${i + 1}.` })),
    "Japan": [
        { name: "NISC (National center of Incident readiness and Strategy for Cybersecurity)", url: "https://www.nisc.go.jp/eng/", description: "Japan's key organization for cybersecurity strategy and incident response." },
        // Added 5 placeholder portals to make a total of 6
        { name: "Placeholder Portal 2", url: "https://www.example.com/", description: "Placeholder description for Japan 2." },
        { name: "Placeholder Portal 3", url: "https://www.example.com/", description: "Placeholder description for Japan 3." },
        { name: "Placeholder Portal 4", url: "https://www.example.com/", description: "Placeholder description for Japan 4." },
        { name: "Placeholder Portal 5", url: "https://www.example.com/", description: "Placeholder description for Japan 5." },
        { name: "Placeholder Portal 6", url: "https://www.example.com/", description: "Placeholder description for Japan 6." }
    ],
    "Jordan": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Jordan ${i + 1}.` })),
    "Kazakhstan": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Kazakhstan ${i + 1}.` })),
    "Kenya": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Kenya ${i + 1}.` })),
    "Kiribati": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Kiribati ${i + 1}.` })),
    "Korea (North)": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for North Korea ${i + 1}.` })),
    "Korea (South)": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for South Korea ${i + 1}.` })),
    "Kosovo": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Kosovo ${i + 1}.` })),
    "Kuwait": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Kuwait ${i + 1}.` })),
    "Kyrgyzstan": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Kyrgyzstan ${i + 1}.` })),
    "Laos": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Laos ${i + 1}.` })),
    "Latvia": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Latvia ${i + 1}.` })),
    "Lebanon": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Lebanon ${i + 1}.` })),
    "Lesotho": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Lesotho ${i + 1}.` })),
    "Liberia": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Liberia ${i + 1}.` })),
    "Libya": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Libya ${i + 1}.` })),
    "Liechtenstein": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Liechtenstein ${i + 1}.` })),
    "Lithuania": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Lithuania ${i + 1}.` })),
    "Luxembourg": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Luxembourg ${i + 1}.` })),
    "Madagascar": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Madagascar ${i + 1}.` })),
    "Malawi": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Malawi ${i + 1}.` })),
    "Malaysia": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Malaysia ${i + 1}.` })),
    "Maldives": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Maldives ${i + 1}.` })),
    "Mali": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Mali ${i + 1}.` })),
    "Malta": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Malta ${i + 1}.` })),
    "Marshall Islands": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Marshall Islands ${i + 1}.` })),
    "Mauritania": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Mauritania ${i + 1}.` })),
    "Mauritius": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Mauritius ${i + 1}.` })),
    "Mexico": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Mexico ${i + 1}.` })),
    "Micronesia": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Micronesia ${i + 1}.` })),
    "Moldova": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Moldova ${i + 1}.` })),
    "Monaco": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Monaco ${i + 1}.` })),
    "Mongolia": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Mongolia ${i + 1}.` })),
    "Montenegro": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Montenegro ${i + 1}.` })),
    "Morocco": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Morocco ${i + 1}.` })),
    "Mozambique": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Mozambique ${i + 1}.` })),
    "Myanmar": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Myanmar ${i + 1}.` })),
    "Namibia": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Namibia ${i + 1}.` })),
    "Nauru": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Nauru ${i + 1}.` })),
    "Nepal": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Nepal ${i + 1}.` })),
    "Netherlands": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Netherlands ${i + 1}.` })),
    "New Zealand": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for New Zealand ${i + 1}.` })),
    "Nicaragua": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Nicaragua ${i + 1}.` })),
    "Niger": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Niger ${i + 1}.` })),
    "Nigeria": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Nigeria ${i + 1}.` })),
    "North Macedonia": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for North Macedonia ${i + 1}.` })),
    "Norway": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Norway ${i + 1}.` })),
    "Oman": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Oman ${i + 1}.` })),
    "Pakistan": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Pakistan ${i + 1}.` })),
    "Palau": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Palau ${i + 1}.` })),
    "Palestine State": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Palestine State ${i + 1}.` })),
    "Panama": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Panama ${i + 1}.` })),
    "Papua New Guinea": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Papua New Guinea ${i + 1}.` })),
    "Paraguay": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Paraguay ${i + 1}.` })),
    "Peru": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Peru ${i + 1}.` })),
    "Philippines": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Philippines ${i + 1}.` })),
    "Poland": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Poland ${i + 1}.` })),
    "Portugal": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Portugal ${i + 1}.` })),
    "Qatar": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Qatar ${i + 1}.` })),
    "Romania": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Romania ${i + 1}.` })),
    "Russia": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Russia ${i + 1}.` })),
    "Rwanda": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Rwanda ${i + 1}.` })),
    "Saint Kitts and Nevis": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Saint Kitts and Nevis ${i + 1}.` })),
    "Saint Lucia": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Saint Lucia ${i + 1}.` })),
    "Saint Vincent and the Grenadines": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Saint Vincent and the Grenadines ${i + 1}.` })),
    "Samoa": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Samoa ${i + 1}.` })),
    "San Marino": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for San Marino ${i + 1}.` })),
    "Sao Tome and Principe": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Sao Tome and Principe ${i + 1}.` })),
    "Saudi Arabia": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Saudi Arabia ${i + 1}.` })),
    "Senegal": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Senegal ${i + 1}.` })),
    "Serbia": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Serbia ${i + 1}.` })),
    "Seychelles": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Seychelles ${i + 1}.` })),
    "Sierra Leone": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Sierra Leone ${i + 1}.` })),
    "Singapore": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Singapore ${i + 1}.` })),
    "Slovakia": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Slovakia ${i + 1}.` })),
    "Slovenia": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Slovenia ${i + 1}.` })),
    "Solomon Islands": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Solomon Islands ${i + 1}.` })),
    "Somalia": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Somalia ${i + 1}.` })),
    "South Africa": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for South Africa ${i + 1}.` })),
    "South Sudan": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for South Sudan ${i + 1}.` })),
    "Spain": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Spain ${i + 1}.` })),
    "Sri Lanka": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Sri Lanka ${i + 1}.` })),
    "Sudan": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Sudan ${i + 1}.` })),
    "Suriname": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Suriname ${i + 1}.` })),
    "Sweden": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Sweden ${i + 1}.` })),
    "Switzerland": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Switzerland ${i + 1}.` })),
    "Syria": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Syria ${i + 1}.` })),
    "Taiwan": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Taiwan ${i + 1}.` })),
    "Tajikistan": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Tajikistan ${i + 1}.` })),
    "Tanzania": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Tanzania ${i + 1}.` })),
    "Thailand": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Thailand ${i + 1}.` })),
    "Timor-Leste": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Timor-Leste ${i + 1}.` })),
    "Togo": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Togo ${i + 1}.` })),
    "Tonga": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Tonga ${i + 1}.` })),
    "Trinidad and Tobago": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Trinidad and Tobago ${i + 1}.` })),
    "Tunisia": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Tunisia ${i + 1}.` })),
    "Turkey": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Turkey ${i + 1}.` })),
    "Turkmenistan": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Turkmenistan ${i + 1}.` })),
    "Tuvalu": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Tuvalu ${i + 1}.` })),
    "Uganda": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Uganda ${i + 1}.` })),
    "Ukraine": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Ukraine ${i + 1}.` })),
    "United Arab Emirates": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for United Arab Emirates ${i + 1}.` })),
    "United Kingdom": [
        { name: "National Cyber Security Centre", url: "https://www.ncsc.gov.uk/", description: "The UK's lead technical authority on cyber security." },
        { name: "ICO (Information Commissioner's Office)", url: "https://ico.org.uk/", description: "The UK's independent body for upholding information rights." },
        { name: "Action Fraud", url: "https://www.actionfraud.police.uk/", description: "The UK's national reporting centre for fraud and cyber crime." },
        // Added 3 placeholder portals to make a total of 6
        { name: "Placeholder Portal 4", url: "https://www.example.com/", description: "Placeholder description for United Kingdom 4." },
        { name: "Placeholder Portal 5", url: "https://www.example.com/", description: "Placeholder description for United Kingdom 5." },
        { name: "Placeholder Portal 6", url: "https://www.example.com/", description: "Placeholder description for United Kingdom 6." }
    ],
    "United States": [
        { name: "Cyber Security Agency", url: "https://www.cisa.gov/", description: "Official government agency responsible for critical infrastructure security." },
        { name: "Data Privacy Laws", url: "https://www.example.com/us-privacy", description: "Information on key privacy regulations like CCPA and HIPAA." },
        { name: "Online Safety Resources", url: "https://www.example.com/us-safety", description: "Tips, guides, and resources for individuals and businesses to stay safe online." },
        { name: "Report Cybercrime", url: "https://www.ic3.gov/", description: "Links to report cyber incidents and online fraud." },
        // Added 2 placeholder portals to make a total of 6
        { name: "Placeholder Portal 5", url: "https://www.example.com/", description: "Placeholder description for United States 5." },
        { name: "Placeholder Portal 6", url: "https://www.example.com/", description: "Placeholder description for United States 6." }
    ],
    "Uruguay": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Uruguay ${i + 1}.` })),
    "Uzbekistan": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Uzbekistan ${i + 1}.` })),
    "Vanuatu": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Vanuatu ${i + 1}.` })),
    "Vatican City": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Vatican City ${i + 1}.` })),
    "Venezuela": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Venezuela ${i + 1}.` })),
    "Vietnam": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Vietnam ${i + 1}.` })),
    "Yemen": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Yemen ${i + 1}.` })),
    "Zambia": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Zambia ${i + 1}.` })),
    "Zimbabwe": Array.from({ length: 6 }, (_, i) => ({ name: `Placeholder Portal ${i + 1}`, url: "https://www.example.com/", description: `Placeholder description for Zimbabwe ${i + 1}.` }))
};


const countries = Object.keys(countryData); // Get country names

// Function to populate a country list (used for both mobile and large screen dropdown)
function populateCountryList(listElement, filter = '') {
    listElement.innerHTML = ''; // Clear current list
    const filteredCountries = countries.filter(country =>
        country.toLowerCase().includes(filter.toLowerCase())
    );
    if (filteredCountries.length === 0 && filter !== '') {
        const li = document.createElement('li');
        li.className = 'p-2 text-gray-500';
        li.innerText = 'No countries found';
        listElement.appendChild(li);
        return;
    }
    filteredCountries.forEach(country => {
        const li = document.createElement('li');
        // Add a data attribute to store the country name
        li.innerHTML = `<a href="#" class="block p-2 hover:bg-gray-700 rounded" data-country="${country}">${country}</a>`;
        listElement.appendChild(li);
    });
}


// Function to display country-specific links in the main content area as cards
function displayCountryLinks(countryName) {
    // Hide initial hero content
    gsap.to(initialHeroContent, {
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
            initialHeroContent.style.display = 'none';
        }
    });

    countryContent.innerHTML = ''; // Clear current content

    const links = countryData[countryName];

    const countryTitle = document.createElement('h2');
    // Removed the negative margin class, title will now position normally
    countryTitle.className = 'text-4xl font-semibold text-center w-full country-title';
    countryTitle.innerText = countryName;
    countryContent.appendChild(countryTitle);

    if (!links || links.length === 0) {
        const noLinksMessage = document.createElement('p');
        noLinksMessage.className = 'text-center text-gray-500 w-full';
        noLinksMessage.innerText = `No cyber links found for ${countryName}.`;
        countryContent.appendChild(noLinksMessage);

        // Show the country content section and animate
        countryContent.style.display = 'flex'; // Use flex for column layout
        gsap.fromTo(countryContent, {
            opacity: 0,
            y: 20
        }, {
            opacity: 1,
            y: 0,
            duration: 0.5
        });
        return;
    }

    const cardsContainer = document.createElement('div');
    cardsContainer.className = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full'; // Grid for cards

    links.forEach(link => {
        const card = document.createElement('div');
        card.className = 'portal-card'; // Use the custom class

        card.innerHTML = `
            <h3 class="text-xl font-semibold">${link.name}</h3>
            <p class="text-gray-400 flex-grow">${link.description || 'No description available.'}</p>
            <a href="${link.url}" class="visit-portal-btn" target="_blank">Visit Portal</a>
        `;
        cardsContainer.appendChild(card);
    });

    countryContent.appendChild(cardsContainer);

    // Show the country content section and animate
    countryContent.style.display = 'flex'; // Use flex for column layout
    gsap.fromTo(countryContent, {
        opacity: 0,
        y: 20
    }, {
        opacity: 1,
        y: 0,
        duration: 0.5
    });
}

// Function to reset to initial state
function resetToInitialState() {
    gsap.to(countryContent, {
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
            countryContent.innerHTML = '';
            countryContent.style.display = 'none'; // Hide country content
            initialHeroContent.style.display = 'flex'; // Show initial hero content
            gsap.to(initialHeroContent, {
                opacity: 1,
                duration: 0.5
            }); // Fade in initial content
        }
    });
}


// Initial population of the mobile list
populateCountryList(countryListMobile);

// Toggle mobile country menu visibility
hamburgerBtn.addEventListener('click', () => {
    countryMenu.classList.toggle('open');
});

// Filter mobile country list on search input
countrySearchSm.addEventListener('input', (e) => {
    populateCountryList(countryListMobile, e.target.value);
});

// Handle click on a country in the mobile menu
countryListMobile.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
        const countryName = e.target.getAttribute('data-country');
        if (countryName) {
            displayCountryLinks(countryName); // Call function to display country content
            countryMenu.classList.remove('open'); // Close menu after selection
            // Clear search inputs
            countrySearchSm.value = '';
            countrySearchLg.value = '';
            populateCountryList(countryListMobile); // Reset mobile list
            countrySearchDropdownLg.style.display = 'none'; // Hide large screen dropdown

            // Scroll to the top of the page
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    }
});

// Handle large screen search input
countrySearchLg.addEventListener('input', (e) => {
    const searchTerm = e.target.value.trim();
    if (searchTerm === '') {
        countrySearchDropdownLg.style.display = 'none'; // Hide dropdown if search is empty
        resetToInitialState(); // Reset main content
        return;
    }
    // Corrected the target element for populateCountryList
    populateCountryList(countrySearchDropdownLg.querySelector('ul'), searchTerm); // Populate dropdown
    countrySearchDropdownLg.style.display = 'block'; // Show dropdown
});

// Handle click on a country in the large screen dropdown
countrySearchDropdownLg.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
        const countryName = e.target.getAttribute('data-country');
        if (countryName) {
            displayCountryLinks(countryName); // Call function to display country content
            countrySearchLg.value = countryName; // Set search bar text to selected country
            countrySearchDropdownLg.style.display = 'none'; // Hide dropdown
            // Clear mobile search input and reset list
            countrySearchSm.value = '';
            populateCountryList(countryListMobile);

            // Scroll to the top of the page
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    }
});

// Hide large screen dropdown when clicking outside
document.addEventListener('click', (e) => {
    if (!countrySearchDropdownLg.contains(e.target) && !countrySearchLg.contains(e.target) && countrySearchDropdownLg.style.display === 'block') {
        countrySearchDropdownLg.style.display = 'none';
    }
});
// Prevent clicks inside the large screen dropdown from closing it immediately
countrySearchDropdownLg.addEventListener('click', (e) => {
    e.stopPropagation();
});


// Close mobile menu when clicking outside (optional)
document.addEventListener('click', (e) => {
    if (!countryMenu.contains(e.target) && !hamburgerBtn.contains(e.target) && countryMenu.classList.contains('open')) {
        countryMenu.classList.remove('open');
    }
});
// Prevent clicks inside the mobile menu from closing it immediately
countryMenu.addEventListener('click', (e) => {
    e.stopPropagation();
});

// Add event listener to the logo link
homeLogoLink.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default link behavior
    // Check if initial content is currently hidden
    if (initialHeroContent.style.display === 'none') {
        resetToInitialState(); // Go back to initial state
        // Clear search inputs and hide dropdowns
        countrySearchSm.value = '';
        countrySearchLg.value = '';
        countryMenu.classList.remove('open');
        countrySearchDropdownLg.style.display = 'none';
        populateCountryList(countryListMobile); // Reset mobile list
        // Scroll to the top of the page
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    } else {
        window.location.reload(); // Refresh the page if already on home
    }
});


// Ensure initial state is correct on load
initialHeroContent.style.display = 'flex';
countryContent.style.display = 'none';
