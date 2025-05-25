  const flowers = [
    {
        name: "Achillea millefolium",
        scientific_name: "Achillea millefolium",
        image: "images/achillea_millefolium.jpg",
        meaning: "N/A",
        color_variations: "White, Yellow, Pink",
        price_range: "₱50 - ₱200",
        seasonality: "Summer, Fall",
        uses: "Ornamental"
    },
    {
        name: "Hollyhock",
        scientific_name: "Alcea",
        image: "images/hollyhock.jpg",
        meaning: "Ambition, Fertility",
        color_variations: "Pink, Red, Yellow, White",
        price_range: "₱100 - ₱350",
        seasonality: "Summer",
        uses: "Ornamental"
    },
    {
        name: "Antirrhinum",
        scientific_name: "Antirrhinum",
        image: "images/antirrhinum.jpg",
        meaning: "N/A",
        color_variations: "Pink, Yellow, Red",
        price_range: "₱100 - ₱400",
        seasonality: "Spring, Summer",
        uses: "Ornamental"
    },
    {
        name: "Begonia",
        scientific_name: "Begonia",
        image: "images/begonia.jpg",
        meaning: "N/A",
        color_variations: "Red, Pink, Yellow",
        price_range: "₱80 - ₱300",
        seasonality: "Year-round",
        uses: "Ornamental"
    },
    {
        name: "Bellis perennis",
        scientific_name: "Bellis perennis",
        image: "images/bellis_perennis.jpg",
        meaning: "N/A",
        color_variations: "White, Yellow, Pink",
        price_range: "₱50 - ₱200",
        seasonality: "Spring, Summer",
        uses: "Ornamental"
    },
    {
        name: "Campanula",
        scientific_name: "Campanula",
        image: "images/campanula.jpg",
        meaning: "N/A",
        color_variations: "Blue, Purple, White",
        price_range: "₱100 - ₱350",
        seasonality: "Summer",
        uses: "Ornamental"
    },
    {
        name: "Camellia",
        scientific_name: "Camellia",
        image: "images/camellia.jpg",
        meaning: "N/A",
        color_variations: "Pink, Red, White",
        price_range: "₱200 - ₱600",
        seasonality: "Winter",
        uses: "Ornamental"
    },
    {
        name: "Capsicum",
        scientific_name: "Capsicum",
        image: "images/capsicum.jpg",
        meaning: "N/A",
        color_variations: "White",
        price_range: "₱50 - ₱200",
        seasonality: "Summer",
        uses: "Ornamental, Edible"
    },
    {
        name: "Celosia argentea",
        scientific_name: "Celosia argentea",
        image: "images/celosia_argentea.jpg",
        meaning: "N/A",
        color_variations: "Red, Yellow, Orange",
        price_range: "₱50 - ₱250",
        seasonality: "Summer, Fall",
        uses: "Ornamental"
    },
    {
        name: "Chrysanthemum",
        scientific_name: "Chrysanthemum",
        image: "images/chrysanthemum.jpg",
        meaning: "N/A",
        color_variations: "Red, Yellow, White",
        price_range: "₱80 - ₱300",
        seasonality: "Fall",
        uses: "Ornamental"
    },
    {
        name: "Clivia miniata",
        scientific_name: "Clivia miniata",
        image: "images/clivia_miniata.jpg",
        meaning: "N/A",
        color_variations: "Orange, Yellow",
        price_range: "₱150 - ₱500",
        seasonality: "Winter, Spring",
        uses: "Ornamental"
    },
    {
        name: "Cosmos bipinnatus",
        scientific_name: "Cosmos bipinnatus",
        image: "images/cosmos_bipinnatus.jpg",
        meaning: "N/A",
        color_variations: "Pink, White, Red",
        price_range: "₱50 - ₱250",
        seasonality: "Summer, Fall",
        uses: "Ornamental"
    },
    {
        name: "Digitalis",
        scientific_name: "Digitalis",
        image: "images/digitalis.jpg",
        meaning: "N/A",
        color_variations: "Purple, Pink, White",
        price_range: "₱100 - ₱400",
        seasonality: "Summer",
        uses: "Ornamental"
    },
    {
        name: "Freesia",
        scientific_name: "Freesia",
        image: "images/freesia.jpg",
        meaning: "N/A",
        color_variations: "Yellow, White, Pink, Purple",
        price_range: "₱150 - ₱500",
        seasonality: "Spring, Summer",
        uses: "Ornamental"
    },
    {
        name: "Gardenia jasminoides",
        scientific_name: "Gardenia jasminoides",
        image: "images/gardenia_jasminoides.jpg",
        meaning: "N/A",
        color_variations: "White",
        price_range: "₱150 - ₱500",
        seasonality: "Summer",
        uses: "Ornamental"
    },
    {
        name: "Geranium pratense",
        scientific_name: "Geranium pratense",
        image: "images/geranium_pratense.jpg",
        meaning: "N/A",
        color_variations: "Blue, Violet, Pink, White",
        price_range: "₱100 - ₱400",
        seasonality: "Spring, Summer",
        uses: "Ornamental"
    },
    {
        name: "Gladiolus",
        scientific_name: "Gladiolus",
        image: "images/gladiolus.jpg",
        meaning: "Strength, Moral Integrity",
        color_variations: "Red, Pink, Yellow, White",
        price_range: "₱100 - ₱400",
        seasonality: "Summer",
        uses: "Ornamental"
    },
    {
        name: "Helianthus annuus",
        scientific_name: "Helianthus annuus",
        image: "images/helianthus_annuus.jpg",
        meaning: "N/A",
        color_variations: "Yellow, Orange",
        price_range: "₱50 - ₱200",
        seasonality: "Summer",
        uses: "Ornamental"
    },
    {
        name: "Helleborus",
        scientific_name: "Helleborus",
        image: "images/helleborus.jpg",
        meaning: "N/A",
        color_variations: "White, Green, Purple",
        price_range: "₱150 - ₱500",
        seasonality: "Winter, Spring",
        uses: "Ornamental"
    },
    {
        name: "Hippeastrum",
        scientific_name: "Hippeastrum",
        image: "images/hippeastrum.jpg",
        meaning: "N/A",
        color_variations: "Red, Pink, White",
        price_range: "₱150 - ₱500",
        seasonality: "Winter, Spring",
        uses: "Ornamental"
    },
    {
        name: "Hibiscus",
        scientific_name: "Hibiscus",
        image: "images/hibiscus.jpg",
        meaning: "N/A",
        color_variations: "Red, Yellow, Pink",
        price_range: "₱80 - ₱300",
        seasonality: "Summer",
        uses: "Ornamental"
    },
    {
        name: "Hydrangea macrophylla",
        scientific_name: "Hydrangea macrophylla",
        image: "images/hydrangea_macrophylla.jpg",
        meaning: "N/A",
        color_variations: "Blue, Pink, Purple, White",
        price_range: "₱300 - ₱800",
        seasonality: "Summer",
        uses: "Ornamental"
    },
    {
        name: "Hyacinthoides",
        scientific_name: "Hyacinthoides",
        image: "images/hyacinthoides.jpg",
        meaning: "N/A",
        color_variations: "Blue",
        price_range: "₱100 - ₱400",
        seasonality: "Spring",
        uses: "Ornamental"
    },
    {
        name: "Iris",
        scientific_name: "Iris",
        image: "images/iris.jpg",
        meaning: "N/A",
        color_variations: "Purple, Blue, White",
        price_range: "₱120 - ₱500",
        seasonality: "Spring",
        uses: "Ornamental"
    },
    {
        name: "Jasminum",
        scientific_name: "Jasminum",
        image: "images/jasminum.jpg",
        meaning: "N/A",
        color_variations: "White, Yellow",
        price_range: "₱100 - ₱400",
        seasonality: "Spring, Summer",
        uses: "Ornamental"
    },
    {
        name: "Lathyrus odoratus",
        scientific_name: "Lathyrus odoratus",
        image: "images/lathyrus_odoratus.jpg",
        meaning: "N/A",
        color_variations: "Purple, Pink, White",
        price_range: "₱50 - ₱200",
        seasonality: "Spring",
        uses: "Ornamental"
    },
    {
        name: "Lavandula",
        scientific_name: "Lavandula",
        image: "images/lavandula.jpg",
        meaning: "N/A",
        color_variations: "Purple, Blue",
        price_range: "₱150 - ₱500",
        seasonality: "Summer",
        uses: "Ornamental"
    },
    {
        name: "Lilium",
        scientific_name: "Lilium",
        image: "images/lilium.jpg",
        meaning: "Purity and refined beauty",
        color_variations: "White, Pink, Orange, Yellow",
        price_range: "₱150 - ₱600",
        seasonality: "Summer",
        uses: "Ornamental"
    },
    {
        name: "Lobelia erinus",
        scientific_name: "Lobelia erinus",
        image: "images/lobelia_erinus.jpg",
        meaning: "N/A",
        color_variations: "Blue, Purple, White",
        price_range: "₱50 - ₱200",
        seasonality: "Summer",
        uses: "Ornamental"
    },
    {
        name: "Magnolia",
        scientific_name: "Magnolia",
        image: "images/magnolia.jpg",
        meaning: "N/A",
        color_variations: "White, Pink, Purple",
        price_range: "₱200 - ₱600",
        seasonality: "Spring, Summer",
        uses: "Ornamental"
    },
    {
        name: "Marigold",
        scientific_name: "Tagetes",
        image: "images/marigold.jpg",
        meaning: "N/A",
        color_variations: "Yellow, Orange, Red",
        price_range: "₱50 - ₱200",
        seasonality: "Summer, Fall",
        uses: "Ornamental"
    },
    {
        name: "Mimulus",
        scientific_name: "Mimulus",
        image: "images/mimulus.jpg",
        meaning: "N/A",
        color_variations: "Red, Yellow, Orange",
        price_range: "₱80 - ₱300",
        seasonality: "Spring, Summer",
        uses: "Ornamental"
    },
    {
        name: "Narcissus",
        scientific_name: "Narcissus",
        image: "images/narcissus.jpg",
        meaning: "Self-love, rebirth",
        color_variations: "White, Yellow",
        price_range: "₱150 - ₱500",
        seasonality: "Spring",
        uses: "Ornamental"
    },
    {
        name: "Pelargonium",
        scientific_name: "Pelargonium",
        image: "images/pelargonium.jpg",
        meaning: "N/A",
        color_variations: "Red, Pink, White",
        price_range: "₱80 - ₱300",
        seasonality: "Summer",
        uses: "Ornamental"
    },
    {
        name: "Petunia",
        scientific_name: "Petunia",
        image: "images/petunia.jpg",
        meaning: "N/A",
        color_variations: "Pink, Purple, White, Red",
        price_range: "₱50 - ₱200",
        seasonality: "Summer",
        uses: "Ornamental"
    },
    {
        name: "Phlox",
        scientific_name: "Phlox",
        image: "images/phlox.jpg",
        meaning: "N/A",
        color_variations: "Pink, Purple, White, Red",
        price_range: "₱80 - ₱300",
        seasonality: "Spring, Summer",
        uses: "Ornamental"
    },
    {
        name: "Plumeria",
        scientific_name: "Plumeria",
        image: "images/plumeria.jpg",
        meaning: "N/A",
        color_variations: "White, Yellow, Pink",
        price_range: "₱100 - ₱400",
        seasonality: "Spring, Summer",
        uses: "Ornamental"
    },
    {
        name: "Primula",
        scientific_name: "Primula",
        image: "images/primula.jpg",
        meaning: "N/A",
        color_variations: "Yellow, Pink, Purple",
        price_range: "₱100 - ₱300",
        seasonality: "Spring",
        uses: "Ornamental"
    },
    {
        name: "Rhododendron",
        scientific_name: "Rhododendron",
        image: "images/rhododendron.jpg",
        meaning: "N/A",
        color_variations: "Pink, White, Red",
        price_range: "₱100 - ₱400",
        seasonality: "Spring",
        uses: "Ornamental"
    },
    {
        name: "Rose",
        scientific_name: "Rosa",
        image: "images/rose.jpg",
        meaning: "Love and passion",
        color_variations: "Red, Pink, White, Yellow",
        price_range: "₱150 - ₱600",
        seasonality: "Year-round",
        uses: "Ornamental"
    },
    {
        name: "Salvia splendens",
        scientific_name: "Salvia splendens",
        image: "images/salvia_splendens.jpg",
        meaning: "N/A",
        color_variations: "Red, Purple, Pink",
        price_range: "₱50 - ₱200",
        seasonality: "Summer",
        uses: "Ornamental"
    },
    {
        name: "Solidago",
        scientific_name: "Solidago",
        image: "images/solidago.jpg",
        meaning: "N/A",
        color_variations: "Yellow",
        price_range: "₱50 - ₱150",
        seasonality: "Fall",
        uses: "Ornamental"
    },
    {
        name: "Sunflower",
        scientific_name: "Helianthus",
        image: "images/sunflower.jpg",
        meaning: "Adoration, loyalty, longevity",
        color_variations: "Yellow",
        price_range: "₱50 - ₱200",
        seasonality: "Summer",
        uses: "Ornamental, Edible seeds"
    },
    {
        name: "Tropaeolum",
        scientific_name: "Tropaeolum",
        image: "images/tropaeolum.jpg",
        meaning: "N/A",
        color_variations: "Red, Yellow, Orange",
        price_range: "₱50 - ₱250",
        seasonality: "Spring, Summer",
        uses: "Ornamental"
    },
    {
        name: "Tulipa",
        scientific_name: "Tulipa",
        image: "images/tulipa.jpg",
        meaning: "Perfect love",
        color_variations: "Red, Yellow, Pink, White",
        price_range: "₱150 - ₱500",
        seasonality: "Spring",
        uses: "Ornamental"
    },
    {
        name: "Viola",
        scientific_name: "Viola",
        image: "images/viola.jpg",
        meaning: "N/A",
        color_variations: "Purple, White, Yellow",
        price_range: "₱50 - ₱200",
        seasonality: "Spring",
        uses: "Ornamental"
    },
    {
        name: "Zinnia",
        scientific_name: "Zinnia",
        image: "images/zinnia.jpg",
        meaning: "N/A",
        color_variations: "Red, Pink, Orange, Yellow",
        price_range: "₱50 - ₱200",
        seasonality: "Summer, Fall",
        uses: "Ornamental"
    }
    ];
    document.addEventListener("DOMContentLoaded", () => {
      const resultsBody = document.getElementById("results-body");
      const noResults = document.getElementById("no-results");
      const searchInput = document.getElementById("search-input");

      function renderFlowers(query = "") {
        resultsBody.innerHTML = "";
        const filtered = flowers.filter(f =>
          f.name.toLowerCase().includes(query.toLowerCase()) ||
          f.scientific_name.toLowerCase().includes(query.toLowerCase())
        );

        if (filtered.length === 0) {
          noResults.style.display = "block";
          return;
        }

        noResults.style.display = "none";
        filtered.forEach(flower => {
          const row = document.createElement("tr");
          row.innerHTML = `
            <td><strong>${flower.name}</strong></td>
            <td>${flower.scientific_name}</td>
            <td>
              ${
                flower.image
                  ? `<img src="${flower.image}" alt="${flower.scientific_name}">`
                  : `<div class="no-image">No image available</div>`
              }
            </td>
            <td>${flower.meaning}</td>
            <td>${flower.color_variations}</td>
            <td>${flower.price_range}</td>
            <td>${flower.seasonality}</td>
            <td>${flower.uses}</td>
          `;
          resultsBody.appendChild(row);
        });
      }

      document.getElementById("search-form").addEventListener("submit", e => {
        e.preventDefault();
        const query = searchInput.value.trim();
        renderFlowers(query);
      });
    });