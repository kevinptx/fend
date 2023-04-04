function updateUI(result, projectData) {
    projectData.score_tag.textContent = result.score_tag;
    projectData.agreement.textContent = result.agreement;
    projectData.subjectivity.textContent = result.subjectivity;
    projectData.confidence.textContent = result.confidence;
    projectData.irony.textContent = result.irony;
}

export { updateUI }