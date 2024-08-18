/* General Reset */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    background-color: #F2F2F7;
    color: #1C1C1E;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.app-container {
    background-color: #FFFFFF;
    border-radius: 15px;
    box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.1);
    padding: 30px;
    max-width: 600px;
    width: 100%;
}

h1, h2 {
    font-weight: 600;
    color: #111111;
    text-align: center;
    margin-bottom: 20px;
}

input[type="text"], select {
    width: 100%;
    padding: 12px;
    border: 1px solid #D1D1D6;
    border-radius: 10px;
    margin-top: 8px;
    margin-bottom: 16px;
    background-color: #F9F9FB;
    font-size: 16px;
}

label {
    font-size: 14px;
    color: #8E8E93;
}

.primary-button {
    width: 100%;
    background-color: #007AFF;
    color: white;
    padding: 14px;
    border: none;
    border-radius: 10px;
    font-size: 16px;
    cursor: pointer;
    margin-top: 20px;
    font-weight: 600;
    text-transform: uppercase;
    transition: background-color 0.3s;
}

.primary-button:hover {
    background-color: #005BB5;
}

table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
    border-radius: 10px;
    overflow: hidden;
}

table, th, td {
    border: 1px solid #E5E5EA;
}

th, td {
    padding: 14px;
    text-align: left;
    font-size: 14px;
}

th {
    background-color: #F2F2F7;
    color: #111111;
}

tbody tr:nth-child(even) {
    background-color: #F9F9FB;
}

tbody tr:hover {
    background-color: #E5E5EA;
    cursor: pointer;
}
