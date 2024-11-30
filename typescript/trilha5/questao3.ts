//testei no typescript playground e funcionou porem o mesmo erro aconteceu que não me deixa transformar em javascript pra testar no vs code

abstract class FavoriteManager {
    protected favorites: Set<string>;

    constructor() {
        this.favorites = new Set();
    }
   abstract addFavorite(item: string): void
   abstract getFavorites(): string[]
}

class MoviesFavoriteManager extends FavoriteManager {
    addFavorite(item: string): void {
        this.favorites.add(item)
    }
    getFavorites(): string[] {
        return Array.from(this.favorites).sort();
    }
}


class BooksFavoriteManager extends FavoriteManager {
    addFavorite(item: string): void {
        this.favorites = new Set([item, ...this.favorites]);
    }
    getFavorites(): string[] {
        return Array.from(this.favorites); 
    }
}
const movieManager = new MoviesFavoriteManager();
movieManager.addFavorite("adf")
movieManager.addFavorite("dfa")
movieManager.getFavorites();
console.log(movieManager.getFavorites())

const bookManager = new BooksFavoriteManager
bookManager.addFavorite("gfa")
bookManager.addFavorite("fga")
bookManager.getFavorites()
console.log(bookManager.getFavorites())
