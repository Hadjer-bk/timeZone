let localTime = document.getElementById("localTime");
let foreignTime = document.getElementById("foreignTime");
let timeDiff = document.getElementById("timeDiff");
let country = document.getElementById("country");

function updateTimes() {
    let localDate = new Date();
    let countrySelect = country.value;

    localTime.textContent = localDate.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });

    let foreignDate = new Date(localDate.toLocaleString('en-US', { timeZone: countrySelect }));

    foreignTime.textContent = foreignDate.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });

    let diff = foreignDate.getHours() - localDate.getHours();
    let sign = diff >= 0 ? '+' : '-';
    timeDiff.textContent = `Time difference: ${sign}${Math.abs(diff)} heurs`;


    setTimeout(updateTimes, 1000);
    let dateA = document.getElementById("dateA").textContent = formatDate(localDate);

 

    document.getElementById("dateB").textContent = formatDate(foreignDate);

}

country.addEventListener("change", updateTimes);
function formatDate(date) {
    let day = String(date.getDate()).padStart(2, '0');
    let month = String(date.getMonth() + 1).padStart(2, '0'); // الأشهر تبدأ من 0
    let year = date.getFullYear();
    return `${day}/${month}/${year}`;
}

updateTimes();
