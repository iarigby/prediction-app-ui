export interface DataEntry {
    displayName: string,
    value: number,
    requestAttribute: string,
    minValue: number,
    maxValue: number
}

export const defaultEntries: DataEntry[] = [
    {
        displayName: "Texture Mean",
        value: 14.36,
        requestAttribute: 'texture_mean',
        minValue: 9.71,
        maxValue: 39.28
    },
    {
        displayName: "Area Mean",
        value: 566.3,
        requestAttribute: 'area_mean',
        minValue: 14.50,
        maxValue: 2501.00
    },
    {
        displayName: "Concavity Mean",
        value: 0.06664,
        requestAttribute: 'concavity_mean',
        minValue: 0.00,
        maxValue: 0.43
    },
    {
        displayName: "Area SE",
        value: 23.56,
        requestAttribute: 'area_se',
        minValue: 6.80,
        maxValue: 542.20
    },
    {
        displayName: "Concavity SE",
        value: 0.02387,
        requestAttribute: 'concavity_se',
        minValue: 0.00,
        maxValue: 0.40
    },
    {
        displayName: "Fractal Dimension SE",
        value: 0.0023,
        requestAttribute: 'fractal_dimension_se',
        minValue: 0.00,
        maxValue: 0.03
    },
    {
        displayName: "Smoothness Worst",
        value: 0.144,
        requestAttribute: 'smoothness_worst',
        minValue: 0.07,
        maxValue: 0.22
    },
    {
        displayName: "Concavity Worst",
        value: 0.239,
        requestAttribute: 'concavity_worst',
        minValue: 0.00,
        maxValue: 1.25
    },
    {
        displayName: "Symmetry Worst",
        value: 0.2977,
        requestAttribute: 'symmetry_worst',
        minValue: 0.16,
        maxValue: 0.66
    },
    {
        displayName: "Fractal Dimension Worst",
        value: 0.07259,
        requestAttribute: 'fractal_dimension_worst',
        minValue: 0.06,
        maxValue: 0.21
    }
]
