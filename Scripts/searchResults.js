const search = document.querySelector('.search-field');

search.addEventListener('keypress', function(e) {
    // Check if Enter key was pressed
    if (e.key === 'Enter') {
        const query = e.target.value.trim();
        
        if (query.length > 0) {
            // Store search query in sessionStorage
            sessionStorage.setItem('searchQuery', query);
            
            // Redirect to search results page
            if (window.location.pathname !== '/pages/search.html') {
                window.location.href = 'pages/search.html';
            }else {
                // If already on the search page, just display results
                displayResults(query);
            }
        }
    }
});