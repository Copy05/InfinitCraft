function loadData() {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            // Assign loaded merge rules to the mergeRules constant
            Object.assign(mergeRules, data);
            console.log('Merge rules loaded:', mergeRules, `Total Merges: ${Object.keys(mergeRules).length}`);
        })
        .catch(error => {
            console.error('Error loading merge rules:', error);
        });
}

loadData();