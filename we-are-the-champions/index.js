import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {
    getDatabase,
    ref,
    push,
    onValue,
    update,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const appSettings = {
    databaseURL:
        "https://playground-6add0-default-rtdb.asia-southeast1.firebasedatabase.app/",
};

const app = initializeApp(appSettings);
//connects our project with the project that contains this database

const database = getDatabase(app);
const endorsementsInDB = ref(database, "endorsements");
//reference takes two arguments - the database that we want to input data and the what the reference should be called

const endorsementText = document.getElementById("endorsement-text");
const endorsementFrom = document.getElementById("endorsement-from");
const endorsementTo = document.getElementById("endorsement-to");
const publishButton = document.getElementById("publish-button");
const endorsementList = document.getElementById(
    "endorsement-display-container"
);

publishButton.addEventListener("click", function () {
    let inputValue = {
        from: endorsementFrom.value,
        to: endorsementTo.value,
        text: endorsementText.value,
        likes: 0,
    };
    push(endorsementsInDB, inputValue);
    clearEndorsementInput();
});

function clearEndorsementInput() {
    endorsementText.value = "";
    endorsementFrom.value = "";
    endorsementTo.value = "";
}

function clearEndorsementList() {
    endorsementList.innerHTML = "";
}

onValue(endorsementsInDB, function (snapshot) {
    let endorsementArray = Object.entries(snapshot.val());

    clearEndorsementList();

    for (let i = endorsementArray.length - 1; i >= 0; i--) {
        let currentEndorsement = endorsementArray[i];
        appendEndorsementToEndorsementList(currentEndorsement);
    }
});

function appendEndorsementToEndorsementList(endorsement) {
    let endorsementID = endorsement[0];
    let endorsementValue = endorsement[1];

    let newEndorsement = document.createElement("div");
    newEndorsement.setAttribute("class", "endorsement-container");

    newEndorsement.innerHTML = `<p class="endorsement-to-display">To ${endorsementValue.to}</p> <p class="endorsement-text-display">${endorsementValue.text}</p><div class="from-and-like-button-container"><p class="endorsement-from-display">From ${endorsementValue.from}</p><div class="like-button-container"><ion-icon name="heart" class="heart" id="heart-${endorsementID}"></ion-icon><p class="like-counter" id="like-counter-${endorsementID}">${endorsementValue.likes}</p></div></div`;

    endorsementList.append(newEndorsement);
    let heartButton = document.getElementById(`heart-${endorsementID}`);

    if (endorsementValue.likes > 0) {
        heartButton.classList.add("heart-active");
    }

    heartButton.addEventListener("click", function () {
        updateEndorsementLikes(endorsementID, endorsementValue);
    });
}

function updateEndorsementLikes(endorsementID, endorsementValue) {
    let likesInDB = ref(database, `endorsements/${endorsementID}`);
    update(likesInDB, {
        likes: endorsementValue.likes + 1,
    });
}
