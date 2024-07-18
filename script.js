function calculateUnits() {
    var oldUnits = parseInt(document.getElementById('old_units').value);
    var presentUnits = parseInt(document.getElementById('present_units').value);
    var daysLeft = parseInt(document.getElementById('days_left').value);
    var unitLimit = parseInt(document.getElementById('unit_limit').value);

    if (isNaN(oldUnits) || isNaN(presentUnits) || isNaN(daysLeft) || isNaN(unitLimit)) {
        alert("Please enter valid integers");
        return;
    }

    var totalUnitUsed = presentUnits - oldUnits;
    var remainingUnit = unitLimit - totalUnitUsed;
    var unitPerDay = remainingUnit / daysLeft;

    document.getElementById('result').innerHTML = `
        <p>Total unit used till now is: ${totalUnitUsed}</p>
        <p>Remaining unit is: ${remainingUnit}</p>
        <p>Unit per day is: ${unitPerDay.toFixed(2)}</p>
    `;
}
