const products = [
  
    { name:'Coaching Schemes For Sc St Obc Non Creamy Layer And Minority Students For Universities',category:'social' },
    { name:'Post Matric Scholarship For Minorities',category:'post'},
    { name:'Chief Ministers Overseas Scholarship Scheme For Minorities',category:'social' },
    { name:'Pm Yasasvi Top Class School Education For Obc Ebc And Dnt Students',category:'social' },
    { name:'Namo E Tablet Scheme', category: 'stationery' },
    { name:'Sukanya Samriddhi Yojana', category: 'female' },
    { name:'National Post Doctoral Fellowship', category: 'higher' },
    { name:'Pension Yojana', category: 'income' },
    { name:'Pradhan Mantri Jan Dhan Yojana', category: 'income'},
    { name:'Pradhan Mantri Awas Yajana', category: 'home' },
    { name:'Homes For Intellectually Impaired Persons', category: 'PWD' },
    { name:'Stipend For Girls Of Secondary Students Schemes', category: 'female' },
    { name:'State Technical Scholarship For St Studen', category: 'social' },
    { name:'Scheme For Higher Education For Orphans', category: 'PWD' },
    { name:'Education Loan Scheme', category: 'income' },
    { name:'Special Education And Vocational Training', category: 'higher' },



   
  ];
      const productList = document.getElementById('product-list');
      const filterSelect = document.getElementById('filter');
  
      displayProducts(products); //displays product
  
      
      filterSelect.addEventListener('change', () => {
        const selectedCategory = filterSelect.value;
        const filteredProducts = filterProducts(products, selectedCategory);
        displayProducts(filteredProducts);
      });
  
      function filterProducts(products, category) {
        if (category === 'all') {
          return products;
        } else {
          return products.filter(product => product.category === category);
        }
      }
  
      function displayProducts(products) {
        productList.innerHTML = ''; 
  
        products.forEach(product => {
          const productElement = document.createElement('div');
          productElement.textContent = `${product.name} - ${product.category} `;
          productList.appendChild(productElement);
        });
      }


