import * as icons from 'simple-icons';
import { db } from '$lib/db';

export const fetchPGFunc = async (table: String) => {
  let returnedLinks = []
  let returnedSocials = []

  if (table == 'links') {
    
    for await (const linkTable of db.selectFrom('links')
    .selectAll()
    .stream()
    ) {
      console.log(`Link found: ${linkTable.id}: ${linkTable.name}: ${linkTable.link}`)
      let id = linkTable.id
      let name = linkTable.name
      let link = linkTable.link
      returnedLinks.push({ id: id, link: link, name: name })
    }
    returnedLinks.sort((a, b) => (a.id > b.id) ? 1 : -1)
    return returnedLinks

  } else if (table == 'socials') {

    for await (const socialTable of db.selectFrom('socials')
    .selectAll()
    .stream()
    ) {
      console.log(`Social found: ${socialTable.id}: ${socialTable.name}: ${socialTable.link}`)
      let id = socialTable.id
      let name = socialTable.name
      let link = socialTable.link
      let nameAdjusted = name?.toLowerCase()
      nameAdjusted = nameAdjusted.charAt(0).toUpperCase() + nameAdjusted.slice(1);
      let path = icons[`si${nameAdjusted}`].path

      returnedSocials.push({ id: id, link: link, name: name, path: path })
    }
    returnedSocials.sort((a, b) => (a.id > b.id) ? 1 : -1)
    return returnedSocials

  }

}