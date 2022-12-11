export function fetchPrediction(): Promise<number> {
    return fetch("http://0.0.0.0:5050/predict", {
        method: 'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify({'texture_mean': 14.36, 'area_mean': 566.3, 'concavity_mean': 0.06664, 'area_se': 23.56,
            'concavity_se': 0.02387, 'fractal_dimension_se': 0.0023, 'smoothness_worst': 0.144,
            'concavity_worst': 0.239, 'symmetry_worst': 0.2977, 'fractal_dimension_worst': 0.07259})
    })
        .then(data => data.json())
        .then(response => response.prediction)
}