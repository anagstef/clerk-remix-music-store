const userItems: Map<string, string[]> = new Map<string, string[]>()
    .set('user_2IawGYgWDfr4JF4W3e1Os6jG4PH', ['Imiz', 'LePa', 'The Weeknd'])
    .set('user_2IbklyeQq3aRxEb7SwPI0JB0Cje', ['Nox Vahn', 'Ambala']);
export async function getList(userId: string): Promise<Array<string>> {
    return userItems.get(userId) || [];
}