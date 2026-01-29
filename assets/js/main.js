// Search functionality
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');
    const searchResults = document.getElementById('search-results');
    
    let posts = [];
    
    // Load search data
    fetch('/search.json')
        .then(response => response.json())
        .then(data => {
            posts = data;
        })
        .catch(err => console.log('Search data not available'));
    
    function performSearch() {
        const query = searchInput.value.toLowerCase().trim();
        
        if (query.length < 2) {
            searchResults.innerHTML = '';
            return;
        }
        
        const results = posts.filter(post => {
            return post.title.toLowerCase().includes(query) ||
                   post.content.toLowerCase().includes(query) ||
                   (post.tags && post.tags.toLowerCase().includes(query));
        });
        
        if (results.length === 0) {
            searchResults.innerHTML = '<div class="search-result-item">No results found</div>';
        } else {
            searchResults.innerHTML = results.slice(0, 5).map(post => 
                `<a href="${post.url}" class="search-result-item">${post.title}</a>`
            ).join('');
        }
    }
    
    if (searchInput) {
        searchInput.addEventListener('input', performSearch);
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }
    
    if (searchBtn) {
        searchBtn.addEventListener('click', performSearch);
    }

    // Copy code button functionality
    document.querySelectorAll('pre code').forEach(function(codeBlock) {
        const wrapper = document.createElement('div');
        wrapper.className = 'code-block';
        
        const header = document.createElement('div');
        header.className = 'code-header';
        
        const lang = document.createElement('span');
        lang.className = 'code-lang';
        lang.textContent = codeBlock.className.replace('language-', '').replace('highlighter-rouge', '').trim() || 'code';
        
        const copyBtn = document.createElement('button');
        copyBtn.className = 'code-copy';
        copyBtn.textContent = 'Copy';
        copyBtn.addEventListener('click', function() {
            navigator.clipboard.writeText(codeBlock.textContent).then(function() {
                copyBtn.textContent = '✓ Copied';
                setTimeout(function() {
                    copyBtn.textContent = 'Copy';
                }, 2000);
            });
        });
        
        header.appendChild(lang);
        header.appendChild(copyBtn);
        
        const pre = codeBlock.parentElement;
        if (pre && pre.parentElement) {
            pre.parentElement.insertBefore(wrapper, pre);
            wrapper.appendChild(header);
            wrapper.appendChild(pre);
        }
    });
});
