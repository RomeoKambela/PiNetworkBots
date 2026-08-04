
        // Get the search query from sessionStorage
        const query = sessionStorage.getItem('searchQuery');
        const resultsDiv = document.getElementById('results');
        const searchInput = document.getElementById('searchInput');

        // Set the input value
        searchInput.value = query || '';

        // Mock search results (will be replaced with actual data/API)
        const mockData = [
            { title: 'About Pi Network', description: 'Learn more about our organization', url: 'about.html' },
            { title: 'Services', description: 'Explore our services', url: 'services.html' },
            { title: 'Contact Us', description: 'Get in touch with us', url: 'contacts.html' }
        ];

        function displayResults(searchTerm) {
            const filtered = mockData.filter(item => 
                item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.description.toLowerCase().includes(searchTerm.toLowerCase())
            );

            if (filtered.length === 0) {
                resultsDiv.innerHTML = '<p>No results found for "' + searchTerm + '"</p>';
                return;
            }

            resultsDiv.innerHTML = filtered.map(item => `
                <div class="search-result-item">
                    <h3><a href="${item.url}">${item.title}</a></h3>
                    <p>${item.description}</p>
                </div>
            `).join('');
        }

        // Display results on page load
        if (query) {
            displayResults(query);
        }

        // Handle real-time search
        searchInput.addEventListener('input', function(e) {
            displayResults(e.target.value);
        });