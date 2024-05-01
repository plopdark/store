import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  public products: Product[] = [
    new Product(
      1,
      '../../assets/images/wit-1.jpg',
      'The Witcher. The Last wish. Book 1.',
      "One of the last witches, Geralt of Rivia, travels from Yaruga to the Dragon Mountains. He meets people and creatures who are very reminiscent of characters from famous fairy tales, and tries to understand whether there is anything left of the human in him. Or maybe he is just an addition to his two swords: an ordinary iron sword and a witch's sword with a chiseled handle and a silver blade, which will one day become his sword of destiny...",
      6.99,
      0
    ),
    new Product(
      2,
      '../../assets/images/wit-2.jpg',
      'The Witcher. Sword of Destiny. Book 2.',
      "Now Geralt knows what love is, he knows that he is capable of human feelings and of the greatest self-sacrifice... A little green-eyed Ciri appears in his life. A terrible enemy from the southern mountains attacks the kingdoms that have been fighting for centuries just to move the boundary markers. And the witch doesn't care whose blood is being shed - humans, dryads, or elves...",
      5.0,
      0
    ),
    new Product(
      3,
      '../../assets/images/wit-3.jpg',
      'The Witch. Blood of the elves. Book 3.',
      "Little Ciri, a surprise baby, is a bigger surprise than she first thought. Horrific dreams of Cintra's death destroy her soul, and the emerging magical gift can destroy her body. Only the powerful sorceress Yennefer can deal with it. So Geralt can't hide Ciri in the Witch's Dwelling for long. A dangerous journey lies ahead, because for many people, the little princess Cintra is the last argument: for the Council of Wizards, for the four kings, for the sinister envoys of Nilfgard... And only Geralt protects the gray-haired girl for her own sake",
      6.99,
      0
    ),
    new Product(
      4,
      '../../assets/images/wit-4.jpg',
      'The Witcher. The time to contempt. Book 4.',
      'According to an ancient elven prophecy, Ciri, the Child of the Elder Blood, was to change the fate of the world. But as the green-eyed heiress to the throne of Cintra travels under the protection of her foster parents to the magical island of Thanedd, the world has changed beyond recognition. Everywhere, in all hearts, there is war, hatred, and contempt. For the witch Geralt, it is time to choose which side he is on in order to save Ciri.',
      5.33,
      0
    ),
    new Product(
      5,
      '../../assets/images/wit-5.jpg',
      'The Witch. Baptism of fire. Book 5.',
      "As the wizarding world recovers from the disaster on Thanedd and the kingdoms of men and elves prepare to start a new war, the witch Geralt, barely recovering from his wounds in Brokilon, sets out to save Ciri. However, where can he find her if the Gull Tower is destroyed to the ground and the witch's dreams about his adopted daughter are not what they say they are? Traveling in the company of the poet Lyubystok, the half-dryad Milva, the Nilfgardian Kagir, and the five-hundred-year-old vampire Regis, Geralt realizes that he can no longer tolerate the rivers of blood that are spilling around him. Humans and elves are now more ferocious than the creatures he was trained to fight. It is no longer enough for the witch to be baptized by fire and save only Ciri...",
      8.66,
      0
    ),
    new Product(
      6,
      '../../assets/images/wit-6.jpg',
      'The Witcher. The Tower of the Swallows. Book 6.',
      'A miracle saved Ciri from death when a gang of Rats, who had become her loyal friends, died before her eyes. Her destiny took her to the swampy wilds of the hermit and outcast Vysogota, where the wisdom of the Old Crow helped Ciri the Swallow to take wing again. Now she is on her way, and has regained her magical power. She will no longer lose anyone and will find the mystical Tower of the Swallow, the way to salvation from a world doomed to perish in wars, betrayal, and dishonor. It is so fated... However, the witch does not believe in prophecy. Having lost the magic amulet, he became just Geralt of Rivia. He rushes to save Ciri, his adopted daughter, who is hunted by the emperor, kings, and wizards, clutching at the last moments like fragile ice for a chance to escape at the cost of the Elder Blood...',
      6.55,
      0
    ),
    new Product(
      7,
      '../../assets/images/wit-7.jpg',
      'The Witch. The Lady of the Lake. Book 7.',
      "The green-eyed Ciri continues her search for Geralt and Jenefer, jumping between worlds in search of the right time and place. All the worlds are different - problem-free, where she can take a break, and problematic, where she is chased by elves and attempted by natives. In Ciri's home world, far in the future, there are those who want to help her fulfill her destiny. Nimue, the Lady of the Lake, enlists the power of the dreamers to clarify the contradictions in the legend of the witch and the witcher and to guide the Destiny in the right direction.Meanwhile, the war between Nilfgard and the Nordlings is raging. And there is no telling what awaits the witch, his friends and acquaintances at the end of the journey...",
      7.43,
      0
    ),
    new Product(
      8,
      '../../assets/images/wit-8.jpg',
      'The Witcher. Season of storms. Book 8.',
      "The witch, Geralt of Rivia, continues his struggle. In the kingdom of Kerak, new challenges await him. Now he is a monster hunter hired to kill. After destroying yet another dangerous monster, three black-clad mosspans arrest Geralt. Now he is in trouble as well: he has been deprived of his two witch's swords. He is forced to make every effort to get the weapons back... The red-haired sorceress Litta Nade, known as Coral, seduces Geralt, and they begin a stormy affair. But his beloved Yennefer, with whom he has gone through so much, does not let him forget about her... The intrigues of kings and wizards continue: thunder roars, storms rage, and the story goes on",
      8.56,
      0
    ),
  ];
  constructor() {}

  public getProducts(): Product[] {
    return this.products;
  }
}
