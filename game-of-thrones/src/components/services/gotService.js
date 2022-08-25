export default class gotService {
  constructor() {
    this._apiBase = "https://www.anapioficeandfire.com/api";
  }

  getResource = async(url) => {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }

    return await res.json();
  }
   getAllCharacters = async () => {
    const res = await this.getResource("/characters?page=5&pageSize=10");
    return res.map(this._transformCharacter)
  }
  getCharacter = async(id)=> {
    const character = await this.getResource(`/characters/${id}`);
    return this._transformCharacter(character)
  }
  getAllHouses = async() => {
    return this.getResource(`/houses/`);
  }
  getAllBooks = async() => {
    return this.getResource(`/books/`);
  }
  getBook = async(id) => {
    const book = await this.getResource(`/books/${id}`);
    return this._transformBook(book)
  }

  _transformCharacter(char) {
    return {
      name: char.name,
      gender: char.gender,
      born: char.born,
      died: char.died,
      culture: char.culture,
    };
  }

  _transformHouse(house) {
      return {
          name:house.name,
          region:house.region,
          words:house.words,
          titles:house.titles,
          overload:house.overload,
          ancestralWeapons:house.ancestralWeapons
      }
  }

  _transformBook(book) {
      return {
          name:book.name,
          numberOfPage:book.numberOfPage,
          publisher:book.publisher,
          released:book.released
      }
  }
}
