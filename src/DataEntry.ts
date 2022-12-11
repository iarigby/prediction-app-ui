export interface DataEntry {
    displayName: string,
    value: number,
    requestAttribute: string,
}

export const defaultEntries: DataEntry[] = [
    {
        displayName: 'Texture Mean',
        value: 14.36,
        requestAttribute: 'texture_mean'
    }
]
