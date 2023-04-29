import * as icons from 'simple-icons';

export const filterKeys = (parsedKv: any, filter: string) => {
    const filteredKeys: string[] = [];

    Object.entries(parsedKv).forEach((entry) => {
        const [key, value] = entry;
        if (key.startsWith(filter)){
            let a: string = (`${key}`)
            filteredKeys.push(a)
        }
    });

    return filteredKeys;
}

export const parsePlain = (parsedKv: any, keys: any) => {
    const parsedValues: any[] = [];

    for (const key of keys) {
        let id: number = parsedKv[key].id;
        let name: string = parsedKv[key].name;
        let link: string = parsedKv[key].link;
    
        parsedValues.push({id: id, name: name, link: link});
    }

    parsedValues.sort((a, b) => (a.id > b.id) ? 1 : -1);

    return parsedValues;
}

export const parseIcon = (parsedKv: any, keys: any) => {
    const parsedValues: any[] = [];

    for (const key of keys) {
        let id: number = parsedKv[key].id;
        let name: string = parsedKv[key].name;
        let link: string = parsedKv[key].link;

        let nameAdjusted: string = name.toLowerCase();
        nameAdjusted = nameAdjusted.charAt(0).toUpperCase() + nameAdjusted.slice(1);
        let path: any = icons[`si${nameAdjusted}`].path;

        parsedValues.push({id: id, name: name, link: link, path: path});
    }

    parsedValues.sort((a, b) => (a.id > b.id) ? 1 : -1);

    return parsedValues;
}
