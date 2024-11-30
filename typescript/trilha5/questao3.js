var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var FavoriteManager = /** @class */ (function () {
    function FavoriteManager() {
        this.favorites = new Set();
    }
    return FavoriteManager;
}());
var MoviesFavoriteManager = /** @class */ (function (_super) {
    __extends(MoviesFavoriteManager, _super);
    function MoviesFavoriteManager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MoviesFavoriteManager.prototype.addFavorite = function (item) {
        this.favorites.add(item);
    };
    MoviesFavoriteManager.prototype.getFavorites = function () {
        return Array.from(this.favorites).sort();
    };
    return MoviesFavoriteManager;
}(FavoriteManager));
var BooksFavoriteManager = /** @class */ (function (_super) {
    __extends(BooksFavoriteManager, _super);
    function BooksFavoriteManager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BooksFavoriteManager.prototype.addFavorite = function (item) {
        this.favorites = new Set(__spreadArray([item], this.favorites, true));
    };
    BooksFavoriteManager.prototype.getFavorites = function () {
        return Array.from(this.favorites);
    };
    return BooksFavoriteManager;
}(FavoriteManager));
var movieManager = new MoviesFavoriteManager();
movieManager.addFavorite("adf");
movieManager.addFavorite("dfa");
movieManager.getFavorites();
console.log(movieManager.getFavorites());
var bookManager = new BooksFavoriteManager;
bookManager.addFavorite("gfa");
bookManager.addFavorite("fga");
bookManager.getFavorites();
console.log(bookManager.getFavorites());
