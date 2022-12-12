export function fetchPrediction(data: any): Promise<number> {
    return fetch("http://0.0.0.0:5050/predict", {
        method: 'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(data => data.json())
        .then(response => response.prediction)
}