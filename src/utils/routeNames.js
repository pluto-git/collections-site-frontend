const routes = {
  HOME: "/",
  // COLLECTIONS: "/collections",
  ADMIN_VIEW: "/admin-view",
  MY_COLLECTIONS: "/my-collections",
  CREATE_COLLECTION: "/create-collection",
  VIEW_COLLECTION: "/collection",
  EDIT_COLLECTION: "/edit-collection",
  VIEW_ITEM: "/view-item",
  ADD_ITEM: "/add-item",
  EDIT_ITEM: "/edit-item",
  // LOCALHOST: "http://localhost:3001/",
  LOCALHOST: "https://pure-garden-50942.herokuapp.com/"
};
//localhost's value can be changed to any existing backend.

// /collections
// /create-collection
// /edit-collection/:collectionId
// deleting doesnt need any route. only needs to call API to delete by :collectionId

// /collection/:collectionId  to VIEW
// /collection/:collectionId/add-item to ADD ITEM
// /collection/:collectionId/edit-item/:itemId to EDIT ITEM
// deleting doesnt need any route. only needs to call API to delete by :itemId

export default routes;
