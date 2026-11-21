/* ==========================================================
   data.js — categories & products (yahan se cards auto banenge)
   Photos abhi Unsplash demo photos hain; apni photos daalne ke liye
   img ko "assets/images/products/xyz.jpg" jaisa path de do.
   ========================================================== */
const U = (id, w = 700) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

window.CATEGORIES = [
  { name: "Cricket",      emoji: "🏏", sub: "Bat • Ball • Kit",      img: U("1531415074968-036ba1b575da") },
  { name: "Football",     emoji: "⚽", sub: "Ball • Shoes • Gear",   img: U("1579952363873-27f3bade9f55") },
  { name: "Badminton",    emoji: "🏸", sub: "Racket • Shuttle • Net", img: U("1626224583764-f87db24ac4ea") },
  { name: "Indoor Games", emoji: "♟️", sub: "Chess • Carrom • More", img: U("1586165368502-1bad197a6461") },
  { name: "Basketball",   emoji: "🏀", sub: "Ball • Accessories",    img: U("1546519638-68e109498ffc") },
  { name: "Volleyball",   emoji: "🏐", sub: "Ball • Net • Kit",      img: U("1612872087720-bb876e2e67d1") },
  { name: "Table Tennis", emoji: "🏓", sub: "Bat • Ball • Net",      img: U("1611251135345-18c56206b863") },
  { name: "Fitness",      emoji: "💪", sub: "Fitness • Training",    img: U("1517836357463-d25dfeac3438") }
];

window.PRODUCTS = [
  { name: "Cricket Bat",         cat: "Cricket",      badge: "Popular",         emoji: "🏏", desc: "Explore different sizes and options for practice and matches.", img: U("1531415074968-036ba1b575da", 600) },
  { name: "Football",            cat: "Football",     badge: "Outdoor",         emoji: "⚽", desc: "Options for casual play, training and team practice.",          img: U("1579952363873-27f3bade9f55", 600) },
  { name: "Badminton Racket",    cat: "Badminton",    badge: "Indoor / Outdoor",emoji: "🏸", desc: "Rackets and accessories for beginners and regular players.",     img: U("1626224583764-f87db24ac4ea", 600) },
  { name: "Chess Board",         cat: "Indoor Games", badge: "Indoor",          emoji: "♟️", desc: "A classic strategy game for home, school and clubs.",            img: U("1586165368502-1bad197a6461", 600) },
  { name: "Cricket Ball",        cat: "Cricket",      badge: "Cricket",         emoji: "🔴", desc: "Ask about available types and sizes for your game.",             img: U("1593766827228-8737b6cd1472", 600) },
  { name: "Fitness Accessories", cat: "Fitness",      badge: "Fitness",         emoji: "💪", desc: "Training and fitness essentials. Ask for current stock.",        img: U("1517836357463-d25dfeac3438", 600) },
  { name: "Sports Accessories",  cat: "Football",     badge: "Sports",          emoji: "🎽", desc: "Explore useful accessories for your favourite sport.",           img: U("1521412644187-c49fa049e84d", 600) },
  { name: "Board Games",         cat: "Indoor Games", badge: "Indoor",          emoji: "🎲", desc: "Fun game options for families, students and friends.",           img: U("1606167668584-78701c57f13d", 600) },
  { name: "Basketball",          cat: "Basketball",   badge: "Outdoor",         emoji: "🏀", desc: "Balls and accessories for courts, schools and clubs.",           img: U("1546519638-68e109498ffc", 600) },
  { name: "Volleyball",          cat: "Volleyball",   badge: "Team Game",       emoji: "🏐", desc: "Ball and net options for school and community games.",           img: U("1612872087720-bb876e2e67d1", 600) },
  { name: "Table Tennis Set",    cat: "Table Tennis", badge: "Indoor",          emoji: "🏓", desc: "Bats, balls and nets for home and club play.",                   img: U("1611251135345-18c56206b863", 600) }
];

window.GALLERY = [
  // cls: "big" = bada (2x2) · "wide" = chaudi · "tall" = lambi · "" = normal
  // pos (optional): photo ka kaunsa hissa dikhe, jaise "center top"
  // Tip: grid poora bhare isliye 2 "big" + 2 "wide" + 6 "tall" ka mix rakha hai.
  { img: "assets/images/gallery/shop-front.jpg",         alt: "Hamari dukaan — counter aur shelves",   emoji: "🏪", cls: "big" },
  { img: "assets/images/gallery/cricket-kit-bags.jpg",   alt: "Cricket kit bags aur football",         emoji: "🎒", cls: "wide" },
  { img: "assets/images/gallery/badminton-rackets.jpg",  alt: "Badminton rackets",                     emoji: "🏸", cls: "wide" },
  { img: "assets/images/gallery/shopkeeper-counter.jpg", alt: "Hindustan Khel Ghar counter",           emoji: "🏬", cls: "big", pos: "center 30%" },
  { img: "assets/images/gallery/trophies-counter.jpg",   alt: "Trophies aur cricket bats",             emoji: "🏆", cls: "tall" },
  { img: "assets/images/gallery/cricket-bats.jpg",       alt: "Cricket bats ka collection",            emoji: "🏏", cls: "tall" },
  { img: "assets/images/gallery/sports-shoes.jpg",       alt: "Sports shoes",                          emoji: "👟", cls: "tall" },
  { img: "assets/images/gallery/trophies.jpg",           alt: "Trophies aur awards",                   emoji: "🏆", cls: "tall" },
  { img: "assets/images/gallery/shop-interior.jpg",      alt: "Store ka andar ka nazara",              emoji: "🏪", cls: "tall" },
  { img: "assets/images/gallery/shop-ceiling.jpg",       alt: "Store interior aur shelves",            emoji: "✨", cls: "tall" }
];
