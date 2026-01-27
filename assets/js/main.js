// Copy code button functionality
document.addEventListener('DOMContentLoaded', function() {
    // Add copy buttons to code blocks
    document.querySelectorAll('pre code').forEach(function(codeBlock) {
        const wrapper = document.createElement('div');
        wrapper.className = 'code-block';
        
        const header = document.createElement('div');
        header.className = 'code-header';
        
        const lang = document.createElement('span');
        lang.className = 'code-lang';
        lang.textContent = codeBlock.className.replace('language-', '') || 'code';
        
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
        pre.parentElement.insertBefore(wrapper, pre);
        wrapper.appendChild(header);
        wrapper.appendChild(pre);
    });
});
