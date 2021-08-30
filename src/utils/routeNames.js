const routes = {
  HOME: "/",
  // COLLECTIONS: "/collections",
  ADMIN_VIEW: "/admin-view",
  MY_COLLECTIONS: "/my-collections",
  CREATE_COLLECTION: "/create-collection",
  VIEW_COLLECTION: "/collection",
  EDIT_COLLECTION: "/edit-collection",
  ADD_ITEM: "/add-item",
  LOCALHOST: "https://pure-garden-50942.herokuapp.com/",
  // HEROKU: "https://pure-garden-50942.herokuapp.com/"
};
// 

// /collections
// /create-collection
// /edit-collection/:collectionId
// deleting doesnt need any route. only needs to call API to delete by :collectionId

// /collection/:collectionId  to VIEW
// /collection/:collectionId/add-item to ADD ITEM
// /collection/:collectionId/edit-item/:itemId to EDIT ITEM
// deleting doesnt need any route. only needs to call API to delete by :itemId

export default routes;
