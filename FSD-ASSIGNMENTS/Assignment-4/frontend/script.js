const API_URL = "http://localhost:3000/api/requests";


const form = document.getElementById("requestForm");

const studentName = document.getElementById("studentName");
const email = document.getElementById("email");
const category = document.getElementById("category");
const description = document.getElementById("description");
const priority = document.getElementById("priority");

const requestsContainer =
    document.getElementById("requestsContainer");

const requestCount =
    document.getElementById("requestCount");

const submitButton =
    document.getElementById("submitButton");

const cancelButton =
    document.getElementById("cancelButton");


let editingId = null;


// GET ALL REQUESTS

async function getRequests() {

    try {

        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error("Failed to fetch requests");
        }

        const requests = await response.json();

        displayRequests(requests);

    } catch (error) {

        console.error(error);

        requestsContainer.innerHTML = `
            <div class="empty">
                <strong>Unable to load requests</strong>
                <p>Make sure the backend server is running.</p>
            </div>
        `;
    }
}


// DISPLAY REQUESTS

function displayRequests(requests) {

    requestCount.textContent = requests.length;


    if (requests.length === 0) {

        requestsContainer.innerHTML = `
            <div class="empty">
                <strong>No requests yet</strong>
                <p>Submit your first campus request above.</p>
            </div>
        `;

        return;
    }


    requestsContainer.innerHTML = requests.map(request => {

        const priorityClass =
            request.priority.toLowerCase();


        return `
            <div class="request-card">

                <div class="card-top">

                    <div class="student-info">

                        <h3>${escapeHTML(request.studentName)}</h3>

                        <p>${escapeHTML(request.email)}</p>

                    </div>

                    <span class="priority ${priorityClass}">
                        ${escapeHTML(request.priority)}
                    </span>

                </div>


                <span class="category">
                    ${escapeHTML(request.category)}
                </span>


                <p class="description">
                    ${escapeHTML(request.description)}
                </p>


                <div class="card-actions">

                    <button
                        class="edit-btn"
                        onclick="editRequest(${request.id})"
                    >
                        Edit
                    </button>

                    <button
                        class="delete-btn"
                        onclick="deleteRequest(${request.id})"
                    >
                        Delete
                    </button>

                </div>

            </div>
        `;

    }).join("");
}


// POST / PUT

form.addEventListener("submit", async function (event) {

    event.preventDefault();


    const requestData = {

        studentName: studentName.value.trim(),

        email: email.value.trim(),

        category: category.value,

        description: description.value.trim(),

        priority: priority.value

    };


    try {

        let response;


        if (editingId === null) {

            // POST

            response = await fetch(API_URL, {

                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify(requestData)

            });

        } else {

            // PUT

            response = await fetch(
                `${API_URL}/${editingId}`,
                {
                    method: "PUT",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify(requestData)
                }
            );
        }


        if (!response.ok) {

            const error = await response.json();

            throw new Error(error.message);

        }


        resetForm();

        await getRequests();


        alert(
            editingId === null
                ? "Request submitted successfully!"
                : "Request updated successfully!"
        );


    } catch (error) {

        console.error(error);

        alert(error.message);

    }

});


// EDIT REQUEST

async function editRequest(id) {

    try {

        const response =
            await fetch(`${API_URL}/${id}`);


        if (!response.ok) {
            throw new Error("Request not found");
        }


        const request = await response.json();


        studentName.value = request.studentName;

        email.value = request.email;

        category.value = request.category;

        description.value = request.description;

        priority.value = request.priority;


        editingId = id;


        submitButton.textContent = "Update Request";

        cancelButton.classList.remove("hidden");


        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });


    } catch (error) {

        alert(error.message);

    }
}


// DELETE REQUEST

async function deleteRequest(id) {

    const confirmDelete =
        confirm("Are you sure you want to delete this request?");


    if (!confirmDelete) {
        return;
    }


    try {

        const response =
            await fetch(`${API_URL}/${id}`, {
                method: "DELETE"
            });


        if (!response.ok) {
            throw new Error("Failed to delete request");
        }


        await getRequests();


        alert("Request deleted successfully!");


    } catch (error) {

        console.error(error);

        alert(error.message);

    }
}


// CANCEL EDIT

cancelButton.addEventListener("click", function () {

    resetForm();

});


// RESET FORM

function resetForm() {

    form.reset();

    editingId = null;

    submitButton.textContent = "Submit Request";

    cancelButton.classList.add("hidden");

}


// BASIC HTML ESCAPING

function escapeHTML(value) {

    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

}


// LOAD REQUESTS WHEN PAGE OPENS

getRequests();