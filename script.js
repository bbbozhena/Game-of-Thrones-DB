class GotService {

    constructor() {
        this._apiBase = "https://www.anapioficeandfire.com/api"
    }

    async gerResource (url) {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error (`Could not fetch ${url}, status: ${res.status}`)
        }

        return await res.json()
    };
    getAllCharacters() {
        return this.gerResource("/characters?page=5&pageSize=10")
    }
    getAllCharacter(id) {
        return this.gerResource(`/characters/${id}`)
    }
}

const got = new GotService ();

got.getAllCharacters()
    .then(res => {
        res.forEach(item => console.log(item.name))
    });

    got.getAllCharacter(130)
    .then(res => console.log(res));
