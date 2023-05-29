import { buildSchema } from "graphql";

export default buildSchema(`
      type Address {
        _id: String
        uuid: String
        firstName: String
        lastName: String
        address: String
        apartment: String
        city: String
        country: String
        state: String
        zipCode: String
        phone: String
        default: Boolean
      }
      
      input AddressInput {
        id: String
        firstName: String
        lastName: String
        address: String
        apartment: String
        city: String
        country: String
        state: String
        zipCode: String
        phone: String
        default: Boolean
        userAddress: String
      }

      type User {
        _id: ID
        firstName: String!
        lastName: String!
        email: String!
        password: String!
        isAdmin: Boolean!
        address: Address
      }

      input LoginInput {
        email: String!
        password: String! 
      }
      
      input ResetInput {
        email: String!
        callbackUrl: String
      }

      type Reset {
        msg: String
      }

      input PasswordInput {
        password: String!
        resetId: String!
      }

      input UserInput {
        firstName: String!
        lastName: String!
        email: String!
        password: String! 
        isAdmin: Boolean
      }

      type Color {
        color: String!
        shed: String!
      }

      input ColorInput {
        color: String!
        shed: String!
      }

      input VariantInput {
        color: String!
        images: [String!]!
      }
      type Variant {
        color: String!
        images: [String!]!
      }
      type Product {
        collectionName: String
        _id: ID
        name: String!
        releases: String
        price: String!
        inStock: String!
        size: [String]!
        color: [Color]
        images: [String!]!
        variant: [Variant]
        discount: String
        description: String
        materials: String
        careAdvice: String
        createdAt: String
        updatedAt: String
      }

      input ProductInput {
        productId: String
        collectionName: String
        name: String!
        releases: String
        price: String!
        inStock: String!
        size: [String]!
        color: [ColorInput]!
        images: [String!]!
        variant: [VariantInput]
        discount: String
        materials: String
        careAdvice: String
        description: String
      }

      type progressSchema {
        status: Boolean
        orderDate: String
      }

      input progressSchemaInput {
        status: Boolean
        orderDate: String
      }

      type statusSchema {
        status: String
        orderUrl: String
        placed: progressSchema
        packed: progressSchema
        shipped: progressSchema
        delivered: progressSchema
      }

      input statusSchemaInput {
        status: String
        orderUrl: String
        placed: progressSchemaInput
        packed: progressSchemaInput
        shipped: progressSchemaInput
        delivered: progressSchemaInput
      }

      type productPurchase {
        color: String
        count: Int
        image: String
        name: String 
        price: String
        size: String
      }

      input productPurchaseInput {
        color: String
        count: Int
        image: String
        name: String 
        price: String
        size: String
        stock: String
      }

      type MediaFile {
        url: String!
      }

      input MediaInput {
        url: String!
      }

      type Order {
        user: String
        _id: ID
        shippingAdd: Address
        billing: Address
        paid: Boolean
        orderStatus: statusSchema
        products: [productPurchase]
        transactionId: String
        createdAt: String
        updatedAt: String
        email: String
        name: String
      }

      input OrderInput {
        orderId: String
        user: String
        shippingAdd: AddressInput
        billing: AddressInput
        paid: Boolean
        orderStatus: statusSchemaInput
        products: [productPurchaseInput]
        transactionId: String
      }

      type AuthData {
        userId: ID!
        token: String!
        tokenExpiration: Int!
        isAdmin: Boolean,
      }

      type RootQuery {
        users: [User!]!
        getUser(userId: String): User!
        singleProduct(productId: String!): Product!
        productCategory(category: String!): [Product!]!
        products: [Product!]!
        orders: [Order!]!
        getOrders: [Order!]!
        singleOrder(orderId: String): Order!
        getAddress: [Address]
      }
      
      type RootMutation {
        createUser(userInput: UserInput): User
        loginUser(loginInput: LoginInput): AuthData!
        resetPassword(resetInput: ResetInput): Reset
        changePassword(passwordInput: PasswordInput): Reset
        updateUser(addressInput: AddressInput): [Address]
        addProduct(productInput: ProductInput): Product
        updateProduct(productInput: ProductInput): Product
        deleteProduct(productId: String): Product
        addOrder(orderInput: OrderInput!): Order!
        updateOrder(orderInput: OrderInput): Order!
        uploadMedia(mediaInput: String): MediaFile
        updateAddress(addressInput: AddressInput): Address
        deleteAddress(addressId: String): Address
      }

      schema {
        query: RootQuery
        mutation: RootMutation
      }
    `);
