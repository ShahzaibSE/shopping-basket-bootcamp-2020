// export function getAllItems() {
//     return ([
//         {
//             id:1,
//             name: "Item 1"
//         },
//         {
//             id:2,
//             name: "Item 2"
//         }
//     ])
// }
export function getAllItems(schema:any,request:any) {
    return schema.db.items
}