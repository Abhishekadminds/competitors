function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

function populateCompetitorDropdown() {
    console.log("🚀 External Script Loaded: Checking for competitors...");

    let competitorsParam = getQueryParam("competitors");
    console.log("🌍 Competitors from URL:", competitorsParam);

    if (!competitorsParam) {
        console.log("🔍 No competitors in URL. Checking hidden field...");
        let competitorsField = document.querySelector("input[name='competitors'], textarea[name='competitors']");
        if (competitorsField) {
            competitorsParam = competitorsField.value.trim();
            console.log("📋 Competitors from Hidden Field:", competitorsParam);
        }
    }

    if (!competitorsParam) {
        console.log("❌ No competitors found. Keeping question hidden.");
        return;
    }

    const competitorsList = competitorsParam.split(",");
    console.log("✅ Parsed competitors list:", competitorsList);

    const selectElement = document.getElementById("competitors");
    selectElement.innerHTML = "";

    competitorsList.forEach(comp => {
        const option = document.createElement("option");
        option.value = comp.trim();
        option.textContent = comp.replace(/_/g, " ");
        selectElement.appendChild(option);
    });

    console.log("🎉 Competitors added successfully.");

    document.getElementById("competitor-question").style.display = "block";
    document.getElementById("competitor-question").style.visibility = "visible";
}

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(populateCompetitorDropdown, 2000);
});
