type Prettify<T> = { [K in keyof T]: T[K]; } & {};
type JsonPrimitive = null | number | string | boolean;
type Nested<V> = V | { [s: string]: V | Nested<V> } | Array<V | Nested<V>>;
type Json = Nested<JsonPrimitive>;
type ScalarField<T> = T | ((context: { index: number, seed: string }) => Promise<T> | T);
type DataField<T> = T | ((context: { index: number, seed: string }) => Promise<T> | T);
type MapScalarField<T extends Record<string, any>> = {
  [K in keyof T]: ScalarField<T[K]>;
};
type Child<T> = Omit<T, "connect">;
type Parent<T> = Omit<T, "count">;
type UserModels = {
  [KStore in keyof Store]?: Store[KStore] extends Array<
    infer TFields extends Record<string, any>
  >
    ? {
        connect?: (ctx: { store: Store }) => TFields;
        data?: Partial<MapScalarField<TFields>>;
      }
    : never;
};
type PlanOptions = { autoConnect?: boolean, models?: UserModels, store?: StoreInstance };
type GetBranch<TGraph extends any[], TPath extends string[]> =
  TGraph extends Array<infer TGraphItem>
    ? TPath extends [infer THead, ...infer TTail]
      ? {
          [K in keyof TGraphItem]: K extends THead
            ? TGraphItem[K] extends Array<any>
              ? TTail extends string[]
                ? GetBranch<TGraphItem[K], TTail>
                : never
              : never
            : TGraphItem[K]
        }
      : never
    : never;
type ModelInputs<
  TFields extends Record<string, any>,
  TParents extends Record<string, any>,
  TChildren extends Record<string, any>,
  TGraph extends any[],
  TPath extends string[] = []
> = { count?: number | ((context: { seed: string }) => number) } & (
  | {
      connect?: (context: { seed: string; index: number; store: Store; graph: TGraph; branch: GetBranch<TGraph, TPath>; }) => TFields;
      data?: never;
    }
  | {
      connect?: never;
      data?: DataField<Partial<MapScalarField<TFields> & TParents & TChildren>>;
    }
);
export interface Plan {
  generate: (initialStore?: Store) => Promise<Store>;
  pipe: Pipe;
  merge: Merge;
}
export type Pipe = (...plans: Plan[]) => Plan;
export type Merge =  (...plans: Plan[]) => Plan;
type StoreInstance<T extends Partial<Store> = {}> = {
  _store: T;
  toSQL: () => string[];
}
export type CreateStore = <T extends Partial<Store>>(initialData?: T, options?: { external: boolean }) => StoreInstance<T>;
type Store = {
  actions: actionsScalars[];
  admin_roles: admin_rolesScalars[];
  admins: adminsScalars[];
  attachments: attachmentsScalars[];
  base_attachments: base_attachmentsScalars[];
  brands: brandsScalars[];
  cart_item_product_variants: cart_item_product_variantsScalars[];
  cart_item_shipments: cart_item_shipmentsScalars[];
  cart_items: cart_itemsScalars[];
  cart_promo_codes: cart_promo_codesScalars[];
  cart_shipment_arta_quote_services: cart_shipment_arta_quote_servicesScalars[];
  cart_shipment_arta_quotes: cart_shipment_arta_quotesScalars[];
  cart_shipment_freight_club_quotes: cart_shipment_freight_club_quotesScalars[];
  cart_shipment_vendor_quotes: cart_shipment_vendor_quotesScalars[];
  cart_shipments: cart_shipmentsScalars[];
  carts: cartsScalars[];
  categories: categoriesScalars[];
  checkout_client: checkout_clientScalars[];
  checkout_coupons: checkout_couponsScalars[];
  checkout_credit_transactions: checkout_credit_transactionsScalars[];
  checkout_guest_user: checkout_guest_userScalars[];
  checkout_item_coupons: checkout_item_couponsScalars[];
  checkout_item_order_items: checkout_item_order_itemsScalars[];
  checkout_item_purchases: checkout_item_purchasesScalars[];
  checkout_item_session_bookings: checkout_item_session_bookingsScalars[];
  checkout_item_shipments: checkout_item_shipmentsScalars[];
  checkout_items: checkout_itemsScalars[];
  checkout_promo_codes: checkout_promo_codesScalars[];
  checkouts: checkoutsScalars[];
  client_addresses: client_addressesScalars[];
  client_expert_availability_subscriptions: client_expert_availability_subscriptionsScalars[];
  client_experts_notifications: client_experts_notificationsScalars[];
  client_favorite_experts: client_favorite_expertsScalars[];
  client_warnings: client_warningsScalars[];
  clients: clientsScalars[];
  cms_alphabetical_index_widgets: cms_alphabetical_index_widgetsScalars[];
  cms_alt_experts_listing_widgets: cms_alt_experts_listing_widgetsScalars[];
  cms_alt_value_proposition_widgets: cms_alt_value_proposition_widgetsScalars[];
  cms_article_heading_widgets: cms_article_heading_widgetsScalars[];
  cms_article_pages: cms_article_pagesScalars[];
  cms_articles_widget_items: cms_articles_widget_itemsScalars[];
  cms_articles_widgets: cms_articles_widgetsScalars[];
  cms_banner_widgets: cms_banner_widgetsScalars[];
  cms_brand_pages: cms_brand_pagesScalars[];
  cms_card_navigation_widget_items: cms_card_navigation_widget_itemsScalars[];
  cms_card_navigation_widgets: cms_card_navigation_widgetsScalars[];
  cms_category_collection_widget_items: cms_category_collection_widget_itemsScalars[];
  cms_category_collection_widgets: cms_category_collection_widgetsScalars[];
  cms_category_header_widget_items: cms_category_header_widget_itemsScalars[];
  cms_category_header_widgets: cms_category_header_widgetsScalars[];
  cms_category_pages: cms_category_pagesScalars[];
  cms_collection_header_widgets: cms_collection_header_widgetsScalars[];
  cms_collections_carousel_widget_items: cms_collections_carousel_widget_itemsScalars[];
  cms_collections_carousel_widgets: cms_collections_carousel_widgetsScalars[];
  cms_concierge_widgets: cms_concierge_widgetsScalars[];
  cms_consultation_listing_widgets: cms_consultation_listing_widgetsScalars[];
  cms_consultation_pages: cms_consultation_pagesScalars[];
  cms_double_image_widgets: cms_double_image_widgetsScalars[];
  cms_expert_collections_widget_items: cms_expert_collections_widget_itemsScalars[];
  cms_expert_collections_widgets: cms_expert_collections_widgetsScalars[];
  cms_experts_listing_widgets: cms_experts_listing_widgetsScalars[];
  cms_experts_widget_items: cms_experts_widget_itemsScalars[];
  cms_experts_widgets: cms_experts_widgetsScalars[];
  cms_featured_in_widgets: cms_featured_in_widgetsScalars[];
  cms_gallery_widget_items: cms_gallery_widget_itemsScalars[];
  cms_gallery_widgets: cms_gallery_widgetsScalars[];
  cms_gift_card_widgets: cms_gift_card_widgetsScalars[];
  cms_help_listing_widgets: cms_help_listing_widgetsScalars[];
  cms_hero_carousel_widget_items: cms_hero_carousel_widget_itemsScalars[];
  cms_hero_carousel_widgets: cms_hero_carousel_widgetsScalars[];
  cms_hero_main_widgets: cms_hero_main_widgetsScalars[];
  cms_hero_widgets: cms_hero_widgetsScalars[];
  cms_info_cards_widgets: cms_info_cards_widgetsScalars[];
  cms_info_listing_widgets: cms_info_listing_widgetsScalars[];
  cms_introduction_widgets: cms_introduction_widgetsScalars[];
  cms_listing_widgets: cms_listing_widgetsScalars[];
  cms_multi_collection_widget_items: cms_multi_collection_widget_itemsScalars[];
  cms_multi_collection_widgets: cms_multi_collection_widgetsScalars[];
  cms_pages: cms_pagesScalars[];
  cms_products_widget_items: cms_products_widget_itemsScalars[];
  cms_products_widgets: cms_products_widgetsScalars[];
  cms_qa_widget_items: cms_qa_widget_itemsScalars[];
  cms_qa_widgets: cms_qa_widgetsScalars[];
  cms_quotation_listing_widgets: cms_quotation_listing_widgetsScalars[];
  cms_rich_text_widgets: cms_rich_text_widgetsScalars[];
  cms_section_widget_items: cms_section_widget_itemsScalars[];
  cms_section_widgets: cms_section_widgetsScalars[];
  cms_showroom_pages: cms_showroom_pagesScalars[];
  cms_single_image_widgets: cms_single_image_widgetsScalars[];
  cms_spotlight_widgets: cms_spotlight_widgetsScalars[];
  cms_testimonials_widget_items: cms_testimonials_widget_itemsScalars[];
  cms_testimonials_widgets: cms_testimonials_widgetsScalars[];
  cms_value_proposition_widgets: cms_value_proposition_widgetsScalars[];
  cms_video_section_widgets: cms_video_section_widgetsScalars[];
  cms_video_widgets: cms_video_widgetsScalars[];
  cms_widget_item_buttons: cms_widget_item_buttonsScalars[];
  cms_widget_item_headlines: cms_widget_item_headlinesScalars[];
  cms_widget_item_three_column_cards: cms_widget_item_three_column_cardsScalars[];
  cms_widget_item_two_column_cards: cms_widget_item_two_column_cardsScalars[];
  cms_widget_items: cms_widget_itemsScalars[];
  cms_widget_listing_widgets: cms_widget_listing_widgetsScalars[];
  cms_widgets: cms_widgetsScalars[];
  collection_items_denormalized: collection_items_denormalizedScalars[];
  collection_product_brands: collection_product_brandsScalars[];
  collection_products: collection_productsScalars[];
  collections: collectionsScalars[];
  collections_product_categories: collections_product_categoriesScalars[];
  commission_cart_item: commission_cart_itemScalars[];
  commission_expert: commission_expertScalars[];
  commission_order_item: commission_order_itemScalars[];
  commissions: commissionsScalars[];
  coupons: couponsScalars[];
  coupons_different_recipients: coupons_different_recipientsScalars[];
  coupons_settings: coupons_settingsScalars[];
  credit_transactions: credit_transactionsScalars[];
  currency_rates: currency_ratesScalars[];
  discounts: discountsScalars[];
  expert_application_categories: expert_application_categoriesScalars[];
  expert_applications: expert_applicationsScalars[];
  expert_attachments: expert_attachmentsScalars[];
  expert_categories: expert_categoriesScalars[];
  expert_expertises: expert_expertisesScalars[];
  expert_regions: expert_regionsScalars[];
  expert_sessions: expert_sessionsScalars[];
  expert_tags: expert_tagsScalars[];
  expert_testimonials: expert_testimonialsScalars[];
  expert_user_availabilities: expert_user_availabilitiesScalars[];
  expert_user_availabilities_analytics: expert_user_availabilities_analyticsScalars[];
  expert_user_availability_templates: expert_user_availability_templatesScalars[];
  expert_user_notification_emails: expert_user_notification_emailsScalars[];
  expert_users: expert_usersScalars[];
  expert_videos: expert_videosScalars[];
  expert_warnings: expert_warningsScalars[];
  experts: expertsScalars[];
  external_product_previews: external_product_previewsScalars[];
  feature_flag_client: feature_flag_clientScalars[];
  feature_flag_expert_user: feature_flag_expert_userScalars[];
  feature_flags: feature_flagsScalars[];
  files_and_notes_items: files_and_notes_itemsScalars[];
  guest_users: guest_usersScalars[];
  knex_migrations: knex_migrationsScalars[];
  knex_migrations_lock: knex_migrations_lockScalars[];
  navigation_groups: navigation_groupsScalars[];
  navigation_items: navigation_itemsScalars[];
  navigations: navigationsScalars[];
  order_cart: order_cartScalars[];
  order_clients: order_clientsScalars[];
  order_guest_users: order_guest_usersScalars[];
  order_item_shipments: order_item_shipmentsScalars[];
  order_items: order_itemsScalars[];
  order_notes: order_notesScalars[];
  order_sendgrid_events: order_sendgrid_eventsScalars[];
  order_shipment_arta_quote_services: order_shipment_arta_quote_servicesScalars[];
  order_shipment_arta_quotes: order_shipment_arta_quotesScalars[];
  order_shipment_freight_club_quotes: order_shipment_freight_club_quotesScalars[];
  order_shipments: order_shipmentsScalars[];
  order_shipments_vendor_shippings: order_shipments_vendor_shippingsScalars[];
  orders: ordersScalars[];
  product_attachments: product_attachmentsScalars[];
  product_attributes: product_attributesScalars[];
  product_categories: product_categoriesScalars[];
  product_custom_content: product_custom_contentScalars[];
  product_custom_fields: product_custom_fieldsScalars[];
  product_options: product_optionsScalars[];
  product_product_options: product_product_optionsScalars[];
  product_variant_attachments: product_variant_attachmentsScalars[];
  product_variant_custom_content: product_variant_custom_contentScalars[];
  product_variant_custom_fields: product_variant_custom_fieldsScalars[];
  product_variant_option_values: product_variant_option_valuesScalars[];
  product_variant_sources: product_variant_sourcesScalars[];
  product_variants: product_variantsScalars[];
  products: productsScalars[];
  promo_codes: promo_codesScalars[];
  purchases: purchasesScalars[];
  recommended_products: recommended_productsScalars[];
  refund_checkout_items: refund_checkout_itemsScalars[];
  refunds: refundsScalars[];
  refunds_credit_transactions: refunds_credit_transactionsScalars[];
  regions: regionsScalars[];
  role_actions: role_actionsScalars[];
  roles: rolesScalars[];
  session_availabilities: session_availabilitiesScalars[];
  session_client_attachments: session_client_attachmentsScalars[];
  session_client_notifications: session_client_notificationsScalars[];
  session_clients: session_clientsScalars[];
  session_logs: session_logsScalars[];
  session_report_items: session_report_itemsScalars[];
  session_reports: session_reportsScalars[];
  session_reviews: session_reviewsScalars[];
  sessions: sessionsScalars[];
  sources: sourcesScalars[];
  tags: tagsScalars[];
  trusted_sources: trusted_sourcesScalars[];
  vendors: vendorsScalars[];
  video_attachments: video_attachmentsScalars[];
};
type address_typeEnum = "BILLING" | "SHIPPING";
type availability_typeEnum = "ENQUIRE" | "IN_STOCK" | "MADE_TO_ORDER" | "SOLD_OUT";
type carts_status_typeEnum = "ABANDONED" | "ACTIVE" | "MERGED" | "PURCHASED" | "RECONSIDERED";
type checkout_item_typeEnum = "coupon";
type cms_alphabetical_index_widgets_typeEnum = "BRAND";
type cms_card_navigation_widgets_placement_typeEnum = "HERO" | "SECTION";
type cms_category_collection_widgets_placement_typeEnum = "HERO" | "SECTION";
type cms_category_header_widgets_type_typeEnum = "CAROUSEL" | "SINGLE_IMAGE";
type cms_collection_header_widgets_collection_header_type_typeEnum = "DEFAULT" | "WHITE_TEXT_ON_DARK";
type cms_multi_collection_widget_items_default_sort_direction_typeEnum = "ASC" | "DESC";
type cms_multi_collection_widget_items_default_sort_field_typeEnum = "positionIndexWeight" | "price";
type cms_multi_collection_widgets_type_typeEnum = "DEFAULT" | "FEATURED";
type collections_type_typeEnum = "AUTOMATIC_RULESET" | "MANUAL" | "RULESET";
type commissions_status_typeEnum = "PAID_OUT" | "UNPAID";
type commissions_type_typeEnum = "EXPERT_COLLECTION_PAGE" | "EXPERT_EMAIL" | "EXPERT_RECOMMENDATION_CAROUSEL" | "EXPERT_UNKNOWN_TYPE";
type credit_transactions_type_typeEnum = "ADMIN_MODIFIED" | "CHECKOUT_SPENT" | "COUPON_OVERFLOW" | "PURCHASE_SPENT" | "REFUND" | "SESSION_CLIENT_SPENT";
type discounts_type_typeEnum = "COUPON_AMOUNT" | "COUPON_PERCENTAGE" | "CREDIT_AMOUNT" | "PROMO_CODE_PERCENTAGE" | "SESSION_PERCENTAGE" | "SHIPMENT_SUBSIDY";
type expert_applications_status_typeEnum = "APPROVED" | "IN_WAITLIST" | "PENDING" | "REJECTED";
type feature_flags_status_typeEnum = "DISABLED" | "ENABLED_FOR_ALL" | "ENABLED_FOR_SPECIFIC_USERS";
type global_search_typeEnum = "brand" | "expert" | "navigation_item" | "product_variant";
type navigations_status_typeEnum = "NOT_PUBLISHED" | "PUBLISHED";
type order_items_flx_status_typeEnum = "ACKNOWLEDGED" | "ADDITIONAL_INFO_REQUIRED" | "CANCELED" | "DUPLICATE" | "PO_NUMBER_EXCEEDS_MAX_LENGTH" | "PROCESSED" | "PROCESSING" | "PROCESSING_ERROR" | "TRANSFERRED" | "UNPROCESSED" | "VOIDED";
type order_items_status_typeEnum = "CANCELLED" | "DELIVERED" | "PENDING" | "PROCESSING" | "SHIPPED";
type order_sendgrid_events_type_typeEnum = "CANCELLATION" | "CONFIRMATION";
type orders_status_typeEnum = "CANCELLED" | "COMPLETED" | "PENDING" | "PROCESSING" | "UNPAID";
type payment_status_typeEnum = "CANCELLED" | "ON_HOLD" | "PAID" | "PENDING";
type promo_code_constraintsEnum = "FIRST_TIME_SHOWROOM_USER";
type promocode_typeEnum = "DEFAULT";
type purchases_status_typeEnum = "DELIVERED" | "DRAFT" | "IN_PRODUCTION" | "PAID" | "PENDING" | "PROCESSING" | "REFUNDED" | "SHIPPED" | "VOID";
type session_client_notifications_type_typeEnum = "PRE_SESSION_PROMOTION";
type session_report_item_type_enumEnum = "DIRECT_TO_CONSUMER" | "TRADE_ONLY";
type actionsScalars = {
  id?: number;
  title: string;
}
type actionsParents<TGraph extends any[], TPath extends string[] = []> = {

};
type actionsChildren<TGraph extends any[], TPath extends string[] = []> = {
 role_actions: Child<ModelInputs<role_actionsScalars, Omit<role_actionsParents<TGraph, [...TPath, "role_actions"]>, "actions">, role_actionsChildren<TGraph, [...TPath, "role_actions"]>, TGraph, [...TPath, "role_actions"]>>;
};
type actionsModel = ModelInputs<actionsScalars, actionsParents<actionsGraph>, actionsChildren<actionsGraph>, actionsGraph>;
type admin_rolesScalars = {
  admin_id: number;
  role_id: number;
}
type admin_rolesParents<TGraph extends any[], TPath extends string[] = []> = {
 admins: Parent<ModelInputs<adminsScalars, adminsParents<TGraph, [...TPath, "admins"]>, Omit<adminsChildren<TGraph, [...TPath, "admins"]>, "admin_roles">, TGraph, [...TPath, "admins"]>>;
 roles: Parent<ModelInputs<rolesScalars, rolesParents<TGraph, [...TPath, "roles"]>, Omit<rolesChildren<TGraph, [...TPath, "roles"]>, "admin_roles">, TGraph, [...TPath, "roles"]>>;
};
type admin_rolesChildren<TGraph extends any[], TPath extends string[] = []> = {

};
type admin_rolesModel = ModelInputs<admin_rolesScalars, admin_rolesParents<admin_rolesGraph>, admin_rolesChildren<admin_rolesGraph>, admin_rolesGraph>;
type adminsScalars = {
  created_at_utc: string;
  email: string;
  id?: number;
  is_active?: boolean;
  name: string;
  updated_at_utc?: string;
}
type adminsParents<TGraph extends any[], TPath extends string[] = []> = {

};
type adminsChildren<TGraph extends any[], TPath extends string[] = []> = {
 admin_roles: Child<ModelInputs<admin_rolesScalars, Omit<admin_rolesParents<TGraph, [...TPath, "admin_roles"]>, "admins">, admin_rolesChildren<TGraph, [...TPath, "admin_roles"]>, TGraph, [...TPath, "admin_roles"]>>;
 order_notes: Child<ModelInputs<order_notesScalars, Omit<order_notesParents<TGraph, [...TPath, "order_notes"]>, "admins">, order_notesChildren<TGraph, [...TPath, "order_notes"]>, TGraph, [...TPath, "order_notes"]>>;
};
type adminsModel = ModelInputs<adminsScalars, adminsParents<adminsGraph>, adminsChildren<adminsGraph>, adminsGraph>;
type attachmentsScalars = {
  base_attachment_id: number;
  created_at_utc: string;
  crop_height: string | null;
  crop_width: string | null;
  crop_x: string | null;
  crop_y: string | null;
  id?: number;
  updated_at_utc?: string;
}
type attachmentsParents<TGraph extends any[], TPath extends string[] = []> = {
 base_attachments: Parent<ModelInputs<base_attachmentsScalars, base_attachmentsParents<TGraph, [...TPath, "base_attachments"]>, Omit<base_attachmentsChildren<TGraph, [...TPath, "base_attachments"]>, "attachments">, TGraph, [...TPath, "base_attachments"]>>;
};
type attachmentsChildren<TGraph extends any[], TPath extends string[] = []> = {
 cms_article_pages: Child<ModelInputs<cms_article_pagesScalars, Omit<cms_article_pagesParents<TGraph, [...TPath, "cms_article_pages"]>, "attachments">, cms_article_pagesChildren<TGraph, [...TPath, "cms_article_pages"]>, TGraph, [...TPath, "cms_article_pages"]>>;
 cms_card_navigation_widget_items: Child<ModelInputs<cms_card_navigation_widget_itemsScalars, Omit<cms_card_navigation_widget_itemsParents<TGraph, [...TPath, "cms_card_navigation_widget_items"]>, "attachments">, cms_card_navigation_widget_itemsChildren<TGraph, [...TPath, "cms_card_navigation_widget_items"]>, TGraph, [...TPath, "cms_card_navigation_widget_items"]>>;
 cms_category_collection_widget_items: Child<ModelInputs<cms_category_collection_widget_itemsScalars, Omit<cms_category_collection_widget_itemsParents<TGraph, [...TPath, "cms_category_collection_widget_items"]>, "attachments">, cms_category_collection_widget_itemsChildren<TGraph, [...TPath, "cms_category_collection_widget_items"]>, TGraph, [...TPath, "cms_category_collection_widget_items"]>>;
 cms_category_header_widget_items: Child<ModelInputs<cms_category_header_widget_itemsScalars, Omit<cms_category_header_widget_itemsParents<TGraph, [...TPath, "cms_category_header_widget_items"]>, "attachments">, cms_category_header_widget_itemsChildren<TGraph, [...TPath, "cms_category_header_widget_items"]>, TGraph, [...TPath, "cms_category_header_widget_items"]>>;
 cms_collection_header_widgets_cms_collection_header_widgets_header_image_attachment_idToattachments: Child<ModelInputs<cms_collection_header_widgetsScalars, Omit<cms_collection_header_widgetsParents<TGraph, [...TPath, "cms_collection_header_widgets_cms_collection_header_widgets_header_image_attachment_idToattachments"]>, "attachments_cms_collection_header_widgets_header_image_attachment_idToattachments">, cms_collection_header_widgetsChildren<TGraph, [...TPath, "cms_collection_header_widgets_cms_collection_header_widgets_header_image_attachment_idToattachments"]>, TGraph, [...TPath, "cms_collection_header_widgets_cms_collection_header_widgets_header_image_attachment_idToattachments"]>>;
 cms_collection_header_widgets_cms_collection_header_widgets_mobile_image_attachment_idToattachments: Child<ModelInputs<cms_collection_header_widgetsScalars, Omit<cms_collection_header_widgetsParents<TGraph, [...TPath, "cms_collection_header_widgets_cms_collection_header_widgets_mobile_image_attachment_idToattachments"]>, "attachments_cms_collection_header_widgets_mobile_image_attachment_idToattachments">, cms_collection_header_widgetsChildren<TGraph, [...TPath, "cms_collection_header_widgets_cms_collection_header_widgets_mobile_image_attachment_idToattachments"]>, TGraph, [...TPath, "cms_collection_header_widgets_cms_collection_header_widgets_mobile_image_attachment_idToattachments"]>>;
 cms_collections_carousel_widget_items_cms_collections_carousel_widget_items_preview_image_attachment_idToattachments: Child<ModelInputs<cms_collections_carousel_widget_itemsScalars, Omit<cms_collections_carousel_widget_itemsParents<TGraph, [...TPath, "cms_collections_carousel_widget_items_cms_collections_carousel_widget_items_preview_image_attachment_idToattachments"]>, "attachments_cms_collections_carousel_widget_items_preview_image_attachment_idToattachments">, cms_collections_carousel_widget_itemsChildren<TGraph, [...TPath, "cms_collections_carousel_widget_items_cms_collections_carousel_widget_items_preview_image_attachment_idToattachments"]>, TGraph, [...TPath, "cms_collections_carousel_widget_items_cms_collections_carousel_widget_items_preview_image_attachment_idToattachments"]>>;
 cms_collections_carousel_widget_items_cms_collections_carousel_widget_items_profile_image_attachment_idToattachments: Child<ModelInputs<cms_collections_carousel_widget_itemsScalars, Omit<cms_collections_carousel_widget_itemsParents<TGraph, [...TPath, "cms_collections_carousel_widget_items_cms_collections_carousel_widget_items_profile_image_attachment_idToattachments"]>, "attachments_cms_collections_carousel_widget_items_profile_image_attachment_idToattachments">, cms_collections_carousel_widget_itemsChildren<TGraph, [...TPath, "cms_collections_carousel_widget_items_cms_collections_carousel_widget_items_profile_image_attachment_idToattachments"]>, TGraph, [...TPath, "cms_collections_carousel_widget_items_cms_collections_carousel_widget_items_profile_image_attachment_idToattachments"]>>;
 cms_consultation_listing_widgets: Child<ModelInputs<cms_consultation_listing_widgetsScalars, Omit<cms_consultation_listing_widgetsParents<TGraph, [...TPath, "cms_consultation_listing_widgets"]>, "attachments">, cms_consultation_listing_widgetsChildren<TGraph, [...TPath, "cms_consultation_listing_widgets"]>, TGraph, [...TPath, "cms_consultation_listing_widgets"]>>;
 cms_double_image_widgets_cms_double_image_widgets_first_attachment_idToattachments: Child<ModelInputs<cms_double_image_widgetsScalars, Omit<cms_double_image_widgetsParents<TGraph, [...TPath, "cms_double_image_widgets_cms_double_image_widgets_first_attachment_idToattachments"]>, "attachments_cms_double_image_widgets_first_attachment_idToattachments">, cms_double_image_widgetsChildren<TGraph, [...TPath, "cms_double_image_widgets_cms_double_image_widgets_first_attachment_idToattachments"]>, TGraph, [...TPath, "cms_double_image_widgets_cms_double_image_widgets_first_attachment_idToattachments"]>>;
 cms_double_image_widgets_cms_double_image_widgets_second_attachment_idToattachments: Child<ModelInputs<cms_double_image_widgetsScalars, Omit<cms_double_image_widgetsParents<TGraph, [...TPath, "cms_double_image_widgets_cms_double_image_widgets_second_attachment_idToattachments"]>, "attachments_cms_double_image_widgets_second_attachment_idToattachments">, cms_double_image_widgetsChildren<TGraph, [...TPath, "cms_double_image_widgets_cms_double_image_widgets_second_attachment_idToattachments"]>, TGraph, [...TPath, "cms_double_image_widgets_cms_double_image_widgets_second_attachment_idToattachments"]>>;
 cms_expert_collections_widget_items_cms_expert_collections_widget_items_preview_image_attachment_idToattachments: Child<ModelInputs<cms_expert_collections_widget_itemsScalars, Omit<cms_expert_collections_widget_itemsParents<TGraph, [...TPath, "cms_expert_collections_widget_items_cms_expert_collections_widget_items_preview_image_attachment_idToattachments"]>, "attachments_cms_expert_collections_widget_items_preview_image_attachment_idToattachments">, cms_expert_collections_widget_itemsChildren<TGraph, [...TPath, "cms_expert_collections_widget_items_cms_expert_collections_widget_items_preview_image_attachment_idToattachments"]>, TGraph, [...TPath, "cms_expert_collections_widget_items_cms_expert_collections_widget_items_preview_image_attachment_idToattachments"]>>;
 cms_expert_collections_widget_items_cms_expert_collections_widget_items_profile_image_attachment_idToattachments: Child<ModelInputs<cms_expert_collections_widget_itemsScalars, Omit<cms_expert_collections_widget_itemsParents<TGraph, [...TPath, "cms_expert_collections_widget_items_cms_expert_collections_widget_items_profile_image_attachment_idToattachments"]>, "attachments_cms_expert_collections_widget_items_profile_image_attachment_idToattachments">, cms_expert_collections_widget_itemsChildren<TGraph, [...TPath, "cms_expert_collections_widget_items_cms_expert_collections_widget_items_profile_image_attachment_idToattachments"]>, TGraph, [...TPath, "cms_expert_collections_widget_items_cms_expert_collections_widget_items_profile_image_attachment_idToattachments"]>>;
 cms_gallery_widget_items: Child<ModelInputs<cms_gallery_widget_itemsScalars, Omit<cms_gallery_widget_itemsParents<TGraph, [...TPath, "cms_gallery_widget_items"]>, "attachments">, cms_gallery_widget_itemsChildren<TGraph, [...TPath, "cms_gallery_widget_items"]>, TGraph, [...TPath, "cms_gallery_widget_items"]>>;
 cms_hero_carousel_widget_items: Child<ModelInputs<cms_hero_carousel_widget_itemsScalars, Omit<cms_hero_carousel_widget_itemsParents<TGraph, [...TPath, "cms_hero_carousel_widget_items"]>, "attachments">, cms_hero_carousel_widget_itemsChildren<TGraph, [...TPath, "cms_hero_carousel_widget_items"]>, TGraph, [...TPath, "cms_hero_carousel_widget_items"]>>;
 cms_hero_main_widgets: Child<ModelInputs<cms_hero_main_widgetsScalars, Omit<cms_hero_main_widgetsParents<TGraph, [...TPath, "cms_hero_main_widgets"]>, "attachments">, cms_hero_main_widgetsChildren<TGraph, [...TPath, "cms_hero_main_widgets"]>, TGraph, [...TPath, "cms_hero_main_widgets"]>>;
 cms_hero_widgets: Child<ModelInputs<cms_hero_widgetsScalars, Omit<cms_hero_widgetsParents<TGraph, [...TPath, "cms_hero_widgets"]>, "attachments">, cms_hero_widgetsChildren<TGraph, [...TPath, "cms_hero_widgets"]>, TGraph, [...TPath, "cms_hero_widgets"]>>;
 cms_info_listing_widgets: Child<ModelInputs<cms_info_listing_widgetsScalars, Omit<cms_info_listing_widgetsParents<TGraph, [...TPath, "cms_info_listing_widgets"]>, "attachments">, cms_info_listing_widgetsChildren<TGraph, [...TPath, "cms_info_listing_widgets"]>, TGraph, [...TPath, "cms_info_listing_widgets"]>>;
 cms_introduction_widgets: Child<ModelInputs<cms_introduction_widgetsScalars, Omit<cms_introduction_widgetsParents<TGraph, [...TPath, "cms_introduction_widgets"]>, "attachments">, cms_introduction_widgetsChildren<TGraph, [...TPath, "cms_introduction_widgets"]>, TGraph, [...TPath, "cms_introduction_widgets"]>>;
 cms_products_widget_items: Child<ModelInputs<cms_products_widget_itemsScalars, Omit<cms_products_widget_itemsParents<TGraph, [...TPath, "cms_products_widget_items"]>, "attachments">, cms_products_widget_itemsChildren<TGraph, [...TPath, "cms_products_widget_items"]>, TGraph, [...TPath, "cms_products_widget_items"]>>;
 cms_single_image_widgets: Child<ModelInputs<cms_single_image_widgetsScalars, Omit<cms_single_image_widgetsParents<TGraph, [...TPath, "cms_single_image_widgets"]>, "attachments">, cms_single_image_widgetsChildren<TGraph, [...TPath, "cms_single_image_widgets"]>, TGraph, [...TPath, "cms_single_image_widgets"]>>;
 cms_spotlight_widgets: Child<ModelInputs<cms_spotlight_widgetsScalars, Omit<cms_spotlight_widgetsParents<TGraph, [...TPath, "cms_spotlight_widgets"]>, "attachments">, cms_spotlight_widgetsChildren<TGraph, [...TPath, "cms_spotlight_widgets"]>, TGraph, [...TPath, "cms_spotlight_widgets"]>>;
 cms_video_section_widgets: Child<ModelInputs<cms_video_section_widgetsScalars, Omit<cms_video_section_widgetsParents<TGraph, [...TPath, "cms_video_section_widgets"]>, "attachments">, cms_video_section_widgetsChildren<TGraph, [...TPath, "cms_video_section_widgets"]>, TGraph, [...TPath, "cms_video_section_widgets"]>>;
 cms_video_widgets: Child<ModelInputs<cms_video_widgetsScalars, Omit<cms_video_widgetsParents<TGraph, [...TPath, "cms_video_widgets"]>, "attachments">, cms_video_widgetsChildren<TGraph, [...TPath, "cms_video_widgets"]>, TGraph, [...TPath, "cms_video_widgets"]>>;
 cms_widget_item_three_column_cards_cms_widget_item_three_column_cards_first_attachment_idToattachments: Child<ModelInputs<cms_widget_item_three_column_cardsScalars, Omit<cms_widget_item_three_column_cardsParents<TGraph, [...TPath, "cms_widget_item_three_column_cards_cms_widget_item_three_column_cards_first_attachment_idToattachments"]>, "attachments_cms_widget_item_three_column_cards_first_attachment_idToattachments">, cms_widget_item_three_column_cardsChildren<TGraph, [...TPath, "cms_widget_item_three_column_cards_cms_widget_item_three_column_cards_first_attachment_idToattachments"]>, TGraph, [...TPath, "cms_widget_item_three_column_cards_cms_widget_item_three_column_cards_first_attachment_idToattachments"]>>;
 cms_widget_item_three_column_cards_cms_widget_item_three_column_cards_second_attachment_idToattachments: Child<ModelInputs<cms_widget_item_three_column_cardsScalars, Omit<cms_widget_item_three_column_cardsParents<TGraph, [...TPath, "cms_widget_item_three_column_cards_cms_widget_item_three_column_cards_second_attachment_idToattachments"]>, "attachments_cms_widget_item_three_column_cards_second_attachment_idToattachments">, cms_widget_item_three_column_cardsChildren<TGraph, [...TPath, "cms_widget_item_three_column_cards_cms_widget_item_three_column_cards_second_attachment_idToattachments"]>, TGraph, [...TPath, "cms_widget_item_three_column_cards_cms_widget_item_three_column_cards_second_attachment_idToattachments"]>>;
 cms_widget_item_three_column_cards_cms_widget_item_three_column_cards_third_attachment_idToattachments: Child<ModelInputs<cms_widget_item_three_column_cardsScalars, Omit<cms_widget_item_three_column_cardsParents<TGraph, [...TPath, "cms_widget_item_three_column_cards_cms_widget_item_three_column_cards_third_attachment_idToattachments"]>, "attachments_cms_widget_item_three_column_cards_third_attachment_idToattachments">, cms_widget_item_three_column_cardsChildren<TGraph, [...TPath, "cms_widget_item_three_column_cards_cms_widget_item_three_column_cards_third_attachment_idToattachments"]>, TGraph, [...TPath, "cms_widget_item_three_column_cards_cms_widget_item_three_column_cards_third_attachment_idToattachments"]>>;
 cms_widget_item_two_column_cards_cms_widget_item_two_column_cards_first_attachment_idToattachments: Child<ModelInputs<cms_widget_item_two_column_cardsScalars, Omit<cms_widget_item_two_column_cardsParents<TGraph, [...TPath, "cms_widget_item_two_column_cards_cms_widget_item_two_column_cards_first_attachment_idToattachments"]>, "attachments_cms_widget_item_two_column_cards_first_attachment_idToattachments">, cms_widget_item_two_column_cardsChildren<TGraph, [...TPath, "cms_widget_item_two_column_cards_cms_widget_item_two_column_cards_first_attachment_idToattachments"]>, TGraph, [...TPath, "cms_widget_item_two_column_cards_cms_widget_item_two_column_cards_first_attachment_idToattachments"]>>;
 cms_widget_item_two_column_cards_cms_widget_item_two_column_cards_second_attachment_idToattachments: Child<ModelInputs<cms_widget_item_two_column_cardsScalars, Omit<cms_widget_item_two_column_cardsParents<TGraph, [...TPath, "cms_widget_item_two_column_cards_cms_widget_item_two_column_cards_second_attachment_idToattachments"]>, "attachments_cms_widget_item_two_column_cards_second_attachment_idToattachments">, cms_widget_item_two_column_cardsChildren<TGraph, [...TPath, "cms_widget_item_two_column_cards_cms_widget_item_two_column_cards_second_attachment_idToattachments"]>, TGraph, [...TPath, "cms_widget_item_two_column_cards_cms_widget_item_two_column_cards_second_attachment_idToattachments"]>>;
 expert_attachments: Child<ModelInputs<expert_attachmentsScalars, Omit<expert_attachmentsParents<TGraph, [...TPath, "expert_attachments"]>, "attachments">, expert_attachmentsChildren<TGraph, [...TPath, "expert_attachments"]>, TGraph, [...TPath, "expert_attachments"]>>;
 experts_experts_headshot_image_attachment_idToattachments: Child<ModelInputs<expertsScalars, Omit<expertsParents<TGraph, [...TPath, "experts_experts_headshot_image_attachment_idToattachments"]>, "attachments_experts_headshot_image_attachment_idToattachments">, expertsChildren<TGraph, [...TPath, "experts_experts_headshot_image_attachment_idToattachments"]>, TGraph, [...TPath, "experts_experts_headshot_image_attachment_idToattachments"]>>;
 experts_experts_profile_image_attachment_idToattachments: Child<ModelInputs<expertsScalars, Omit<expertsParents<TGraph, [...TPath, "experts_experts_profile_image_attachment_idToattachments"]>, "attachments_experts_profile_image_attachment_idToattachments">, expertsChildren<TGraph, [...TPath, "experts_experts_profile_image_attachment_idToattachments"]>, TGraph, [...TPath, "experts_experts_profile_image_attachment_idToattachments"]>>;
 external_product_previews: Child<ModelInputs<external_product_previewsScalars, Omit<external_product_previewsParents<TGraph, [...TPath, "external_product_previews"]>, "attachments">, external_product_previewsChildren<TGraph, [...TPath, "external_product_previews"]>, TGraph, [...TPath, "external_product_previews"]>>;
 files_and_notes_items: Child<ModelInputs<files_and_notes_itemsScalars, Omit<files_and_notes_itemsParents<TGraph, [...TPath, "files_and_notes_items"]>, "attachments">, files_and_notes_itemsChildren<TGraph, [...TPath, "files_and_notes_items"]>, TGraph, [...TPath, "files_and_notes_items"]>>;
 navigation_items: Child<ModelInputs<navigation_itemsScalars, Omit<navigation_itemsParents<TGraph, [...TPath, "navigation_items"]>, "attachments">, navigation_itemsChildren<TGraph, [...TPath, "navigation_items"]>, TGraph, [...TPath, "navigation_items"]>>;
 product_attachments: Child<ModelInputs<product_attachmentsScalars, Omit<product_attachmentsParents<TGraph, [...TPath, "product_attachments"]>, "attachments">, product_attachmentsChildren<TGraph, [...TPath, "product_attachments"]>, TGraph, [...TPath, "product_attachments"]>>;
 product_variant_attachments: Child<ModelInputs<product_variant_attachmentsScalars, Omit<product_variant_attachmentsParents<TGraph, [...TPath, "product_variant_attachments"]>, "attachments">, product_variant_attachmentsChildren<TGraph, [...TPath, "product_variant_attachments"]>, TGraph, [...TPath, "product_variant_attachments"]>>;
 purchases: Child<ModelInputs<purchasesScalars, Omit<purchasesParents<TGraph, [...TPath, "purchases"]>, "attachments">, purchasesChildren<TGraph, [...TPath, "purchases"]>, TGraph, [...TPath, "purchases"]>>;
 session_client_attachments: Child<ModelInputs<session_client_attachmentsScalars, Omit<session_client_attachmentsParents<TGraph, [...TPath, "session_client_attachments"]>, "attachments">, session_client_attachmentsChildren<TGraph, [...TPath, "session_client_attachments"]>, TGraph, [...TPath, "session_client_attachments"]>>;
 session_report_items: Child<ModelInputs<session_report_itemsScalars, Omit<session_report_itemsParents<TGraph, [...TPath, "session_report_items"]>, "attachments">, session_report_itemsChildren<TGraph, [...TPath, "session_report_items"]>, TGraph, [...TPath, "session_report_items"]>>;
 vendors: Child<ModelInputs<vendorsScalars, Omit<vendorsParents<TGraph, [...TPath, "vendors"]>, "attachments">, vendorsChildren<TGraph, [...TPath, "vendors"]>, TGraph, [...TPath, "vendors"]>>;
};
type attachmentsModel = ModelInputs<attachmentsScalars, attachmentsParents<attachmentsGraph>, attachmentsChildren<attachmentsGraph>, attachmentsGraph>;
type base_attachmentsScalars = {
  created_at_utc: string;
  filename_extension: string | null;
  id?: number;
  name: string | null;
  path: string | null;
  updated_at_utc?: string;
}
type base_attachmentsParents<TGraph extends any[], TPath extends string[] = []> = {

};
type base_attachmentsChildren<TGraph extends any[], TPath extends string[] = []> = {
 attachments: Child<ModelInputs<attachmentsScalars, Omit<attachmentsParents<TGraph, [...TPath, "attachments"]>, "base_attachments">, attachmentsChildren<TGraph, [...TPath, "attachments"]>, TGraph, [...TPath, "attachments"]>>;
};
type base_attachmentsModel = ModelInputs<base_attachmentsScalars, base_attachmentsParents<base_attachmentsGraph>, base_attachmentsChildren<base_attachmentsGraph>, base_attachmentsGraph>;
type brandsScalars = {
  created_at_utc?: string;
  id: string;
  updated_at_utc?: string;
}
type brandsParents<TGraph extends any[], TPath extends string[] = []> = {

};
type brandsChildren<TGraph extends any[], TPath extends string[] = []> = {
 cms_brand_pages: Child<ModelInputs<cms_brand_pagesScalars, Omit<cms_brand_pagesParents<TGraph, [...TPath, "cms_brand_pages"]>, "brands">, cms_brand_pagesChildren<TGraph, [...TPath, "cms_brand_pages"]>, TGraph, [...TPath, "cms_brand_pages"]>>;
 collection_product_brands: Child<ModelInputs<collection_product_brandsScalars, Omit<collection_product_brandsParents<TGraph, [...TPath, "collection_product_brands"]>, "brands">, collection_product_brandsChildren<TGraph, [...TPath, "collection_product_brands"]>, TGraph, [...TPath, "collection_product_brands"]>>;
 products: Child<ModelInputs<productsScalars, Omit<productsParents<TGraph, [...TPath, "products"]>, "brands">, productsChildren<TGraph, [...TPath, "products"]>, TGraph, [...TPath, "products"]>>;
};
type brandsModel = ModelInputs<brandsScalars, brandsParents<brandsGraph>, brandsChildren<brandsGraph>, brandsGraph>;
type cart_item_product_variantsScalars = {
  cart_item_id: number;
  product_variant_id: number;
}
type cart_item_product_variantsParents<TGraph extends any[], TPath extends string[] = []> = {
 cart_items: Parent<ModelInputs<cart_itemsScalars, cart_itemsParents<TGraph, [...TPath, "cart_items"]>, Omit<cart_itemsChildren<TGraph, [...TPath, "cart_items"]>, "cart_item_product_variants">, TGraph, [...TPath, "cart_items"]>>;
 product_variants: Parent<ModelInputs<product_variantsScalars, product_variantsParents<TGraph, [...TPath, "product_variants"]>, Omit<product_variantsChildren<TGraph, [...TPath, "product_variants"]>, "cart_item_product_variants">, TGraph, [...TPath, "product_variants"]>>;
};
type cart_item_product_variantsChildren<TGraph extends any[], TPath extends string[] = []> = {

};
type cart_item_product_variantsModel = ModelInputs<cart_item_product_variantsScalars, cart_item_product_variantsParents<cart_item_product_variantsGraph>, cart_item_product_variantsChildren<cart_item_product_variantsGraph>, cart_item_product_variantsGraph>;
type cart_item_shipmentsScalars = {
  cart_item_id: number;
  cart_shipment_id: number;
}
type cart_item_shipmentsParents<TGraph extends any[], TPath extends string[] = []> = {
 cart_items: Parent<ModelInputs<cart_itemsScalars, cart_itemsParents<TGraph, [...TPath, "cart_items"]>, Omit<cart_itemsChildren<TGraph, [...TPath, "cart_items"]>, "cart_item_shipments">, TGraph, [...TPath, "cart_items"]>>;
 cart_shipments: Parent<ModelInputs<cart_shipmentsScalars, cart_shipmentsParents<TGraph, [...TPath, "cart_shipments"]>, Omit<cart_shipmentsChildren<TGraph, [...TPath, "cart_shipments"]>, "cart_item_shipments">, TGraph, [...TPath, "cart_shipments"]>>;
};
type cart_item_shipmentsChildren<TGraph extends any[], TPath extends string[] = []> = {

};
type cart_item_shipmentsModel = ModelInputs<cart_item_shipmentsScalars, cart_item_shipmentsParents<cart_item_shipmentsGraph>, cart_item_shipmentsChildren<cart_item_shipmentsGraph>, cart_item_shipmentsGraph>;
type cart_itemsScalars = {
  cart_id: number;
  created_at_utc: string;
  id?: number;
  metadata: Json | null;
  quantity: number;
  requested_at_utc: string;
  updated_at_utc?: string;
  vat_rate: number | null;
}
type cart_itemsParents<TGraph extends any[], TPath extends string[] = []> = {
 carts: Parent<ModelInputs<cartsScalars, cartsParents<TGraph, [...TPath, "carts"]>, Omit<cartsChildren<TGraph, [...TPath, "carts"]>, "cart_items">, TGraph, [...TPath, "carts"]>>;
};
type cart_itemsChildren<TGraph extends any[], TPath extends string[] = []> = {
 cart_item_product_variants: Child<ModelInputs<cart_item_product_variantsScalars, Omit<cart_item_product_variantsParents<TGraph, [...TPath, "cart_item_product_variants"]>, "cart_items">, cart_item_product_variantsChildren<TGraph, [...TPath, "cart_item_product_variants"]>, TGraph, [...TPath, "cart_item_product_variants"]>>;
 cart_item_shipments: Child<ModelInputs<cart_item_shipmentsScalars, Omit<cart_item_shipmentsParents<TGraph, [...TPath, "cart_item_shipments"]>, "cart_items">, cart_item_shipmentsChildren<TGraph, [...TPath, "cart_item_shipments"]>, TGraph, [...TPath, "cart_item_shipments"]>>;
 commission_cart_item: Child<ModelInputs<commission_cart_itemScalars, Omit<commission_cart_itemParents<TGraph, [...TPath, "commission_cart_item"]>, "cart_items">, commission_cart_itemChildren<TGraph, [...TPath, "commission_cart_item"]>, TGraph, [...TPath, "commission_cart_item"]>>;
};
type cart_itemsModel = ModelInputs<cart_itemsScalars, cart_itemsParents<cart_itemsGraph>, cart_itemsChildren<cart_itemsGraph>, cart_itemsGraph>;
type cart_promo_codesScalars = {
  cart_id: number;
  promo_code_id: number;
}
type cart_promo_codesParents<TGraph extends any[], TPath extends string[] = []> = {
 carts: Parent<ModelInputs<cartsScalars, cartsParents<TGraph, [...TPath, "carts"]>, Omit<cartsChildren<TGraph, [...TPath, "carts"]>, "cart_promo_codes">, TGraph, [...TPath, "carts"]>>;
 promo_codes: Parent<ModelInputs<promo_codesScalars, promo_codesParents<TGraph, [...TPath, "promo_codes"]>, Omit<promo_codesChildren<TGraph, [...TPath, "promo_codes"]>, "cart_promo_codes">, TGraph, [...TPath, "promo_codes"]>>;
};
type cart_promo_codesChildren<TGraph extends any[], TPath extends string[] = []> = {

};
type cart_promo_codesModel = ModelInputs<cart_promo_codesScalars, cart_promo_codesParents<cart_promo_codesGraph>, cart_promo_codesChildren<cart_promo_codesGraph>, cart_promo_codesGraph>;
type cart_shipment_arta_quote_servicesScalars = {
  cart_shipment_arta_id: number;
  created_at_utc: string;
  currency_iso_code: string;
  id?: number;
  name: string;
  sub_subtype: string;
  subtype: string;
  type: string;
  unit_price: number;
  updated_at_utc?: string;
}
type cart_shipment_arta_quote_servicesParents<TGraph extends any[], TPath extends string[] = []> = {
 cart_shipment_arta_quotes: Parent<ModelInputs<cart_shipment_arta_quotesScalars, cart_shipment_arta_quotesParents<TGraph, [...TPath, "cart_shipment_arta_quotes"]>, Omit<cart_shipment_arta_quotesChildren<TGraph, [...TPath, "cart_shipment_arta_quotes"]>, "cart_shipment_arta_quote_services">, TGraph, [...TPath, "cart_shipment_arta_quotes"]>>;
};
type cart_shipment_arta_quote_servicesChildren<TGraph extends any[], TPath extends string[] = []> = {

};
type cart_shipment_arta_quote_servicesModel = ModelInputs<cart_shipment_arta_quote_servicesScalars, cart_shipment_arta_quote_servicesParents<cart_shipment_arta_quote_servicesGraph>, cart_shipment_arta_quote_servicesChildren<cart_shipment_arta_quote_servicesGraph>, cart_shipment_arta_quote_servicesGraph>;
type cart_shipment_arta_quotesScalars = {
  arta_id: number;
  cart_shipment_id: number;
  id?: number;
  lead_time?: number;
  raw_data: Json | null;
  source_address_hash: string | null;
  type: string;
}
type cart_shipment_arta_quotesParents<TGraph extends any[], TPath extends string[] = []> = {
 cart_shipments: Parent<ModelInputs<cart_shipmentsScalars, cart_shipmentsParents<TGraph, [...TPath, "cart_shipments"]>, Omit<cart_shipmentsChildren<TGraph, [...TPath, "cart_shipments"]>, "cart_shipment_arta_quotes">, TGraph, [...TPath, "cart_shipments"]>>;
};
type cart_shipment_arta_quotesChildren<TGraph extends any[], TPath extends string[] = []> = {
 cart_shipment_arta_quote_services: Child<ModelInputs<cart_shipment_arta_quote_servicesScalars, Omit<cart_shipment_arta_quote_servicesParents<TGraph, [...TPath, "cart_shipment_arta_quote_services"]>, "cart_shipment_arta_quotes">, cart_shipment_arta_quote_servicesChildren<TGraph, [...TPath, "cart_shipment_arta_quote_services"]>, TGraph, [...TPath, "cart_shipment_arta_quote_services"]>>;
};
type cart_shipment_arta_quotesModel = ModelInputs<cart_shipment_arta_quotesScalars, cart_shipment_arta_quotesParents<cart_shipment_arta_quotesGraph>, cart_shipment_arta_quotesChildren<cart_shipment_arta_quotesGraph>, cart_shipment_arta_quotesGraph>;
type cart_shipment_freight_club_quotesScalars = {
  cart_shipment_id: number;
  freight_club_id: number;
  id?: number;
  lead_time?: number;
  raw_data: Json | null;
  source_address_hash: string | null;
  type: string;
}
type cart_shipment_freight_club_quotesParents<TGraph extends any[], TPath extends string[] = []> = {
 cart_shipments: Parent<ModelInputs<cart_shipmentsScalars, cart_shipmentsParents<TGraph, [...TPath, "cart_shipments"]>, Omit<cart_shipmentsChildren<TGraph, [...TPath, "cart_shipments"]>, "cart_shipment_freight_club_quotes">, TGraph, [...TPath, "cart_shipments"]>>;
};
type cart_shipment_freight_club_quotesChildren<TGraph extends any[], TPath extends string[] = []> = {

};
type cart_shipment_freight_club_quotesModel = ModelInputs<cart_shipment_freight_club_quotesScalars, cart_shipment_freight_club_quotesParents<cart_shipment_freight_club_quotesGraph>, cart_shipment_freight_club_quotesChildren<cart_shipment_freight_club_quotesGraph>, cart_shipment_freight_club_quotesGraph>;
type cart_shipment_vendor_quotesScalars = {
  cart_shipment_id: number;
  id?: number;
  lead_time?: number;
  source_address_hash: string | null;
  type: string;
}
type cart_shipment_vendor_quotesParents<TGraph extends any[], TPath extends string[] = []> = {
 cart_shipments: Parent<ModelInputs<cart_shipmentsScalars, cart_shipmentsParents<TGraph, [...TPath, "cart_shipments"]>, Omit<cart_shipmentsChildren<TGraph, [...TPath, "cart_shipments"]>, "cart_shipment_vendor_quotes">, TGraph, [...TPath, "cart_shipments"]>>;
};
type cart_shipment_vendor_quotesChildren<TGraph extends any[], TPath extends string[] = []> = {

};
type cart_shipment_vendor_quotesModel = ModelInputs<cart_shipment_vendor_quotesScalars, cart_shipment_vendor_quotesParents<cart_shipment_vendor_quotesGraph>, cart_shipment_vendor_quotesChildren<cart_shipment_vendor_quotesGraph>, cart_shipment_vendor_quotesGraph>;
type cart_shipmentsScalars = {
  cart_id: number;
  created_at_utc: string;
  currency_iso_code: string;
  id?: number;
  metadata: Json | null;
  source_id: number;
  unit_price: number;
  updated_at_utc?: string;
  vat_rate: number | null;
}
type cart_shipmentsParents<TGraph extends any[], TPath extends string[] = []> = {
 carts: Parent<ModelInputs<cartsScalars, cartsParents<TGraph, [...TPath, "carts"]>, Omit<cartsChildren<TGraph, [...TPath, "carts"]>, "cart_shipments">, TGraph, [...TPath, "carts"]>>;
 sources: Parent<ModelInputs<sourcesScalars, sourcesParents<TGraph, [...TPath, "sources"]>, Omit<sourcesChildren<TGraph, [...TPath, "sources"]>, "cart_shipments">, TGraph, [...TPath, "sources"]>>;
};
type cart_shipmentsChildren<TGraph extends any[], TPath extends string[] = []> = {
 cart_item_shipments: Child<ModelInputs<cart_item_shipmentsScalars, Omit<cart_item_shipmentsParents<TGraph, [...TPath, "cart_item_shipments"]>, "cart_shipments">, cart_item_shipmentsChildren<TGraph, [...TPath, "cart_item_shipments"]>, TGraph, [...TPath, "cart_item_shipments"]>>;
 cart_shipment_arta_quotes: Child<ModelInputs<cart_shipment_arta_quotesScalars, Omit<cart_shipment_arta_quotesParents<TGraph, [...TPath, "cart_shipment_arta_quotes"]>, "cart_shipments">, cart_shipment_arta_quotesChildren<TGraph, [...TPath, "cart_shipment_arta_quotes"]>, TGraph, [...TPath, "cart_shipment_arta_quotes"]>>;
 cart_shipment_freight_club_quotes: Child<ModelInputs<cart_shipment_freight_club_quotesScalars, Omit<cart_shipment_freight_club_quotesParents<TGraph, [...TPath, "cart_shipment_freight_club_quotes"]>, "cart_shipments">, cart_shipment_freight_club_quotesChildren<TGraph, [...TPath, "cart_shipment_freight_club_quotes"]>, TGraph, [...TPath, "cart_shipment_freight_club_quotes"]>>;
 cart_shipment_vendor_quotes: Child<ModelInputs<cart_shipment_vendor_quotesScalars, Omit<cart_shipment_vendor_quotesParents<TGraph, [...TPath, "cart_shipment_vendor_quotes"]>, "cart_shipments">, cart_shipment_vendor_quotesChildren<TGraph, [...TPath, "cart_shipment_vendor_quotes"]>, TGraph, [...TPath, "cart_shipment_vendor_quotes"]>>;
};
type cart_shipmentsModel = ModelInputs<cart_shipmentsScalars, cart_shipmentsParents<cart_shipmentsGraph>, cart_shipmentsChildren<cart_shipmentsGraph>, cart_shipmentsGraph>;
type cartsScalars = {
  address_line1: string | null;
  address_line2: string | null;
  city: string | null;
  client_id: number | null;
  country_iso_code: string | null;
  country_state: string | null;
  created_at_utc: string;
  email: string | null;
  full_name: string | null;
  id?: number;
  phone: string | null;
  session_id: string | null;
  status: carts_status_typeEnum;
  updated_at_utc?: string;
  zip_code: string | null;
}
type cartsParents<TGraph extends any[], TPath extends string[] = []> = {
 clients: Parent<ModelInputs<clientsScalars, clientsParents<TGraph, [...TPath, "clients"]>, Omit<clientsChildren<TGraph, [...TPath, "clients"]>, "carts">, TGraph, [...TPath, "clients"]>>;
};
type cartsChildren<TGraph extends any[], TPath extends string[] = []> = {
 cart_items: Child<ModelInputs<cart_itemsScalars, Omit<cart_itemsParents<TGraph, [...TPath, "cart_items"]>, "carts">, cart_itemsChildren<TGraph, [...TPath, "cart_items"]>, TGraph, [...TPath, "cart_items"]>>;
 cart_promo_codes: Child<ModelInputs<cart_promo_codesScalars, Omit<cart_promo_codesParents<TGraph, [...TPath, "cart_promo_codes"]>, "carts">, cart_promo_codesChildren<TGraph, [...TPath, "cart_promo_codes"]>, TGraph, [...TPath, "cart_promo_codes"]>>;
 cart_shipments: Child<ModelInputs<cart_shipmentsScalars, Omit<cart_shipmentsParents<TGraph, [...TPath, "cart_shipments"]>, "carts">, cart_shipmentsChildren<TGraph, [...TPath, "cart_shipments"]>, TGraph, [...TPath, "cart_shipments"]>>;
 order_cart: Child<ModelInputs<order_cartScalars, Omit<order_cartParents<TGraph, [...TPath, "order_cart"]>, "carts">, order_cartChildren<TGraph, [...TPath, "order_cart"]>, TGraph, [...TPath, "order_cart"]>>;
};
type cartsModel = ModelInputs<cartsScalars, cartsParents<cartsGraph>, cartsChildren<cartsGraph>, cartsGraph>;
type categoriesScalars = {
  color_hex_code: string;
  id?: number;
  is_hidden?: boolean;
  is_highlighted?: boolean;
  parent_id: number | null;
  position_index_weight: number | null;
  title: string;
}
type categoriesParents<TGraph extends any[], TPath extends string[] = []> = {
 categories: Parent<ModelInputs<categoriesScalars, categoriesParents<TGraph, [...TPath, "categories"]>, Omit<categoriesChildren<TGraph, [...TPath, "categories"]>, "categories">, TGraph, [...TPath, "categories"]>>;
};
type categoriesChildren<TGraph extends any[], TPath extends string[] = []> = {
 categories: Child<ModelInputs<categoriesScalars, Omit<categoriesParents<TGraph, [...TPath, "categories"]>, "categories">, categoriesChildren<TGraph, [...TPath, "categories"]>, TGraph, [...TPath, "categories"]>>;
 expert_application_categories: Child<ModelInputs<expert_application_categoriesScalars, Omit<expert_application_categoriesParents<TGraph, [...TPath, "expert_application_categories"]>, "categories">, expert_application_categoriesChildren<TGraph, [...TPath, "expert_application_categories"]>, TGraph, [...TPath, "expert_application_categories"]>>;
 expert_categories: Child<ModelInputs<expert_categoriesScalars, Omit<expert_categoriesParents<TGraph, [...TPath, "expert_categories"]>, "categories">, expert_categoriesChildren<TGraph, [...TPath, "expert_categories"]>, TGraph, [...TPath, "expert_categories"]>>;
};
type categoriesModel = ModelInputs<categoriesScalars, categoriesParents<categoriesGraph>, categoriesChildren<categoriesGraph>, categoriesGraph>;
type checkout_clientScalars = {
  checkout_id: number;
  client_id: number;
}
type checkout_clientParents<TGraph extends any[], TPath extends string[] = []> = {
 checkouts: Parent<ModelInputs<checkoutsScalars, checkoutsParents<TGraph, [...TPath, "checkouts"]>, Omit<checkoutsChildren<TGraph, [...TPath, "checkouts"]>, "checkout_client">, TGraph, [...TPath, "checkouts"]>>;
 clients: Parent<ModelInputs<clientsScalars, clientsParents<TGraph, [...TPath, "clients"]>, Omit<clientsChildren<TGraph, [...TPath, "clients"]>, "checkout_client">, TGraph, [...TPath, "clients"]>>;
};
type checkout_clientChildren<TGraph extends any[], TPath extends string[] = []> = {

};
type checkout_clientModel = ModelInputs<checkout_clientScalars, checkout_clientParents<checkout_clientGraph>, checkout_clientChildren<checkout_clientGraph>, checkout_clientGraph>;
type checkout_couponsScalars = {
  checkout_id: number;
  coupon_id: number;
}
type checkout_couponsParents<TGraph extends any[], TPath extends string[] = []> = {
 checkouts: Parent<ModelInputs<checkoutsScalars, checkoutsParents<TGraph, [...TPath, "checkouts"]>, Omit<checkoutsChildren<TGraph, [...TPath, "checkouts"]>, "checkout_coupons">, TGraph, [...TPath, "checkouts"]>>;
 coupons: Parent<ModelInputs<couponsScalars, couponsParents<TGraph, [...TPath, "coupons"]>, Omit<couponsChildren<TGraph, [...TPath, "coupons"]>, "checkout_coupons">, TGraph, [...TPath, "coupons"]>>;
};
type checkout_couponsChildren<TGraph extends any[], TPath extends string[] = []> = {

};
type checkout_couponsModel = ModelInputs<checkout_couponsScalars, checkout_couponsParents<checkout_couponsGraph>, checkout_couponsChildren<checkout_couponsGraph>, checkout_couponsGraph>;
type checkout_credit_transactionsScalars = {
  checkout_id: number;
  credit_transaction_id: number;
}
type checkout_credit_transactionsParents<TGraph extends any[], TPath extends string[] = []> = {
 checkouts: Parent<ModelInputs<checkoutsScalars, checkoutsParents<TGraph, [...TPath, "checkouts"]>, Omit<checkoutsChildren<TGraph, [...TPath, "checkouts"]>, "checkout_credit_transactions">, TGraph, [...TPath, "checkouts"]>>;
 credit_transactions: Parent<ModelInputs<credit_transactionsScalars, credit_transactionsParents<TGraph, [...TPath, "credit_transactions"]>, Omit<credit_transactionsChildren<TGraph, [...TPath, "credit_transactions"]>, "checkout_credit_transactions">, TGraph, [...TPath, "credit_transactions"]>>;
};
type checkout_credit_transactionsChildren<TGraph extends any[], TPath extends string[] = []> = {

};
type checkout_credit_transactionsModel = ModelInputs<checkout_credit_transactionsScalars, checkout_credit_transactionsParents<checkout_credit_transactionsGraph>, checkout_credit_transactionsChildren<checkout_credit_transactionsGraph>, checkout_credit_transactionsGraph>;
type checkout_guest_userScalars = {
  checkout_id: number;
  guest_user_id: number;
}
type checkout_guest_userParents<TGraph extends any[], TPath extends string[] = []> = {
 checkouts: Parent<ModelInputs<checkoutsScalars, checkoutsParents<TGraph, [...TPath, "checkouts"]>, Omit<checkoutsChildren<TGraph, [...TPath, "checkouts"]>, "checkout_guest_user">, TGraph, [...TPath, "checkouts"]>>;
 guest_users: Parent<ModelInputs<guest_usersScalars, guest_usersParents<TGraph, [...TPath, "guest_users"]>, Omit<guest_usersChildren<TGraph, [...TPath, "guest_users"]>, "checkout_guest_user">, TGraph, [...TPath, "guest_users"]>>;
};
type checkout_guest_userChildren<TGraph extends any[], TPath extends string[] = []> = {

};
type checkout_guest_userModel = ModelInputs<checkout_guest_userScalars, checkout_guest_userParents<checkout_guest_userGraph>, checkout_guest_userChildren<checkout_guest_userGraph>, checkout_guest_userGraph>;
type checkout_item_couponsScalars = {
  checkout_id: number;
  checkout_item_id: number;
  coupon_id: number;
  created_at_utc: string;
  original_price: number | null;
  price: number;
  quantity: number;
  type: checkout_item_typeEnum;
  updated_at_utc?: string;
  vat_rate: number;
}
type checkout_item_couponsParents<TGraph extends any[], TPath extends string[] = []> = {
 checkout_items: Parent<ModelInputs<checkout_itemsScalars, checkout_itemsParents<TGraph, [...TPath, "checkout_items"]>, Omit<checkout_itemsChildren<TGraph, [...TPath, "checkout_items"]>, "checkout_item_coupons">, TGraph, [...TPath, "checkout_items"]>>;
 checkouts: Parent<ModelInputs<checkoutsScalars, checkoutsParents<TGraph, [...TPath, "checkouts"]>, Omit<checkoutsChildren<TGraph, [...TPath, "checkouts"]>, "checkout_item_coupons">, TGraph, [...TPath, "checkouts"]>>;
 coupons: Parent<ModelInputs<couponsScalars, couponsParents<TGraph, [...TPath, "coupons"]>, Omit<couponsChildren<TGraph, [...TPath, "coupons"]>, "checkout_item_coupons">, TGraph, [...TPath, "coupons"]>>;
};
type checkout_item_couponsChildren<TGraph extends any[], TPath extends string[] = []> = {

};
type checkout_item_couponsModel = ModelInputs<checkout_item_couponsScalars, checkout_item_couponsParents<checkout_item_couponsGraph>, checkout_item_couponsChildren<checkout_item_couponsGraph>, checkout_item_couponsGraph>;
type checkout_item_order_itemsScalars = {
  checkout_item_id: number;
  order_item_id: number;
}
type checkout_item_order_itemsParents<TGraph extends any[], TPath extends string[] = []> = {
 checkout_items: Parent<ModelInputs<checkout_itemsScalars, checkout_itemsParents<TGraph, [...TPath, "checkout_items"]>, Omit<checkout_itemsChildren<TGraph, [...TPath, "checkout_items"]>, "checkout_item_order_items">, TGraph, [...TPath, "checkout_items"]>>;
 order_items: Parent<ModelInputs<order_itemsScalars, order_itemsParents<TGraph, [...TPath, "order_items"]>, Omit<order_itemsChildren<TGraph, [...TPath, "order_items"]>, "checkout_item_order_items">, TGraph, [...TPath, "order_items"]>>;
};
type checkout_item_order_itemsChildren<TGraph extends any[], TPath extends string[] = []> = {

};
type checkout_item_order_itemsModel = ModelInputs<checkout_item_order_itemsScalars, checkout_item_order_itemsParents<checkout_item_order_itemsGraph>, checkout_item_order_itemsChildren<checkout_item_order_itemsGraph>, checkout_item_order_itemsGraph>;
type checkout_item_purchasesScalars = {
  checkout_item_id: number;
  purchase_id: number;
}
type checkout_item_purchasesParents<TGraph extends any[], TPath extends string[] = []> = {
 checkout_items: Parent<ModelInputs<checkout_itemsScalars, checkout_itemsParents<TGraph, [...TPath, "checkout_items"]>, Omit<checkout_itemsChildren<TGraph, [...TPath, "checkout_items"]>, "checkout_item_purchases">, TGraph, [...TPath, "checkout_items"]>>;
 purchases: Parent<ModelInputs<purchasesScalars, purchasesParents<TGraph, [...TPath, "purchases"]>, Omit<purchasesChildren<TGraph, [...TPath, "purchases"]>, "checkout_item_purchases">, TGraph, [...TPath, "purchases"]>>;
};
type checkout_item_purchasesChildren<TGraph extends any[], TPath extends string[] = []> = {

};
type checkout_item_purchasesModel = ModelInputs<checkout_item_purchasesScalars, checkout_item_purchasesParents<checkout_item_purchasesGraph>, checkout_item_purchasesChildren<checkout_item_purchasesGraph>, checkout_item_purchasesGraph>;
type checkout_item_session_bookingsScalars = {
  checkout_item_id: number;
  session_client_id: number;
}
type checkout_item_session_bookingsParents<TGraph extends any[], TPath extends string[] = []> = {
 checkout_items: Parent<ModelInputs<checkout_itemsScalars, checkout_itemsParents<TGraph, [...TPath, "checkout_items"]>, Omit<checkout_itemsChildren<TGraph, [...TPath, "checkout_items"]>, "checkout_item_session_bookings">, TGraph, [...TPath, "checkout_items"]>>;
 session_clients: Parent<ModelInputs<session_clientsScalars, session_clientsParents<TGraph, [...TPath, "session_clients"]>, Omit<session_clientsChildren<TGraph, [...TPath, "session_clients"]>, "checkout_item_session_bookings">, TGraph, [...TPath, "session_clients"]>>;
};
type checkout_item_session_bookingsChildren<TGraph extends any[], TPath extends string[] = []> = {

};
type checkout_item_session_bookingsModel = ModelInputs<checkout_item_session_bookingsScalars, checkout_item_session_bookingsParents<checkout_item_session_bookingsGraph>, checkout_item_session_bookingsChildren<checkout_item_session_bookingsGraph>, checkout_item_session_bookingsGraph>;
type checkout_item_shipmentsScalars = {
  checkout_item_id: number;
  order_shipment_id: number;
}
type checkout_item_shipmentsParents<TGraph extends any[], TPath extends string[] = []> = {
 checkout_items: Parent<ModelInputs<checkout_itemsScalars, checkout_itemsParents<TGraph, [...TPath, "checkout_items"]>, Omit<checkout_itemsChildren<TGraph, [...TPath, "checkout_items"]>, "checkout_item_shipments">, TGraph, [...TPath, "checkout_items"]>>;
 order_shipments: Parent<ModelInputs<order_shipmentsScalars, order_shipmentsParents<TGraph, [...TPath, "order_shipments"]>, Omit<order_shipmentsChildren<TGraph, [...TPath, "order_shipments"]>, "checkout_item_shipments">, TGraph, [...TPath, "order_shipments"]>>;
};
type checkout_item_shipmentsChildren<TGraph extends any[], TPath extends string[] = []> = {

};
type checkout_item_shipmentsModel = ModelInputs<checkout_item_shipmentsScalars, checkout_item_shipmentsParents<checkout_item_shipmentsGraph>, checkout_item_shipmentsChildren<checkout_item_shipmentsGraph>, checkout_item_shipmentsGraph>;
type checkout_itemsScalars = {
  checkout_id: number;
  created_at_utc?: string;
  id?: number;
  metadata: Json | null;
  quantity: number;
  unit_price: number;
  unit_vat_rate: number;
  updated_at_utc?: string;
}
type checkout_itemsParents<TGraph extends any[], TPath extends string[] = []> = {
 checkouts: Parent<ModelInputs<checkoutsScalars, checkoutsParents<TGraph, [...TPath, "checkouts"]>, Omit<checkoutsChildren<TGraph, [...TPath, "checkouts"]>, "checkout_items">, TGraph, [...TPath, "checkouts"]>>;
};
type checkout_itemsChildren<TGraph extends any[], TPath extends string[] = []> = {
 checkout_item_coupons: Child<ModelInputs<checkout_item_couponsScalars, Omit<checkout_item_couponsParents<TGraph, [...TPath, "checkout_item_coupons"]>, "checkout_items">, checkout_item_couponsChildren<TGraph, [...TPath, "checkout_item_coupons"]>, TGraph, [...TPath, "checkout_item_coupons"]>>;
 checkout_item_order_items: Child<ModelInputs<checkout_item_order_itemsScalars, Omit<checkout_item_order_itemsParents<TGraph, [...TPath, "checkout_item_order_items"]>, "checkout_items">, checkout_item_order_itemsChildren<TGraph, [...TPath, "checkout_item_order_items"]>, TGraph, [...TPath, "checkout_item_order_items"]>>;
 checkout_item_purchases: Child<ModelInputs<checkout_item_purchasesScalars, Omit<checkout_item_purchasesParents<TGraph, [...TPath, "checkout_item_purchases"]>, "checkout_items">, checkout_item_purchasesChildren<TGraph, [...TPath, "checkout_item_purchases"]>, TGraph, [...TPath, "checkout_item_purchases"]>>;
 checkout_item_session_bookings: Child<ModelInputs<checkout_item_session_bookingsScalars, Omit<checkout_item_session_bookingsParents<TGraph, [...TPath, "checkout_item_session_bookings"]>, "checkout_items">, checkout_item_session_bookingsChildren<TGraph, [...TPath, "checkout_item_session_bookings"]>, TGraph, [...TPath, "checkout_item_session_bookings"]>>;
 checkout_item_shipments: Child<ModelInputs<checkout_item_shipmentsScalars, Omit<checkout_item_shipmentsParents<TGraph, [...TPath, "checkout_item_shipments"]>, "checkout_items">, checkout_item_shipmentsChildren<TGraph, [...TPath, "checkout_item_shipments"]>, TGraph, [...TPath, "checkout_item_shipments"]>>;
 discounts: Child<ModelInputs<discountsScalars, Omit<discountsParents<TGraph, [...TPath, "discounts"]>, "checkout_items">, discountsChildren<TGraph, [...TPath, "discounts"]>, TGraph, [...TPath, "discounts"]>>;
 refund_checkout_items: Child<ModelInputs<refund_checkout_itemsScalars, Omit<refund_checkout_itemsParents<TGraph, [...TPath, "refund_checkout_items"]>, "checkout_items">, refund_checkout_itemsChildren<TGraph, [...TPath, "refund_checkout_items"]>, TGraph, [...TPath, "refund_checkout_items"]>>;
};
type checkout_itemsModel = ModelInputs<checkout_itemsScalars, checkout_itemsParents<checkout_itemsGraph>, checkout_itemsChildren<checkout_itemsGraph>, checkout_itemsGraph>;
type checkout_promo_codesScalars = {
  checkout_id: number;
  promo_code_id: number;
}
type checkout_promo_codesParents<TGraph extends any[], TPath extends string[] = []> = {
 checkouts: Parent<ModelInputs<checkoutsScalars, checkoutsParents<TGraph, [...TPath, "checkouts"]>, Omit<checkoutsChildren<TGraph, [...TPath, "checkouts"]>, "checkout_promo_codes">, TGraph, [...TPath, "checkouts"]>>;
 promo_codes: Parent<ModelInputs<promo_codesScalars, promo_codesParents<TGraph, [...TPath, "promo_codes"]>, Omit<promo_codesChildren<TGraph, [...TPath, "promo_codes"]>, "checkout_promo_codes">, TGraph, [...TPath, "promo_codes"]>>;
};
type checkout_promo_codesChildren<TGraph extends any[], TPath extends string[] = []> = {

};
type checkout_promo_codesModel = ModelInputs<checkout_promo_codesScalars, checkout_promo_codesParents<checkout_promo_codesGraph>, checkout_promo_codesChildren<checkout_promo_codesGraph>, checkout_promo_codesGraph>;
type checkoutsScalars = {
  created_at_utc: string;
  currency_iso_code?: string;
  currency_rate: number | null;
  display_currency_iso_code: string | null;
  email: string | null;
  id?: number;
  stripe_payment_id: string | null;
  stripe_payment_method_id: string | null;
  stripe_payment_status: payment_status_typeEnum;
  updated_at_utc?: string;
}
type checkoutsParents<TGraph extends any[], TPath extends string[] = []> = {

};
type checkoutsChildren<TGraph extends any[], TPath extends string[] = []> = {
 checkout_client: Child<ModelInputs<checkout_clientScalars, Omit<checkout_clientParents<TGraph, [...TPath, "checkout_client"]>, "checkouts">, checkout_clientChildren<TGraph, [...TPath, "checkout_client"]>, TGraph, [...TPath, "checkout_client"]>>;
 checkout_coupons: Child<ModelInputs<checkout_couponsScalars, Omit<checkout_couponsParents<TGraph, [...TPath, "checkout_coupons"]>, "checkouts">, checkout_couponsChildren<TGraph, [...TPath, "checkout_coupons"]>, TGraph, [...TPath, "checkout_coupons"]>>;
 checkout_credit_transactions: Child<ModelInputs<checkout_credit_transactionsScalars, Omit<checkout_credit_transactionsParents<TGraph, [...TPath, "checkout_credit_transactions"]>, "checkouts">, checkout_credit_transactionsChildren<TGraph, [...TPath, "checkout_credit_transactions"]>, TGraph, [...TPath, "checkout_credit_transactions"]>>;
 checkout_guest_user: Child<ModelInputs<checkout_guest_userScalars, Omit<checkout_guest_userParents<TGraph, [...TPath, "checkout_guest_user"]>, "checkouts">, checkout_guest_userChildren<TGraph, [...TPath, "checkout_guest_user"]>, TGraph, [...TPath, "checkout_guest_user"]>>;
 checkout_item_coupons: Child<ModelInputs<checkout_item_couponsScalars, Omit<checkout_item_couponsParents<TGraph, [...TPath, "checkout_item_coupons"]>, "checkouts">, checkout_item_couponsChildren<TGraph, [...TPath, "checkout_item_coupons"]>, TGraph, [...TPath, "checkout_item_coupons"]>>;
 checkout_items: Child<ModelInputs<checkout_itemsScalars, Omit<checkout_itemsParents<TGraph, [...TPath, "checkout_items"]>, "checkouts">, checkout_itemsChildren<TGraph, [...TPath, "checkout_items"]>, TGraph, [...TPath, "checkout_items"]>>;
 checkout_promo_codes: Child<ModelInputs<checkout_promo_codesScalars, Omit<checkout_promo_codesParents<TGraph, [...TPath, "checkout_promo_codes"]>, "checkouts">, checkout_promo_codesChildren<TGraph, [...TPath, "checkout_promo_codes"]>, TGraph, [...TPath, "checkout_promo_codes"]>>;
};
type checkoutsModel = ModelInputs<checkoutsScalars, checkoutsParents<checkoutsGraph>, checkoutsChildren<checkoutsGraph>, checkoutsGraph>;
type client_addressesScalars = {
  additional_address: string | null;
  address_line1: string;
  address_line2: string | null;
  address_type?: address_typeEnum;
  city: string;
  client_id: number;
  company: string | null;
  country_iso_code: string;
  country_state: string | null;
  created_at_utc: string;
  first_name: string;
  id?: number;
  is_primary?: boolean;
  last_name: string;
  phone: string | null;
  updated_at_utc?: string;
  zip_code: string;
}
type client_addressesParents<TGraph extends any[], TPath extends string[] = []> = {
 clients: Parent<ModelInputs<clientsScalars, clientsParents<TGraph, [...TPath, "clients"]>, Omit<clientsChildren<TGraph, [...TPath, "clients"]>, "client_addresses">, TGraph, [...TPath, "clients"]>>;
};
type client_addressesChildren<TGraph extends any[], TPath extends string[] = []> = {

};
type client_addressesModel = ModelInputs<client_addressesScalars, client_addressesParents<client_addressesGraph>, client_addressesChildren<client_addressesGraph>, client_addressesGraph>;
type client_expert_availability_subscriptionsScalars = {
  client_id: number | null;
  created_at_utc: string;
  email: string | null;
  expert_id: number;
  expert_session_id: number | null;
  id?: number;
}
type client_expert_availability_subscriptionsParents<TGraph extends any[], TPath extends string[] = []> = {
 clients: Parent<ModelInputs<clientsScalars, clientsParents<TGraph, [...TPath, "clients"]>, Omit<clientsChildren<TGraph, [...TPath, "clients"]>, "client_expert_availability_subscriptions">, TGraph, [...TPath, "clients"]>>;
 expert_sessions: Parent<ModelInputs<expert_sessionsScalars, expert_sessionsParents<TGraph, [...TPath, "expert_sessions"]>, Omit<expert_sessionsChildren<TGraph, [...TPath, "expert_sessions"]>, "client_expert_availability_subscriptions">, TGraph, [...TPath, "expert_sessions"]>>;
 experts: Parent<ModelInputs<expertsScalars, expertsParents<TGraph, [...TPath, "experts"]>, Omit<expertsChildren<TGraph, [...TPath, "experts"]>, "client_expert_availability_subscriptions">, TGraph, [...TPath, "experts"]>>;
};
type client_expert_availability_subscriptionsChildren<TGraph extends any[], TPath extends string[] = []> = {

};
type client_expert_availability_subscriptionsModel = ModelInputs<client_expert_availability_subscriptionsScalars, client_expert_availability_subscriptionsParents<client_expert_availability_subscriptionsGraph>, client_expert_availability_subscriptionsChildren<client_expert_availability_subscriptionsGraph>, client_expert_availability_subscriptionsGraph>;
type client_experts_notificationsScalars = {
  client_id: number;
  expert_id: number;
}
type client_experts_notificationsParents<TGraph extends any[], TPath extends string[] = []> = {
 clients: Parent<ModelInputs<clientsScalars, clientsParents<TGraph, [...TPath, "clients"]>, Omit<clientsChildren<TGraph, [...TPath, "clients"]>, "client_experts_notifications">, TGraph, [...TPath, "clients"]>>;
 experts: Parent<ModelInputs<expertsScalars, expertsParents<TGraph, [...TPath, "experts"]>, Omit<expertsChildren<TGraph, [...TPath, "experts"]>, "client_experts_notifications">, TGraph, [...TPath, "experts"]>>;
};
type client_experts_notificationsChildren<TGraph extends any[], TPath extends string[] = []> = {

};
type client_experts_notificationsModel = ModelInputs<client_experts_notificationsScalars, client_experts_notificationsParents<client_experts_notificationsGraph>, client_experts_notificationsChildren<client_experts_notificationsGraph>, client_experts_notificationsGraph>;
type client_favorite_expertsScalars = {
  client_id: number;
  expert_id: number;
}
type client_favorite_expertsParents<TGraph extends any[], TPath extends string[] = []> = {
 clients: Parent<ModelInputs<clientsScalars, clientsParents<TGraph, [...TPath, "clients"]>, Omit<clientsChildren<TGraph, [...TPath, "clients"]>, "client_favorite_experts">, TGraph, [...TPath, "clients"]>>;
 experts: Parent<ModelInputs<expertsScalars, expertsParents<TGraph, [...TPath, "experts"]>, Omit<expertsChildren<TGraph, [...TPath, "experts"]>, "client_favorite_experts">, TGraph, [...TPath, "experts"]>>;
};
type client_favorite_expertsChildren<TGraph extends any[], TPath extends string[] = []> = {

};
type client_favorite_expertsModel = ModelInputs<client_favorite_expertsScalars, client_favorite_expertsParents<client_favorite_expertsGraph>, client_favorite_expertsChildren<client_favorite_expertsGraph>, client_favorite_expertsGraph>;
type client_warningsScalars = {
  client_id: number;
  id?: number;
  warned_at_utc: string;
}
type client_warningsParents<TGraph extends any[], TPath extends string[] = []> = {
 clients: Parent<ModelInputs<clientsScalars, clientsParents<TGraph, [...TPath, "clients"]>, Omit<clientsChildren<TGraph, [...TPath, "clients"]>, "client_warnings">, TGraph, [...TPath, "clients"]>>;
};
type client_warningsChildren<TGraph extends any[], TPath extends string[] = []> = {

};
type client_warningsModel = ModelInputs<client_warningsScalars, client_warningsParents<client_warningsGraph>, client_warningsChildren<client_warningsGraph>, client_warningsGraph>;
type clientsScalars = {
  business_name: string | null;
  change_login_email_token: string | null;
  confirm_email_token: string | null;
  contact_email: string;
  created_at_utc: string;
  first_name: string;
  id?: number;
  is_email_verified?: boolean;
  last_name: string;
  login_email: string;
  new_login_email: string | null;
  phone_number: string | null;
  reset_password_token: string | null;
  status: string;
  stripe_id: string | null;
  timezone: string;
  updated_at_utc?: string;
}
type clientsParents<TGraph extends any[], TPath extends string[] = []> = {

};
type clientsChildren<TGraph extends any[], TPath extends string[] = []> = {
 carts: Child<ModelInputs<cartsScalars, Omit<cartsParents<TGraph, [...TPath, "carts"]>, "clients">, cartsChildren<TGraph, [...TPath, "carts"]>, TGraph, [...TPath, "carts"]>>;
 checkout_client: Child<ModelInputs<checkout_clientScalars, Omit<checkout_clientParents<TGraph, [...TPath, "checkout_client"]>, "clients">, checkout_clientChildren<TGraph, [...TPath, "checkout_client"]>, TGraph, [...TPath, "checkout_client"]>>;
 client_addresses: Child<ModelInputs<client_addressesScalars, Omit<client_addressesParents<TGraph, [...TPath, "client_addresses"]>, "clients">, client_addressesChildren<TGraph, [...TPath, "client_addresses"]>, TGraph, [...TPath, "client_addresses"]>>;
 client_expert_availability_subscriptions: Child<ModelInputs<client_expert_availability_subscriptionsScalars, Omit<client_expert_availability_subscriptionsParents<TGraph, [...TPath, "client_expert_availability_subscriptions"]>, "clients">, client_expert_availability_subscriptionsChildren<TGraph, [...TPath, "client_expert_availability_subscriptions"]>, TGraph, [...TPath, "client_expert_availability_subscriptions"]>>;
 client_experts_notifications: Child<ModelInputs<client_experts_notificationsScalars, Omit<client_experts_notificationsParents<TGraph, [...TPath, "client_experts_notifications"]>, "clients">, client_experts_notificationsChildren<TGraph, [...TPath, "client_experts_notifications"]>, TGraph, [...TPath, "client_experts_notifications"]>>;
 client_favorite_experts: Child<ModelInputs<client_favorite_expertsScalars, Omit<client_favorite_expertsParents<TGraph, [...TPath, "client_favorite_experts"]>, "clients">, client_favorite_expertsChildren<TGraph, [...TPath, "client_favorite_experts"]>, TGraph, [...TPath, "client_favorite_experts"]>>;
 client_warnings: Child<ModelInputs<client_warningsScalars, Omit<client_warningsParents<TGraph, [...TPath, "client_warnings"]>, "clients">, client_warningsChildren<TGraph, [...TPath, "client_warnings"]>, TGraph, [...TPath, "client_warnings"]>>;
 credit_transactions: Child<ModelInputs<credit_transactionsScalars, Omit<credit_transactionsParents<TGraph, [...TPath, "credit_transactions"]>, "clients">, credit_transactionsChildren<TGraph, [...TPath, "credit_transactions"]>, TGraph, [...TPath, "credit_transactions"]>>;
 feature_flag_client: Child<ModelInputs<feature_flag_clientScalars, Omit<feature_flag_clientParents<TGraph, [...TPath, "feature_flag_client"]>, "clients">, feature_flag_clientChildren<TGraph, [...TPath, "feature_flag_client"]>, TGraph, [...TPath, "feature_flag_client"]>>;
 order_clients: Child<ModelInputs<order_clientsScalars, Omit<order_clientsParents<TGraph, [...TPath, "order_clients"]>, "clients">, order_clientsChildren<TGraph, [...TPath, "order_clients"]>, TGraph, [...TPath, "order_clients"]>>;
 purchases: Child<ModelInputs<purchasesScalars, Omit<purchasesParents<TGraph, [...TPath, "purchases"]>, "clients">, purchasesChildren<TGraph, [...TPath, "purchases"]>, TGraph, [...TPath, "purchases"]>>;
 session_clients: Child<ModelInputs<session_clientsScalars, Omit<session_clientsParents<TGraph, [...TPath, "session_clients"]>, "clients">, session_clientsChildren<TGraph, [...TPath, "session_clients"]>, TGraph, [...TPath, "session_clients"]>>;
};
type clientsModel = ModelInputs<clientsScalars, clientsParents<clientsGraph>, clientsChildren<clientsGraph>, clientsGraph>;
type cms_alphabetical_index_widgetsScalars = {
  cms_widget_id: number;
  created_at_utc: string;
  id?: number;
  title: string | null;
  type: cms_alphabetical_index_widgets_typeEnum;
  updated_at_utc: string;
}
type cms_alphabetical_index_widgetsParents<TGraph extends any[], TPath extends string[] = []> = {
 cms_widgets: Parent<ModelInputs<cms_widgetsScalars, cms_widgetsParents<TGraph, [...TPath, "cms_widgets"]>, Omit<cms_widgetsChildren<TGraph, [...TPath, "cms_widgets"]>, "cms_alphabetical_index_widgets">, TGraph, [...TPath, "cms_widgets"]>>;
};
type cms_alphabetical_index_widgetsChildren<TGraph extends any[], TPath extends string[] = []> = {

};
type cms_alphabetical_index_widgetsModel = ModelInputs<cms_alphabetical_index_widgetsScalars, cms_alphabetical_index_widgetsParents<cms_alphabetical_index_widgetsGraph>, cms_alphabetical_index_widgetsChildren<cms_alphabetical_index_widgetsGraph>, cms_alphabetical_index_widgetsGraph>;
type cms_alt_experts_listing_widgetsScalars = {
  cms_widget_id: number;
  created_at_utc: string;
  id?: number;
  updated_at_utc: string;
}
type cms_alt_experts_listing_widgetsParents<TGraph extends any[], TPath extends string[] = []> = {
 cms_widgets: Parent<ModelInputs<cms_widgetsScalars, cms_widgetsParents<TGraph, [...TPath, "cms_widgets"]>, Omit<cms_widgetsChildren<TGraph, [...TPath, "cms_widgets"]>, "cms_alt_experts_listing_widgets">, TGraph, [...TPath, "cms_widgets"]>>;
};
type cms_alt_experts_listing_widgetsChildren<TGraph extends any[], TPath extends string[] = []> = {

};
type cms_alt_experts_listing_widgetsModel = ModelInputs<cms_alt_experts_listing_widgetsScalars, cms_alt_experts_listing_widgetsParents<cms_alt_experts_listing_widgetsGraph>, cms_alt_experts_listing_widgetsChildren<cms_alt_experts_listing_widgetsGraph>, cms_alt_experts_listing_widgetsGraph>;
type cms_alt_value_proposition_widgetsScalars = {
  cms_widget_id: number;
  created_at_utc: string;
  id?: number;
  updated_at_utc: string;
}
type cms_alt_value_proposition_widgetsParents<TGraph extends any[], TPath extends string[] = []> = {
 cms_widgets: Parent<ModelInputs<cms_widgetsScalars, cms_widgetsParents<TGraph, [...TPath, "cms_widgets"]>, Omit<cms_widgetsChildren<TGraph, [...TPath, "cms_widgets"]>, "cms_alt_value_proposition_widgets">, TGraph, [...TPath, "cms_widgets"]>>;
};
type cms_alt_value_proposition_widgetsChildren<TGraph extends any[], TPath extends string[] = []> = {

};
type cms_alt_value_proposition_widgetsModel = ModelInputs<cms_alt_value_proposition_widgetsScalars, cms_alt_value_proposition_widgetsParents<cms_alt_value_proposition_widgetsGraph>, cms_alt_value_proposition_widgetsChildren<cms_alt_value_proposition_widgetsGraph>, cms_alt_value_proposition_widgetsGraph>;
type cms_article_heading_widgetsScalars = {
  author: string;
  caption: string | null;
  cms_widget_id: number;
  created_at_utc: string;
  id?: number;
  title: string;
  updated_at_utc?: string;
}
type cms_article_heading_widgetsParents<TGraph extends any[], TPath extends string[] = []> = {
 cms_widgets: Parent<ModelInputs<cms_widgetsScalars, cms_widgetsParents<TGraph, [...TPath, "cms_widgets"]>, Omit<cms_widgetsChildren<TGraph, [...TPath, "cms_widgets"]>, "cms_article_heading_widgets">, TGraph, [...TPath, "cms_widgets"]>>;
};
type cms_article_heading_widgetsChildren<TGraph extends any[], TPath extends string[] = []> = {

};
type cms_article_heading_widgetsModel = ModelInputs<cms_article_heading_widgetsScalars, cms_article_heading_widgetsParents<cms_article_heading_widgetsGraph>, cms_article_heading_widgetsChildren<cms_article_heading_widgetsGraph>, cms_article_heading_widgetsGraph>;
type cms_article_pagesScalars = {
  author: string;
  cms_page_id: number;
  created_at_utc: string;
  id?: number;
  preview_attachment_id: number | null;
  preview_text: string | null;
  related_articles_widget_id: number | null;
  tag: string | null;
  updated_at_utc?: string;
}
type cms_article_pagesParents<TGraph extends any[], TPath extends string[] = []> = {
 attachments: Parent<ModelInputs<attachmentsScalars, attachmentsParents<TGraph, [...TPath, "attachments"]>, Omit<attachmentsChildren<TGraph, [...TPath, "attachments"]>, "cms_article_pages">, TGraph, [...TPath, "attachments"]>>;
 cms_pages: Parent<ModelInputs<cms_pagesScalars, cms_pagesParents<TGraph, [...TPath, "cms_pages"]>, Omit<cms_pagesChildren<TGraph, [...TPath, "cms_pages"]>, "cms_article_pages">, TGraph, [...TPath, "cms_pages"]>>;
 cms_widgets: Parent<ModelInputs<cms_widgetsScalars, cms_widgetsParents<TGraph, [...TPath, "cms_widgets"]>, Omit<cms_widgetsChildren<TGraph, [...TPath, "cms_widgets"]>, "cms_article_pages">, TGraph, [...TPath, "cms_widgets"]>>;
};
type cms_article_pagesChildren<TGraph extends any[], TPath extends string[] = []> = {
 cms_articles_widget_items: Child<ModelInputs<cms_articles_widget_itemsScalars, Omit<cms_articles_widget_itemsParents<TGraph, [...TPath, "cms_articles_widget_items"]>, "cms_article_pages">, cms_articles_widget_itemsChildren<TGraph, [...TPath, "cms_articles_widget_items"]>, TGraph, [...TPath, "cms_articles_widget_items"]>>;
};
type cms_article_pagesModel = ModelInputs<cms_article_pagesScalars, cms_article_pagesParents<cms_article_pagesGraph>, cms_article_pagesChildren<cms_article_pagesGraph>, cms_article_pagesGraph>;
type cms_articles_widget_itemsScalars = {
  cms_article_page_id: number;
  cms_articles_widget_id: number;
  created_at_utc: string;
  id?: number;
  position_index_weight: number | null;
  updated_at_utc?: string;
}
type cms_articles_widget_itemsParents<TGraph extends any[], TPath extends string[] = []> = {
 cms_article_pages: Parent<ModelInputs<cms_article_pagesScalars, cms_article_pagesParents<TGraph, [...TPath, "cms_article_pages"]>, Omit<cms_article_pagesChildren<TGraph, [...TPath, "cms_article_pages"]>, "cms_articles_widget_items">, TGraph, [...TPath, "cms_article_pages"]>>;
 cms_articles_widgets: Parent<ModelInputs<cms_articles_widgetsScalars, cms_articles_widgetsParents<TGraph, [...TPath, "cms_articles_widgets"]>, Omit<cms_articles_widgetsChildren<TGraph, [...TPath, "cms_articles_widgets"]>, "cms_articles_widget_items">, TGraph, [...TPath, "cms_articles_widgets"]>>;
};
type cms_articles_widget_itemsChildren<TGraph extends any[], TPath extends string[] = []> = {

};
type cms_articles_widget_itemsModel = ModelInputs<cms_articles_widget_itemsScalars, cms_articles_widget_itemsParents<cms_articles_widget_itemsGraph>, cms_articles_widget_itemsChildren<cms_articles_widget_itemsGraph>, cms_articles_widget_itemsGraph>;
type cms_articles_widgetsScalars = {
  cms_widget_id: number;
  created_at_utc: string;
  id?: number;
  subtitle: string | null;
  title: string | null;
  updated_at_utc?: string;
}
type cms_articles_widgetsParents<TGraph extends any[], TPath extends string[] = []> = {
 cms_widgets: Parent<ModelInputs<cms_widgetsScalars, cms_widgetsParents<TGraph, [...TPath, "cms_widgets"]>, Omit<cms_widgetsChildren<TGraph, [...TPath, "cms_widgets"]>, "cms_articles_widgets">, TGraph, [...TPath, "cms_widgets"]>>;
};
type cms_articles_widgetsChildren<TGraph extends any[], TPath extends string[] = []> = {
 cms_articles_widget_items: Child<ModelInputs<cms_articles_widget_itemsScalars, Omit<cms_articles_widget_itemsParents<TGraph, [...TPath, "cms_articles_widget_items"]>, "cms_articles_widgets">, cms_articles_widget_itemsChildren<TGraph, [...TPath, "cms_articles_widget_items"]>, TGraph, [...TPath, "cms_articles_widget_items"]>>;
};
type cms_articles_widgetsModel = ModelInputs<cms_articles_widgetsScalars, cms_articles_widgetsParents<cms_articles_widgetsGraph>, cms_articles_widgetsChildren<cms_articles_widgetsGraph>, cms_articles_widgetsGraph>;
type cms_banner_widgetsScalars = {
  button_text: string;
  cms_widget_id: number;
  created_at_utc: string;
  expert_id: number | null;
  href: string | null;
  id?: number;
  title: string;
  updated_at_utc?: string;
}
type cms_banner_widgetsParents<TGraph extends any[], TPath extends string[] = []> = {
 cms_widgets: Parent<ModelInputs<cms_widgetsScalars, cms_widgetsParents<TGraph, [...TPath, "cms_widgets"]>, Omit<cms_widgetsChildren<TGraph, [...TPath, "cms_widgets"]>, "cms_banner_widgets">, TGraph, [...TPath, "cms_widgets"]>>;
 experts: Parent<ModelInputs<expertsScalars, expertsParents<TGraph, [...TPath, "experts"]>, Omit<expertsChildren<TGraph, [...TPath, "experts"]>, "cms_banner_widgets">, TGraph, [...TPath, "experts"]>>;
};
type cms_banner_widgetsChildren<TGraph extends any[], TPath extends string[] = []> = {

};
type cms_banner_widgetsModel = ModelInputs<cms_banner_widgetsScalars, cms_banner_widgetsParents<cms_banner_widgetsGraph>, cms_banner_widgetsChildren<cms_banner_widgetsGraph>, cms_banner_widgetsGraph>;
type cms_brand_pagesScalars = {
  brand_id: string;
  cms_page_id: number;
  created_at_utc?: string;
  id?: number;
  updated_at_utc?: string;
}
type cms_brand_pagesParents<TGraph extends any[], TPath extends string[] = []> = {
 brands: Parent<ModelInputs<brandsScalars, brandsParents<TGraph, [...TPath, "brands"]>, Omit<brandsChildren<TGraph, [...TPath, "brands"]>, "cms_brand_pages">, TGraph, [...TPath, "brands"]>>;
 cms_pages: Parent<ModelInputs<cms_pagesScalars, cms_pagesParents<TGraph, [...TPath, "cms_pages"]>, Omit<cms_pagesChildren<TGraph, [...TPath, "cms_pages"]>, "cms_brand_pages">, TGraph, [...TPath, "cms_pages"]>>;
};
type cms_brand_pagesChildren<TGraph extends any[], TPath extends string[] = []> = {

};
type cms_brand_pagesModel = ModelInputs<cms_brand_pagesScalars, cms_brand_pagesParents<cms_brand_pagesGraph>, cms_brand_pagesChildren<cms_brand_pagesGraph>, cms_brand_pagesGraph>;
type cms_card_navigation_widget_itemsScalars = {
  attachment_id: number;
  cms_card_navigation_widget_id: number;
  cms_page_id: number;
  created_at_utc: string;
  id?: number;
  position_index_weight: number | null;
  title: string;
  updated_at_utc: string;
}
type cms_card_navigation_widget_itemsParents<TGraph extends any[], TPath extends string[] = []> = {
 attachments: Parent<ModelInputs<attachmentsScalars, attachmentsParents<TGraph, [...TPath, "attachments"]>, Omit<attachmentsChildren<TGraph, [...TPath, "attachments"]>, "cms_card_navigation_widget_items">, TGraph, [...TPath, "attachments"]>>;
 cms_card_navigation_widgets: Parent<ModelInputs<cms_card_navigation_widgetsScalars, cms_card_navigation_widgetsParents<TGraph, [...TPath, "cms_card_navigation_widgets"]>, Omit<cms_card_navigation_widgetsChildren<TGraph, [...TPath, "cms_card_navigation_widgets"]>, "cms_card_navigation_widget_items">, TGraph, [...TPath, "cms_card_navigation_widgets"]>>;
 cms_pages: Parent<ModelInputs<cms_pagesScalars, cms_pagesParents<TGraph, [...TPath, "cms_pages"]>, Omit<cms_pagesChildren<TGraph, [...TPath, "cms_pages"]>, "cms_card_navigation_widget_items">, TGraph, [...TPath, "cms_pages"]>>;
};
type cms_card_navigation_widget_itemsChildren<TGraph extends any[], TPath extends string[] = []> = {

};
type cms_card_navigation_widget_itemsModel = ModelInputs<cms_card_navigation_widget_itemsScalars, cms_card_navigation_widget_itemsParents<cms_card_navigation_widget_itemsGraph>, cms_card_navigation_widget_itemsChildren<cms_card_navigation_widget_itemsGraph>, cms_card_navigation_widget_itemsGraph>;
type cms_card_navigation_widgetsScalars = {
  button_link: string | null;
  button_text: string | null;
  cms_widget_id: number;
  created_at_utc: string;
  id?: number;
  placement?: cms_card_navigation_widgets_placement_typeEnum;
  subtitle: string | null;
  title: string | null;
  updated_at_utc: string;
}
type cms_card_navigation_widgetsParents<TGraph extends any[], TPath extends string[] = []> = {
 cms_widgets: Parent<ModelInputs<cms_widgetsScalars, cms_widgetsParents<TGraph, [...TPath, "cms_widgets"]>, Omit<cms_widgetsChildren<TGraph, [...TPath, "cms_widgets"]>, "cms_card_navigation_widgets">, TGraph, [...TPath, "cms_widgets"]>>;
};
type cms_card_navigation_widgetsChildren<TGraph extends any[], TPath extends string[] = []> = {
 cms_card_navigation_widget_items: Child<ModelInputs<cms_card_navigation_widget_itemsScalars, Omit<cms_card_navigation_widget_itemsParents<TGraph, [...TPath, "cms_card_navigation_widget_items"]>, "cms_card_navigation_widgets">, cms_card_navigation_widget_itemsChildren<TGraph, [...TPath, "cms_card_navigation_widget_items"]>, TGraph, [...TPath, "cms_card_navigation_widget_items"]>>;
};
type cms_card_navigation_widgetsModel = ModelInputs<cms_card_navigation_widgetsScalars, cms_card_navigation_widgetsParents<cms_card_navigation_widgetsGraph>, cms_card_navigation_widgetsChildren<cms_card_navigation_widgetsGraph>, cms_card_navigation_widgetsGraph>;
type cms_category_collection_widget_itemsScalars = {
  attachment_id: number;
  cms_category_collection_widget_id: number;
  cms_showroom_page_id: number;
  created_at_utc: string;
  id?: number;
  position_index_weight: number | null;
  title: string;
  updated_at_utc?: string;
}
type cms_category_collection_widget_itemsParents<TGraph extends any[], TPath extends string[] = []> = {
 attachments: Parent<ModelInputs<attachmentsScalars, attachmentsParents<TGraph, [...TPath, "attachments"]>, Omit<attachmentsChildren<TGraph, [...TPath, "attachments"]>, "cms_category_collection_widget_items">, TGraph, [...TPath, "attachments"]>>;
 cms_category_collection_widgets: Parent<ModelInputs<cms_category_collection_widgetsScalars, cms_category_collection_widgetsParents<TGraph, [...TPath, "cms_category_collection_widgets"]>, Omit<cms_category_collection_widgetsChildren<TGraph, [...TPath, "cms_category_collection_widgets"]>, "cms_category_collection_widget_items">, TGraph, [...TPath, "cms_category_collection_widgets"]>>;
 cms_showroom_pages: Parent<ModelInputs<cms_showroom_pagesScalars, cms_showroom_pagesParents<TGraph, [...TPath, "cms_showroom_pages"]>, Omit<cms_showroom_pagesChildren<TGraph, [...TPath, "cms_showroom_pages"]>, "cms_category_collection_widget_items">, TGraph, [...TPath, "cms_showroom_pages"]>>;
};
type cms_category_collection_widget_itemsChildren<TGraph extends any[], TPath extends string[] = []> = {

};
type cms_category_collection_widget_itemsModel = ModelInputs<cms_category_collection_widget_itemsScalars, cms_category_collection_widget_itemsParents<cms_category_collection_widget_itemsGraph>, cms_category_collection_widget_itemsChildren<cms_category_collection_widget_itemsGraph>, cms_category_collection_widget_itemsGraph>;
type cms_category_collection_widgetsScalars = {
  cms_widget_id: number;
  created_at_utc: string;
  id?: number;
  placement?: cms_category_collection_widgets_placement_typeEnum;
  subtitle: string | null;
  title: string;
  updated_at_utc?: string;
}
type cms_category_collection_widgetsParents<TGraph extends any[], TPath extends string[] = []> = {
 cms_widgets: Parent<ModelInputs<cms_widgetsScalars, cms_widgetsParents<TGraph, [...TPath, "cms_widgets"]>, Omit<cms_widgetsChildren<TGraph, [...TPath, "cms_widgets"]>, "cms_category_collection_widgets">, TGraph, [...TPath, "cms_widgets"]>>;
};
type cms_category_collection_widgetsChildren<TGraph extends any[], TPath extends string[] = []> = {
 cms_category_collection_widget_items: Child<ModelInputs<cms_category_collection_widget_itemsScalars, Omit<cms_category_collection_widget_itemsParents<TGraph, [...TPath, "cms_category_collection_widget_items"]>, "cms_category_collection_widgets">, cms_category_collection_widget_itemsChildren<TGraph, [...TPath, "cms_category_collection_widget_items"]>, TGraph, [...TPath, "cms_category_collection_widget_items"]>>;
};
type cms_category_collection_widgetsModel = ModelInputs<cms_category_collection_widgetsScalars, cms_category_collection_widgetsParents<cms_category_collection_widgetsGraph>, cms_category_collection_widgetsChildren<cms_category_collection_widgetsGraph>, cms_category_collection_widgetsGraph>;
type cms_category_header_widget_itemsScalars = {
  attachment_id: number;
  cms_category_header_widget_id: number;
  created_at_utc: string;
  id?: number;
  position_index_weight: number | null;
  updated_at_utc?: string;
}
type cms_category_header_widget_itemsParents<TGraph extends any[], TPath extends string[] = []> = {
 attachments: Parent<ModelInputs<attachmentsScalars, attachmentsParents<TGraph, [...TPath, "attachments"]>, Omit<attachmentsChildren<TGraph, [...TPath, "attachments"]>, "cms_category_header_widget_items">, TGraph, [...TPath, "attachments"]>>;
 cms_category_header_widgets: Parent<ModelInputs<cms_category_header_widgetsScalars, cms_category_header_widgetsParents<TGraph, [...TPath, "cms_category_header_widgets"]>, Omit<cms_category_header_widgetsChildren<TGraph, [...TPath, "cms_category_header_widgets"]>, "cms_category_header_widget_items">, TGraph, [...TPath, "cms_category_header_widgets"]>>;
};
type cms_category_header_widget_itemsChildren<TGraph extends any[], TPath extends string[] = []> = {

};
type cms_category_header_widget_itemsModel = ModelInputs<cms_category_header_widget_itemsScalars, cms_category_header_widget_itemsParents<cms_category_header_widget_itemsGraph>, cms_category_header_widget_itemsChildren<cms_category_header_widget_itemsGraph>, cms_category_header_widget_itemsGraph>;
type cms_category_header_widgetsScalars = {
  cms_widget_id: number;
  created_at_utc: string;
  expert_id: number | null;
  id?: number;
  subtitle: string | null;
  title: string;
  type?: cms_category_header_widgets_type_typeEnum;
  updated_at_utc?: string;
}
type cms_category_header_widgetsParents<TGraph extends any[], TPath extends string[] = []> = {
 cms_widgets: Parent<ModelInputs<cms_widgetsScalars, cms_widgetsParents<TGraph, [...TPath, "cms_widgets"]>, Omit<cms_widgetsChildren<TGraph, [...TPath, "cms_widgets"]>, "cms_category_header_widgets">, TGraph, [...TPath, "cms_widgets"]>>;
 experts: Parent<ModelInputs<expertsScalars, expertsParents<TGraph, [...TPath, "experts"]>, Omit<expertsChildren<TGraph, [...TPath, "experts"]>, "cms_category_header_widgets">, TGraph, [...TPath, "experts"]>>;
};
type cms_category_header_widgetsChildren<TGraph extends any[], TPath extends string[] = []> = {
 cms_category_header_widget_items: Child<ModelInputs<cms_category_header_widget_itemsScalars, Omit<cms_category_header_widget_itemsParents<TGraph, [...TPath, "cms_category_header_widget_items"]>, "cms_category_header_widgets">, cms_category_header_widget_itemsChildren<TGraph, [...TPath, "cms_category_header_widget_items"]>, TGraph, [...TPath, "cms_category_header_widget_items"]>>;
};
type cms_category_header_widgetsModel = ModelInputs<cms_category_header_widgetsScalars, cms_category_header_widgetsParents<cms_category_header_widgetsGraph>, cms_category_header_widgetsChildren<cms_category_header_widgetsGraph>, cms_category_header_widgetsGraph>;
type cms_category_pagesScalars = {
  cms_page_id: number;
  created_at_utc: string;
  id?: number;
  product_category_id: number;
  updated_at_utc: string;
}
type cms_category_pagesParents<TGraph extends any[], TPath extends string[] = []> = {
 cms_pages: Parent<ModelInputs<cms_pagesScalars, cms_pagesParents<TGraph, [...TPath, "cms_pages"]>, Omit<cms_pagesChildren<TGraph, [...TPath, "cms_pages"]>, "cms_category_pages">, TGraph, [...TPath, "cms_pages"]>>;
 product_categories: Parent<ModelInputs<product_categoriesScalars, product_categoriesParents<TGraph, [...TPath, "product_categories"]>, Omit<product_categoriesChildren<TGraph, [...TPath, "product_categories"]>, "cms_category_pages">, TGraph, [...TPath, "product_categories"]>>;
};
type cms_category_pagesChildren<TGraph extends any[], TPath extends string[] = []> = {

};
type cms_category_pagesModel = ModelInputs<cms_category_pagesScalars, cms_category_pagesParents<cms_category_pagesGraph>, cms_category_pagesChildren<cms_category_pagesGraph>, cms_category_pagesGraph>;
type cms_collection_header_widgetsScalars = {
  cms_widget_id: number;
  collection_header_type?: cms_collection_header_widgets_collection_header_type_typeEnum;
  created_at_utc: string;
  header_image_attachment_id: number;
  id?: number;
  mobile_image_attachment_id: number | null;
  subtitle: string | null;
  title: string;
  updated_at_utc?: string;
}
type cms_collection_header_widgetsParents<TGraph extends any[], TPath extends string[] = []> = {
 attachments_cms_collection_header_widgets_header_image_attachment_idToattachments: Parent<ModelInputs<attachmentsScalars, attachmentsParents<TGraph, [...TPath, "attachments_cms_collection_header_widgets_header_image_attachment_idToattachments"]>, Omit<attachmentsChildren<TGraph, [...TPath, "attachments_cms_collection_header_widgets_header_image_attachment_idToattachments"]>, "cms_collection_header_widgets_cms_collection_header_widgets_header_image_attachment_idToattachments">, TGraph, [...TPath, "attachments_cms_collection_header_widgets_header_image_attachment_idToattachments"]>>;
 attachments_cms_collection_header_widgets_mobile_image_attachment_idToattachments: Parent<ModelInputs<attachmentsScalars, attachmentsParents<TGraph, [...TPath, "attachments_cms_collection_header_widgets_mobile_image_attachment_idToattachments"]>, Omit<attachmentsChildren<TGraph, [...TPath, "attachments_cms_collection_header_widgets_mobile_image_attachment_idToattachments"]>, "cms_collection_header_widgets_cms_collection_header_widgets_mobile_image_attachment_idToattachments">, TGraph, [...TPath, "attachments_cms_collection_header_widgets_mobile_image_attachment_idToattachments"]>>;
 cms_widgets: Parent<ModelInputs<cms_widgetsScalars, cms_widgetsParents<TGraph, [...TPath, "cms_widgets"]>, Omit<cms_widgetsChildren<TGraph, [...TPath, "cms_widgets"]>, "cms_collection_header_widgets">, TGraph, [...TPath, "cms_widgets"]>>;
};
type cms_collection_header_widgetsChildren<TGraph extends any[], TPath extends string[] = []> = {

};
type cms_collection_header_widgetsModel = ModelInputs<cms_collection_header_widgetsScalars, cms_collection_header_widgetsParents<cms_collection_header_widgetsGraph>, cms_collection_header_widgetsChildren<cms_collection_header_widgetsGraph>, cms_collection_header_widgetsGraph>;
type cms_collections_carousel_widget_itemsScalars = {
  caption: string | null;
  cms_collections_carousel_widget_id: number;
  cms_showroom_page_id: number;
  created_at_utc: string;
  id?: number;
  position_index_weight: number | null;
  preview_image_attachment_id: number;
  profile_image_attachment_id: number | null;
  updated_at_utc?: string;
}
type cms_collections_carousel_widget_itemsParents<TGraph extends any[], TPath extends string[] = []> = {
 attachments_cms_collections_carousel_widget_items_preview_image_attachment_idToattachments: Parent<ModelInputs<attachmentsScalars, attachmentsParents<TGraph, [...TPath, "attachments_cms_collections_carousel_widget_items_preview_image_attachment_idToattachments"]>, Omit<attachmentsChildren<TGraph, [...TPath, "attachments_cms_collections_carousel_widget_items_preview_image_attachment_idToattachments"]>, "cms_collections_carousel_widget_items_cms_collections_carousel_widget_items_preview_image_attachment_idToattachments">, TGraph, [...TPath, "attachments_cms_collections_carousel_widget_items_preview_image_attachment_idToattachments"]>>;
 attachments_cms_collections_carousel_widget_items_profile_image_attachment_idToattachments: Parent<ModelInputs<attachmentsScalars, attachmentsParents<TGraph, [...TPath, "attachments_cms_collections_carousel_widget_items_profile_image_attachment_idToattachments"]>, Omit<attachmentsChildren<TGraph, [...TPath, "attachments_cms_collections_carousel_widget_items_profile_image_attachment_idToattachments"]>, "cms_collections_carousel_widget_items_cms_collections_carousel_widget_items_profile_image_attachment_idToattachments">, TGraph, [...TPath, "attachments_cms_collections_carousel_widget_items_profile_image_attachment_idToattachments"]>>;
 cms_collections_carousel_widgets: Parent<ModelInputs<cms_collections_carousel_widgetsScalars, cms_collections_carousel_widgetsParents<TGraph, [...TPath, "cms_collections_carousel_widgets"]>, Omit<cms_collections_carousel_widgetsChildren<TGraph, [...TPath, "cms_collections_carousel_widgets"]>, "cms_collections_carousel_widget_items">, TGraph, [...TPath, "cms_collections_carousel_widgets"]>>;
 cms_showroom_pages: Parent<ModelInputs<cms_showroom_pagesScalars, cms_showroom_pagesParents<TGraph, [...TPath, "cms_showroom_pages"]>, Omit<cms_showroom_pagesChildren<TGraph, [...TPath, "cms_showroom_pages"]>, "cms_collections_carousel_widget_items">, TGraph, [...TPath, "cms_showroom_pages"]>>;
};
type cms_collections_carousel_widget_itemsChildren<TGraph extends any[], TPath extends string[] = []> = {

};
type cms_collections_carousel_widget_itemsModel = ModelInputs<cms_collections_carousel_widget_itemsScalars, cms_collections_carousel_widget_itemsParents<cms_collections_carousel_widget_itemsGraph>, cms_collections_carousel_widget_itemsChildren<cms_collections_carousel_widget_itemsGraph>, cms_collections_carousel_widget_itemsGraph>;
type cms_collections_carousel_widgetsScalars = {
  cms_showroom_page_id: number | null;
  cms_widget_id: number;
  created_at_utc: string;
  has_explore_all_button?: boolean;
  id?: number;
  subtitle: string | null;
  title: string;
  updated_at_utc?: string;
}
type cms_collections_carousel_widgetsParents<TGraph extends any[], TPath extends string[] = []> = {
 cms_showroom_pages: Parent<ModelInputs<cms_showroom_pagesScalars, cms_showroom_pagesParents<TGraph, [...TPath, "cms_showroom_pages"]>, Omit<cms_showroom_pagesChildren<TGraph, [...TPath, "cms_showroom_pages"]>, "cms_collections_carousel_widgets">, TGraph, [...TPath, "cms_showroom_pages"]>>;
 cms_widgets: Parent<ModelInputs<cms_widgetsScalars, cms_widgetsParents<TGraph, [...TPath, "cms_widgets"]>, Omit<cms_widgetsChildren<TGraph, [...TPath, "cms_widgets"]>, "cms_collections_carousel_widgets">, TGraph, [...TPath, "cms_widgets"]>>;
};
type cms_collections_carousel_widgetsChildren<TGraph extends any[], TPath extends string[] = []> = {
 cms_collections_carousel_widget_items: Child<ModelInputs<cms_collections_carousel_widget_itemsScalars, Omit<cms_collections_carousel_widget_itemsParents<TGraph, [...TPath, "cms_collections_carousel_widget_items"]>, "cms_collections_carousel_widgets">, cms_collections_carousel_widget_itemsChildren<TGraph, [...TPath, "cms_collections_carousel_widget_items"]>, TGraph, [...TPath, "cms_collections_carousel_widget_items"]>>;
};
type cms_collections_carousel_widgetsModel = ModelInputs<cms_collections_carousel_widgetsScalars, cms_collections_carousel_widgetsParents<cms_collections_carousel_widgetsGraph>, cms_collections_carousel_widgetsChildren<cms_collections_carousel_widgetsGraph>, cms_collections_carousel_widgetsGraph>;
type cms_concierge_widgetsScalars = {
  cms_widget_id: number;
  created_at_utc: string;
  id?: number;
  updated_at_utc: string;
}
type cms_concierge_widgetsParents<TGraph extends any[], TPath extends string[] = []> = {
 cms_widgets: Parent<ModelInputs<cms_widgetsScalars, cms_widgetsParents<TGraph, [...TPath, "cms_widgets"]>, Omit<cms_widgetsChildren<TGraph, [...TPath, "cms_widgets"]>, "cms_concierge_widgets">, TGraph, [...TPath, "cms_widgets"]>>;
};
type cms_concierge_widgetsChildren<TGraph extends any[], TPath extends string[] = []> = {

};
type cms_concierge_widgetsModel = ModelInputs<cms_concierge_widgetsScalars, cms_concierge_widgetsParents<cms_concierge_widgetsGraph>, cms_concierge_widgetsChildren<cms_concierge_widgetsGraph>, cms_concierge_widgetsGraph>;
type cms_consultation_listing_widgetsScalars = {
  button_copy: string;
  cms_listing_widgets_id: number;
  created_at_utc: string;
  duration: string | null;
  expert_id: number;
  headline: string;
  id?: number;
  is_button_icon_shown: boolean | null;
  is_consultation_detail_shown: boolean | null;
  preview_attachment_id: number;
  price: string | null;
  updated_at_utc?: string;
}
type cms_consultation_listing_widgetsParents<TGraph extends any[], TPath extends string[] = []> = {
 attachments: Parent<ModelInputs<attachmentsScalars, attachmentsParents<TGraph, [...TPath, "attachments"]>, Omit<attachmentsChildren<TGraph, [...TPath, "attachments"]>, "cms_consultation_listing_widgets">, TGraph, [...TPath, "attachments"]>>;
 cms_listing_widgets: Parent<ModelInputs<cms_listing_widgetsScalars, cms_listing_widgetsParents<TGraph, [...TPath, "cms_listing_widgets"]>, Omit<cms_listing_widgetsChildren<TGraph, [...TPath, "cms_listing_widgets"]>, "cms_consultation_listing_widgets">, TGraph, [...TPath, "cms_listing_widgets"]>>;
 experts: Parent<ModelInputs<expertsScalars, expertsParents<TGraph, [...TPath, "experts"]>, Omit<expertsChildren<TGraph, [...TPath, "experts"]>, "cms_consultation_listing_widgets">, TGraph, [...TPath, "experts"]>>;
};
type cms_consultation_listing_widgetsChildren<TGraph extends any[], TPath extends string[] = []> = {

};
type cms_consultation_listing_widgetsModel = ModelInputs<cms_consultation_listing_widgetsScalars, cms_consultation_listing_widgetsParents<cms_consultation_listing_widgetsGraph>, cms_consultation_listing_widgetsChildren<cms_consultation_listing_widgetsGraph>, cms_consultation_listing_widgetsGraph>;
type cms_consultation_pagesScalars = {
  cms_page_id: number;
  created_at_utc: string;
  id?: number;
  updated_at_utc: string;
}
type cms_consultation_pagesParents<TGraph extends any[], TPath extends string[] = []> = {
 cms_pages: Parent<ModelInputs<cms_pagesScalars, cms_pagesParents<TGraph, [...TPath, "cms_pages"]>, Omit<cms_pagesChildren<TGraph, [...TPath, "cms_pages"]>, "cms_consultation_pages">, TGraph, [...TPath, "cms_pages"]>>;
};
type cms_consultation_pagesChildren<TGraph extends any[], TPath extends string[] = []> = {

};
type cms_consultation_pagesModel = ModelInputs<cms_consultation_pagesScalars, cms_consultation_pagesParents<cms_consultation_pagesGraph>, cms_consultation_pagesChildren<cms_consultation_pagesGraph>, cms_consultation_pagesGraph>;
type cms_double_image_widgetsScalars = {
  cms_widget_id: number;
  created_at_utc: string;
  first_attachment_id: number;
  first_caption: string | null;
  id?: number;
  second_attachment_id: number;
  second_caption: string | null;
  updated_at_utc?: string;
}
type cms_double_image_widgetsParents<TGraph extends any[], TPath extends string[] = []> = {
 attachments_cms_double_image_widgets_first_attachment_idToattachments: Parent<ModelInputs<attachmentsScalars, attachmentsParents<TGraph, [...TPath, "attachments_cms_double_image_widgets_first_attachment_idToattachments"]>, Omit<attachmentsChildren<TGraph, [...TPath, "attachments_cms_double_image_widgets_first_attachment_idToattachments"]>, "cms_double_image_widgets_cms_double_image_widgets_first_attachment_idToattachments">, TGraph, [...TPath, "attachments_cms_double_image_widgets_first_attachment_idToattachments"]>>;
 attachments_cms_double_image_widgets_second_attachment_idToattachments: Parent<ModelInputs<attachmentsScalars, attachmentsParents<TGraph, [...TPath, "attachments_cms_double_image_widgets_second_attachment_idToattachments"]>, Omit<attachmentsChildren<TGraph, [...TPath, "attachments_cms_double_image_widgets_second_attachment_idToattachments"]>, "cms_double_image_widgets_cms_double_image_widgets_second_attachment_idToattachments">, TGraph, [...TPath, "attachments_cms_double_image_widgets_second_attachment_idToattachments"]>>;
 cms_widgets: Parent<ModelInputs<cms_widgetsScalars, cms_widgetsParents<TGraph, [...TPath, "cms_widgets"]>, Omit<cms_widgetsChildren<TGraph, [...TPath, "cms_widgets"]>, "cms_double_image_widgets">, TGraph, [...TPath, "cms_widgets"]>>;
};
type cms_double_image_widgetsChildren<TGraph extends any[], TPath extends string[] = []> = {

};
type cms_double_image_widgetsModel = ModelInputs<cms_double_image_widgetsScalars, cms_double_image_widgetsParents<cms_double_image_widgetsGraph>, cms_double_image_widgetsChildren<cms_double_image_widgetsGraph>, cms_double_image_widgetsGraph>;
type cms_expert_collections_widget_itemsScalars = {
  caption: string | null;
  cms_expert_collections_widget_id: number;
  cms_showroom_page_id: number;
  created_at_utc: string;
  id?: number;
  position_index_weight: number | null;
  preview_image_attachment_id: number | null;
  profile_image_attachment_id: number | null;
  updated_at_utc?: string;
}
type cms_expert_collections_widget_itemsParents<TGraph extends any[], TPath extends string[] = []> = {
 attachments_cms_expert_collections_widget_items_preview_image_attachment_idToattachments: Parent<ModelInputs<attachmentsScalars, attachmentsParents<TGraph, [...TPath, "attachments_cms_expert_collections_widget_items_preview_image_attachment_idToattachments"]>, Omit<attachmentsChildren<TGraph, [...TPath, "attachments_cms_expert_collections_widget_items_preview_image_attachment_idToattachments"]>, "cms_expert_collections_widget_items_cms_expert_collections_widget_items_preview_image_attachment_idToattachments">, TGraph, [...TPath, "attachments_cms_expert_collections_widget_items_preview_image_attachment_idToattachments"]>>;
 attachments_cms_expert_collections_widget_items_profile_image_attachment_idToattachments: Parent<ModelInputs<attachmentsScalars, attachmentsParents<TGraph, [...TPath, "attachments_cms_expert_collections_widget_items_profile_image_attachment_idToattachments"]>, Omit<attachmentsChildren<TGraph, [...TPath, "attachments_cms_expert_collections_widget_items_profile_image_attachment_idToattachments"]>, "cms_expert_collections_widget_items_cms_expert_collections_widget_items_profile_image_attachment_idToattachments">, TGraph, [...TPath, "attachments_cms_expert_collections_widget_items_profile_image_attachment_idToattachments"]>>;
 cms_expert_collections_widgets: Parent<ModelInputs<cms_expert_collections_widgetsScalars, cms_expert_collections_widgetsParents<TGraph, [...TPath, "cms_expert_collections_widgets"]>, Omit<cms_expert_collections_widgetsChildren<TGraph, [...TPath, "cms_expert_collections_widgets"]>, "cms_expert_collections_widget_items">, TGraph, [...TPath, "cms_expert_collections_widgets"]>>;
 cms_showroom_pages: Parent<ModelInputs<cms_showroom_pagesScalars, cms_showroom_pagesParents<TGraph, [...TPath, "cms_showroom_pages"]>, Omit<cms_showroom_pagesChildren<TGraph, [...TPath, "cms_showroom_pages"]>, "cms_expert_collections_widget_items">, TGraph, [...TPath, "cms_showroom_pages"]>>;
};
type cms_expert_collections_widget_itemsChildren<TGraph extends any[], TPath extends string[] = []> = {

};
type cms_expert_collections_widget_itemsModel = ModelInputs<cms_expert_collections_widget_itemsScalars, cms_expert_collections_widget_itemsParents<cms_expert_collections_widget_itemsGraph>, cms_expert_collections_widget_itemsChildren<cms_expert_collections_widget_itemsGraph>, cms_expert_collections_widget_itemsGraph>;
type cms_expert_collections_widgetsScalars = {
  cms_widget_id: number;
  created_at_utc: string;
  id?: number;
  updated_at_utc?: string;
}
type cms_expert_collections_widgetsParents<TGraph extends any[], TPath extends string[] = []> = {
 cms_widgets: Parent<ModelInputs<cms_widgetsScalars, cms_widgetsParents<TGraph, [...TPath, "cms_widgets"]>, Omit<cms_widgetsChildren<TGraph, [...TPath, "cms_widgets"]>, "cms_expert_collections_widgets">, TGraph, [...TPath, "cms_widgets"]>>;
};
type cms_expert_collections_widgetsChildren<TGraph extends any[], TPath extends string[] = []> = {
 cms_expert_collections_widget_items: Child<ModelInputs<cms_expert_collections_widget_itemsScalars, Omit<cms_expert_collections_widget_itemsParents<TGraph, [...TPath, "cms_expert_collections_widget_items"]>, "cms_expert_collections_widgets">, cms_expert_collections_widget_itemsChildren<TGraph, [...TPath, "cms_expert_collections_widget_items"]>, TGraph, [...TPath, "cms_expert_collections_widget_items"]>>;
};
type cms_expert_collections_widgetsModel = ModelInputs<cms_expert_collections_widgetsScalars, cms_expert_collections_widgetsParents<cms_expert_collections_widgetsGraph>, cms_expert_collections_widgetsChildren<cms_expert_collections_widgetsGraph>, cms_expert_collections_widgetsGraph>;
type cms_experts_listing_widgetsScalars = {
  cms_widget_id: number;
  created_at_utc: string;
  id?: number;
  is_filter_enabled?: boolean;
  updated_at_utc: string;
}
type cms_experts_listing_widgetsParents<TGraph extends any[], TPath extends string[] = []> = {
 cms_widgets: Parent<ModelInputs<cms_widgetsScalars, cms_widgetsParents<TGraph, [...TPath, "cms_widgets"]>, Omit<cms_widgetsChildren<TGraph, [...TPath, "cms_widgets"]>, "cms_experts_listing_widgets">, TGraph, [...TPath, "cms_widgets"]>>;
};
type cms_experts_listing_widgetsChildren<TGraph extends any[], TPath extends string[] = []> = {

};
type cms_experts_listing_widgetsModel = ModelInputs<cms_experts_listing_widgetsScalars, cms_experts_listing_widgetsParents<cms_experts_listing_widgetsGraph>, cms_experts_listing_widgetsChildren<cms_experts_listing_widgetsGraph>, cms_experts_listing_widgetsGraph>;
type cms_experts_widget_itemsScalars = {
  cms_experts_widget_id: number;
  created_at_utc: string;
  expert_id: number;
  id?: number;
  position_index_weight: number | null;
  updated_at_utc?: string;
}
type cms_experts_widget_itemsParents<TGraph extends any[], TPath extends string[] = []> = {
 cms_experts_widgets: Parent<ModelInputs<cms_experts_widgetsScalars, cms_experts_widgetsParents<TGraph, [...TPath, "cms_experts_widgets"]>, Omit<cms_experts_widgetsChildren<TGraph, [...TPath, "cms_experts_widgets"]>, "cms_experts_widget_items">, TGraph, [...TPath, "cms_experts_widgets"]>>;
 experts: Parent<ModelInputs<expertsScalars, expertsParents<TGraph, [...TPath, "experts"]>, Omit<expertsChildren<TGraph, [...TPath, "experts"]>, "cms_experts_widget_items">, TGraph, [...TPath, "experts"]>>;
};
type cms_experts_widget_itemsChildren<TGraph extends any[], TPath extends string[] = []> = {

};
type cms_experts_widget_itemsModel = ModelInputs<cms_experts_widget_itemsScalars, cms_experts_widget_itemsParents<cms_experts_widget_itemsGraph>, cms_experts_widget_itemsChildren<cms_experts_widget_itemsGraph>, cms_experts_widget_itemsGraph>;
type cms_experts_widgetsScalars = {
  cms_widget_id: number;
  created_at_utc: string;
  id?: number;
  title?: string;
  updated_at_utc?: string;
}
type cms_experts_widgetsParents<TGraph extends any[], TPath extends string[] = []> = {
 cms_widgets: Parent<ModelInputs<cms_widgetsScalars, cms_widgetsParents<TGraph, [...TPath, "cms_widgets"]>, Omit<cms_widgetsChildren<TGraph, [...TPath, "cms_widgets"]>, "cms_experts_widgets">, TGraph, [...TPath, "cms_widgets"]>>;
};
type cms_experts_widgetsChildren<TGraph extends any[], TPath extends string[] = []> = {
 cms_experts_widget_items: Child<ModelInputs<cms_experts_widget_itemsScalars, Omit<cms_experts_widget_itemsParents<TGraph, [...TPath, "cms_experts_widget_items"]>, "cms_experts_widgets">, cms_experts_widget_itemsChildren<TGraph, [...TPath, "cms_experts_widget_items"]>, TGraph, [...TPath, "cms_experts_widget_items"]>>;
};
type cms_experts_widgetsModel = ModelInputs<cms_experts_widgetsScalars, cms_experts_widgetsParents<cms_experts_widgetsGraph>, cms_experts_widgetsChildren<cms_experts_widgetsGraph>, cms_experts_widgetsGraph>;
type cms_featured_in_widgetsScalars = {
  cms_widget_id: number;
  created_at_utc: string;
  id?: number;
  updated_at_utc?: string;
}
type cms_featured_in_widgetsParents<TGraph extends any[], TPath extends string[] = []> = {
 cms_widgets: Parent<ModelInputs<cms_widgetsScalars, cms_widgetsParents<TGraph, [...TPath, "cms_widgets"]>, Omit<cms_widgetsChildren<TGraph, [...TPath, "cms_widgets"]>, "cms_featured_in_widgets">, TGraph, [...TPath, "cms_widgets"]>>;
};
type cms_featured_in_widgetsChildren<TGraph extends any[], TPath extends string[] = []> = {

};
type cms_featured_in_widgetsModel = ModelInputs<cms_featured_in_widgetsScalars, cms_featured_in_widgetsParents<cms_featured_in_widgetsGraph>, cms_featured_in_widgetsChildren<cms_featured_in_widgetsGraph>, cms_featured_in_widgetsGraph>;
type cms_gallery_widget_itemsScalars = {
  attachment_id: number;
  caption: string | null;
  cms_gallery_widget_id: number;
  created_at_utc: string;
  expert_id: number | null;
  id?: number;
  position_index_weight: number | null;
  updated_at_utc?: string;
}
type cms_gallery_widget_itemsParents<TGraph extends any[], TPath extends string[] = []> = {
 attachments: Parent<ModelInputs<attachmentsScalars, attachmentsParents<TGraph, [...TPath, "attachments"]>, Omit<attachmentsChildren<TGraph, [...TPath, "attachments"]>, "cms_gallery_widget_items">, TGraph, [...TPath, "attachments"]>>;
 cms_gallery_widgets: Parent<ModelInputs<cms_gallery_widgetsScalars, cms_gallery_widgetsParents<TGraph, [...TPath, "cms_gallery_widgets"]>, Omit<cms_gallery_widgetsChildren<TGraph, [...TPath, "cms_gallery_widgets"]>, "cms_gallery_widget_items">, TGraph, [...TPath, "cms_gallery_widgets"]>>;
 experts: Parent<ModelInputs<expertsScalars, expertsParents<TGraph, [...TPath, "experts"]>, Omit<expertsChildren<TGraph, [...TPath, "experts"]>, "cms_gallery_widget_items">, TGraph, [...TPath, "experts"]>>;
};
type cms_gallery_widget_itemsChildren<TGraph extends any[], TPath extends string[] = []> = {

};
type cms_gallery_widget_itemsModel = ModelInputs<cms_gallery_widget_itemsScalars, cms_gallery_widget_itemsParents<cms_gallery_widget_itemsGraph>, cms_gallery_widget_itemsChildren<cms_gallery_widget_itemsGraph>, cms_gallery_widget_itemsGraph>;
type cms_gallery_widgetsScalars = {
  cms_widget_id: number;
  created_at_utc: string;
  id?: number;
  title: string;
  updated_at_utc?: string;
}
type cms_gallery_widgetsParents<TGraph extends any[], TPath extends string[] = []> = {
 cms_widgets: Parent<ModelInputs<cms_widgetsScalars, cms_widgetsParents<TGraph, [...TPath, "cms_widgets"]>, Omit<cms_widgetsChildren<TGraph, [...TPath, "cms_widgets"]>, "cms_gallery_widgets">, TGraph, [...TPath, "cms_widgets"]>>;
};
type cms_gallery_widgetsChildren<TGraph extends any[], TPath extends string[] = []> = {
 cms_gallery_widget_items: Child<ModelInputs<cms_gallery_widget_itemsScalars, Omit<cms_gallery_widget_itemsParents<TGraph, [...TPath, "cms_gallery_widget_items"]>, "cms_gallery_widgets">, cms_gallery_widget_itemsChildren<TGraph, [...TPath, "cms_gallery_widget_items"]>, TGraph, [...TPath, "cms_gallery_widget_items"]>>;
};
type cms_gallery_widgetsModel = ModelInputs<cms_gallery_widgetsScalars, cms_gallery_widgetsParents<cms_gallery_widgetsGraph>, cms_gallery_widgetsChildren<cms_gallery_widgetsGraph>, cms_gallery_widgetsGraph>;
type cms_gift_card_widgetsScalars = {
  cms_widget_id: number;
  created_at_utc: string;
  description: string;
  id?: number;
  title: string;
  updated_at_utc?: string;
}
type cms_gift_card_widgetsParents<TGraph extends any[], TPath extends string[] = []> = {
 cms_widgets: Parent<ModelInputs<cms_widgetsScalars, cms_widgetsParents<TGraph, [...TPath, "cms_widgets"]>, Omit<cms_widgetsChildren<TGraph, [...TPath, "cms_widgets"]>, "cms_gift_card_widgets">, TGraph, [...TPath, "cms_widgets"]>>;
};
type cms_gift_card_widgetsChildren<TGraph extends any[], TPath extends string[] = []> = {

};
type cms_gift_card_widgetsModel = ModelInputs<cms_gift_card_widgetsScalars, cms_gift_card_widgetsParents<cms_gift_card_widgetsGraph>, cms_gift_card_widgetsChildren<cms_gift_card_widgetsGraph>, cms_gift_card_widgetsGraph>;
type cms_help_listing_widgetsScalars = {
  body: string;
  cms_listing_widgets_id: number;
  created_at_utc: string;
  headline: string;
  id?: number;
  updated_at_utc?: string;
}
type cms_help_listing_widgetsParents<TGraph extends any[], TPath extends string[] = []> = {
 cms_listing_widgets: Parent<ModelInputs<cms_listing_widgetsScalars, cms_listing_widgetsParents<TGraph, [...TPath, "cms_listing_widgets"]>, Omit<cms_listing_widgetsChildren<TGraph, [...TPath, "cms_listing_widgets"]>, "cms_help_listing_widgets">, TGraph, [...TPath, "cms_listing_widgets"]>>;
};
type cms_help_listing_widgetsChildren<TGraph extends any[], TPath extends string[] = []> = {

};
type cms_help_listing_widgetsModel = ModelInputs<cms_help_listing_widgetsScalars, cms_help_listing_widgetsParents<cms_help_listing_widgetsGraph>, cms_help_listing_widgetsChildren<cms_help_listing_widgetsGraph>, cms_help_listing_widgetsGraph>;
type cms_hero_carousel_widget_itemsScalars = {
  attachment_id: number;
  button_link: string | null;
  button_text: string | null;
  cms_hero_carousel_widget_id: number;
  created_at_utc?: string;
  has_button?: boolean;
  headline: string | null;
  id?: number;
  position_index_weight: number;
  pre_title: string | null;
  subheadline: string | null;
  updated_at_utc?: string;
}
type cms_hero_carousel_widget_itemsParents<TGraph extends any[], TPath extends string[] = []> = {
 attachments: Parent<ModelInputs<attachmentsScalars, attachmentsParents<TGraph, [...TPath, "attachments"]>, Omit<attachmentsChildren<TGraph, [...TPath, "attachments"]>, "cms_hero_carousel_widget_items">, TGraph, [...TPath, "attachments"]>>;
 cms_hero_carousel_widgets: Parent<ModelInputs<cms_hero_carousel_widgetsScalars, cms_hero_carousel_widgetsParents<TGraph, [...TPath, "cms_hero_carousel_widgets"]>, Omit<cms_hero_carousel_widgetsChildren<TGraph, [...TPath, "cms_hero_carousel_widgets"]>, "cms_hero_carousel_widget_items">, TGraph, [...TPath, "cms_hero_carousel_widgets"]>>;
};
type cms_hero_carousel_widget_itemsChildren<TGraph extends any[], TPath extends string[] = []> = {

};
type cms_hero_carousel_widget_itemsModel = ModelInputs<cms_hero_carousel_widget_itemsScalars, cms_hero_carousel_widget_itemsParents<cms_hero_carousel_widget_itemsGraph>, cms_hero_carousel_widget_itemsChildren<cms_hero_carousel_widget_itemsGraph>, cms_hero_carousel_widget_itemsGraph>;
type cms_hero_carousel_widgetsScalars = {
  cms_widget_id: number;
  created_at_utc?: string;
  id?: number;
  is_auto_rotation_enabled?: boolean;
  updated_at_utc?: string;
}
type cms_hero_carousel_widgetsParents<TGraph extends any[], TPath extends string[] = []> = {
 cms_widgets: Parent<ModelInputs<cms_widgetsScalars, cms_widgetsParents<TGraph, [...TPath, "cms_widgets"]>, Omit<cms_widgetsChildren<TGraph, [...TPath, "cms_widgets"]>, "cms_hero_carousel_widgets">, TGraph, [...TPath, "cms_widgets"]>>;
};
type cms_hero_carousel_widgetsChildren<TGraph extends any[], TPath extends string[] = []> = {
 cms_hero_carousel_widget_items: Child<ModelInputs<cms_hero_carousel_widget_itemsScalars, Omit<cms_hero_carousel_widget_itemsParents<TGraph, [...TPath, "cms_hero_carousel_widget_items"]>, "cms_hero_carousel_widgets">, cms_hero_carousel_widget_itemsChildren<TGraph, [...TPath, "cms_hero_carousel_widget_items"]>, TGraph, [...TPath, "cms_hero_carousel_widget_items"]>>;
};
type cms_hero_carousel_widgetsModel = ModelInputs<cms_hero_carousel_widgetsScalars, cms_hero_carousel_widgetsParents<cms_hero_carousel_widgetsGraph>, cms_hero_carousel_widgetsChildren<cms_hero_carousel_widgetsGraph>, cms_hero_carousel_widgetsGraph>;
type cms_hero_main_widgetsScalars = {
  attachment_id: number;
  cms_widget_id: number;
  created_at_utc: string;
  has_secondary_button: boolean;
  headline: string;
  id?: number;
  main_button_link: string;
  main_button_text: string;
  secondary_button_link: string | null;
  secondary_button_text: string | null;
  subheadline: string | null;
  updated_at_utc?: string;
}
type cms_hero_main_widgetsParents<TGraph extends any[], TPath extends string[] = []> = {
 attachments: Parent<ModelInputs<attachmentsScalars, attachmentsParents<TGraph, [...TPath, "attachments"]>, Omit<attachmentsChildren<TGraph, [...TPath, "attachments"]>, "cms_hero_main_widgets">, TGraph, [...TPath, "attachments"]>>;
 cms_widgets: Parent<ModelInputs<cms_widgetsScalars, cms_widgetsParents<TGraph, [...TPath, "cms_widgets"]>, Omit<cms_widgetsChildren<TGraph, [...TPath, "cms_widgets"]>, "cms_hero_main_widgets">, TGraph, [...TPath, "cms_widgets"]>>;
};
type cms_hero_main_widgetsChildren<TGraph extends any[], TPath extends string[] = []> = {

};
type cms_hero_main_widgetsModel = ModelInputs<cms_hero_main_widgetsScalars, cms_hero_main_widgetsParents<cms_hero_main_widgetsGraph>, cms_hero_main_widgetsChildren<cms_hero_main_widgetsGraph>, cms_hero_main_widgetsGraph>;
type cms_hero_widgetsScalars = {
  attachment_id: number;
  cms_widget_id: number;
  created_at_utc: string;
  has_landing_page_buttons?: boolean;
  id?: number;
  title: string;
  updated_at_utc?: string;
}
type cms_hero_widgetsParents<TGraph extends any[], TPath extends string[] = []> = {
 attachments: Parent<ModelInputs<attachmentsScalars, attachmentsParents<TGraph, [...TPath, "attachments"]>, Omit<attachmentsChildren<TGraph, [...TPath, "attachments"]>, "cms_hero_widgets">, TGraph, [...TPath, "attachments"]>>;
 cms_widgets: Parent<ModelInputs<cms_widgetsScalars, cms_widgetsParents<TGraph, [...TPath, "cms_widgets"]>, Omit<cms_widgetsChildren<TGraph, [...TPath, "cms_widgets"]>, "cms_hero_widgets">, TGraph, [...TPath, "cms_widgets"]>>;
};
type cms_hero_widgetsChildren<TGraph extends any[], TPath extends string[] = []> = {

};
type cms_hero_widgetsModel = ModelInputs<cms_hero_widgetsScalars, cms_hero_widgetsParents<cms_hero_widgetsGraph>, cms_hero_widgetsChildren<cms_hero_widgetsGraph>, cms_hero_widgetsGraph>;
type cms_info_cards_widgetsScalars = {
  cms_widget_id: number;
  created_at_utc: string;
  id?: number;
  updated_at_utc?: string;
}
type cms_info_cards_widgetsParents<TGraph extends any[], TPath extends string[] = []> = {
 cms_widgets: Parent<ModelInputs<cms_widgetsScalars, cms_widgetsParents<TGraph, [...TPath, "cms_widgets"]>, Omit<cms_widgetsChildren<TGraph, [...TPath, "cms_widgets"]>, "cms_info_cards_widgets">, TGraph, [...TPath, "cms_widgets"]>>;
};
type cms_info_cards_widgetsChildren<TGraph extends any[], TPath extends string[] = []> = {

};
type cms_info_cards_widgetsModel = ModelInputs<cms_info_cards_widgetsScalars, cms_info_cards_widgetsParents<cms_info_cards_widgetsGraph>, cms_info_cards_widgetsChildren<cms_info_cards_widgetsGraph>, cms_info_cards_widgetsGraph>;
type cms_info_listing_widgetsScalars = {
  body: string;
  button_text: string | null;
  cms_listing_widgets_id: number;
  created_at_utc: string;
  custom_button_url: string | null;
  has_button?: boolean;
  has_custom_link?: boolean;
  headline: string;
  id?: number;
  preview_attachment_id: number;
  updated_at_utc?: string;
}
type cms_info_listing_widgetsParents<TGraph extends any[], TPath extends string[] = []> = {
 attachments: Parent<ModelInputs<attachmentsScalars, attachmentsParents<TGraph, [...TPath, "attachments"]>, Omit<attachmentsChildren<TGraph, [...TPath, "attachments"]>, "cms_info_listing_widgets">, TGraph, [...TPath, "attachments"]>>;
 cms_listing_widgets: Parent<ModelInputs<cms_listing_widgetsScalars, cms_listing_widgetsParents<TGraph, [...TPath, "cms_listing_widgets"]>, Omit<cms_listing_widgetsChildren<TGraph, [...TPath, "cms_listing_widgets"]>, "cms_info_listing_widgets">, TGraph, [...TPath, "cms_listing_widgets"]>>;
};
type cms_info_listing_widgetsChildren<TGraph extends any[], TPath extends string[] = []> = {

};
type cms_info_listing_widgetsModel = ModelInputs<cms_info_listing_widgetsScalars, cms_info_listing_widgetsParents<cms_info_listing_widgetsGraph>, cms_info_listing_widgetsChildren<cms_info_listing_widgetsGraph>, cms_info_listing_widgetsGraph>;
type cms_introduction_widgetsScalars = {
  attachment_id: number;
  button_text: string;
  cms_widget_id: number;
  created_at_utc: string;
  description: string;
  href: string;
  id?: number;
  posttitle: string | null;
  pretitle: string | null;
  title: string;
  updated_at_utc?: string;
}
type cms_introduction_widgetsParents<TGraph extends any[], TPath extends string[] = []> = {
 attachments: Parent<ModelInputs<attachmentsScalars, attachmentsParents<TGraph, [...TPath, "attachments"]>, Omit<attachmentsChildren<TGraph, [...TPath, "attachments"]>, "cms_introduction_widgets">, TGraph, [...TPath, "attachments"]>>;
 cms_widgets: Parent<ModelInputs<cms_widgetsScalars, cms_widgetsParents<TGraph, [...TPath, "cms_widgets"]>, Omit<cms_widgetsChildren<TGraph, [...TPath, "cms_widgets"]>, "cms_introduction_widgets">, TGraph, [...TPath, "cms_widgets"]>>;
};
type cms_introduction_widgetsChildren<TGraph extends any[], TPath extends string[] = []> = {

};
type cms_introduction_widgetsModel = ModelInputs<cms_introduction_widgetsScalars, cms_introduction_widgetsParents<cms_introduction_widgetsGraph>, cms_introduction_widgetsChildren<cms_introduction_widgetsGraph>, cms_introduction_widgetsGraph>;
type cms_listing_widgetsScalars = {
  created_at_utc: string;
  id?: number;
  name: string;
  updated_at_utc?: string;
}
type cms_listing_widgetsParents<TGraph extends any[], TPath extends string[] = []> = {

};
type cms_listing_widgetsChildren<TGraph extends any[], TPath extends string[] = []> = {
 cms_consultation_listing_widgets: Child<ModelInputs<cms_consultation_listing_widgetsScalars, Omit<cms_consultation_listing_widgetsParents<TGraph, [...TPath, "cms_consultation_listing_widgets"]>, "cms_listing_widgets">, cms_consultation_listing_widgetsChildren<TGraph, [...TPath, "cms_consultation_listing_widgets"]>, TGraph, [...TPath, "cms_consultation_listing_widgets"]>>;
 cms_help_listing_widgets: Child<ModelInputs<cms_help_listing_widgetsScalars, Omit<cms_help_listing_widgetsParents<TGraph, [...TPath, "cms_help_listing_widgets"]>, "cms_listing_widgets">, cms_help_listing_widgetsChildren<TGraph, [...TPath, "cms_help_listing_widgets"]>, TGraph, [...TPath, "cms_help_listing_widgets"]>>;
 cms_info_listing_widgets: Child<ModelInputs<cms_info_listing_widgetsScalars, Omit<cms_info_listing_widgetsParents<TGraph, [...TPath, "cms_info_listing_widgets"]>, "cms_listing_widgets">, cms_info_listing_widgetsChildren<TGraph, [...TPath, "cms_info_listing_widgets"]>, TGraph, [...TPath, "cms_info_listing_widgets"]>>;
 cms_quotation_listing_widgets: Child<ModelInputs<cms_quotation_listing_widgetsScalars, Omit<cms_quotation_listing_widgetsParents<TGraph, [...TPath, "cms_quotation_listing_widgets"]>, "cms_listing_widgets">, cms_quotation_listing_widgetsChildren<TGraph, [...TPath, "cms_quotation_listing_widgets"]>, TGraph, [...TPath, "cms_quotation_listing_widgets"]>>;
 cms_widget_listing_widgets: Child<ModelInputs<cms_widget_listing_widgetsScalars, Omit<cms_widget_listing_widgetsParents<TGraph, [...TPath, "cms_widget_listing_widgets"]>, "cms_listing_widgets">, cms_widget_listing_widgetsChildren<TGraph, [...TPath, "cms_widget_listing_widgets"]>, TGraph, [...TPath, "cms_widget_listing_widgets"]>>;
};
type cms_listing_widgetsModel = ModelInputs<cms_listing_widgetsScalars, cms_listing_widgetsParents<cms_listing_widgetsGraph>, cms_listing_widgetsChildren<cms_listing_widgetsGraph>, cms_listing_widgetsGraph>;
type cms_multi_collection_widget_itemsScalars = {
  caption: string | null;
  cms_multi_collection_widget_id: number;
  collection_id: number;
  created_at_utc: string;
  id?: number;
  position_index_weight: number | null;
  updated_at_utc?: string;
}
type cms_multi_collection_widget_itemsParents<TGraph extends any[], TPath extends string[] = []> = {
 cms_multi_collection_widgets: Parent<ModelInputs<cms_multi_collection_widgetsScalars, cms_multi_collection_widgetsParents<TGraph, [...TPath, "cms_multi_collection_widgets"]>, Omit<cms_multi_collection_widgetsChildren<TGraph, [...TPath, "cms_multi_collection_widgets"]>, "cms_multi_collection_widget_items">, TGraph, [...TPath, "cms_multi_collection_widgets"]>>;
 collections: Parent<ModelInputs<collectionsScalars, collectionsParents<TGraph, [...TPath, "collections"]>, Omit<collectionsChildren<TGraph, [...TPath, "collections"]>, "cms_multi_collection_widget_items">, TGraph, [...TPath, "collections"]>>;
};
type cms_multi_collection_widget_itemsChildren<TGraph extends any[], TPath extends string[] = []> = {

};
type cms_multi_collection_widget_itemsModel = ModelInputs<cms_multi_collection_widget_itemsScalars, cms_multi_collection_widget_itemsParents<cms_multi_collection_widget_itemsGraph>, cms_multi_collection_widget_itemsChildren<cms_multi_collection_widget_itemsGraph>, cms_multi_collection_widget_itemsGraph>;
type cms_multi_collection_widgetsScalars = {
  cms_showroom_page_id: number | null;
  cms_widget_id: number;
  created_at_utc: string;
  default_sort_direction: cms_multi_collection_widget_items_default_sort_direction_typeEnum | null;
  default_sort_field: cms_multi_collection_widget_items_default_sort_field_typeEnum | null;
  headline: string | null;
  id?: number;
  is_shop_all_products_button_enabled?: boolean;
  is_sort_enabled: boolean | null;
  type?: cms_multi_collection_widgets_type_typeEnum;
  updated_at_utc?: string;
  use_breakout_variants: boolean;
}
type cms_multi_collection_widgetsParents<TGraph extends any[], TPath extends string[] = []> = {
 cms_showroom_pages: Parent<ModelInputs<cms_showroom_pagesScalars, cms_showroom_pagesParents<TGraph, [...TPath, "cms_showroom_pages"]>, Omit<cms_showroom_pagesChildren<TGraph, [...TPath, "cms_showroom_pages"]>, "cms_multi_collection_widgets">, TGraph, [...TPath, "cms_showroom_pages"]>>;
 cms_widgets: Parent<ModelInputs<cms_widgetsScalars, cms_widgetsParents<TGraph, [...TPath, "cms_widgets"]>, Omit<cms_widgetsChildren<TGraph, [...TPath, "cms_widgets"]>, "cms_multi_collection_widgets">, TGraph, [...TPath, "cms_widgets"]>>;
};
type cms_multi_collection_widgetsChildren<TGraph extends any[], TPath extends string[] = []> = {
 cms_multi_collection_widget_items: Child<ModelInputs<cms_multi_collection_widget_itemsScalars, Omit<cms_multi_collection_widget_itemsParents<TGraph, [...TPath, "cms_multi_collection_widget_items"]>, "cms_multi_collection_widgets">, cms_multi_collection_widget_itemsChildren<TGraph, [...TPath, "cms_multi_collection_widget_items"]>, TGraph, [...TPath, "cms_multi_collection_widget_items"]>>;
};
type cms_multi_collection_widgetsModel = ModelInputs<cms_multi_collection_widgetsScalars, cms_multi_collection_widgetsParents<cms_multi_collection_widgetsGraph>, cms_multi_collection_widgetsChildren<cms_multi_collection_widgetsGraph>, cms_multi_collection_widgetsGraph>;
type cms_pagesScalars = {
  created_at_utc: string;
  id?: number;
  is_published?: boolean;
  keywords: Json | null;
  meta_description: string | null;
  slug: string;
  title: string;
  updated_at_utc?: string;
}
type cms_pagesParents<TGraph extends any[], TPath extends string[] = []> = {

};
type cms_pagesChildren<TGraph extends any[], TPath extends string[] = []> = {
 cms_article_pages: Child<ModelInputs<cms_article_pagesScalars, Omit<cms_article_pagesParents<TGraph, [...TPath, "cms_article_pages"]>, "cms_pages">, cms_article_pagesChildren<TGraph, [...TPath, "cms_article_pages"]>, TGraph, [...TPath, "cms_article_pages"]>>;
 cms_brand_pages: Child<ModelInputs<cms_brand_pagesScalars, Omit<cms_brand_pagesParents<TGraph, [...TPath, "cms_brand_pages"]>, "cms_pages">, cms_brand_pagesChildren<TGraph, [...TPath, "cms_brand_pages"]>, TGraph, [...TPath, "cms_brand_pages"]>>;
 cms_card_navigation_widget_items: Child<ModelInputs<cms_card_navigation_widget_itemsScalars, Omit<cms_card_navigation_widget_itemsParents<TGraph, [...TPath, "cms_card_navigation_widget_items"]>, "cms_pages">, cms_card_navigation_widget_itemsChildren<TGraph, [...TPath, "cms_card_navigation_widget_items"]>, TGraph, [...TPath, "cms_card_navigation_widget_items"]>>;
 cms_category_pages: Child<ModelInputs<cms_category_pagesScalars, Omit<cms_category_pagesParents<TGraph, [...TPath, "cms_category_pages"]>, "cms_pages">, cms_category_pagesChildren<TGraph, [...TPath, "cms_category_pages"]>, TGraph, [...TPath, "cms_category_pages"]>>;
 cms_consultation_pages: Child<ModelInputs<cms_consultation_pagesScalars, Omit<cms_consultation_pagesParents<TGraph, [...TPath, "cms_consultation_pages"]>, "cms_pages">, cms_consultation_pagesChildren<TGraph, [...TPath, "cms_consultation_pages"]>, TGraph, [...TPath, "cms_consultation_pages"]>>;
 cms_showroom_pages: Child<ModelInputs<cms_showroom_pagesScalars, Omit<cms_showroom_pagesParents<TGraph, [...TPath, "cms_showroom_pages"]>, "cms_pages">, cms_showroom_pagesChildren<TGraph, [...TPath, "cms_showroom_pages"]>, TGraph, [...TPath, "cms_showroom_pages"]>>;
 cms_widgets: Child<ModelInputs<cms_widgetsScalars, Omit<cms_widgetsParents<TGraph, [...TPath, "cms_widgets"]>, "cms_pages">, cms_widgetsChildren<TGraph, [...TPath, "cms_widgets"]>, TGraph, [...TPath, "cms_widgets"]>>;
 navigation_items: Child<ModelInputs<navigation_itemsScalars, Omit<navigation_itemsParents<TGraph, [...TPath, "navigation_items"]>, "cms_pages">, navigation_itemsChildren<TGraph, [...TPath, "navigation_items"]>, TGraph, [...TPath, "navigation_items"]>>;
};
type cms_pagesModel = ModelInputs<cms_pagesScalars, cms_pagesParents<cms_pagesGraph>, cms_pagesChildren<cms_pagesGraph>, cms_pagesGraph>;
type cms_products_widget_itemsScalars = {
  attachment_id: number;
  cms_products_widget_id: number;
  created_at_utc: string;
  description: string | null;
  href: string | null;
  id?: number;
  position_index_weight: number | null;
  posttitle: string | null;
  pretitle: string | null;
  title: string;
  updated_at_utc?: string;
}
type cms_products_widget_itemsParents<TGraph extends any[], TPath extends string[] = []> = {
 attachments: Parent<ModelInputs<attachmentsScalars, attachmentsParents<TGraph, [...TPath, "attachments"]>, Omit<attachmentsChildren<TGraph, [...TPath, "attachments"]>, "cms_products_widget_items">, TGraph, [...TPath, "attachments"]>>;
 cms_products_widgets: Parent<ModelInputs<cms_products_widgetsScalars, cms_products_widgetsParents<TGraph, [...TPath, "cms_products_widgets"]>, Omit<cms_products_widgetsChildren<TGraph, [...TPath, "cms_products_widgets"]>, "cms_products_widget_items">, TGraph, [...TPath, "cms_products_widgets"]>>;
};
type cms_products_widget_itemsChildren<TGraph extends any[], TPath extends string[] = []> = {

};
type cms_products_widget_itemsModel = ModelInputs<cms_products_widget_itemsScalars, cms_products_widget_itemsParents<cms_products_widget_itemsGraph>, cms_products_widget_itemsChildren<cms_products_widget_itemsGraph>, cms_products_widget_itemsGraph>;
type cms_products_widgetsScalars = {
  cms_widget_id: number;
  created_at_utc: string;
  id?: number;
  updated_at_utc?: string;
}
type cms_products_widgetsParents<TGraph extends any[], TPath extends string[] = []> = {
 cms_widgets: Parent<ModelInputs<cms_widgetsScalars, cms_widgetsParents<TGraph, [...TPath, "cms_widgets"]>, Omit<cms_widgetsChildren<TGraph, [...TPath, "cms_widgets"]>, "cms_products_widgets">, TGraph, [...TPath, "cms_widgets"]>>;
};
type cms_products_widgetsChildren<TGraph extends any[], TPath extends string[] = []> = {
 cms_products_widget_items: Child<ModelInputs<cms_products_widget_itemsScalars, Omit<cms_products_widget_itemsParents<TGraph, [...TPath, "cms_products_widget_items"]>, "cms_products_widgets">, cms_products_widget_itemsChildren<TGraph, [...TPath, "cms_products_widget_items"]>, TGraph, [...TPath, "cms_products_widget_items"]>>;
};
type cms_products_widgetsModel = ModelInputs<cms_products_widgetsScalars, cms_products_widgetsParents<cms_products_widgetsGraph>, cms_products_widgetsChildren<cms_products_widgetsGraph>, cms_products_widgetsGraph>;
type cms_qa_widget_itemsScalars = {
  answer: string;
  cms_qa_widget_id: number;
  created_at_utc: string;
  id?: number;
  position_index_weight: number | null;
  question: string;
  updated_at_utc?: string;
}
type cms_qa_widget_itemsParents<TGraph extends any[], TPath extends string[] = []> = {
 cms_qa_widgets: Parent<ModelInputs<cms_qa_widgetsScalars, cms_qa_widgetsParents<TGraph, [...TPath, "cms_qa_widgets"]>, Omit<cms_qa_widgetsChildren<TGraph, [...TPath, "cms_qa_widgets"]>, "cms_qa_widget_items">, TGraph, [...TPath, "cms_qa_widgets"]>>;
};
type cms_qa_widget_itemsChildren<TGraph extends any[], TPath extends string[] = []> = {

};
type cms_qa_widget_itemsModel = ModelInputs<cms_qa_widget_itemsScalars, cms_qa_widget_itemsParents<cms_qa_widget_itemsGraph>, cms_qa_widget_itemsChildren<cms_qa_widget_itemsGraph>, cms_qa_widget_itemsGraph>;
type cms_qa_widgetsScalars = {
  cms_widget_id: number;
  created_at_utc: string;
  id?: number;
  updated_at_utc?: string;
}
type cms_qa_widgetsParents<TGraph extends any[], TPath extends string[] = []> = {
 cms_widgets: Parent<ModelInputs<cms_widgetsScalars, cms_widgetsParents<TGraph, [...TPath, "cms_widgets"]>, Omit<cms_widgetsChildren<TGraph, [...TPath, "cms_widgets"]>, "cms_qa_widgets">, TGraph, [...TPath, "cms_widgets"]>>;
};
type cms_qa_widgetsChildren<TGraph extends any[], TPath extends string[] = []> = {
 cms_qa_widget_items: Child<ModelInputs<cms_qa_widget_itemsScalars, Omit<cms_qa_widget_itemsParents<TGraph, [...TPath, "cms_qa_widget_items"]>, "cms_qa_widgets">, cms_qa_widget_itemsChildren<TGraph, [...TPath, "cms_qa_widget_items"]>, TGraph, [...TPath, "cms_qa_widget_items"]>>;
};
type cms_qa_widgetsModel = ModelInputs<cms_qa_widgetsScalars, cms_qa_widgetsParents<cms_qa_widgetsGraph>, cms_qa_widgetsChildren<cms_qa_widgetsGraph>, cms_qa_widgetsGraph>;
type cms_quotation_listing_widgetsScalars = {
  author: string;
  body: string;
  cms_listing_widgets_id: number;
  created_at_utc: string;
  id?: number;
  updated_at_utc?: string;
}
type cms_quotation_listing_widgetsParents<TGraph extends any[], TPath extends string[] = []> = {
 cms_listing_widgets: Parent<ModelInputs<cms_listing_widgetsScalars, cms_listing_widgetsParents<TGraph, [...TPath, "cms_listing_widgets"]>, Omit<cms_listing_widgetsChildren<TGraph, [...TPath, "cms_listing_widgets"]>, "cms_quotation_listing_widgets">, TGraph, [...TPath, "cms_listing_widgets"]>>;
};
type cms_quotation_listing_widgetsChildren<TGraph extends any[], TPath extends string[] = []> = {

};
type cms_quotation_listing_widgetsModel = ModelInputs<cms_quotation_listing_widgetsScalars, cms_quotation_listing_widgetsParents<cms_quotation_listing_widgetsGraph>, cms_quotation_listing_widgetsChildren<cms_quotation_listing_widgetsGraph>, cms_quotation_listing_widgetsGraph>;
type cms_rich_text_widgetsScalars = {
  cms_widget_id: number;
  created_at_utc: string;
  id?: number;
  rich_text: string | null;
  updated_at_utc?: string;
}
type cms_rich_text_widgetsParents<TGraph extends any[], TPath extends string[] = []> = {
 cms_widgets: Parent<ModelInputs<cms_widgetsScalars, cms_widgetsParents<TGraph, [...TPath, "cms_widgets"]>, Omit<cms_widgetsChildren<TGraph, [...TPath, "cms_widgets"]>, "cms_rich_text_widgets">, TGraph, [...TPath, "cms_widgets"]>>;
};
type cms_rich_text_widgetsChildren<TGraph extends any[], TPath extends string[] = []> = {

};
type cms_rich_text_widgetsModel = ModelInputs<cms_rich_text_widgetsScalars, cms_rich_text_widgetsParents<cms_rich_text_widgetsGraph>, cms_rich_text_widgetsChildren<cms_rich_text_widgetsGraph>, cms_rich_text_widgetsGraph>;
type cms_section_widget_itemsScalars = {
  cms_section_widget_id: number;
  cms_widget_item_id: number;
}
type cms_section_widget_itemsParents<TGraph extends any[], TPath extends string[] = []> = {
 cms_section_widgets: Parent<ModelInputs<cms_section_widgetsScalars, cms_section_widgetsParents<TGraph, [...TPath, "cms_section_widgets"]>, Omit<cms_section_widgetsChildren<TGraph, [...TPath, "cms_section_widgets"]>, "cms_section_widget_items">, TGraph, [...TPath, "cms_section_widgets"]>>;
 cms_widget_items: Parent<ModelInputs<cms_widget_itemsScalars, cms_widget_itemsParents<TGraph, [...TPath, "cms_widget_items"]>, Omit<cms_widget_itemsChildren<TGraph, [...TPath, "cms_widget_items"]>, "cms_section_widget_items">, TGraph, [...TPath, "cms_widget_items"]>>;
};
type cms_section_widget_itemsChildren<TGraph extends any[], TPath extends string[] = []> = {

};
type cms_section_widget_itemsModel = ModelInputs<cms_section_widget_itemsScalars, cms_section_widget_itemsParents<cms_section_widget_itemsGraph>, cms_section_widget_itemsChildren<cms_section_widget_itemsGraph>, cms_section_widget_itemsGraph>;
type cms_section_widgetsScalars = {
  cms_widget_id: number;
  created_at_utc: string;
  id?: number;
  updated_at_utc: string | null;
}
type cms_section_widgetsParents<TGraph extends any[], TPath extends string[] = []> = {
 cms_widgets: Parent<ModelInputs<cms_widgetsScalars, cms_widgetsParents<TGraph, [...TPath, "cms_widgets"]>, Omit<cms_widgetsChildren<TGraph, [...TPath, "cms_widgets"]>, "cms_section_widgets">, TGraph, [...TPath, "cms_widgets"]>>;
};
type cms_section_widgetsChildren<TGraph extends any[], TPath extends string[] = []> = {
 cms_section_widget_items: Child<ModelInputs<cms_section_widget_itemsScalars, Omit<cms_section_widget_itemsParents<TGraph, [...TPath, "cms_section_widget_items"]>, "cms_section_widgets">, cms_section_widget_itemsChildren<TGraph, [...TPath, "cms_section_widget_items"]>, TGraph, [...TPath, "cms_section_widget_items"]>>;
};
type cms_section_widgetsModel = ModelInputs<cms_section_widgetsScalars, cms_section_widgetsParents<cms_section_widgetsGraph>, cms_section_widgetsChildren<cms_section_widgetsGraph>, cms_section_widgetsGraph>;
type cms_showroom_pagesScalars = {
  cms_page_id: number;
  created_at_utc: string;
  id?: number;
  updated_at_utc?: string;
}
type cms_showroom_pagesParents<TGraph extends any[], TPath extends string[] = []> = {
 cms_pages: Parent<ModelInputs<cms_pagesScalars, cms_pagesParents<TGraph, [...TPath, "cms_pages"]>, Omit<cms_pagesChildren<TGraph, [...TPath, "cms_pages"]>, "cms_showroom_pages">, TGraph, [...TPath, "cms_pages"]>>;
};
type cms_showroom_pagesChildren<TGraph extends any[], TPath extends string[] = []> = {
 cms_category_collection_widget_items: Child<ModelInputs<cms_category_collection_widget_itemsScalars, Omit<cms_category_collection_widget_itemsParents<TGraph, [...TPath, "cms_category_collection_widget_items"]>, "cms_showroom_pages">, cms_category_collection_widget_itemsChildren<TGraph, [...TPath, "cms_category_collection_widget_items"]>, TGraph, [...TPath, "cms_category_collection_widget_items"]>>;
 cms_collections_carousel_widget_items: Child<ModelInputs<cms_collections_carousel_widget_itemsScalars, Omit<cms_collections_carousel_widget_itemsParents<TGraph, [...TPath, "cms_collections_carousel_widget_items"]>, "cms_showroom_pages">, cms_collections_carousel_widget_itemsChildren<TGraph, [...TPath, "cms_collections_carousel_widget_items"]>, TGraph, [...TPath, "cms_collections_carousel_widget_items"]>>;
 cms_collections_carousel_widgets: Child<ModelInputs<cms_collections_carousel_widgetsScalars, Omit<cms_collections_carousel_widgetsParents<TGraph, [...TPath, "cms_collections_carousel_widgets"]>, "cms_showroom_pages">, cms_collections_carousel_widgetsChildren<TGraph, [...TPath, "cms_collections_carousel_widgets"]>, TGraph, [...TPath, "cms_collections_carousel_widgets"]>>;
 cms_expert_collections_widget_items: Child<ModelInputs<cms_expert_collections_widget_itemsScalars, Omit<cms_expert_collections_widget_itemsParents<TGraph, [...TPath, "cms_expert_collections_widget_items"]>, "cms_showroom_pages">, cms_expert_collections_widget_itemsChildren<TGraph, [...TPath, "cms_expert_collections_widget_items"]>, TGraph, [...TPath, "cms_expert_collections_widget_items"]>>;
 cms_multi_collection_widgets: Child<ModelInputs<cms_multi_collection_widgetsScalars, Omit<cms_multi_collection_widgetsParents<TGraph, [...TPath, "cms_multi_collection_widgets"]>, "cms_showroom_pages">, cms_multi_collection_widgetsChildren<TGraph, [...TPath, "cms_multi_collection_widgets"]>, TGraph, [...TPath, "cms_multi_collection_widgets"]>>;
};
type cms_showroom_pagesModel = ModelInputs<cms_showroom_pagesScalars, cms_showroom_pagesParents<cms_showroom_pagesGraph>, cms_showroom_pagesChildren<cms_showroom_pagesGraph>, cms_showroom_pagesGraph>;
type cms_single_image_widgetsScalars = {
  attachment_id: number;
  caption: string | null;
  cms_widget_id: number;
  created_at_utc: string;
  id?: number;
  updated_at_utc?: string;
}
type cms_single_image_widgetsParents<TGraph extends any[], TPath extends string[] = []> = {
 attachments: Parent<ModelInputs<attachmentsScalars, attachmentsParents<TGraph, [...TPath, "attachments"]>, Omit<attachmentsChildren<TGraph, [...TPath, "attachments"]>, "cms_single_image_widgets">, TGraph, [...TPath, "attachments"]>>;
 cms_widgets: Parent<ModelInputs<cms_widgetsScalars, cms_widgetsParents<TGraph, [...TPath, "cms_widgets"]>, Omit<cms_widgetsChildren<TGraph, [...TPath, "cms_widgets"]>, "cms_single_image_widgets">, TGraph, [...TPath, "cms_widgets"]>>;
};
type cms_single_image_widgetsChildren<TGraph extends any[], TPath extends string[] = []> = {

};
type cms_single_image_widgetsModel = ModelInputs<cms_single_image_widgetsScalars, cms_single_image_widgetsParents<cms_single_image_widgetsGraph>, cms_single_image_widgetsChildren<cms_single_image_widgetsGraph>, cms_single_image_widgetsGraph>;
type cms_spotlight_widgetsScalars = {
  attachment_id: number;
  button_text: string;
  cms_widget_id: number;
  created_at_utc: string;
  description: string;
  expert_id: number | null;
  href: string | null;
  id?: number;
  sub_title: string;
  title: string;
  updated_at_utc?: string;
}
type cms_spotlight_widgetsParents<TGraph extends any[], TPath extends string[] = []> = {
 attachments: Parent<ModelInputs<attachmentsScalars, attachmentsParents<TGraph, [...TPath, "attachments"]>, Omit<attachmentsChildren<TGraph, [...TPath, "attachments"]>, "cms_spotlight_widgets">, TGraph, [...TPath, "attachments"]>>;
 cms_widgets: Parent<ModelInputs<cms_widgetsScalars, cms_widgetsParents<TGraph, [...TPath, "cms_widgets"]>, Omit<cms_widgetsChildren<TGraph, [...TPath, "cms_widgets"]>, "cms_spotlight_widgets">, TGraph, [...TPath, "cms_widgets"]>>;
 experts: Parent<ModelInputs<expertsScalars, expertsParents<TGraph, [...TPath, "experts"]>, Omit<expertsChildren<TGraph, [...TPath, "experts"]>, "cms_spotlight_widgets">, TGraph, [...TPath, "experts"]>>;
};
type cms_spotlight_widgetsChildren<TGraph extends any[], TPath extends string[] = []> = {

};
type cms_spotlight_widgetsModel = ModelInputs<cms_spotlight_widgetsScalars, cms_spotlight_widgetsParents<cms_spotlight_widgetsGraph>, cms_spotlight_widgetsChildren<cms_spotlight_widgetsGraph>, cms_spotlight_widgetsGraph>;
type cms_testimonials_widget_itemsScalars = {
  client_info: string;
  cms_testimonials_widget_id: number;
  created_at_utc: string;
  feedback: string;
  id?: number;
  position_index_weight: number | null;
  updated_at_utc?: string;
}
type cms_testimonials_widget_itemsParents<TGraph extends any[], TPath extends string[] = []> = {
 cms_testimonials_widgets: Parent<ModelInputs<cms_testimonials_widgetsScalars, cms_testimonials_widgetsParents<TGraph, [...TPath, "cms_testimonials_widgets"]>, Omit<cms_testimonials_widgetsChildren<TGraph, [...TPath, "cms_testimonials_widgets"]>, "cms_testimonials_widget_items">, TGraph, [...TPath, "cms_testimonials_widgets"]>>;
};
type cms_testimonials_widget_itemsChildren<TGraph extends any[], TPath extends string[] = []> = {

};
type cms_testimonials_widget_itemsModel = ModelInputs<cms_testimonials_widget_itemsScalars, cms_testimonials_widget_itemsParents<cms_testimonials_widget_itemsGraph>, cms_testimonials_widget_itemsChildren<cms_testimonials_widget_itemsGraph>, cms_testimonials_widget_itemsGraph>;
type cms_testimonials_widgetsScalars = {
  cms_widget_id: number;
  created_at_utc: string;
  id?: number;
  title: string;
  updated_at_utc?: string;
}
type cms_testimonials_widgetsParents<TGraph extends any[], TPath extends string[] = []> = {
 cms_widgets: Parent<ModelInputs<cms_widgetsScalars, cms_widgetsParents<TGraph, [...TPath, "cms_widgets"]>, Omit<cms_widgetsChildren<TGraph, [...TPath, "cms_widgets"]>, "cms_testimonials_widgets">, TGraph, [...TPath, "cms_widgets"]>>;
};
type cms_testimonials_widgetsChildren<TGraph extends any[], TPath extends string[] = []> = {
 cms_testimonials_widget_items: Child<ModelInputs<cms_testimonials_widget_itemsScalars, Omit<cms_testimonials_widget_itemsParents<TGraph, [...TPath, "cms_testimonials_widget_items"]>, "cms_testimonials_widgets">, cms_testimonials_widget_itemsChildren<TGraph, [...TPath, "cms_testimonials_widget_items"]>, TGraph, [...TPath, "cms_testimonials_widget_items"]>>;
};
type cms_testimonials_widgetsModel = ModelInputs<cms_testimonials_widgetsScalars, cms_testimonials_widgetsParents<cms_testimonials_widgetsGraph>, cms_testimonials_widgetsChildren<cms_testimonials_widgetsGraph>, cms_testimonials_widgetsGraph>;
type cms_value_proposition_widgetsScalars = {
  cms_widget_id: number;
  created_at_utc: string;
  id?: number;
  updated_at_utc?: string;
}
type cms_value_proposition_widgetsParents<TGraph extends any[], TPath extends string[] = []> = {
 cms_widgets: Parent<ModelInputs<cms_widgetsScalars, cms_widgetsParents<TGraph, [...TPath, "cms_widgets"]>, Omit<cms_widgetsChildren<TGraph, [...TPath, "cms_widgets"]>, "cms_value_proposition_widgets">, TGraph, [...TPath, "cms_widgets"]>>;
};
type cms_value_proposition_widgetsChildren<TGraph extends any[], TPath extends string[] = []> = {

};
type cms_value_proposition_widgetsModel = ModelInputs<cms_value_proposition_widgetsScalars, cms_value_proposition_widgetsParents<cms_value_proposition_widgetsGraph>, cms_value_proposition_widgetsChildren<cms_value_proposition_widgetsGraph>, cms_value_proposition_widgetsGraph>;
type cms_video_section_widgetsScalars = {
  cms_widget_id: number;
  created_at_utc: string;
  cta_copy: string | null;
  cta_copy_url: string | null;
  has_cta_button: boolean | null;
  id?: number;
  subtitle: string | null;
  thumbnail_attachment_id: number;
  title: string;
  updated_at_utc?: string;
  video_attachment_id: number;
}
type cms_video_section_widgetsParents<TGraph extends any[], TPath extends string[] = []> = {
 attachments: Parent<ModelInputs<attachmentsScalars, attachmentsParents<TGraph, [...TPath, "attachments"]>, Omit<attachmentsChildren<TGraph, [...TPath, "attachments"]>, "cms_video_section_widgets">, TGraph, [...TPath, "attachments"]>>;
 cms_widgets: Parent<ModelInputs<cms_widgetsScalars, cms_widgetsParents<TGraph, [...TPath, "cms_widgets"]>, Omit<cms_widgetsChildren<TGraph, [...TPath, "cms_widgets"]>, "cms_video_section_widgets">, TGraph, [...TPath, "cms_widgets"]>>;
 video_attachments: Parent<ModelInputs<video_attachmentsScalars, video_attachmentsParents<TGraph, [...TPath, "video_attachments"]>, Omit<video_attachmentsChildren<TGraph, [...TPath, "video_attachments"]>, "cms_video_section_widgets">, TGraph, [...TPath, "video_attachments"]>>;
};
type cms_video_section_widgetsChildren<TGraph extends any[], TPath extends string[] = []> = {

};
type cms_video_section_widgetsModel = ModelInputs<cms_video_section_widgetsScalars, cms_video_section_widgetsParents<cms_video_section_widgetsGraph>, cms_video_section_widgetsChildren<cms_video_section_widgetsGraph>, cms_video_section_widgetsGraph>;
type cms_video_widgetsScalars = {
  cms_widget_id: number;
  created_at_utc: string;
  id?: number;
  thumbnail_attachment_id: number;
  title: string;
  updated_at_utc?: string;
  video_attachment_id: number;
}
type cms_video_widgetsParents<TGraph extends any[], TPath extends string[] = []> = {
 attachments: Parent<ModelInputs<attachmentsScalars, attachmentsParents<TGraph, [...TPath, "attachments"]>, Omit<attachmentsChildren<TGraph, [...TPath, "attachments"]>, "cms_video_widgets">, TGraph, [...TPath, "attachments"]>>;
 cms_widgets: Parent<ModelInputs<cms_widgetsScalars, cms_widgetsParents<TGraph, [...TPath, "cms_widgets"]>, Omit<cms_widgetsChildren<TGraph, [...TPath, "cms_widgets"]>, "cms_video_widgets">, TGraph, [...TPath, "cms_widgets"]>>;
 video_attachments: Parent<ModelInputs<video_attachmentsScalars, video_attachmentsParents<TGraph, [...TPath, "video_attachments"]>, Omit<video_attachmentsChildren<TGraph, [...TPath, "video_attachments"]>, "cms_video_widgets">, TGraph, [...TPath, "video_attachments"]>>;
};
type cms_video_widgetsChildren<TGraph extends any[], TPath extends string[] = []> = {

};
type cms_video_widgetsModel = ModelInputs<cms_video_widgetsScalars, cms_video_widgetsParents<cms_video_widgetsGraph>, cms_video_widgetsChildren<cms_video_widgetsGraph>, cms_video_widgetsGraph>;
type cms_widget_item_buttonsScalars = {
  cms_widget_item_id: number;
  created_at_utc: string;
  id?: number;
  link: string;
  text: string;
  updated_at_utc: string | null;
}
type cms_widget_item_buttonsParents<TGraph extends any[], TPath extends string[] = []> = {
 cms_widget_items: Parent<ModelInputs<cms_widget_itemsScalars, cms_widget_itemsParents<TGraph, [...TPath, "cms_widget_items"]>, Omit<cms_widget_itemsChildren<TGraph, [...TPath, "cms_widget_items"]>, "cms_widget_item_buttons">, TGraph, [...TPath, "cms_widget_items"]>>;
};
type cms_widget_item_buttonsChildren<TGraph extends any[], TPath extends string[] = []> = {

};
type cms_widget_item_buttonsModel = ModelInputs<cms_widget_item_buttonsScalars, cms_widget_item_buttonsParents<cms_widget_item_buttonsGraph>, cms_widget_item_buttonsChildren<cms_widget_item_buttonsGraph>, cms_widget_item_buttonsGraph>;
type cms_widget_item_headlinesScalars = {
  cms_widget_item_id: number;
  created_at_utc: string;
  headline: string;
  id?: number;
  subheadline: string | null;
  updated_at_utc: string | null;
}
type cms_widget_item_headlinesParents<TGraph extends any[], TPath extends string[] = []> = {
 cms_widget_items: Parent<ModelInputs<cms_widget_itemsScalars, cms_widget_itemsParents<TGraph, [...TPath, "cms_widget_items"]>, Omit<cms_widget_itemsChildren<TGraph, [...TPath, "cms_widget_items"]>, "cms_widget_item_headlines">, TGraph, [...TPath, "cms_widget_items"]>>;
};
type cms_widget_item_headlinesChildren<TGraph extends any[], TPath extends string[] = []> = {

};
type cms_widget_item_headlinesModel = ModelInputs<cms_widget_item_headlinesScalars, cms_widget_item_headlinesParents<cms_widget_item_headlinesGraph>, cms_widget_item_headlinesChildren<cms_widget_item_headlinesGraph>, cms_widget_item_headlinesGraph>;
type cms_widget_item_three_column_cardsScalars = {
  cms_widget_item_id: number;
  created_at_utc: string;
  first_attachment_id: number | null;
  first_link: string | null;
  first_title: string;
  id?: number;
  second_attachment_id: number | null;
  second_link: string | null;
  second_title: string;
  third_attachment_id: number | null;
  third_link: string | null;
  third_title: string;
  updated_at_utc: string | null;
}
type cms_widget_item_three_column_cardsParents<TGraph extends any[], TPath extends string[] = []> = {
 attachments_cms_widget_item_three_column_cards_first_attachment_idToattachments: Parent<ModelInputs<attachmentsScalars, attachmentsParents<TGraph, [...TPath, "attachments_cms_widget_item_three_column_cards_first_attachment_idToattachments"]>, Omit<attachmentsChildren<TGraph, [...TPath, "attachments_cms_widget_item_three_column_cards_first_attachment_idToattachments"]>, "cms_widget_item_three_column_cards_cms_widget_item_three_column_cards_first_attachment_idToattachments">, TGraph, [...TPath, "attachments_cms_widget_item_three_column_cards_first_attachment_idToattachments"]>>;
 attachments_cms_widget_item_three_column_cards_second_attachment_idToattachments: Parent<ModelInputs<attachmentsScalars, attachmentsParents<TGraph, [...TPath, "attachments_cms_widget_item_three_column_cards_second_attachment_idToattachments"]>, Omit<attachmentsChildren<TGraph, [...TPath, "attachments_cms_widget_item_three_column_cards_second_attachment_idToattachments"]>, "cms_widget_item_three_column_cards_cms_widget_item_three_column_cards_second_attachment_idToattachments">, TGraph, [...TPath, "attachments_cms_widget_item_three_column_cards_second_attachment_idToattachments"]>>;
 attachments_cms_widget_item_three_column_cards_third_attachment_idToattachments: Parent<ModelInputs<attachmentsScalars, attachmentsParents<TGraph, [...TPath, "attachments_cms_widget_item_three_column_cards_third_attachment_idToattachments"]>, Omit<attachmentsChildren<TGraph, [...TPath, "attachments_cms_widget_item_three_column_cards_third_attachment_idToattachments"]>, "cms_widget_item_three_column_cards_cms_widget_item_three_column_cards_third_attachment_idToattachments">, TGraph, [...TPath, "attachments_cms_widget_item_three_column_cards_third_attachment_idToattachments"]>>;
 cms_widget_items: Parent<ModelInputs<cms_widget_itemsScalars, cms_widget_itemsParents<TGraph, [...TPath, "cms_widget_items"]>, Omit<cms_widget_itemsChildren<TGraph, [...TPath, "cms_widget_items"]>, "cms_widget_item_three_column_cards">, TGraph, [...TPath, "cms_widget_items"]>>;
};
type cms_widget_item_three_column_cardsChildren<TGraph extends any[], TPath extends string[] = []> = {

};
type cms_widget_item_three_column_cardsModel = ModelInputs<cms_widget_item_three_column_cardsScalars, cms_widget_item_three_column_cardsParents<cms_widget_item_three_column_cardsGraph>, cms_widget_item_three_column_cardsChildren<cms_widget_item_three_column_cardsGraph>, cms_widget_item_three_column_cardsGraph>;
type cms_widget_item_two_column_cardsScalars = {
  cms_widget_item_id: number;
  created_at_utc: string;
  first_attachment_id: number | null;
  first_link: string | null;
  first_title: string;
  id?: number;
  second_attachment_id: number | null;
  second_link: string | null;
  second_title: string;
  updated_at_utc: string | null;
}
type cms_widget_item_two_column_cardsParents<TGraph extends any[], TPath extends string[] = []> = {
 attachments_cms_widget_item_two_column_cards_first_attachment_idToattachments: Parent<ModelInputs<attachmentsScalars, attachmentsParents<TGraph, [...TPath, "attachments_cms_widget_item_two_column_cards_first_attachment_idToattachments"]>, Omit<attachmentsChildren<TGraph, [...TPath, "attachments_cms_widget_item_two_column_cards_first_attachment_idToattachments"]>, "cms_widget_item_two_column_cards_cms_widget_item_two_column_cards_first_attachment_idToattachments">, TGraph, [...TPath, "attachments_cms_widget_item_two_column_cards_first_attachment_idToattachments"]>>;
 attachments_cms_widget_item_two_column_cards_second_attachment_idToattachments: Parent<ModelInputs<attachmentsScalars, attachmentsParents<TGraph, [...TPath, "attachments_cms_widget_item_two_column_cards_second_attachment_idToattachments"]>, Omit<attachmentsChildren<TGraph, [...TPath, "attachments_cms_widget_item_two_column_cards_second_attachment_idToattachments"]>, "cms_widget_item_two_column_cards_cms_widget_item_two_column_cards_second_attachment_idToattachments">, TGraph, [...TPath, "attachments_cms_widget_item_two_column_cards_second_attachment_idToattachments"]>>;
 cms_widget_items: Parent<ModelInputs<cms_widget_itemsScalars, cms_widget_itemsParents<TGraph, [...TPath, "cms_widget_items"]>, Omit<cms_widget_itemsChildren<TGraph, [...TPath, "cms_widget_items"]>, "cms_widget_item_two_column_cards">, TGraph, [...TPath, "cms_widget_items"]>>;
};
type cms_widget_item_two_column_cardsChildren<TGraph extends any[], TPath extends string[] = []> = {

};
type cms_widget_item_two_column_cardsModel = ModelInputs<cms_widget_item_two_column_cardsScalars, cms_widget_item_two_column_cardsParents<cms_widget_item_two_column_cardsGraph>, cms_widget_item_two_column_cardsChildren<cms_widget_item_two_column_cardsGraph>, cms_widget_item_two_column_cardsGraph>;
type cms_widget_itemsScalars = {
  created_at_utc: string;
  id?: number;
  position_index_weight: number;
  updated_at_utc: string | null;
}
type cms_widget_itemsParents<TGraph extends any[], TPath extends string[] = []> = {

};
type cms_widget_itemsChildren<TGraph extends any[], TPath extends string[] = []> = {
 cms_section_widget_items: Child<ModelInputs<cms_section_widget_itemsScalars, Omit<cms_section_widget_itemsParents<TGraph, [...TPath, "cms_section_widget_items"]>, "cms_widget_items">, cms_section_widget_itemsChildren<TGraph, [...TPath, "cms_section_widget_items"]>, TGraph, [...TPath, "cms_section_widget_items"]>>;
 cms_widget_item_buttons: Child<ModelInputs<cms_widget_item_buttonsScalars, Omit<cms_widget_item_buttonsParents<TGraph, [...TPath, "cms_widget_item_buttons"]>, "cms_widget_items">, cms_widget_item_buttonsChildren<TGraph, [...TPath, "cms_widget_item_buttons"]>, TGraph, [...TPath, "cms_widget_item_buttons"]>>;
 cms_widget_item_headlines: Child<ModelInputs<cms_widget_item_headlinesScalars, Omit<cms_widget_item_headlinesParents<TGraph, [...TPath, "cms_widget_item_headlines"]>, "cms_widget_items">, cms_widget_item_headlinesChildren<TGraph, [...TPath, "cms_widget_item_headlines"]>, TGraph, [...TPath, "cms_widget_item_headlines"]>>;
 cms_widget_item_three_column_cards: Child<ModelInputs<cms_widget_item_three_column_cardsScalars, Omit<cms_widget_item_three_column_cardsParents<TGraph, [...TPath, "cms_widget_item_three_column_cards"]>, "cms_widget_items">, cms_widget_item_three_column_cardsChildren<TGraph, [...TPath, "cms_widget_item_three_column_cards"]>, TGraph, [...TPath, "cms_widget_item_three_column_cards"]>>;
 cms_widget_item_two_column_cards: Child<ModelInputs<cms_widget_item_two_column_cardsScalars, Omit<cms_widget_item_two_column_cardsParents<TGraph, [...TPath, "cms_widget_item_two_column_cards"]>, "cms_widget_items">, cms_widget_item_two_column_cardsChildren<TGraph, [...TPath, "cms_widget_item_two_column_cards"]>, TGraph, [...TPath, "cms_widget_item_two_column_cards"]>>;
};
type cms_widget_itemsModel = ModelInputs<cms_widget_itemsScalars, cms_widget_itemsParents<cms_widget_itemsGraph>, cms_widget_itemsChildren<cms_widget_itemsGraph>, cms_widget_itemsGraph>;
type cms_widget_listing_widgetsScalars = {
  cms_listing_widgets_id: number;
  cms_widget_id: number;
  id?: number;
  position_index_weight: number;
}
type cms_widget_listing_widgetsParents<TGraph extends any[], TPath extends string[] = []> = {
 cms_listing_widgets: Parent<ModelInputs<cms_listing_widgetsScalars, cms_listing_widgetsParents<TGraph, [...TPath, "cms_listing_widgets"]>, Omit<cms_listing_widgetsChildren<TGraph, [...TPath, "cms_listing_widgets"]>, "cms_widget_listing_widgets">, TGraph, [...TPath, "cms_listing_widgets"]>>;
 cms_widgets: Parent<ModelInputs<cms_widgetsScalars, cms_widgetsParents<TGraph, [...TPath, "cms_widgets"]>, Omit<cms_widgetsChildren<TGraph, [...TPath, "cms_widgets"]>, "cms_widget_listing_widgets">, TGraph, [...TPath, "cms_widgets"]>>;
};
type cms_widget_listing_widgetsChildren<TGraph extends any[], TPath extends string[] = []> = {

};
type cms_widget_listing_widgetsModel = ModelInputs<cms_widget_listing_widgetsScalars, cms_widget_listing_widgetsParents<cms_widget_listing_widgetsGraph>, cms_widget_listing_widgetsChildren<cms_widget_listing_widgetsGraph>, cms_widget_listing_widgetsGraph>;
type cms_widgetsScalars = {
  cms_page_id: number;
  created_at_utc: string;
  id?: number;
  position_index_weight: number | null;
  updated_at_utc?: string;
}
type cms_widgetsParents<TGraph extends any[], TPath extends string[] = []> = {
 cms_pages: Parent<ModelInputs<cms_pagesScalars, cms_pagesParents<TGraph, [...TPath, "cms_pages"]>, Omit<cms_pagesChildren<TGraph, [...TPath, "cms_pages"]>, "cms_widgets">, TGraph, [...TPath, "cms_pages"]>>;
};
type cms_widgetsChildren<TGraph extends any[], TPath extends string[] = []> = {
 cms_alphabetical_index_widgets: Child<ModelInputs<cms_alphabetical_index_widgetsScalars, Omit<cms_alphabetical_index_widgetsParents<TGraph, [...TPath, "cms_alphabetical_index_widgets"]>, "cms_widgets">, cms_alphabetical_index_widgetsChildren<TGraph, [...TPath, "cms_alphabetical_index_widgets"]>, TGraph, [...TPath, "cms_alphabetical_index_widgets"]>>;
 cms_alt_experts_listing_widgets: Child<ModelInputs<cms_alt_experts_listing_widgetsScalars, Omit<cms_alt_experts_listing_widgetsParents<TGraph, [...TPath, "cms_alt_experts_listing_widgets"]>, "cms_widgets">, cms_alt_experts_listing_widgetsChildren<TGraph, [...TPath, "cms_alt_experts_listing_widgets"]>, TGraph, [...TPath, "cms_alt_experts_listing_widgets"]>>;
 cms_alt_value_proposition_widgets: Child<ModelInputs<cms_alt_value_proposition_widgetsScalars, Omit<cms_alt_value_proposition_widgetsParents<TGraph, [...TPath, "cms_alt_value_proposition_widgets"]>, "cms_widgets">, cms_alt_value_proposition_widgetsChildren<TGraph, [...TPath, "cms_alt_value_proposition_widgets"]>, TGraph, [...TPath, "cms_alt_value_proposition_widgets"]>>;
 cms_article_heading_widgets: Child<ModelInputs<cms_article_heading_widgetsScalars, Omit<cms_article_heading_widgetsParents<TGraph, [...TPath, "cms_article_heading_widgets"]>, "cms_widgets">, cms_article_heading_widgetsChildren<TGraph, [...TPath, "cms_article_heading_widgets"]>, TGraph, [...TPath, "cms_article_heading_widgets"]>>;
 cms_article_pages: Child<ModelInputs<cms_article_pagesScalars, Omit<cms_article_pagesParents<TGraph, [...TPath, "cms_article_pages"]>, "cms_widgets">, cms_article_pagesChildren<TGraph, [...TPath, "cms_article_pages"]>, TGraph, [...TPath, "cms_article_pages"]>>;
 cms_articles_widgets: Child<ModelInputs<cms_articles_widgetsScalars, Omit<cms_articles_widgetsParents<TGraph, [...TPath, "cms_articles_widgets"]>, "cms_widgets">, cms_articles_widgetsChildren<TGraph, [...TPath, "cms_articles_widgets"]>, TGraph, [...TPath, "cms_articles_widgets"]>>;
 cms_banner_widgets: Child<ModelInputs<cms_banner_widgetsScalars, Omit<cms_banner_widgetsParents<TGraph, [...TPath, "cms_banner_widgets"]>, "cms_widgets">, cms_banner_widgetsChildren<TGraph, [...TPath, "cms_banner_widgets"]>, TGraph, [...TPath, "cms_banner_widgets"]>>;
 cms_card_navigation_widgets: Child<ModelInputs<cms_card_navigation_widgetsScalars, Omit<cms_card_navigation_widgetsParents<TGraph, [...TPath, "cms_card_navigation_widgets"]>, "cms_widgets">, cms_card_navigation_widgetsChildren<TGraph, [...TPath, "cms_card_navigation_widgets"]>, TGraph, [...TPath, "cms_card_navigation_widgets"]>>;
 cms_category_collection_widgets: Child<ModelInputs<cms_category_collection_widgetsScalars, Omit<cms_category_collection_widgetsParents<TGraph, [...TPath, "cms_category_collection_widgets"]>, "cms_widgets">, cms_category_collection_widgetsChildren<TGraph, [...TPath, "cms_category_collection_widgets"]>, TGraph, [...TPath, "cms_category_collection_widgets"]>>;
 cms_category_header_widgets: Child<ModelInputs<cms_category_header_widgetsScalars, Omit<cms_category_header_widgetsParents<TGraph, [...TPath, "cms_category_header_widgets"]>, "cms_widgets">, cms_category_header_widgetsChildren<TGraph, [...TPath, "cms_category_header_widgets"]>, TGraph, [...TPath, "cms_category_header_widgets"]>>;
 cms_collection_header_widgets: Child<ModelInputs<cms_collection_header_widgetsScalars, Omit<cms_collection_header_widgetsParents<TGraph, [...TPath, "cms_collection_header_widgets"]>, "cms_widgets">, cms_collection_header_widgetsChildren<TGraph, [...TPath, "cms_collection_header_widgets"]>, TGraph, [...TPath, "cms_collection_header_widgets"]>>;
 cms_collections_carousel_widgets: Child<ModelInputs<cms_collections_carousel_widgetsScalars, Omit<cms_collections_carousel_widgetsParents<TGraph, [...TPath, "cms_collections_carousel_widgets"]>, "cms_widgets">, cms_collections_carousel_widgetsChildren<TGraph, [...TPath, "cms_collections_carousel_widgets"]>, TGraph, [...TPath, "cms_collections_carousel_widgets"]>>;
 cms_concierge_widgets: Child<ModelInputs<cms_concierge_widgetsScalars, Omit<cms_concierge_widgetsParents<TGraph, [...TPath, "cms_concierge_widgets"]>, "cms_widgets">, cms_concierge_widgetsChildren<TGraph, [...TPath, "cms_concierge_widgets"]>, TGraph, [...TPath, "cms_concierge_widgets"]>>;
 cms_double_image_widgets: Child<ModelInputs<cms_double_image_widgetsScalars, Omit<cms_double_image_widgetsParents<TGraph, [...TPath, "cms_double_image_widgets"]>, "cms_widgets">, cms_double_image_widgetsChildren<TGraph, [...TPath, "cms_double_image_widgets"]>, TGraph, [...TPath, "cms_double_image_widgets"]>>;
 cms_expert_collections_widgets: Child<ModelInputs<cms_expert_collections_widgetsScalars, Omit<cms_expert_collections_widgetsParents<TGraph, [...TPath, "cms_expert_collections_widgets"]>, "cms_widgets">, cms_expert_collections_widgetsChildren<TGraph, [...TPath, "cms_expert_collections_widgets"]>, TGraph, [...TPath, "cms_expert_collections_widgets"]>>;
 cms_experts_listing_widgets: Child<ModelInputs<cms_experts_listing_widgetsScalars, Omit<cms_experts_listing_widgetsParents<TGraph, [...TPath, "cms_experts_listing_widgets"]>, "cms_widgets">, cms_experts_listing_widgetsChildren<TGraph, [...TPath, "cms_experts_listing_widgets"]>, TGraph, [...TPath, "cms_experts_listing_widgets"]>>;
 cms_experts_widgets: Child<ModelInputs<cms_experts_widgetsScalars, Omit<cms_experts_widgetsParents<TGraph, [...TPath, "cms_experts_widgets"]>, "cms_widgets">, cms_experts_widgetsChildren<TGraph, [...TPath, "cms_experts_widgets"]>, TGraph, [...TPath, "cms_experts_widgets"]>>;
 cms_featured_in_widgets: Child<ModelInputs<cms_featured_in_widgetsScalars, Omit<cms_featured_in_widgetsParents<TGraph, [...TPath, "cms_featured_in_widgets"]>, "cms_widgets">, cms_featured_in_widgetsChildren<TGraph, [...TPath, "cms_featured_in_widgets"]>, TGraph, [...TPath, "cms_featured_in_widgets"]>>;
 cms_gallery_widgets: Child<ModelInputs<cms_gallery_widgetsScalars, Omit<cms_gallery_widgetsParents<TGraph, [...TPath, "cms_gallery_widgets"]>, "cms_widgets">, cms_gallery_widgetsChildren<TGraph, [...TPath, "cms_gallery_widgets"]>, TGraph, [...TPath, "cms_gallery_widgets"]>>;
 cms_gift_card_widgets: Child<ModelInputs<cms_gift_card_widgetsScalars, Omit<cms_gift_card_widgetsParents<TGraph, [...TPath, "cms_gift_card_widgets"]>, "cms_widgets">, cms_gift_card_widgetsChildren<TGraph, [...TPath, "cms_gift_card_widgets"]>, TGraph, [...TPath, "cms_gift_card_widgets"]>>;
 cms_hero_carousel_widgets: Child<ModelInputs<cms_hero_carousel_widgetsScalars, Omit<cms_hero_carousel_widgetsParents<TGraph, [...TPath, "cms_hero_carousel_widgets"]>, "cms_widgets">, cms_hero_carousel_widgetsChildren<TGraph, [...TPath, "cms_hero_carousel_widgets"]>, TGraph, [...TPath, "cms_hero_carousel_widgets"]>>;
 cms_hero_main_widgets: Child<ModelInputs<cms_hero_main_widgetsScalars, Omit<cms_hero_main_widgetsParents<TGraph, [...TPath, "cms_hero_main_widgets"]>, "cms_widgets">, cms_hero_main_widgetsChildren<TGraph, [...TPath, "cms_hero_main_widgets"]>, TGraph, [...TPath, "cms_hero_main_widgets"]>>;
 cms_hero_widgets: Child<ModelInputs<cms_hero_widgetsScalars, Omit<cms_hero_widgetsParents<TGraph, [...TPath, "cms_hero_widgets"]>, "cms_widgets">, cms_hero_widgetsChildren<TGraph, [...TPath, "cms_hero_widgets"]>, TGraph, [...TPath, "cms_hero_widgets"]>>;
 cms_info_cards_widgets: Child<ModelInputs<cms_info_cards_widgetsScalars, Omit<cms_info_cards_widgetsParents<TGraph, [...TPath, "cms_info_cards_widgets"]>, "cms_widgets">, cms_info_cards_widgetsChildren<TGraph, [...TPath, "cms_info_cards_widgets"]>, TGraph, [...TPath, "cms_info_cards_widgets"]>>;
 cms_introduction_widgets: Child<ModelInputs<cms_introduction_widgetsScalars, Omit<cms_introduction_widgetsParents<TGraph, [...TPath, "cms_introduction_widgets"]>, "cms_widgets">, cms_introduction_widgetsChildren<TGraph, [...TPath, "cms_introduction_widgets"]>, TGraph, [...TPath, "cms_introduction_widgets"]>>;
 cms_multi_collection_widgets: Child<ModelInputs<cms_multi_collection_widgetsScalars, Omit<cms_multi_collection_widgetsParents<TGraph, [...TPath, "cms_multi_collection_widgets"]>, "cms_widgets">, cms_multi_collection_widgetsChildren<TGraph, [...TPath, "cms_multi_collection_widgets"]>, TGraph, [...TPath, "cms_multi_collection_widgets"]>>;
 cms_products_widgets: Child<ModelInputs<cms_products_widgetsScalars, Omit<cms_products_widgetsParents<TGraph, [...TPath, "cms_products_widgets"]>, "cms_widgets">, cms_products_widgetsChildren<TGraph, [...TPath, "cms_products_widgets"]>, TGraph, [...TPath, "cms_products_widgets"]>>;
 cms_qa_widgets: Child<ModelInputs<cms_qa_widgetsScalars, Omit<cms_qa_widgetsParents<TGraph, [...TPath, "cms_qa_widgets"]>, "cms_widgets">, cms_qa_widgetsChildren<TGraph, [...TPath, "cms_qa_widgets"]>, TGraph, [...TPath, "cms_qa_widgets"]>>;
 cms_rich_text_widgets: Child<ModelInputs<cms_rich_text_widgetsScalars, Omit<cms_rich_text_widgetsParents<TGraph, [...TPath, "cms_rich_text_widgets"]>, "cms_widgets">, cms_rich_text_widgetsChildren<TGraph, [...TPath, "cms_rich_text_widgets"]>, TGraph, [...TPath, "cms_rich_text_widgets"]>>;
 cms_section_widgets: Child<ModelInputs<cms_section_widgetsScalars, Omit<cms_section_widgetsParents<TGraph, [...TPath, "cms_section_widgets"]>, "cms_widgets">, cms_section_widgetsChildren<TGraph, [...TPath, "cms_section_widgets"]>, TGraph, [...TPath, "cms_section_widgets"]>>;
 cms_single_image_widgets: Child<ModelInputs<cms_single_image_widgetsScalars, Omit<cms_single_image_widgetsParents<TGraph, [...TPath, "cms_single_image_widgets"]>, "cms_widgets">, cms_single_image_widgetsChildren<TGraph, [...TPath, "cms_single_image_widgets"]>, TGraph, [...TPath, "cms_single_image_widgets"]>>;
 cms_spotlight_widgets: Child<ModelInputs<cms_spotlight_widgetsScalars, Omit<cms_spotlight_widgetsParents<TGraph, [...TPath, "cms_spotlight_widgets"]>, "cms_widgets">, cms_spotlight_widgetsChildren<TGraph, [...TPath, "cms_spotlight_widgets"]>, TGraph, [...TPath, "cms_spotlight_widgets"]>>;
 cms_testimonials_widgets: Child<ModelInputs<cms_testimonials_widgetsScalars, Omit<cms_testimonials_widgetsParents<TGraph, [...TPath, "cms_testimonials_widgets"]>, "cms_widgets">, cms_testimonials_widgetsChildren<TGraph, [...TPath, "cms_testimonials_widgets"]>, TGraph, [...TPath, "cms_testimonials_widgets"]>>;
 cms_value_proposition_widgets: Child<ModelInputs<cms_value_proposition_widgetsScalars, Omit<cms_value_proposition_widgetsParents<TGraph, [...TPath, "cms_value_proposition_widgets"]>, "cms_widgets">, cms_value_proposition_widgetsChildren<TGraph, [...TPath, "cms_value_proposition_widgets"]>, TGraph, [...TPath, "cms_value_proposition_widgets"]>>;
 cms_video_section_widgets: Child<ModelInputs<cms_video_section_widgetsScalars, Omit<cms_video_section_widgetsParents<TGraph, [...TPath, "cms_video_section_widgets"]>, "cms_widgets">, cms_video_section_widgetsChildren<TGraph, [...TPath, "cms_video_section_widgets"]>, TGraph, [...TPath, "cms_video_section_widgets"]>>;
 cms_video_widgets: Child<ModelInputs<cms_video_widgetsScalars, Omit<cms_video_widgetsParents<TGraph, [...TPath, "cms_video_widgets"]>, "cms_widgets">, cms_video_widgetsChildren<TGraph, [...TPath, "cms_video_widgets"]>, TGraph, [...TPath, "cms_video_widgets"]>>;
 cms_widget_listing_widgets: Child<ModelInputs<cms_widget_listing_widgetsScalars, Omit<cms_widget_listing_widgetsParents<TGraph, [...TPath, "cms_widget_listing_widgets"]>, "cms_widgets">, cms_widget_listing_widgetsChildren<TGraph, [...TPath, "cms_widget_listing_widgets"]>, TGraph, [...TPath, "cms_widget_listing_widgets"]>>;
};
type cms_widgetsModel = ModelInputs<cms_widgetsScalars, cms_widgetsParents<cms_widgetsGraph>, cms_widgetsChildren<cms_widgetsGraph>, cms_widgetsGraph>;
type collection_items_denormalizedScalars = {
  availability: availability_typeEnum | null;
  category_one_id: number | null;
  category_three_id: number | null;
  category_two_id: number | null;
  collection_id: number | null;
  created_at_utc: string | null;
  id: string;
  is_breakout_variant: boolean | null;
  is_published_first_time: boolean | null;
  manufacturer: string | null;
  max_published_price: number | null;
  min_published_price: number | null;
  position_index_weight: number | null;
  product_id: number | null;
  product_variant_id: number | null;
  published_prices: number[] | null;
  quantity: number | null;
  status: string | null;
  variant_ids: number[] | null;
  variant_statuses: string[] | null;
}
type collection_items_denormalizedParents<TGraph extends any[], TPath extends string[] = []> = {
 collections: Parent<ModelInputs<collectionsScalars, collectionsParents<TGraph, [...TPath, "collections"]>, Omit<collectionsChildren<TGraph, [...TPath, "collections"]>, "collection_items_denormalized">, TGraph, [...TPath, "collections"]>>;
 product_categories_collection_items_denormalized_category_one_idToproduct_categories: Parent<ModelInputs<product_categoriesScalars, product_categoriesParents<TGraph, [...TPath, "product_categories_collection_items_denormalized_category_one_idToproduct_categories"]>, Omit<product_categoriesChildren<TGraph, [...TPath, "product_categories_collection_items_denormalized_category_one_idToproduct_categories"]>, "collection_items_denormalized_collection_items_denormalized_category_one_idToproduct_categories">, TGraph, [...TPath, "product_categories_collection_items_denormalized_category_one_idToproduct_categories"]>>;
 product_categories_collection_items_denormalized_category_three_idToproduct_categories: Parent<ModelInputs<product_categoriesScalars, product_categoriesParents<TGraph, [...TPath, "product_categories_collection_items_denormalized_category_three_idToproduct_categories"]>, Omit<product_categoriesChildren<TGraph, [...TPath, "product_categories_collection_items_denormalized_category_three_idToproduct_categories"]>, "collection_items_denormalized_collection_items_denormalized_category_three_idToproduct_categories">, TGraph, [...TPath, "product_categories_collection_items_denormalized_category_three_idToproduct_categories"]>>;
 product_categories_collection_items_denormalized_category_two_idToproduct_categories: Parent<ModelInputs<product_categoriesScalars, product_categoriesParents<TGraph, [...TPath, "product_categories_collection_items_denormalized_category_two_idToproduct_categories"]>, Omit<product_categoriesChildren<TGraph, [...TPath, "product_categories_collection_items_denormalized_category_two_idToproduct_categories"]>, "collection_items_denormalized_collection_items_denormalized_category_two_idToproduct_categories">, TGraph, [...TPath, "product_categories_collection_items_denormalized_category_two_idToproduct_categories"]>>;
 product_variants: Parent<ModelInputs<product_variantsScalars, product_variantsParents<TGraph, [...TPath, "product_variants"]>, Omit<product_variantsChildren<TGraph, [...TPath, "product_variants"]>, "collection_items_denormalized">, TGraph, [...TPath, "product_variants"]>>;
 products: Parent<ModelInputs<productsScalars, productsParents<TGraph, [...TPath, "products"]>, Omit<productsChildren<TGraph, [...TPath, "products"]>, "collection_items_denormalized">, TGraph, [...TPath, "products"]>>;
};
type collection_items_denormalizedChildren<TGraph extends any[], TPath extends string[] = []> = {

};
type collection_items_denormalizedModel = ModelInputs<collection_items_denormalizedScalars, collection_items_denormalizedParents<collection_items_denormalizedGraph>, collection_items_denormalizedChildren<collection_items_denormalizedGraph>, collection_items_denormalizedGraph>;
type collection_product_brandsScalars = {
  brand_id: string | null;
  collection_id: number | null;
}
type collection_product_brandsParents<TGraph extends any[], TPath extends string[] = []> = {
 brands: Parent<ModelInputs<brandsScalars, brandsParents<TGraph, [...TPath, "brands"]>, Omit<brandsChildren<TGraph, [...TPath, "brands"]>, "collection_product_brands">, TGraph, [...TPath, "brands"]>>;
 collections: Parent<ModelInputs<collectionsScalars, collectionsParents<TGraph, [...TPath, "collections"]>, Omit<collectionsChildren<TGraph, [...TPath, "collections"]>, "collection_product_brands">, TGraph, [...TPath, "collections"]>>;
};
type collection_product_brandsChildren<TGraph extends any[], TPath extends string[] = []> = {

};
type collection_product_brandsModel = ModelInputs<collection_product_brandsScalars, collection_product_brandsParents<collection_product_brandsGraph>, collection_product_brandsChildren<collection_product_brandsGraph>, collection_product_brandsGraph>;
type collection_productsScalars = {
  collection_id: number;
  created_at_utc: string;
  id?: number;
  position_index_weight: number;
  product_id: number;
  product_variant_id: number | null;
  updated_at_utc?: string;
}
type collection_productsParents<TGraph extends any[], TPath extends string[] = []> = {
 collections: Parent<ModelInputs<collectionsScalars, collectionsParents<TGraph, [...TPath, "collections"]>, Omit<collectionsChildren<TGraph, [...TPath, "collections"]>, "collection_products">, TGraph, [...TPath, "collections"]>>;
 product_variants: Parent<ModelInputs<product_variantsScalars, product_variantsParents<TGraph, [...TPath, "product_variants"]>, Omit<product_variantsChildren<TGraph, [...TPath, "product_variants"]>, "collection_products">, TGraph, [...TPath, "product_variants"]>>;
 products: Parent<ModelInputs<productsScalars, productsParents<TGraph, [...TPath, "products"]>, Omit<productsChildren<TGraph, [...TPath, "products"]>, "collection_products">, TGraph, [...TPath, "products"]>>;
};
type collection_productsChildren<TGraph extends any[], TPath extends string[] = []> = {

};
type collection_productsModel = ModelInputs<collection_productsScalars, collection_productsParents<collection_productsGraph>, collection_productsChildren<collection_productsGraph>, collection_productsGraph>;
type collectionsScalars = {
  code: string;
  created_at_utc: string;
  expert_id: number | null;
  id?: number;
  is_generated?: boolean;
  title: string | null;
  type: collections_type_typeEnum | null;
  updated_at_utc?: string;
}
type collectionsParents<TGraph extends any[], TPath extends string[] = []> = {
 experts: Parent<ModelInputs<expertsScalars, expertsParents<TGraph, [...TPath, "experts"]>, Omit<expertsChildren<TGraph, [...TPath, "experts"]>, "collections">, TGraph, [...TPath, "experts"]>>;
};
type collectionsChildren<TGraph extends any[], TPath extends string[] = []> = {
 cms_multi_collection_widget_items: Child<ModelInputs<cms_multi_collection_widget_itemsScalars, Omit<cms_multi_collection_widget_itemsParents<TGraph, [...TPath, "cms_multi_collection_widget_items"]>, "collections">, cms_multi_collection_widget_itemsChildren<TGraph, [...TPath, "cms_multi_collection_widget_items"]>, TGraph, [...TPath, "cms_multi_collection_widget_items"]>>;
 collection_items_denormalized: Child<ModelInputs<collection_items_denormalizedScalars, Omit<collection_items_denormalizedParents<TGraph, [...TPath, "collection_items_denormalized"]>, "collections">, collection_items_denormalizedChildren<TGraph, [...TPath, "collection_items_denormalized"]>, TGraph, [...TPath, "collection_items_denormalized"]>>;
 collection_product_brands: Child<ModelInputs<collection_product_brandsScalars, Omit<collection_product_brandsParents<TGraph, [...TPath, "collection_product_brands"]>, "collections">, collection_product_brandsChildren<TGraph, [...TPath, "collection_product_brands"]>, TGraph, [...TPath, "collection_product_brands"]>>;
 collection_products: Child<ModelInputs<collection_productsScalars, Omit<collection_productsParents<TGraph, [...TPath, "collection_products"]>, "collections">, collection_productsChildren<TGraph, [...TPath, "collection_products"]>, TGraph, [...TPath, "collection_products"]>>;
 collections_product_categories: Child<ModelInputs<collections_product_categoriesScalars, Omit<collections_product_categoriesParents<TGraph, [...TPath, "collections_product_categories"]>, "collections">, collections_product_categoriesChildren<TGraph, [...TPath, "collections_product_categories"]>, TGraph, [...TPath, "collections_product_categories"]>>;
};
type collectionsModel = ModelInputs<collectionsScalars, collectionsParents<collectionsGraph>, collectionsChildren<collectionsGraph>, collectionsGraph>;
type collections_product_categoriesScalars = {
  collection_id: number;
  product_category_id: number;
}
type collections_product_categoriesParents<TGraph extends any[], TPath extends string[] = []> = {
 collections: Parent<ModelInputs<collectionsScalars, collectionsParents<TGraph, [...TPath, "collections"]>, Omit<collectionsChildren<TGraph, [...TPath, "collections"]>, "collections_product_categories">, TGraph, [...TPath, "collections"]>>;
 product_categories: Parent<ModelInputs<product_categoriesScalars, product_categoriesParents<TGraph, [...TPath, "product_categories"]>, Omit<product_categoriesChildren<TGraph, [...TPath, "product_categories"]>, "collections_product_categories">, TGraph, [...TPath, "product_categories"]>>;
};
type collections_product_categoriesChildren<TGraph extends any[], TPath extends string[] = []> = {

};
type collections_product_categoriesModel = ModelInputs<collections_product_categoriesScalars, collections_product_categoriesParents<collections_product_categoriesGraph>, collections_product_categoriesChildren<collections_product_categoriesGraph>, collections_product_categoriesGraph>;
type commission_cart_itemScalars = {
  cart_item_id: number;
  commission_id: number;
}
type commission_cart_itemParents<TGraph extends any[], TPath extends string[] = []> = {
 cart_items: Parent<ModelInputs<cart_itemsScalars, cart_itemsParents<TGraph, [...TPath, "cart_items"]>, Omit<cart_itemsChildren<TGraph, [...TPath, "cart_items"]>, "commission_cart_item">, TGraph, [...TPath, "cart_items"]>>;
 commissions: Parent<ModelInputs<commissionsScalars, commissionsParents<TGraph, [...TPath, "commissions"]>, Omit<commissionsChildren<TGraph, [...TPath, "commissions"]>, "commission_cart_item">, TGraph, [...TPath, "commissions"]>>;
};
type commission_cart_itemChildren<TGraph extends any[], TPath extends string[] = []> = {

};
type commission_cart_itemModel = ModelInputs<commission_cart_itemScalars, commission_cart_itemParents<commission_cart_itemGraph>, commission_cart_itemChildren<commission_cart_itemGraph>, commission_cart_itemGraph>;
type commission_expertScalars = {
  commission_id: number;
  expert_id: number;
}
type commission_expertParents<TGraph extends any[], TPath extends string[] = []> = {
 commissions: Parent<ModelInputs<commissionsScalars, commissionsParents<TGraph, [...TPath, "commissions"]>, Omit<commissionsChildren<TGraph, [...TPath, "commissions"]>, "commission_expert">, TGraph, [...TPath, "commissions"]>>;
 experts: Parent<ModelInputs<expertsScalars, expertsParents<TGraph, [...TPath, "experts"]>, Omit<expertsChildren<TGraph, [...TPath, "experts"]>, "commission_expert">, TGraph, [...TPath, "experts"]>>;
};
type commission_expertChildren<TGraph extends any[], TPath extends string[] = []> = {

};
type commission_expertModel = ModelInputs<commission_expertScalars, commission_expertParents<commission_expertGraph>, commission_expertChildren<commission_expertGraph>, commission_expertGraph>;
type commission_order_itemScalars = {
  commission_id: number;
  order_item_id: number;
}
type commission_order_itemParents<TGraph extends any[], TPath extends string[] = []> = {
 commissions: Parent<ModelInputs<commissionsScalars, commissionsParents<TGraph, [...TPath, "commissions"]>, Omit<commissionsChildren<TGraph, [...TPath, "commissions"]>, "commission_order_item">, TGraph, [...TPath, "commissions"]>>;
 order_items: Parent<ModelInputs<order_itemsScalars, order_itemsParents<TGraph, [...TPath, "order_items"]>, Omit<order_itemsChildren<TGraph, [...TPath, "order_items"]>, "commission_order_item">, TGraph, [...TPath, "order_items"]>>;
};
type commission_order_itemChildren<TGraph extends any[], TPath extends string[] = []> = {

};
type commission_order_itemModel = ModelInputs<commission_order_itemScalars, commission_order_itemParents<commission_order_itemGraph>, commission_order_itemChildren<commission_order_itemGraph>, commission_order_itemGraph>;
type commissionsScalars = {
  created_at_utc?: string;
  currency_iso_code: string | null;
  currency_rate: number | null;
  id?: number;
  rate: number;
  status?: commissions_status_typeEnum;
  stripe_transfer_id: string | null;
  type: commissions_type_typeEnum;
  updated_at_utc?: string;
}
type commissionsParents<TGraph extends any[], TPath extends string[] = []> = {

};
type commissionsChildren<TGraph extends any[], TPath extends string[] = []> = {
 commission_cart_item: Child<ModelInputs<commission_cart_itemScalars, Omit<commission_cart_itemParents<TGraph, [...TPath, "commission_cart_item"]>, "commissions">, commission_cart_itemChildren<TGraph, [...TPath, "commission_cart_item"]>, TGraph, [...TPath, "commission_cart_item"]>>;
 commission_expert: Child<ModelInputs<commission_expertScalars, Omit<commission_expertParents<TGraph, [...TPath, "commission_expert"]>, "commissions">, commission_expertChildren<TGraph, [...TPath, "commission_expert"]>, TGraph, [...TPath, "commission_expert"]>>;
 commission_order_item: Child<ModelInputs<commission_order_itemScalars, Omit<commission_order_itemParents<TGraph, [...TPath, "commission_order_item"]>, "commissions">, commission_order_itemChildren<TGraph, [...TPath, "commission_order_item"]>, TGraph, [...TPath, "commission_order_item"]>>;
};
type commissionsModel = ModelInputs<commissionsScalars, commissionsParents<commissionsGraph>, commissionsChildren<commissionsGraph>, commissionsGraph>;
type couponsScalars = {
  amount: number;
  code: string;
  created_at_utc: string;
  id?: number;
  is_valid: boolean;
  updated_at_utc?: string;
}
type couponsParents<TGraph extends any[], TPath extends string[] = []> = {

};
type couponsChildren<TGraph extends any[], TPath extends string[] = []> = {
 checkout_coupons: Child<ModelInputs<checkout_couponsScalars, Omit<checkout_couponsParents<TGraph, [...TPath, "checkout_coupons"]>, "coupons">, checkout_couponsChildren<TGraph, [...TPath, "checkout_coupons"]>, TGraph, [...TPath, "checkout_coupons"]>>;
 checkout_item_coupons: Child<ModelInputs<checkout_item_couponsScalars, Omit<checkout_item_couponsParents<TGraph, [...TPath, "checkout_item_coupons"]>, "coupons">, checkout_item_couponsChildren<TGraph, [...TPath, "checkout_item_coupons"]>, TGraph, [...TPath, "checkout_item_coupons"]>>;
 coupons_different_recipients: Child<ModelInputs<coupons_different_recipientsScalars, Omit<coupons_different_recipientsParents<TGraph, [...TPath, "coupons_different_recipients"]>, "coupons">, coupons_different_recipientsChildren<TGraph, [...TPath, "coupons_different_recipients"]>, TGraph, [...TPath, "coupons_different_recipients"]>>;
};
type couponsModel = ModelInputs<couponsScalars, couponsParents<couponsGraph>, couponsChildren<couponsGraph>, couponsGraph>;
type coupons_different_recipientsScalars = {
  buyer_full_name: string;
  coupon_id: number;
  recipient_email: string;
  recipient_first_name: string;
  recipient_message: string;
}
type coupons_different_recipientsParents<TGraph extends any[], TPath extends string[] = []> = {
 coupons: Parent<ModelInputs<couponsScalars, couponsParents<TGraph, [...TPath, "coupons"]>, Omit<couponsChildren<TGraph, [...TPath, "coupons"]>, "coupons_different_recipients">, TGraph, [...TPath, "coupons"]>>;
};
type coupons_different_recipientsChildren<TGraph extends any[], TPath extends string[] = []> = {

};
type coupons_different_recipientsModel = ModelInputs<coupons_different_recipientsScalars, coupons_different_recipientsParents<coupons_different_recipientsGraph>, coupons_different_recipientsChildren<coupons_different_recipientsGraph>, coupons_different_recipientsGraph>;
type coupons_settingsScalars = {
  is_discount_enabled?: boolean;
}
type coupons_settingsParents<TGraph extends any[], TPath extends string[] = []> = {

};
type coupons_settingsChildren<TGraph extends any[], TPath extends string[] = []> = {

};
type coupons_settingsModel = ModelInputs<coupons_settingsScalars, coupons_settingsParents<coupons_settingsGraph>, coupons_settingsChildren<coupons_settingsGraph>, coupons_settingsGraph>;
type credit_transactionsScalars = {
  amount: number;
  amount_in_original_currency: number;
  client_id: number;
  created_at_utc?: string;
  id?: number;
  note: string | null;
  original_currency_iso_code: string;
  rate: number | null;
  type: credit_transactions_type_typeEnum;
}
type credit_transactionsParents<TGraph extends any[], TPath extends string[] = []> = {
 clients: Parent<ModelInputs<clientsScalars, clientsParents<TGraph, [...TPath, "clients"]>, Omit<clientsChildren<TGraph, [...TPath, "clients"]>, "credit_transactions">, TGraph, [...TPath, "clients"]>>;
};
type credit_transactionsChildren<TGraph extends any[], TPath extends string[] = []> = {
 checkout_credit_transactions: Child<ModelInputs<checkout_credit_transactionsScalars, Omit<checkout_credit_transactionsParents<TGraph, [...TPath, "checkout_credit_transactions"]>, "credit_transactions">, checkout_credit_transactionsChildren<TGraph, [...TPath, "checkout_credit_transactions"]>, TGraph, [...TPath, "checkout_credit_transactions"]>>;
 refunds_credit_transactions: Child<ModelInputs<refunds_credit_transactionsScalars, Omit<refunds_credit_transactionsParents<TGraph, [...TPath, "refunds_credit_transactions"]>, "credit_transactions">, refunds_credit_transactionsChildren<TGraph, [...TPath, "refunds_credit_transactions"]>, TGraph, [...TPath, "refunds_credit_transactions"]>>;
};
type credit_transactionsModel = ModelInputs<credit_transactionsScalars, credit_transactionsParents<credit_transactionsGraph>, credit_transactionsChildren<credit_transactionsGraph>, credit_transactionsGraph>;
type currency_ratesScalars = {
  created_at_utc: string;
  from_currency_iso_code: string;
  id?: number;
  rate: number | null;
  to_currency_iso_code: string;
}
type currency_ratesParents<TGraph extends any[], TPath extends string[] = []> = {

};
type currency_ratesChildren<TGraph extends any[], TPath extends string[] = []> = {

};
type currency_ratesModel = ModelInputs<currency_ratesScalars, currency_ratesParents<currency_ratesGraph>, currency_ratesChildren<currency_ratesGraph>, currency_ratesGraph>;
type discountsScalars = {
  checkout_item_id: number;
  created_at_utc?: string;
  id?: number;
  type: discounts_type_typeEnum;
  unit_discount: number;
  updated_at_utc?: string;
}
type discountsParents<TGraph extends any[], TPath extends string[] = []> = {
 checkout_items: Parent<ModelInputs<checkout_itemsScalars, checkout_itemsParents<TGraph, [...TPath, "checkout_items"]>, Omit<checkout_itemsChildren<TGraph, [...TPath, "checkout_items"]>, "discounts">, TGraph, [...TPath, "checkout_items"]>>;
};
type discountsChildren<TGraph extends any[], TPath extends string[] = []> = {

};
type discountsModel = ModelInputs<discountsScalars, discountsParents<discountsGraph>, discountsChildren<discountsGraph>, discountsGraph>;
type expert_application_categoriesScalars = {
  category_id: number;
  expert_application_id: number;
}
type expert_application_categoriesParents<TGraph extends any[], TPath extends string[] = []> = {
 categories: Parent<ModelInputs<categoriesScalars, categoriesParents<TGraph, [...TPath, "categories"]>, Omit<categoriesChildren<TGraph, [...TPath, "categories"]>, "expert_application_categories">, TGraph, [...TPath, "categories"]>>;
 expert_applications: Parent<ModelInputs<expert_applicationsScalars, expert_applicationsParents<TGraph, [...TPath, "expert_applications"]>, Omit<expert_applicationsChildren<TGraph, [...TPath, "expert_applications"]>, "expert_application_categories">, TGraph, [...TPath, "expert_applications"]>>;
};
type expert_application_categoriesChildren<TGraph extends any[], TPath extends string[] = []> = {

};
type expert_application_categoriesModel = ModelInputs<expert_application_categoriesScalars, expert_application_categoriesParents<expert_application_categoriesGraph>, expert_application_categoriesChildren<expert_application_categoriesGraph>, expert_application_categoriesGraph>;
type expert_applicationsScalars = {
  birth_date: string | null;
  city: string;
  country_iso_code: string;
  country_state: string | null;
  created_at_utc: string;
  email: string;
  expertise_description: string;
  facebook_account_url: string | null;
  first_name: string;
  id?: number;
  instagram_account_url: string | null;
  last_name: string;
  linked_in_account_url: string | null;
  onboarding_token: string | null;
  other_category: string | null;
  status: expert_applications_status_typeEnum;
  twitter_account_url: string | null;
  updated_at_utc?: string;
  website_url: string | null;
  youtube_account_url: string | null;
}
type expert_applicationsParents<TGraph extends any[], TPath extends string[] = []> = {

};
type expert_applicationsChildren<TGraph extends any[], TPath extends string[] = []> = {
 expert_application_categories: Child<ModelInputs<expert_application_categoriesScalars, Omit<expert_application_categoriesParents<TGraph, [...TPath, "expert_application_categories"]>, "expert_applications">, expert_application_categoriesChildren<TGraph, [...TPath, "expert_application_categories"]>, TGraph, [...TPath, "expert_application_categories"]>>;
};
type expert_applicationsModel = ModelInputs<expert_applicationsScalars, expert_applicationsParents<expert_applicationsGraph>, expert_applicationsChildren<expert_applicationsGraph>, expert_applicationsGraph>;
type expert_attachmentsScalars = {
  attachment_id: number;
  expert_id: number;
  id?: number;
  position_index_weight: number | null;
}
type expert_attachmentsParents<TGraph extends any[], TPath extends string[] = []> = {
 attachments: Parent<ModelInputs<attachmentsScalars, attachmentsParents<TGraph, [...TPath, "attachments"]>, Omit<attachmentsChildren<TGraph, [...TPath, "attachments"]>, "expert_attachments">, TGraph, [...TPath, "attachments"]>>;
 experts: Parent<ModelInputs<expertsScalars, expertsParents<TGraph, [...TPath, "experts"]>, Omit<expertsChildren<TGraph, [...TPath, "experts"]>, "expert_attachments">, TGraph, [...TPath, "experts"]>>;
};
type expert_attachmentsChildren<TGraph extends any[], TPath extends string[] = []> = {

};
type expert_attachmentsModel = ModelInputs<expert_attachmentsScalars, expert_attachmentsParents<expert_attachmentsGraph>, expert_attachmentsChildren<expert_attachmentsGraph>, expert_attachmentsGraph>;
type expert_categoriesScalars = {
  category_id: number;
  category_type?: string;
  expert_id: number;
  position_index_weight: number | null;
}
type expert_categoriesParents<TGraph extends any[], TPath extends string[] = []> = {
 categories: Parent<ModelInputs<categoriesScalars, categoriesParents<TGraph, [...TPath, "categories"]>, Omit<categoriesChildren<TGraph, [...TPath, "categories"]>, "expert_categories">, TGraph, [...TPath, "categories"]>>;
 experts: Parent<ModelInputs<expertsScalars, expertsParents<TGraph, [...TPath, "experts"]>, Omit<expertsChildren<TGraph, [...TPath, "experts"]>, "expert_categories">, TGraph, [...TPath, "experts"]>>;
};
type expert_categoriesChildren<TGraph extends any[], TPath extends string[] = []> = {

};
type expert_categoriesModel = ModelInputs<expert_categoriesScalars, expert_categoriesParents<expert_categoriesGraph>, expert_categoriesChildren<expert_categoriesGraph>, expert_categoriesGraph>;
type expert_expertisesScalars = {
  created_at_utc: string;
  expert_id: number;
  expertise: string | null;
  id?: number;
  position_index_weight: number | null;
}
type expert_expertisesParents<TGraph extends any[], TPath extends string[] = []> = {
 experts: Parent<ModelInputs<expertsScalars, expertsParents<TGraph, [...TPath, "experts"]>, Omit<expertsChildren<TGraph, [...TPath, "experts"]>, "expert_expertises">, TGraph, [...TPath, "experts"]>>;
};
type expert_expertisesChildren<TGraph extends any[], TPath extends string[] = []> = {

};
type expert_expertisesModel = ModelInputs<expert_expertisesScalars, expert_expertisesParents<expert_expertisesGraph>, expert_expertisesChildren<expert_expertisesGraph>, expert_expertisesGraph>;
type expert_regionsScalars = {
  expert_id: number;
  expert_position_index_weight: number | null;
  id?: number;
  region_id: number;
}
type expert_regionsParents<TGraph extends any[], TPath extends string[] = []> = {
 experts: Parent<ModelInputs<expertsScalars, expertsParents<TGraph, [...TPath, "experts"]>, Omit<expertsChildren<TGraph, [...TPath, "experts"]>, "expert_regions">, TGraph, [...TPath, "experts"]>>;
 regions: Parent<ModelInputs<regionsScalars, regionsParents<TGraph, [...TPath, "regions"]>, Omit<regionsChildren<TGraph, [...TPath, "regions"]>, "expert_regions">, TGraph, [...TPath, "regions"]>>;
};
type expert_regionsChildren<TGraph extends any[], TPath extends string[] = []> = {

};
type expert_regionsModel = ModelInputs<expert_regionsScalars, expert_regionsParents<expert_regionsGraph>, expert_regionsChildren<expert_regionsGraph>, expert_regionsGraph>;
type expert_sessionsScalars = {
  created_at_utc: string;
  currency_iso_code?: string;
  description: string | null;
  email_note: string | null;
  expert_id: number;
  expert_user_id: number;
  id?: number;
  is_up_to_three_guests_allowed?: boolean;
  length_in_minutes: number;
  minimum_session_size: number | null;
  price: number;
  session_capacity: number | null;
  session_type: string;
  title: string | null;
  updated_at_utc?: string;
}
type expert_sessionsParents<TGraph extends any[], TPath extends string[] = []> = {
 expert_users: Parent<ModelInputs<expert_usersScalars, expert_usersParents<TGraph, [...TPath, "expert_users"]>, Omit<expert_usersChildren<TGraph, [...TPath, "expert_users"]>, "expert_sessions">, TGraph, [...TPath, "expert_users"]>>;
 experts: Parent<ModelInputs<expertsScalars, expertsParents<TGraph, [...TPath, "experts"]>, Omit<expertsChildren<TGraph, [...TPath, "experts"]>, "expert_sessions">, TGraph, [...TPath, "experts"]>>;
};
type expert_sessionsChildren<TGraph extends any[], TPath extends string[] = []> = {
 client_expert_availability_subscriptions: Child<ModelInputs<client_expert_availability_subscriptionsScalars, Omit<client_expert_availability_subscriptionsParents<TGraph, [...TPath, "client_expert_availability_subscriptions"]>, "expert_sessions">, client_expert_availability_subscriptionsChildren<TGraph, [...TPath, "client_expert_availability_subscriptions"]>, TGraph, [...TPath, "client_expert_availability_subscriptions"]>>;
 sessions: Child<ModelInputs<sessionsScalars, Omit<sessionsParents<TGraph, [...TPath, "sessions"]>, "expert_sessions">, sessionsChildren<TGraph, [...TPath, "sessions"]>, TGraph, [...TPath, "sessions"]>>;
};
type expert_sessionsModel = ModelInputs<expert_sessionsScalars, expert_sessionsParents<expert_sessionsGraph>, expert_sessionsChildren<expert_sessionsGraph>, expert_sessionsGraph>;
type expert_tagsScalars = {
  expert_id: number;
  tag_id: number;
}
type expert_tagsParents<TGraph extends any[], TPath extends string[] = []> = {
 experts: Parent<ModelInputs<expertsScalars, expertsParents<TGraph, [...TPath, "experts"]>, Omit<expertsChildren<TGraph, [...TPath, "experts"]>, "expert_tags">, TGraph, [...TPath, "experts"]>>;
 tags: Parent<ModelInputs<tagsScalars, tagsParents<TGraph, [...TPath, "tags"]>, Omit<tagsChildren<TGraph, [...TPath, "tags"]>, "expert_tags">, TGraph, [...TPath, "tags"]>>;
};
type expert_tagsChildren<TGraph extends any[], TPath extends string[] = []> = {

};
type expert_tagsModel = ModelInputs<expert_tagsScalars, expert_tagsParents<expert_tagsGraph>, expert_tagsChildren<expert_tagsGraph>, expert_tagsGraph>;
type expert_testimonialsScalars = {
  client_name: string;
  consultation_name: string | null;
  created_at_utc: string;
  expert_id: number;
  expert_user_id: number;
  feedback: string;
  id?: number;
  position_index_weight: number | null;
}
type expert_testimonialsParents<TGraph extends any[], TPath extends string[] = []> = {
 expert_users: Parent<ModelInputs<expert_usersScalars, expert_usersParents<TGraph, [...TPath, "expert_users"]>, Omit<expert_usersChildren<TGraph, [...TPath, "expert_users"]>, "expert_testimonials">, TGraph, [...TPath, "expert_users"]>>;
 experts: Parent<ModelInputs<expertsScalars, expertsParents<TGraph, [...TPath, "experts"]>, Omit<expertsChildren<TGraph, [...TPath, "experts"]>, "expert_testimonials">, TGraph, [...TPath, "experts"]>>;
};
type expert_testimonialsChildren<TGraph extends any[], TPath extends string[] = []> = {

};
type expert_testimonialsModel = ModelInputs<expert_testimonialsScalars, expert_testimonialsParents<expert_testimonialsGraph>, expert_testimonialsChildren<expert_testimonialsGraph>, expert_testimonialsGraph>;
type expert_user_availabilitiesScalars = {
  created_at_utc?: string;
  end_at_utc: string;
  expert_id: number;
  expert_user_id: number;
  id?: number;
  session_type: string;
  start_at_utc: string;
  template_id: number | null;
  updated_at_utc?: string;
}
type expert_user_availabilitiesParents<TGraph extends any[], TPath extends string[] = []> = {
 expert_user_availability_templates: Parent<ModelInputs<expert_user_availability_templatesScalars, expert_user_availability_templatesParents<TGraph, [...TPath, "expert_user_availability_templates"]>, Omit<expert_user_availability_templatesChildren<TGraph, [...TPath, "expert_user_availability_templates"]>, "expert_user_availabilities">, TGraph, [...TPath, "expert_user_availability_templates"]>>;
 expert_users: Parent<ModelInputs<expert_usersScalars, expert_usersParents<TGraph, [...TPath, "expert_users"]>, Omit<expert_usersChildren<TGraph, [...TPath, "expert_users"]>, "expert_user_availabilities">, TGraph, [...TPath, "expert_users"]>>;
 experts: Parent<ModelInputs<expertsScalars, expertsParents<TGraph, [...TPath, "experts"]>, Omit<expertsChildren<TGraph, [...TPath, "experts"]>, "expert_user_availabilities">, TGraph, [...TPath, "experts"]>>;
};
type expert_user_availabilitiesChildren<TGraph extends any[], TPath extends string[] = []> = {
 session_availabilities: Child<ModelInputs<session_availabilitiesScalars, Omit<session_availabilitiesParents<TGraph, [...TPath, "session_availabilities"]>, "expert_user_availabilities">, session_availabilitiesChildren<TGraph, [...TPath, "session_availabilities"]>, TGraph, [...TPath, "session_availabilities"]>>;
};
type expert_user_availabilitiesModel = ModelInputs<expert_user_availabilitiesScalars, expert_user_availabilitiesParents<expert_user_availabilitiesGraph>, expert_user_availabilitiesChildren<expert_user_availabilitiesGraph>, expert_user_availabilitiesGraph>;
type expert_user_availabilities_analyticsScalars = {
  created_at_utc: string | null;
  deleted_at_utc: string | null;
  end_at_utc: string | null;
  expert_id: number | null;
  expert_user_id: number | null;
  id: number;
  session_type: string | null;
  start_at_utc: string | null;
  template_id: number | null;
  updated_at_utc?: string;
}
type expert_user_availabilities_analyticsParents<TGraph extends any[], TPath extends string[] = []> = {

};
type expert_user_availabilities_analyticsChildren<TGraph extends any[], TPath extends string[] = []> = {

};
type expert_user_availabilities_analyticsModel = ModelInputs<expert_user_availabilities_analyticsScalars, expert_user_availabilities_analyticsParents<expert_user_availabilities_analyticsGraph>, expert_user_availabilities_analyticsChildren<expert_user_availabilities_analyticsGraph>, expert_user_availabilities_analyticsGraph>;
type expert_user_availability_templatesScalars = {
  day_of_the_week: number;
  end_time: string;
  expert_id: number;
  expert_user_id: number;
  id?: number;
  is_deleted?: boolean;
  session_type: string;
  start_time: string;
}
type expert_user_availability_templatesParents<TGraph extends any[], TPath extends string[] = []> = {
 expert_users: Parent<ModelInputs<expert_usersScalars, expert_usersParents<TGraph, [...TPath, "expert_users"]>, Omit<expert_usersChildren<TGraph, [...TPath, "expert_users"]>, "expert_user_availability_templates">, TGraph, [...TPath, "expert_users"]>>;
 experts: Parent<ModelInputs<expertsScalars, expertsParents<TGraph, [...TPath, "experts"]>, Omit<expertsChildren<TGraph, [...TPath, "experts"]>, "expert_user_availability_templates">, TGraph, [...TPath, "experts"]>>;
};
type expert_user_availability_templatesChildren<TGraph extends any[], TPath extends string[] = []> = {
 expert_user_availabilities: Child<ModelInputs<expert_user_availabilitiesScalars, Omit<expert_user_availabilitiesParents<TGraph, [...TPath, "expert_user_availabilities"]>, "expert_user_availability_templates">, expert_user_availabilitiesChildren<TGraph, [...TPath, "expert_user_availabilities"]>, TGraph, [...TPath, "expert_user_availabilities"]>>;
};
type expert_user_availability_templatesModel = ModelInputs<expert_user_availability_templatesScalars, expert_user_availability_templatesParents<expert_user_availability_templatesGraph>, expert_user_availability_templatesChildren<expert_user_availability_templatesGraph>, expert_user_availability_templatesGraph>;
type expert_user_notification_emailsScalars = {
  created_at_utc: string;
  email: string;
  expert_user_id: number;
  id?: number;
  updated_at_utc?: string;
}
type expert_user_notification_emailsParents<TGraph extends any[], TPath extends string[] = []> = {
 expert_users: Parent<ModelInputs<expert_usersScalars, expert_usersParents<TGraph, [...TPath, "expert_users"]>, Omit<expert_usersChildren<TGraph, [...TPath, "expert_users"]>, "expert_user_notification_emails">, TGraph, [...TPath, "expert_users"]>>;
};
type expert_user_notification_emailsChildren<TGraph extends any[], TPath extends string[] = []> = {

};
type expert_user_notification_emailsModel = ModelInputs<expert_user_notification_emailsScalars, expert_user_notification_emailsParents<expert_user_notification_emailsGraph>, expert_user_notification_emailsChildren<expert_user_notification_emailsGraph>, expert_user_notification_emailsGraph>;
type expert_usersScalars = {
  change_email_token: string | null;
  created_at_utc: string;
  cronofy_access_token: string | null;
  cronofy_access_token_expires_at_utc: string | null;
  cronofy_refresh_token: string | null;
  email: string;
  expert_id: number;
  first_name: string | null;
  id?: number;
  is_main?: boolean;
  is_zoom_account_activated?: boolean;
  last_name: string | null;
  new_email: string | null;
  onboarding_token: string | null;
  profile_image_filename_extension: string | null;
  profile_image_path: string | null;
  reset_password_token: string | null;
  status: string;
  timezone: string;
  title: string | null;
  updated_at_utc?: string;
  zoom_access_token: string | null;
  zoom_access_token_expires_at_utc: string | null;
  zoom_account_id: string | null;
  zoom_account_type: string | null;
  zoom_refresh_token: string | null;
}
type expert_usersParents<TGraph extends any[], TPath extends string[] = []> = {
 experts: Parent<ModelInputs<expertsScalars, expertsParents<TGraph, [...TPath, "experts"]>, Omit<expertsChildren<TGraph, [...TPath, "experts"]>, "expert_users">, TGraph, [...TPath, "experts"]>>;
};
type expert_usersChildren<TGraph extends any[], TPath extends string[] = []> = {
 expert_sessions: Child<ModelInputs<expert_sessionsScalars, Omit<expert_sessionsParents<TGraph, [...TPath, "expert_sessions"]>, "expert_users">, expert_sessionsChildren<TGraph, [...TPath, "expert_sessions"]>, TGraph, [...TPath, "expert_sessions"]>>;
 expert_testimonials: Child<ModelInputs<expert_testimonialsScalars, Omit<expert_testimonialsParents<TGraph, [...TPath, "expert_testimonials"]>, "expert_users">, expert_testimonialsChildren<TGraph, [...TPath, "expert_testimonials"]>, TGraph, [...TPath, "expert_testimonials"]>>;
 expert_user_availabilities: Child<ModelInputs<expert_user_availabilitiesScalars, Omit<expert_user_availabilitiesParents<TGraph, [...TPath, "expert_user_availabilities"]>, "expert_users">, expert_user_availabilitiesChildren<TGraph, [...TPath, "expert_user_availabilities"]>, TGraph, [...TPath, "expert_user_availabilities"]>>;
 expert_user_availability_templates: Child<ModelInputs<expert_user_availability_templatesScalars, Omit<expert_user_availability_templatesParents<TGraph, [...TPath, "expert_user_availability_templates"]>, "expert_users">, expert_user_availability_templatesChildren<TGraph, [...TPath, "expert_user_availability_templates"]>, TGraph, [...TPath, "expert_user_availability_templates"]>>;
 expert_user_notification_emails: Child<ModelInputs<expert_user_notification_emailsScalars, Omit<expert_user_notification_emailsParents<TGraph, [...TPath, "expert_user_notification_emails"]>, "expert_users">, expert_user_notification_emailsChildren<TGraph, [...TPath, "expert_user_notification_emails"]>, TGraph, [...TPath, "expert_user_notification_emails"]>>;
 feature_flag_expert_user: Child<ModelInputs<feature_flag_expert_userScalars, Omit<feature_flag_expert_userParents<TGraph, [...TPath, "feature_flag_expert_user"]>, "expert_users">, feature_flag_expert_userChildren<TGraph, [...TPath, "feature_flag_expert_user"]>, TGraph, [...TPath, "feature_flag_expert_user"]>>;
 session_logs: Child<ModelInputs<session_logsScalars, Omit<session_logsParents<TGraph, [...TPath, "session_logs"]>, "expert_users">, session_logsChildren<TGraph, [...TPath, "session_logs"]>, TGraph, [...TPath, "session_logs"]>>;
 session_reviews: Child<ModelInputs<session_reviewsScalars, Omit<session_reviewsParents<TGraph, [...TPath, "session_reviews"]>, "expert_users">, session_reviewsChildren<TGraph, [...TPath, "session_reviews"]>, TGraph, [...TPath, "session_reviews"]>>;
 sessions: Child<ModelInputs<sessionsScalars, Omit<sessionsParents<TGraph, [...TPath, "sessions"]>, "expert_users">, sessionsChildren<TGraph, [...TPath, "sessions"]>, TGraph, [...TPath, "sessions"]>>;
};
type expert_usersModel = ModelInputs<expert_usersScalars, expert_usersParents<expert_usersGraph>, expert_usersChildren<expert_usersGraph>, expert_usersGraph>;
type expert_videosScalars = {
  caption: string | null;
  expert_id: number;
  id?: number;
  url: string;
  video_type: string;
}
type expert_videosParents<TGraph extends any[], TPath extends string[] = []> = {
 experts: Parent<ModelInputs<expertsScalars, expertsParents<TGraph, [...TPath, "experts"]>, Omit<expertsChildren<TGraph, [...TPath, "experts"]>, "expert_videos">, TGraph, [...TPath, "experts"]>>;
};
type expert_videosChildren<TGraph extends any[], TPath extends string[] = []> = {

};
type expert_videosModel = ModelInputs<expert_videosScalars, expert_videosParents<expert_videosGraph>, expert_videosChildren<expert_videosGraph>, expert_videosGraph>;
type expert_warningsScalars = {
  expert_id: number;
  id?: number;
  warned_at_utc: string;
}
type expert_warningsParents<TGraph extends any[], TPath extends string[] = []> = {
 experts: Parent<ModelInputs<expertsScalars, expertsParents<TGraph, [...TPath, "experts"]>, Omit<expertsChildren<TGraph, [...TPath, "experts"]>, "expert_warnings">, TGraph, [...TPath, "experts"]>>;
};
type expert_warningsChildren<TGraph extends any[], TPath extends string[] = []> = {

};
type expert_warningsModel = ModelInputs<expert_warningsScalars, expert_warningsParents<expert_warningsGraph>, expert_warningsChildren<expert_warningsGraph>, expert_warningsGraph>;
type expertsScalars = {
  birth_date: string | null;
  business_name: string | null;
  city: string;
  country_iso_code: string;
  country_state: string | null;
  created_at_utc: string;
  currency_iso_code?: string;
  custom_cancelation_policy: string | null;
  email: string;
  facebook_account_url: string | null;
  headshot_image_attachment_id: number | null;
  id?: number;
  instagram_account_url: string | null;
  is_consultation_recap_form_enabled?: boolean;
  is_featured?: boolean;
  is_findable?: boolean;
  is_fundraiser?: boolean;
  is_public_visible?: boolean;
  is_stripe_account_activated?: boolean;
  job_title: string | null;
  linked_in_account_url: string | null;
  long_description: string | null;
  old_stripe_id: string | null;
  platform_fee_percentage: number | null;
  position_index_weight: number | null;
  primary_location: string | null;
  profile_image_attachment_id: number | null;
  profile_name: string;
  secondary_location: string | null;
  short_description: string | null;
  slug: string;
  status: string;
  stripe_id: string | null;
  stripe_onboarding_token: string | null;
  twitter_account_url: string | null;
  updated_at_utc?: string;
  website_url: string | null;
  youtube_account_url: string | null;
}
type expertsParents<TGraph extends any[], TPath extends string[] = []> = {
 attachments_experts_headshot_image_attachment_idToattachments: Parent<ModelInputs<attachmentsScalars, attachmentsParents<TGraph, [...TPath, "attachments_experts_headshot_image_attachment_idToattachments"]>, Omit<attachmentsChildren<TGraph, [...TPath, "attachments_experts_headshot_image_attachment_idToattachments"]>, "experts_experts_headshot_image_attachment_idToattachments">, TGraph, [...TPath, "attachments_experts_headshot_image_attachment_idToattachments"]>>;
 attachments_experts_profile_image_attachment_idToattachments: Parent<ModelInputs<attachmentsScalars, attachmentsParents<TGraph, [...TPath, "attachments_experts_profile_image_attachment_idToattachments"]>, Omit<attachmentsChildren<TGraph, [...TPath, "attachments_experts_profile_image_attachment_idToattachments"]>, "experts_experts_profile_image_attachment_idToattachments">, TGraph, [...TPath, "attachments_experts_profile_image_attachment_idToattachments"]>>;
};
type expertsChildren<TGraph extends any[], TPath extends string[] = []> = {
 client_expert_availability_subscriptions: Child<ModelInputs<client_expert_availability_subscriptionsScalars, Omit<client_expert_availability_subscriptionsParents<TGraph, [...TPath, "client_expert_availability_subscriptions"]>, "experts">, client_expert_availability_subscriptionsChildren<TGraph, [...TPath, "client_expert_availability_subscriptions"]>, TGraph, [...TPath, "client_expert_availability_subscriptions"]>>;
 client_experts_notifications: Child<ModelInputs<client_experts_notificationsScalars, Omit<client_experts_notificationsParents<TGraph, [...TPath, "client_experts_notifications"]>, "experts">, client_experts_notificationsChildren<TGraph, [...TPath, "client_experts_notifications"]>, TGraph, [...TPath, "client_experts_notifications"]>>;
 client_favorite_experts: Child<ModelInputs<client_favorite_expertsScalars, Omit<client_favorite_expertsParents<TGraph, [...TPath, "client_favorite_experts"]>, "experts">, client_favorite_expertsChildren<TGraph, [...TPath, "client_favorite_experts"]>, TGraph, [...TPath, "client_favorite_experts"]>>;
 cms_banner_widgets: Child<ModelInputs<cms_banner_widgetsScalars, Omit<cms_banner_widgetsParents<TGraph, [...TPath, "cms_banner_widgets"]>, "experts">, cms_banner_widgetsChildren<TGraph, [...TPath, "cms_banner_widgets"]>, TGraph, [...TPath, "cms_banner_widgets"]>>;
 cms_category_header_widgets: Child<ModelInputs<cms_category_header_widgetsScalars, Omit<cms_category_header_widgetsParents<TGraph, [...TPath, "cms_category_header_widgets"]>, "experts">, cms_category_header_widgetsChildren<TGraph, [...TPath, "cms_category_header_widgets"]>, TGraph, [...TPath, "cms_category_header_widgets"]>>;
 cms_consultation_listing_widgets: Child<ModelInputs<cms_consultation_listing_widgetsScalars, Omit<cms_consultation_listing_widgetsParents<TGraph, [...TPath, "cms_consultation_listing_widgets"]>, "experts">, cms_consultation_listing_widgetsChildren<TGraph, [...TPath, "cms_consultation_listing_widgets"]>, TGraph, [...TPath, "cms_consultation_listing_widgets"]>>;
 cms_experts_widget_items: Child<ModelInputs<cms_experts_widget_itemsScalars, Omit<cms_experts_widget_itemsParents<TGraph, [...TPath, "cms_experts_widget_items"]>, "experts">, cms_experts_widget_itemsChildren<TGraph, [...TPath, "cms_experts_widget_items"]>, TGraph, [...TPath, "cms_experts_widget_items"]>>;
 cms_gallery_widget_items: Child<ModelInputs<cms_gallery_widget_itemsScalars, Omit<cms_gallery_widget_itemsParents<TGraph, [...TPath, "cms_gallery_widget_items"]>, "experts">, cms_gallery_widget_itemsChildren<TGraph, [...TPath, "cms_gallery_widget_items"]>, TGraph, [...TPath, "cms_gallery_widget_items"]>>;
 cms_spotlight_widgets: Child<ModelInputs<cms_spotlight_widgetsScalars, Omit<cms_spotlight_widgetsParents<TGraph, [...TPath, "cms_spotlight_widgets"]>, "experts">, cms_spotlight_widgetsChildren<TGraph, [...TPath, "cms_spotlight_widgets"]>, TGraph, [...TPath, "cms_spotlight_widgets"]>>;
 collections: Child<ModelInputs<collectionsScalars, Omit<collectionsParents<TGraph, [...TPath, "collections"]>, "experts">, collectionsChildren<TGraph, [...TPath, "collections"]>, TGraph, [...TPath, "collections"]>>;
 commission_expert: Child<ModelInputs<commission_expertScalars, Omit<commission_expertParents<TGraph, [...TPath, "commission_expert"]>, "experts">, commission_expertChildren<TGraph, [...TPath, "commission_expert"]>, TGraph, [...TPath, "commission_expert"]>>;
 expert_attachments: Child<ModelInputs<expert_attachmentsScalars, Omit<expert_attachmentsParents<TGraph, [...TPath, "expert_attachments"]>, "experts">, expert_attachmentsChildren<TGraph, [...TPath, "expert_attachments"]>, TGraph, [...TPath, "expert_attachments"]>>;
 expert_categories: Child<ModelInputs<expert_categoriesScalars, Omit<expert_categoriesParents<TGraph, [...TPath, "expert_categories"]>, "experts">, expert_categoriesChildren<TGraph, [...TPath, "expert_categories"]>, TGraph, [...TPath, "expert_categories"]>>;
 expert_expertises: Child<ModelInputs<expert_expertisesScalars, Omit<expert_expertisesParents<TGraph, [...TPath, "expert_expertises"]>, "experts">, expert_expertisesChildren<TGraph, [...TPath, "expert_expertises"]>, TGraph, [...TPath, "expert_expertises"]>>;
 expert_regions: Child<ModelInputs<expert_regionsScalars, Omit<expert_regionsParents<TGraph, [...TPath, "expert_regions"]>, "experts">, expert_regionsChildren<TGraph, [...TPath, "expert_regions"]>, TGraph, [...TPath, "expert_regions"]>>;
 expert_sessions: Child<ModelInputs<expert_sessionsScalars, Omit<expert_sessionsParents<TGraph, [...TPath, "expert_sessions"]>, "experts">, expert_sessionsChildren<TGraph, [...TPath, "expert_sessions"]>, TGraph, [...TPath, "expert_sessions"]>>;
 expert_tags: Child<ModelInputs<expert_tagsScalars, Omit<expert_tagsParents<TGraph, [...TPath, "expert_tags"]>, "experts">, expert_tagsChildren<TGraph, [...TPath, "expert_tags"]>, TGraph, [...TPath, "expert_tags"]>>;
 expert_testimonials: Child<ModelInputs<expert_testimonialsScalars, Omit<expert_testimonialsParents<TGraph, [...TPath, "expert_testimonials"]>, "experts">, expert_testimonialsChildren<TGraph, [...TPath, "expert_testimonials"]>, TGraph, [...TPath, "expert_testimonials"]>>;
 expert_user_availabilities: Child<ModelInputs<expert_user_availabilitiesScalars, Omit<expert_user_availabilitiesParents<TGraph, [...TPath, "expert_user_availabilities"]>, "experts">, expert_user_availabilitiesChildren<TGraph, [...TPath, "expert_user_availabilities"]>, TGraph, [...TPath, "expert_user_availabilities"]>>;
 expert_user_availability_templates: Child<ModelInputs<expert_user_availability_templatesScalars, Omit<expert_user_availability_templatesParents<TGraph, [...TPath, "expert_user_availability_templates"]>, "experts">, expert_user_availability_templatesChildren<TGraph, [...TPath, "expert_user_availability_templates"]>, TGraph, [...TPath, "expert_user_availability_templates"]>>;
 expert_users: Child<ModelInputs<expert_usersScalars, Omit<expert_usersParents<TGraph, [...TPath, "expert_users"]>, "experts">, expert_usersChildren<TGraph, [...TPath, "expert_users"]>, TGraph, [...TPath, "expert_users"]>>;
 expert_videos: Child<ModelInputs<expert_videosScalars, Omit<expert_videosParents<TGraph, [...TPath, "expert_videos"]>, "experts">, expert_videosChildren<TGraph, [...TPath, "expert_videos"]>, TGraph, [...TPath, "expert_videos"]>>;
 expert_warnings: Child<ModelInputs<expert_warningsScalars, Omit<expert_warningsParents<TGraph, [...TPath, "expert_warnings"]>, "experts">, expert_warningsChildren<TGraph, [...TPath, "expert_warnings"]>, TGraph, [...TPath, "expert_warnings"]>>;
 product_custom_content: Child<ModelInputs<product_custom_contentScalars, Omit<product_custom_contentParents<TGraph, [...TPath, "product_custom_content"]>, "experts">, product_custom_contentChildren<TGraph, [...TPath, "product_custom_content"]>, TGraph, [...TPath, "product_custom_content"]>>;
 product_variant_custom_content: Child<ModelInputs<product_variant_custom_contentScalars, Omit<product_variant_custom_contentParents<TGraph, [...TPath, "product_variant_custom_content"]>, "experts">, product_variant_custom_contentChildren<TGraph, [...TPath, "product_variant_custom_content"]>, TGraph, [...TPath, "product_variant_custom_content"]>>;
 purchases: Child<ModelInputs<purchasesScalars, Omit<purchasesParents<TGraph, [...TPath, "purchases"]>, "experts">, purchasesChildren<TGraph, [...TPath, "purchases"]>, TGraph, [...TPath, "purchases"]>>;
 sessions: Child<ModelInputs<sessionsScalars, Omit<sessionsParents<TGraph, [...TPath, "sessions"]>, "experts">, sessionsChildren<TGraph, [...TPath, "sessions"]>, TGraph, [...TPath, "sessions"]>>;
};
type expertsModel = ModelInputs<expertsScalars, expertsParents<expertsGraph>, expertsChildren<expertsGraph>, expertsGraph>;
type external_product_previewsScalars = {
  attachment_id: number | null;
  created_at_utc: string;
  error: string | null;
  id?: number;
  image_url: string | null;
  input_url: string | null;
  publisher: string | null;
  title: string | null;
  updated_at_utc?: string;
  url: string | null;
}
type external_product_previewsParents<TGraph extends any[], TPath extends string[] = []> = {
 attachments: Parent<ModelInputs<attachmentsScalars, attachmentsParents<TGraph, [...TPath, "attachments"]>, Omit<attachmentsChildren<TGraph, [...TPath, "attachments"]>, "external_product_previews">, TGraph, [...TPath, "attachments"]>>;
};
type external_product_previewsChildren<TGraph extends any[], TPath extends string[] = []> = {

};
type external_product_previewsModel = ModelInputs<external_product_previewsScalars, external_product_previewsParents<external_product_previewsGraph>, external_product_previewsChildren<external_product_previewsGraph>, external_product_previewsGraph>;
type feature_flag_clientScalars = {
  client_id: number;
  feature_flag_id: number;
}
type feature_flag_clientParents<TGraph extends any[], TPath extends string[] = []> = {
 clients: Parent<ModelInputs<clientsScalars, clientsParents<TGraph, [...TPath, "clients"]>, Omit<clientsChildren<TGraph, [...TPath, "clients"]>, "feature_flag_client">, TGraph, [...TPath, "clients"]>>;
 feature_flags: Parent<ModelInputs<feature_flagsScalars, feature_flagsParents<TGraph, [...TPath, "feature_flags"]>, Omit<feature_flagsChildren<TGraph, [...TPath, "feature_flags"]>, "feature_flag_client">, TGraph, [...TPath, "feature_flags"]>>;
};
type feature_flag_clientChildren<TGraph extends any[], TPath extends string[] = []> = {

};
type feature_flag_clientModel = ModelInputs<feature_flag_clientScalars, feature_flag_clientParents<feature_flag_clientGraph>, feature_flag_clientChildren<feature_flag_clientGraph>, feature_flag_clientGraph>;
type feature_flag_expert_userScalars = {
  expert_user_id: number;
  feature_flag_id: number;
}
type feature_flag_expert_userParents<TGraph extends any[], TPath extends string[] = []> = {
 expert_users: Parent<ModelInputs<expert_usersScalars, expert_usersParents<TGraph, [...TPath, "expert_users"]>, Omit<expert_usersChildren<TGraph, [...TPath, "expert_users"]>, "feature_flag_expert_user">, TGraph, [...TPath, "expert_users"]>>;
 feature_flags: Parent<ModelInputs<feature_flagsScalars, feature_flagsParents<TGraph, [...TPath, "feature_flags"]>, Omit<feature_flagsChildren<TGraph, [...TPath, "feature_flags"]>, "feature_flag_expert_user">, TGraph, [...TPath, "feature_flags"]>>;
};
type feature_flag_expert_userChildren<TGraph extends any[], TPath extends string[] = []> = {

};
type feature_flag_expert_userModel = ModelInputs<feature_flag_expert_userScalars, feature_flag_expert_userParents<feature_flag_expert_userGraph>, feature_flag_expert_userChildren<feature_flag_expert_userGraph>, feature_flag_expert_userGraph>;
type feature_flagsScalars = {
  description: string | null;
  id?: number;
  label: string;
  status?: feature_flags_status_typeEnum;
}
type feature_flagsParents<TGraph extends any[], TPath extends string[] = []> = {

};
type feature_flagsChildren<TGraph extends any[], TPath extends string[] = []> = {
 feature_flag_client: Child<ModelInputs<feature_flag_clientScalars, Omit<feature_flag_clientParents<TGraph, [...TPath, "feature_flag_client"]>, "feature_flags">, feature_flag_clientChildren<TGraph, [...TPath, "feature_flag_client"]>, TGraph, [...TPath, "feature_flag_client"]>>;
 feature_flag_expert_user: Child<ModelInputs<feature_flag_expert_userScalars, Omit<feature_flag_expert_userParents<TGraph, [...TPath, "feature_flag_expert_user"]>, "feature_flags">, feature_flag_expert_userChildren<TGraph, [...TPath, "feature_flag_expert_user"]>, TGraph, [...TPath, "feature_flag_expert_user"]>>;
};
type feature_flagsModel = ModelInputs<feature_flagsScalars, feature_flagsParents<feature_flagsGraph>, feature_flagsChildren<feature_flagsGraph>, feature_flagsGraph>;
type files_and_notes_itemsScalars = {
  attachment_id: number;
  created_at_utc: string;
  id?: number;
  note: string | null;
  position_index_weight: number | null;
  session_report_id: number;
  updated_at_utc?: string;
}
type files_and_notes_itemsParents<TGraph extends any[], TPath extends string[] = []> = {
 attachments: Parent<ModelInputs<attachmentsScalars, attachmentsParents<TGraph, [...TPath, "attachments"]>, Omit<attachmentsChildren<TGraph, [...TPath, "attachments"]>, "files_and_notes_items">, TGraph, [...TPath, "attachments"]>>;
 session_reports: Parent<ModelInputs<session_reportsScalars, session_reportsParents<TGraph, [...TPath, "session_reports"]>, Omit<session_reportsChildren<TGraph, [...TPath, "session_reports"]>, "files_and_notes_items">, TGraph, [...TPath, "session_reports"]>>;
};
type files_and_notes_itemsChildren<TGraph extends any[], TPath extends string[] = []> = {

};
type files_and_notes_itemsModel = ModelInputs<files_and_notes_itemsScalars, files_and_notes_itemsParents<files_and_notes_itemsGraph>, files_and_notes_itemsChildren<files_and_notes_itemsGraph>, files_and_notes_itemsGraph>;
type guest_usersScalars = {
  created_at_utc: string;
  email: string;
  id?: number;
  updated_at_utc?: string;
}
type guest_usersParents<TGraph extends any[], TPath extends string[] = []> = {

};
type guest_usersChildren<TGraph extends any[], TPath extends string[] = []> = {
 checkout_guest_user: Child<ModelInputs<checkout_guest_userScalars, Omit<checkout_guest_userParents<TGraph, [...TPath, "checkout_guest_user"]>, "guest_users">, checkout_guest_userChildren<TGraph, [...TPath, "checkout_guest_user"]>, TGraph, [...TPath, "checkout_guest_user"]>>;
 order_guest_users: Child<ModelInputs<order_guest_usersScalars, Omit<order_guest_usersParents<TGraph, [...TPath, "order_guest_users"]>, "guest_users">, order_guest_usersChildren<TGraph, [...TPath, "order_guest_users"]>, TGraph, [...TPath, "order_guest_users"]>>;
};
type guest_usersModel = ModelInputs<guest_usersScalars, guest_usersParents<guest_usersGraph>, guest_usersChildren<guest_usersGraph>, guest_usersGraph>;
type knex_migrationsScalars = {
  batch: number | null;
  id?: number;
  migration_time: string | null;
  name: string | null;
}
type knex_migrationsParents<TGraph extends any[], TPath extends string[] = []> = {

};
type knex_migrationsChildren<TGraph extends any[], TPath extends string[] = []> = {

};
type knex_migrationsModel = ModelInputs<knex_migrationsScalars, knex_migrationsParents<knex_migrationsGraph>, knex_migrationsChildren<knex_migrationsGraph>, knex_migrationsGraph>;
type knex_migrations_lockScalars = {
  index?: number;
  is_locked: number | null;
}
type knex_migrations_lockParents<TGraph extends any[], TPath extends string[] = []> = {

};
type knex_migrations_lockChildren<TGraph extends any[], TPath extends string[] = []> = {

};
type knex_migrations_lockModel = ModelInputs<knex_migrations_lockScalars, knex_migrations_lockParents<knex_migrations_lockGraph>, knex_migrations_lockChildren<knex_migrations_lockGraph>, knex_migrations_lockGraph>;
type navigation_groupsScalars = {
  created_at_utc: string;
  id?: number;
  title: string;
  updated_at_utc?: string;
}
type navigation_groupsParents<TGraph extends any[], TPath extends string[] = []> = {

};
type navigation_groupsChildren<TGraph extends any[], TPath extends string[] = []> = {
 navigations: Child<ModelInputs<navigationsScalars, Omit<navigationsParents<TGraph, [...TPath, "navigations"]>, "navigation_groups">, navigationsChildren<TGraph, [...TPath, "navigations"]>, TGraph, [...TPath, "navigations"]>>;
};
type navigation_groupsModel = ModelInputs<navigation_groupsScalars, navigation_groupsParents<navigation_groupsGraph>, navigation_groupsChildren<navigation_groupsGraph>, navigation_groupsGraph>;
type navigation_itemsScalars = {
  attachment_id: number | null;
  cms_page_id: number;
  created_at_utc: string;
  id?: number;
  navigation_id: number;
  parent_id: number | null;
  position_index_weight?: number;
  sub_items_with_images?: boolean;
  title: string;
  updated_at_utc?: string;
}
type navigation_itemsParents<TGraph extends any[], TPath extends string[] = []> = {
 attachments: Parent<ModelInputs<attachmentsScalars, attachmentsParents<TGraph, [...TPath, "attachments"]>, Omit<attachmentsChildren<TGraph, [...TPath, "attachments"]>, "navigation_items">, TGraph, [...TPath, "attachments"]>>;
 cms_pages: Parent<ModelInputs<cms_pagesScalars, cms_pagesParents<TGraph, [...TPath, "cms_pages"]>, Omit<cms_pagesChildren<TGraph, [...TPath, "cms_pages"]>, "navigation_items">, TGraph, [...TPath, "cms_pages"]>>;
 navigation_items: Parent<ModelInputs<navigation_itemsScalars, navigation_itemsParents<TGraph, [...TPath, "navigation_items"]>, Omit<navigation_itemsChildren<TGraph, [...TPath, "navigation_items"]>, "navigation_items">, TGraph, [...TPath, "navigation_items"]>>;
 navigations: Parent<ModelInputs<navigationsScalars, navigationsParents<TGraph, [...TPath, "navigations"]>, Omit<navigationsChildren<TGraph, [...TPath, "navigations"]>, "navigation_items">, TGraph, [...TPath, "navigations"]>>;
};
type navigation_itemsChildren<TGraph extends any[], TPath extends string[] = []> = {
 navigation_items: Child<ModelInputs<navigation_itemsScalars, Omit<navigation_itemsParents<TGraph, [...TPath, "navigation_items"]>, "navigation_items">, navigation_itemsChildren<TGraph, [...TPath, "navigation_items"]>, TGraph, [...TPath, "navigation_items"]>>;
};
type navigation_itemsModel = ModelInputs<navigation_itemsScalars, navigation_itemsParents<navigation_itemsGraph>, navigation_itemsChildren<navigation_itemsGraph>, navigation_itemsGraph>;
type navigationsScalars = {
  created_at_utc: string;
  id?: number;
  navigation_group_id: number;
  status?: navigations_status_typeEnum;
  title: string;
  updated_at_utc?: string;
}
type navigationsParents<TGraph extends any[], TPath extends string[] = []> = {
 navigation_groups: Parent<ModelInputs<navigation_groupsScalars, navigation_groupsParents<TGraph, [...TPath, "navigation_groups"]>, Omit<navigation_groupsChildren<TGraph, [...TPath, "navigation_groups"]>, "navigations">, TGraph, [...TPath, "navigation_groups"]>>;
};
type navigationsChildren<TGraph extends any[], TPath extends string[] = []> = {
 navigation_items: Child<ModelInputs<navigation_itemsScalars, Omit<navigation_itemsParents<TGraph, [...TPath, "navigation_items"]>, "navigations">, navigation_itemsChildren<TGraph, [...TPath, "navigation_items"]>, TGraph, [...TPath, "navigation_items"]>>;
};
type navigationsModel = ModelInputs<navigationsScalars, navigationsParents<navigationsGraph>, navigationsChildren<navigationsGraph>, navigationsGraph>;
type order_cartScalars = {
  cart_id: number;
  order_id: number;
}
type order_cartParents<TGraph extends any[], TPath extends string[] = []> = {
 carts: Parent<ModelInputs<cartsScalars, cartsParents<TGraph, [...TPath, "carts"]>, Omit<cartsChildren<TGraph, [...TPath, "carts"]>, "order_cart">, TGraph, [...TPath, "carts"]>>;
 orders: Parent<ModelInputs<ordersScalars, ordersParents<TGraph, [...TPath, "orders"]>, Omit<ordersChildren<TGraph, [...TPath, "orders"]>, "order_cart">, TGraph, [...TPath, "orders"]>>;
};
type order_cartChildren<TGraph extends any[], TPath extends string[] = []> = {

};
type order_cartModel = ModelInputs<order_cartScalars, order_cartParents<order_cartGraph>, order_cartChildren<order_cartGraph>, order_cartGraph>;
type order_clientsScalars = {
  client_id: number;
  order_id: number;
}
type order_clientsParents<TGraph extends any[], TPath extends string[] = []> = {
 clients: Parent<ModelInputs<clientsScalars, clientsParents<TGraph, [...TPath, "clients"]>, Omit<clientsChildren<TGraph, [...TPath, "clients"]>, "order_clients">, TGraph, [...TPath, "clients"]>>;
 orders: Parent<ModelInputs<ordersScalars, ordersParents<TGraph, [...TPath, "orders"]>, Omit<ordersChildren<TGraph, [...TPath, "orders"]>, "order_clients">, TGraph, [...TPath, "orders"]>>;
};
type order_clientsChildren<TGraph extends any[], TPath extends string[] = []> = {

};
type order_clientsModel = ModelInputs<order_clientsScalars, order_clientsParents<order_clientsGraph>, order_clientsChildren<order_clientsGraph>, order_clientsGraph>;
type order_guest_usersScalars = {
  guest_user_id: number;
  order_id: number;
}
type order_guest_usersParents<TGraph extends any[], TPath extends string[] = []> = {
 guest_users: Parent<ModelInputs<guest_usersScalars, guest_usersParents<TGraph, [...TPath, "guest_users"]>, Omit<guest_usersChildren<TGraph, [...TPath, "guest_users"]>, "order_guest_users">, TGraph, [...TPath, "guest_users"]>>;
 orders: Parent<ModelInputs<ordersScalars, ordersParents<TGraph, [...TPath, "orders"]>, Omit<ordersChildren<TGraph, [...TPath, "orders"]>, "order_guest_users">, TGraph, [...TPath, "orders"]>>;
};
type order_guest_usersChildren<TGraph extends any[], TPath extends string[] = []> = {

};
type order_guest_usersModel = ModelInputs<order_guest_usersScalars, order_guest_usersParents<order_guest_usersGraph>, order_guest_usersChildren<order_guest_usersGraph>, order_guest_usersGraph>;
type order_item_shipmentsScalars = {
  order_item_id: number;
  order_shipment_id: number;
}
type order_item_shipmentsParents<TGraph extends any[], TPath extends string[] = []> = {
 order_items: Parent<ModelInputs<order_itemsScalars, order_itemsParents<TGraph, [...TPath, "order_items"]>, Omit<order_itemsChildren<TGraph, [...TPath, "order_items"]>, "order_item_shipments">, TGraph, [...TPath, "order_items"]>>;
 order_shipments: Parent<ModelInputs<order_shipmentsScalars, order_shipmentsParents<TGraph, [...TPath, "order_shipments"]>, Omit<order_shipmentsChildren<TGraph, [...TPath, "order_shipments"]>, "order_item_shipments">, TGraph, [...TPath, "order_shipments"]>>;
};
type order_item_shipmentsChildren<TGraph extends any[], TPath extends string[] = []> = {

};
type order_item_shipmentsModel = ModelInputs<order_item_shipmentsScalars, order_item_shipmentsParents<order_item_shipmentsGraph>, order_item_shipmentsChildren<order_item_shipmentsGraph>, order_item_shipmentsGraph>;
type order_itemsScalars = {
  arta_shipment_id: string | null;
  created_at_utc: string;
  delivered_at_utc: string | null;
  flx_inventory_variant_id: number | null;
  flx_purchase_order_id: number | null;
  flx_status?: order_items_flx_status_typeEnum;
  id?: number;
  metadata: Json | null;
  order_id: number;
  product_data: Json;
  product_variant_id: number | null;
  quantity: number;
  shipped_at_utc: string | null;
  status?: order_items_status_typeEnum;
  tracking_url: string | null;
  unit_price: number;
  updated_at_utc?: string;
  vat_rate: number | null;
}
type order_itemsParents<TGraph extends any[], TPath extends string[] = []> = {
 orders: Parent<ModelInputs<ordersScalars, ordersParents<TGraph, [...TPath, "orders"]>, Omit<ordersChildren<TGraph, [...TPath, "orders"]>, "order_items">, TGraph, [...TPath, "orders"]>>;
 product_variants: Parent<ModelInputs<product_variantsScalars, product_variantsParents<TGraph, [...TPath, "product_variants"]>, Omit<product_variantsChildren<TGraph, [...TPath, "product_variants"]>, "order_items">, TGraph, [...TPath, "product_variants"]>>;
};
type order_itemsChildren<TGraph extends any[], TPath extends string[] = []> = {
 checkout_item_order_items: Child<ModelInputs<checkout_item_order_itemsScalars, Omit<checkout_item_order_itemsParents<TGraph, [...TPath, "checkout_item_order_items"]>, "order_items">, checkout_item_order_itemsChildren<TGraph, [...TPath, "checkout_item_order_items"]>, TGraph, [...TPath, "checkout_item_order_items"]>>;
 commission_order_item: Child<ModelInputs<commission_order_itemScalars, Omit<commission_order_itemParents<TGraph, [...TPath, "commission_order_item"]>, "order_items">, commission_order_itemChildren<TGraph, [...TPath, "commission_order_item"]>, TGraph, [...TPath, "commission_order_item"]>>;
 order_item_shipments: Child<ModelInputs<order_item_shipmentsScalars, Omit<order_item_shipmentsParents<TGraph, [...TPath, "order_item_shipments"]>, "order_items">, order_item_shipmentsChildren<TGraph, [...TPath, "order_item_shipments"]>, TGraph, [...TPath, "order_item_shipments"]>>;
};
type order_itemsModel = ModelInputs<order_itemsScalars, order_itemsParents<order_itemsGraph>, order_itemsChildren<order_itemsGraph>, order_itemsGraph>;
type order_notesScalars = {
  admin_id: number;
  created_at_utc: string;
  id?: number;
  message: string;
  order_id: number;
  updated_at_utc?: string;
}
type order_notesParents<TGraph extends any[], TPath extends string[] = []> = {
 admins: Parent<ModelInputs<adminsScalars, adminsParents<TGraph, [...TPath, "admins"]>, Omit<adminsChildren<TGraph, [...TPath, "admins"]>, "order_notes">, TGraph, [...TPath, "admins"]>>;
 orders: Parent<ModelInputs<ordersScalars, ordersParents<TGraph, [...TPath, "orders"]>, Omit<ordersChildren<TGraph, [...TPath, "orders"]>, "order_notes">, TGraph, [...TPath, "orders"]>>;
};
type order_notesChildren<TGraph extends any[], TPath extends string[] = []> = {

};
type order_notesModel = ModelInputs<order_notesScalars, order_notesParents<order_notesGraph>, order_notesChildren<order_notesGraph>, order_notesGraph>;
type order_sendgrid_eventsScalars = {
  flx_purchase_order_id: number;
  id?: number;
  processed_at_utc: string | null;
  raw_data: Json;
  received_at_utc?: string;
  type: order_sendgrid_events_type_typeEnum;
}
type order_sendgrid_eventsParents<TGraph extends any[], TPath extends string[] = []> = {

};
type order_sendgrid_eventsChildren<TGraph extends any[], TPath extends string[] = []> = {

};
type order_sendgrid_eventsModel = ModelInputs<order_sendgrid_eventsScalars, order_sendgrid_eventsParents<order_sendgrid_eventsGraph>, order_sendgrid_eventsChildren<order_sendgrid_eventsGraph>, order_sendgrid_eventsGraph>;
type order_shipment_arta_quote_servicesScalars = {
  created_at_utc: string;
  currency_iso_code: string;
  id?: number;
  name: string;
  order_shipment_arta_id: number;
  sub_subtype: string;
  subtype: string;
  type: string;
  unit_price: number;
  updated_at_utc?: string;
}
type order_shipment_arta_quote_servicesParents<TGraph extends any[], TPath extends string[] = []> = {
 order_shipment_arta_quotes: Parent<ModelInputs<order_shipment_arta_quotesScalars, order_shipment_arta_quotesParents<TGraph, [...TPath, "order_shipment_arta_quotes"]>, Omit<order_shipment_arta_quotesChildren<TGraph, [...TPath, "order_shipment_arta_quotes"]>, "order_shipment_arta_quote_services">, TGraph, [...TPath, "order_shipment_arta_quotes"]>>;
};
type order_shipment_arta_quote_servicesChildren<TGraph extends any[], TPath extends string[] = []> = {

};
type order_shipment_arta_quote_servicesModel = ModelInputs<order_shipment_arta_quote_servicesScalars, order_shipment_arta_quote_servicesParents<order_shipment_arta_quote_servicesGraph>, order_shipment_arta_quote_servicesChildren<order_shipment_arta_quote_servicesGraph>, order_shipment_arta_quote_servicesGraph>;
type order_shipment_arta_quotesScalars = {
  arta_id: number;
  arta_shipment_id: string | null;
  id?: number;
  lead_time?: number;
  order_shipment_id: number;
  raw_data: Json | null;
  source_address_hash: string | null;
  type: string;
}
type order_shipment_arta_quotesParents<TGraph extends any[], TPath extends string[] = []> = {
 order_shipments: Parent<ModelInputs<order_shipmentsScalars, order_shipmentsParents<TGraph, [...TPath, "order_shipments"]>, Omit<order_shipmentsChildren<TGraph, [...TPath, "order_shipments"]>, "order_shipment_arta_quotes">, TGraph, [...TPath, "order_shipments"]>>;
};
type order_shipment_arta_quotesChildren<TGraph extends any[], TPath extends string[] = []> = {
 order_shipment_arta_quote_services: Child<ModelInputs<order_shipment_arta_quote_servicesScalars, Omit<order_shipment_arta_quote_servicesParents<TGraph, [...TPath, "order_shipment_arta_quote_services"]>, "order_shipment_arta_quotes">, order_shipment_arta_quote_servicesChildren<TGraph, [...TPath, "order_shipment_arta_quote_services"]>, TGraph, [...TPath, "order_shipment_arta_quote_services"]>>;
};
type order_shipment_arta_quotesModel = ModelInputs<order_shipment_arta_quotesScalars, order_shipment_arta_quotesParents<order_shipment_arta_quotesGraph>, order_shipment_arta_quotesChildren<order_shipment_arta_quotesGraph>, order_shipment_arta_quotesGraph>;
type order_shipment_freight_club_quotesScalars = {
  freight_club_id: number;
  freight_club_shipment_id: string | null;
  id?: number;
  order_shipment_id: number;
  raw_data: Json | null;
  source_address_hash: string | null;
  type: string;
}
type order_shipment_freight_club_quotesParents<TGraph extends any[], TPath extends string[] = []> = {
 order_shipments: Parent<ModelInputs<order_shipmentsScalars, order_shipmentsParents<TGraph, [...TPath, "order_shipments"]>, Omit<order_shipmentsChildren<TGraph, [...TPath, "order_shipments"]>, "order_shipment_freight_club_quotes">, TGraph, [...TPath, "order_shipments"]>>;
};
type order_shipment_freight_club_quotesChildren<TGraph extends any[], TPath extends string[] = []> = {

};
type order_shipment_freight_club_quotesModel = ModelInputs<order_shipment_freight_club_quotesScalars, order_shipment_freight_club_quotesParents<order_shipment_freight_club_quotesGraph>, order_shipment_freight_club_quotesChildren<order_shipment_freight_club_quotesGraph>, order_shipment_freight_club_quotesGraph>;
type order_shipmentsScalars = {
  created_at_utc: string;
  currency_iso_code: string;
  id?: number;
  order_id: number;
  source_id: number;
  unit_price: number;
  updated_at_utc?: string;
  vat_rate: number | null;
}
type order_shipmentsParents<TGraph extends any[], TPath extends string[] = []> = {
 orders: Parent<ModelInputs<ordersScalars, ordersParents<TGraph, [...TPath, "orders"]>, Omit<ordersChildren<TGraph, [...TPath, "orders"]>, "order_shipments">, TGraph, [...TPath, "orders"]>>;
 sources: Parent<ModelInputs<sourcesScalars, sourcesParents<TGraph, [...TPath, "sources"]>, Omit<sourcesChildren<TGraph, [...TPath, "sources"]>, "order_shipments">, TGraph, [...TPath, "sources"]>>;
};
type order_shipmentsChildren<TGraph extends any[], TPath extends string[] = []> = {
 checkout_item_shipments: Child<ModelInputs<checkout_item_shipmentsScalars, Omit<checkout_item_shipmentsParents<TGraph, [...TPath, "checkout_item_shipments"]>, "order_shipments">, checkout_item_shipmentsChildren<TGraph, [...TPath, "checkout_item_shipments"]>, TGraph, [...TPath, "checkout_item_shipments"]>>;
 order_item_shipments: Child<ModelInputs<order_item_shipmentsScalars, Omit<order_item_shipmentsParents<TGraph, [...TPath, "order_item_shipments"]>, "order_shipments">, order_item_shipmentsChildren<TGraph, [...TPath, "order_item_shipments"]>, TGraph, [...TPath, "order_item_shipments"]>>;
 order_shipment_arta_quotes: Child<ModelInputs<order_shipment_arta_quotesScalars, Omit<order_shipment_arta_quotesParents<TGraph, [...TPath, "order_shipment_arta_quotes"]>, "order_shipments">, order_shipment_arta_quotesChildren<TGraph, [...TPath, "order_shipment_arta_quotes"]>, TGraph, [...TPath, "order_shipment_arta_quotes"]>>;
 order_shipment_freight_club_quotes: Child<ModelInputs<order_shipment_freight_club_quotesScalars, Omit<order_shipment_freight_club_quotesParents<TGraph, [...TPath, "order_shipment_freight_club_quotes"]>, "order_shipments">, order_shipment_freight_club_quotesChildren<TGraph, [...TPath, "order_shipment_freight_club_quotes"]>, TGraph, [...TPath, "order_shipment_freight_club_quotes"]>>;
 order_shipments_vendor_shippings: Child<ModelInputs<order_shipments_vendor_shippingsScalars, Omit<order_shipments_vendor_shippingsParents<TGraph, [...TPath, "order_shipments_vendor_shippings"]>, "order_shipments">, order_shipments_vendor_shippingsChildren<TGraph, [...TPath, "order_shipments_vendor_shippings"]>, TGraph, [...TPath, "order_shipments_vendor_shippings"]>>;
};
type order_shipmentsModel = ModelInputs<order_shipmentsScalars, order_shipmentsParents<order_shipmentsGraph>, order_shipmentsChildren<order_shipmentsGraph>, order_shipmentsGraph>;
type order_shipments_vendor_shippingsScalars = {
  carrier: string | null;
  id?: number;
  is_subscribed?: boolean;
  method: string | null;
  order_shipment_id: number;
  raw_data: Json | null;
  tracking_number: string | null;
  type: string;
}
type order_shipments_vendor_shippingsParents<TGraph extends any[], TPath extends string[] = []> = {
 order_shipments: Parent<ModelInputs<order_shipmentsScalars, order_shipmentsParents<TGraph, [...TPath, "order_shipments"]>, Omit<order_shipmentsChildren<TGraph, [...TPath, "order_shipments"]>, "order_shipments_vendor_shippings">, TGraph, [...TPath, "order_shipments"]>>;
};
type order_shipments_vendor_shippingsChildren<TGraph extends any[], TPath extends string[] = []> = {

};
type order_shipments_vendor_shippingsModel = ModelInputs<order_shipments_vendor_shippingsScalars, order_shipments_vendor_shippingsParents<order_shipments_vendor_shippingsGraph>, order_shipments_vendor_shippingsChildren<order_shipments_vendor_shippingsGraph>, order_shipments_vendor_shippingsGraph>;
type ordersScalars = {
  billing_address_line1: string | null;
  billing_address_line2: string | null;
  billing_city: string | null;
  billing_company: string | null;
  billing_country_iso_code: string | null;
  billing_country_state: string | null;
  billing_full_name: string | null;
  billing_phone: string | null;
  billing_zip_code: string | null;
  created_at_utc: string;
  flx_id: number | null;
  id?: number;
  shipping_address_line1: string | null;
  shipping_address_line2: string | null;
  shipping_city: string | null;
  shipping_company: string | null;
  shipping_country_iso_code: string | null;
  shipping_country_state: string | null;
  shipping_full_name: string | null;
  shipping_phone: string | null;
  shipping_zip_code: string | null;
  status?: orders_status_typeEnum;
  updated_at_utc?: string;
}
type ordersParents<TGraph extends any[], TPath extends string[] = []> = {

};
type ordersChildren<TGraph extends any[], TPath extends string[] = []> = {
 order_cart: Child<ModelInputs<order_cartScalars, Omit<order_cartParents<TGraph, [...TPath, "order_cart"]>, "orders">, order_cartChildren<TGraph, [...TPath, "order_cart"]>, TGraph, [...TPath, "order_cart"]>>;
 order_clients: Child<ModelInputs<order_clientsScalars, Omit<order_clientsParents<TGraph, [...TPath, "order_clients"]>, "orders">, order_clientsChildren<TGraph, [...TPath, "order_clients"]>, TGraph, [...TPath, "order_clients"]>>;
 order_guest_users: Child<ModelInputs<order_guest_usersScalars, Omit<order_guest_usersParents<TGraph, [...TPath, "order_guest_users"]>, "orders">, order_guest_usersChildren<TGraph, [...TPath, "order_guest_users"]>, TGraph, [...TPath, "order_guest_users"]>>;
 order_items: Child<ModelInputs<order_itemsScalars, Omit<order_itemsParents<TGraph, [...TPath, "order_items"]>, "orders">, order_itemsChildren<TGraph, [...TPath, "order_items"]>, TGraph, [...TPath, "order_items"]>>;
 order_notes: Child<ModelInputs<order_notesScalars, Omit<order_notesParents<TGraph, [...TPath, "order_notes"]>, "orders">, order_notesChildren<TGraph, [...TPath, "order_notes"]>, TGraph, [...TPath, "order_notes"]>>;
 order_shipments: Child<ModelInputs<order_shipmentsScalars, Omit<order_shipmentsParents<TGraph, [...TPath, "order_shipments"]>, "orders">, order_shipmentsChildren<TGraph, [...TPath, "order_shipments"]>, TGraph, [...TPath, "order_shipments"]>>;
};
type ordersModel = ModelInputs<ordersScalars, ordersParents<ordersGraph>, ordersChildren<ordersGraph>, ordersGraph>;
type product_attachmentsScalars = {
  attachment_id: number;
  flx_id: number;
  id?: number;
  position_index_weight: number | null;
  product_id: number;
}
type product_attachmentsParents<TGraph extends any[], TPath extends string[] = []> = {
 attachments: Parent<ModelInputs<attachmentsScalars, attachmentsParents<TGraph, [...TPath, "attachments"]>, Omit<attachmentsChildren<TGraph, [...TPath, "attachments"]>, "product_attachments">, TGraph, [...TPath, "attachments"]>>;
 products: Parent<ModelInputs<productsScalars, productsParents<TGraph, [...TPath, "products"]>, Omit<productsChildren<TGraph, [...TPath, "products"]>, "product_attachments">, TGraph, [...TPath, "products"]>>;
};
type product_attachmentsChildren<TGraph extends any[], TPath extends string[] = []> = {

};
type product_attachmentsModel = ModelInputs<product_attachmentsScalars, product_attachmentsParents<product_attachmentsGraph>, product_attachmentsChildren<product_attachmentsGraph>, product_attachmentsGraph>;
type product_attributesScalars = {
  created_at_utc: string;
  id?: number;
  name: string;
  product_id: number;
  updated_at_utc?: string;
  value: string;
}
type product_attributesParents<TGraph extends any[], TPath extends string[] = []> = {
 products: Parent<ModelInputs<productsScalars, productsParents<TGraph, [...TPath, "products"]>, Omit<productsChildren<TGraph, [...TPath, "products"]>, "product_attributes">, TGraph, [...TPath, "products"]>>;
};
type product_attributesChildren<TGraph extends any[], TPath extends string[] = []> = {

};
type product_attributesModel = ModelInputs<product_attributesScalars, product_attributesParents<product_attributesGraph>, product_attributesChildren<product_attributesGraph>, product_attributesGraph>;
type product_categoriesScalars = {
  created_at_utc: string;
  flx_id: number;
  id?: number;
  name: string;
  parent_id: number | null;
  updated_at_utc?: string;
}
type product_categoriesParents<TGraph extends any[], TPath extends string[] = []> = {
 product_categories: Parent<ModelInputs<product_categoriesScalars, product_categoriesParents<TGraph, [...TPath, "product_categories"]>, Omit<product_categoriesChildren<TGraph, [...TPath, "product_categories"]>, "product_categories">, TGraph, [...TPath, "product_categories"]>>;
};
type product_categoriesChildren<TGraph extends any[], TPath extends string[] = []> = {
 cms_category_pages: Child<ModelInputs<cms_category_pagesScalars, Omit<cms_category_pagesParents<TGraph, [...TPath, "cms_category_pages"]>, "product_categories">, cms_category_pagesChildren<TGraph, [...TPath, "cms_category_pages"]>, TGraph, [...TPath, "cms_category_pages"]>>;
 collection_items_denormalized_collection_items_denormalized_category_one_idToproduct_categories: Child<ModelInputs<collection_items_denormalizedScalars, Omit<collection_items_denormalizedParents<TGraph, [...TPath, "collection_items_denormalized_collection_items_denormalized_category_one_idToproduct_categories"]>, "product_categories_collection_items_denormalized_category_one_idToproduct_categories">, collection_items_denormalizedChildren<TGraph, [...TPath, "collection_items_denormalized_collection_items_denormalized_category_one_idToproduct_categories"]>, TGraph, [...TPath, "collection_items_denormalized_collection_items_denormalized_category_one_idToproduct_categories"]>>;
 collection_items_denormalized_collection_items_denormalized_category_three_idToproduct_categories: Child<ModelInputs<collection_items_denormalizedScalars, Omit<collection_items_denormalizedParents<TGraph, [...TPath, "collection_items_denormalized_collection_items_denormalized_category_three_idToproduct_categories"]>, "product_categories_collection_items_denormalized_category_three_idToproduct_categories">, collection_items_denormalizedChildren<TGraph, [...TPath, "collection_items_denormalized_collection_items_denormalized_category_three_idToproduct_categories"]>, TGraph, [...TPath, "collection_items_denormalized_collection_items_denormalized_category_three_idToproduct_categories"]>>;
 collection_items_denormalized_collection_items_denormalized_category_two_idToproduct_categories: Child<ModelInputs<collection_items_denormalizedScalars, Omit<collection_items_denormalizedParents<TGraph, [...TPath, "collection_items_denormalized_collection_items_denormalized_category_two_idToproduct_categories"]>, "product_categories_collection_items_denormalized_category_two_idToproduct_categories">, collection_items_denormalizedChildren<TGraph, [...TPath, "collection_items_denormalized_collection_items_denormalized_category_two_idToproduct_categories"]>, TGraph, [...TPath, "collection_items_denormalized_collection_items_denormalized_category_two_idToproduct_categories"]>>;
 collections_product_categories: Child<ModelInputs<collections_product_categoriesScalars, Omit<collections_product_categoriesParents<TGraph, [...TPath, "collections_product_categories"]>, "product_categories">, collections_product_categoriesChildren<TGraph, [...TPath, "collections_product_categories"]>, TGraph, [...TPath, "collections_product_categories"]>>;
 product_categories: Child<ModelInputs<product_categoriesScalars, Omit<product_categoriesParents<TGraph, [...TPath, "product_categories"]>, "product_categories">, product_categoriesChildren<TGraph, [...TPath, "product_categories"]>, TGraph, [...TPath, "product_categories"]>>;
 products_products_category_one_idToproduct_categories: Child<ModelInputs<productsScalars, Omit<productsParents<TGraph, [...TPath, "products_products_category_one_idToproduct_categories"]>, "product_categories_products_category_one_idToproduct_categories">, productsChildren<TGraph, [...TPath, "products_products_category_one_idToproduct_categories"]>, TGraph, [...TPath, "products_products_category_one_idToproduct_categories"]>>;
 products_products_category_three_idToproduct_categories: Child<ModelInputs<productsScalars, Omit<productsParents<TGraph, [...TPath, "products_products_category_three_idToproduct_categories"]>, "product_categories_products_category_three_idToproduct_categories">, productsChildren<TGraph, [...TPath, "products_products_category_three_idToproduct_categories"]>, TGraph, [...TPath, "products_products_category_three_idToproduct_categories"]>>;
 products_products_category_two_idToproduct_categories: Child<ModelInputs<productsScalars, Omit<productsParents<TGraph, [...TPath, "products_products_category_two_idToproduct_categories"]>, "product_categories_products_category_two_idToproduct_categories">, productsChildren<TGraph, [...TPath, "products_products_category_two_idToproduct_categories"]>, TGraph, [...TPath, "products_products_category_two_idToproduct_categories"]>>;
};
type product_categoriesModel = ModelInputs<product_categoriesScalars, product_categoriesParents<product_categoriesGraph>, product_categoriesChildren<product_categoriesGraph>, product_categoriesGraph>;
type product_custom_contentScalars = {
  above_the_fold: string | null;
  accordion_care: string | null;
  accordion_details: string | null;
  accordion_shipping: string | null;
  ask_expert_copy: string | null;
  ask_expert_id: number | null;
  custom_dimensions: string | null;
  custom_product_description: string | null;
  custom_product_headline: string | null;
  product_id: number;
}
type product_custom_contentParents<TGraph extends any[], TPath extends string[] = []> = {
 experts: Parent<ModelInputs<expertsScalars, expertsParents<TGraph, [...TPath, "experts"]>, Omit<expertsChildren<TGraph, [...TPath, "experts"]>, "product_custom_content">, TGraph, [...TPath, "experts"]>>;
 products: Parent<ModelInputs<productsScalars, productsParents<TGraph, [...TPath, "products"]>, Omit<productsChildren<TGraph, [...TPath, "products"]>, "product_custom_content">, TGraph, [...TPath, "products"]>>;
};
type product_custom_contentChildren<TGraph extends any[], TPath extends string[] = []> = {

};
type product_custom_contentModel = ModelInputs<product_custom_contentScalars, product_custom_contentParents<product_custom_contentGraph>, product_custom_contentChildren<product_custom_contentGraph>, product_custom_contentGraph>;
type product_custom_fieldsScalars = {
  created_at_utc: string;
  id?: number;
  name: string;
  product_id: number;
  updated_at_utc?: string;
  value: string;
}
type product_custom_fieldsParents<TGraph extends any[], TPath extends string[] = []> = {
 products: Parent<ModelInputs<productsScalars, productsParents<TGraph, [...TPath, "products"]>, Omit<productsChildren<TGraph, [...TPath, "products"]>, "product_custom_fields">, TGraph, [...TPath, "products"]>>;
};
type product_custom_fieldsChildren<TGraph extends any[], TPath extends string[] = []> = {

};
type product_custom_fieldsModel = ModelInputs<product_custom_fieldsScalars, product_custom_fieldsParents<product_custom_fieldsGraph>, product_custom_fieldsChildren<product_custom_fieldsGraph>, product_custom_fieldsGraph>;
type product_optionsScalars = {
  created_at_utc: string;
  id?: number;
  name: string | null;
  updated_at_utc?: string;
}
type product_optionsParents<TGraph extends any[], TPath extends string[] = []> = {

};
type product_optionsChildren<TGraph extends any[], TPath extends string[] = []> = {
 product_product_options: Child<ModelInputs<product_product_optionsScalars, Omit<product_product_optionsParents<TGraph, [...TPath, "product_product_options"]>, "product_options">, product_product_optionsChildren<TGraph, [...TPath, "product_product_options"]>, TGraph, [...TPath, "product_product_options"]>>;
 product_variant_option_values: Child<ModelInputs<product_variant_option_valuesScalars, Omit<product_variant_option_valuesParents<TGraph, [...TPath, "product_variant_option_values"]>, "product_options">, product_variant_option_valuesChildren<TGraph, [...TPath, "product_variant_option_values"]>, TGraph, [...TPath, "product_variant_option_values"]>>;
};
type product_optionsModel = ModelInputs<product_optionsScalars, product_optionsParents<product_optionsGraph>, product_optionsChildren<product_optionsGraph>, product_optionsGraph>;
type product_product_optionsScalars = {
  product_id: number;
  product_option_id: number;
}
type product_product_optionsParents<TGraph extends any[], TPath extends string[] = []> = {
 product_options: Parent<ModelInputs<product_optionsScalars, product_optionsParents<TGraph, [...TPath, "product_options"]>, Omit<product_optionsChildren<TGraph, [...TPath, "product_options"]>, "product_product_options">, TGraph, [...TPath, "product_options"]>>;
 products: Parent<ModelInputs<productsScalars, productsParents<TGraph, [...TPath, "products"]>, Omit<productsChildren<TGraph, [...TPath, "products"]>, "product_product_options">, TGraph, [...TPath, "products"]>>;
};
type product_product_optionsChildren<TGraph extends any[], TPath extends string[] = []> = {

};
type product_product_optionsModel = ModelInputs<product_product_optionsScalars, product_product_optionsParents<product_product_optionsGraph>, product_product_optionsChildren<product_product_optionsGraph>, product_product_optionsGraph>;
type product_variant_attachmentsScalars = {
  attachment_id: number;
  flx_id: number;
  id?: number;
  position_index_weight: number | null;
  product_variant_id: number;
}
type product_variant_attachmentsParents<TGraph extends any[], TPath extends string[] = []> = {
 attachments: Parent<ModelInputs<attachmentsScalars, attachmentsParents<TGraph, [...TPath, "attachments"]>, Omit<attachmentsChildren<TGraph, [...TPath, "attachments"]>, "product_variant_attachments">, TGraph, [...TPath, "attachments"]>>;
 product_variants: Parent<ModelInputs<product_variantsScalars, product_variantsParents<TGraph, [...TPath, "product_variants"]>, Omit<product_variantsChildren<TGraph, [...TPath, "product_variants"]>, "product_variant_attachments">, TGraph, [...TPath, "product_variants"]>>;
};
type product_variant_attachmentsChildren<TGraph extends any[], TPath extends string[] = []> = {

};
type product_variant_attachmentsModel = ModelInputs<product_variant_attachmentsScalars, product_variant_attachmentsParents<product_variant_attachmentsGraph>, product_variant_attachmentsChildren<product_variant_attachmentsGraph>, product_variant_attachmentsGraph>;
type product_variant_custom_contentScalars = {
  above_the_fold: string | null;
  accordion_care: string | null;
  accordion_details: string | null;
  accordion_shipping: string | null;
  ask_expert_copy: string | null;
  ask_expert_id: number | null;
  custom_dimensions: string | null;
  custom_product_description: string | null;
  custom_product_headline: string | null;
  enquire: boolean | null;
  product_variant_id: number;
}
type product_variant_custom_contentParents<TGraph extends any[], TPath extends string[] = []> = {
 experts: Parent<ModelInputs<expertsScalars, expertsParents<TGraph, [...TPath, "experts"]>, Omit<expertsChildren<TGraph, [...TPath, "experts"]>, "product_variant_custom_content">, TGraph, [...TPath, "experts"]>>;
 product_variants: Parent<ModelInputs<product_variantsScalars, product_variantsParents<TGraph, [...TPath, "product_variants"]>, Omit<product_variantsChildren<TGraph, [...TPath, "product_variants"]>, "product_variant_custom_content">, TGraph, [...TPath, "product_variants"]>>;
};
type product_variant_custom_contentChildren<TGraph extends any[], TPath extends string[] = []> = {

};
type product_variant_custom_contentModel = ModelInputs<product_variant_custom_contentScalars, product_variant_custom_contentParents<product_variant_custom_contentGraph>, product_variant_custom_contentChildren<product_variant_custom_contentGraph>, product_variant_custom_contentGraph>;
type product_variant_custom_fieldsScalars = {
  created_at_utc: string;
  id?: number;
  name: string;
  product_variant_id: number;
  updated_at_utc?: string;
  value: string;
}
type product_variant_custom_fieldsParents<TGraph extends any[], TPath extends string[] = []> = {
 product_variants: Parent<ModelInputs<product_variantsScalars, product_variantsParents<TGraph, [...TPath, "product_variants"]>, Omit<product_variantsChildren<TGraph, [...TPath, "product_variants"]>, "product_variant_custom_fields">, TGraph, [...TPath, "product_variants"]>>;
};
type product_variant_custom_fieldsChildren<TGraph extends any[], TPath extends string[] = []> = {

};
type product_variant_custom_fieldsModel = ModelInputs<product_variant_custom_fieldsScalars, product_variant_custom_fieldsParents<product_variant_custom_fieldsGraph>, product_variant_custom_fieldsChildren<product_variant_custom_fieldsGraph>, product_variant_custom_fieldsGraph>;
type product_variant_option_valuesScalars = {
  product_option_id: number;
  product_variant_id: number;
  value: string | null;
}
type product_variant_option_valuesParents<TGraph extends any[], TPath extends string[] = []> = {
 product_options: Parent<ModelInputs<product_optionsScalars, product_optionsParents<TGraph, [...TPath, "product_options"]>, Omit<product_optionsChildren<TGraph, [...TPath, "product_options"]>, "product_variant_option_values">, TGraph, [...TPath, "product_options"]>>;
 product_variants: Parent<ModelInputs<product_variantsScalars, product_variantsParents<TGraph, [...TPath, "product_variants"]>, Omit<product_variantsChildren<TGraph, [...TPath, "product_variants"]>, "product_variant_option_values">, TGraph, [...TPath, "product_variants"]>>;
};
type product_variant_option_valuesChildren<TGraph extends any[], TPath extends string[] = []> = {

};
type product_variant_option_valuesModel = ModelInputs<product_variant_option_valuesScalars, product_variant_option_valuesParents<product_variant_option_valuesGraph>, product_variant_option_valuesChildren<product_variant_option_valuesGraph>, product_variant_option_valuesGraph>;
type product_variant_sourcesScalars = {
  flx_inventory_variant_id: number;
  product_variant_id: number;
  quantity: number;
  source_id: number;
}
type product_variant_sourcesParents<TGraph extends any[], TPath extends string[] = []> = {
 product_variants: Parent<ModelInputs<product_variantsScalars, product_variantsParents<TGraph, [...TPath, "product_variants"]>, Omit<product_variantsChildren<TGraph, [...TPath, "product_variants"]>, "product_variant_sources">, TGraph, [...TPath, "product_variants"]>>;
 sources: Parent<ModelInputs<sourcesScalars, sourcesParents<TGraph, [...TPath, "sources"]>, Omit<sourcesChildren<TGraph, [...TPath, "sources"]>, "product_variant_sources">, TGraph, [...TPath, "sources"]>>;
};
type product_variant_sourcesChildren<TGraph extends any[], TPath extends string[] = []> = {

};
type product_variant_sourcesModel = ModelInputs<product_variant_sourcesScalars, product_variant_sourcesParents<product_variant_sourcesGraph>, product_variant_sourcesChildren<product_variant_sourcesGraph>, product_variant_sourcesGraph>;
type product_variantsScalars = {
  committed_stock?: number;
  cost: number | null;
  created_at_utc: string;
  dimension_unit: string | null;
  estimated_dropship_fee: number | null;
  estimated_shipping_cost: number | null;
  flx_id: number;
  height: number | null;
  id?: number;
  is_published_first_time?: boolean;
  length: number | null;
  price: number;
  product_id: number;
  quantity: number;
  sku: string;
  status: string;
  title: string;
  updated_at_utc?: string;
  weight: number | null;
  weight_unit: string | null;
  width: number | null;
}
type product_variantsParents<TGraph extends any[], TPath extends string[] = []> = {
 products: Parent<ModelInputs<productsScalars, productsParents<TGraph, [...TPath, "products"]>, Omit<productsChildren<TGraph, [...TPath, "products"]>, "product_variants">, TGraph, [...TPath, "products"]>>;
};
type product_variantsChildren<TGraph extends any[], TPath extends string[] = []> = {
 cart_item_product_variants: Child<ModelInputs<cart_item_product_variantsScalars, Omit<cart_item_product_variantsParents<TGraph, [...TPath, "cart_item_product_variants"]>, "product_variants">, cart_item_product_variantsChildren<TGraph, [...TPath, "cart_item_product_variants"]>, TGraph, [...TPath, "cart_item_product_variants"]>>;
 collection_items_denormalized: Child<ModelInputs<collection_items_denormalizedScalars, Omit<collection_items_denormalizedParents<TGraph, [...TPath, "collection_items_denormalized"]>, "product_variants">, collection_items_denormalizedChildren<TGraph, [...TPath, "collection_items_denormalized"]>, TGraph, [...TPath, "collection_items_denormalized"]>>;
 collection_products: Child<ModelInputs<collection_productsScalars, Omit<collection_productsParents<TGraph, [...TPath, "collection_products"]>, "product_variants">, collection_productsChildren<TGraph, [...TPath, "collection_products"]>, TGraph, [...TPath, "collection_products"]>>;
 order_items: Child<ModelInputs<order_itemsScalars, Omit<order_itemsParents<TGraph, [...TPath, "order_items"]>, "product_variants">, order_itemsChildren<TGraph, [...TPath, "order_items"]>, TGraph, [...TPath, "order_items"]>>;
 product_variant_attachments: Child<ModelInputs<product_variant_attachmentsScalars, Omit<product_variant_attachmentsParents<TGraph, [...TPath, "product_variant_attachments"]>, "product_variants">, product_variant_attachmentsChildren<TGraph, [...TPath, "product_variant_attachments"]>, TGraph, [...TPath, "product_variant_attachments"]>>;
 product_variant_custom_content: Child<ModelInputs<product_variant_custom_contentScalars, Omit<product_variant_custom_contentParents<TGraph, [...TPath, "product_variant_custom_content"]>, "product_variants">, product_variant_custom_contentChildren<TGraph, [...TPath, "product_variant_custom_content"]>, TGraph, [...TPath, "product_variant_custom_content"]>>;
 product_variant_custom_fields: Child<ModelInputs<product_variant_custom_fieldsScalars, Omit<product_variant_custom_fieldsParents<TGraph, [...TPath, "product_variant_custom_fields"]>, "product_variants">, product_variant_custom_fieldsChildren<TGraph, [...TPath, "product_variant_custom_fields"]>, TGraph, [...TPath, "product_variant_custom_fields"]>>;
 product_variant_option_values: Child<ModelInputs<product_variant_option_valuesScalars, Omit<product_variant_option_valuesParents<TGraph, [...TPath, "product_variant_option_values"]>, "product_variants">, product_variant_option_valuesChildren<TGraph, [...TPath, "product_variant_option_values"]>, TGraph, [...TPath, "product_variant_option_values"]>>;
 product_variant_sources: Child<ModelInputs<product_variant_sourcesScalars, Omit<product_variant_sourcesParents<TGraph, [...TPath, "product_variant_sources"]>, "product_variants">, product_variant_sourcesChildren<TGraph, [...TPath, "product_variant_sources"]>, TGraph, [...TPath, "product_variant_sources"]>>;
};
type product_variantsModel = ModelInputs<product_variantsScalars, product_variantsParents<product_variantsGraph>, product_variantsChildren<product_variantsGraph>, product_variantsGraph>;
type productsScalars = {
  category_one_id: number | null;
  category_three_id: number | null;
  category_two_id: number | null;
  created_at_utc: string;
  description: string | null;
  flx_id: number;
  id?: number;
  manufacturer: string | null;
  sku: string;
  status: string;
  title: string;
  updated_at_utc?: string;
}
type productsParents<TGraph extends any[], TPath extends string[] = []> = {
 brands: Parent<ModelInputs<brandsScalars, brandsParents<TGraph, [...TPath, "brands"]>, Omit<brandsChildren<TGraph, [...TPath, "brands"]>, "products">, TGraph, [...TPath, "brands"]>>;
 product_categories_products_category_one_idToproduct_categories: Parent<ModelInputs<product_categoriesScalars, product_categoriesParents<TGraph, [...TPath, "product_categories_products_category_one_idToproduct_categories"]>, Omit<product_categoriesChildren<TGraph, [...TPath, "product_categories_products_category_one_idToproduct_categories"]>, "products_products_category_one_idToproduct_categories">, TGraph, [...TPath, "product_categories_products_category_one_idToproduct_categories"]>>;
 product_categories_products_category_three_idToproduct_categories: Parent<ModelInputs<product_categoriesScalars, product_categoriesParents<TGraph, [...TPath, "product_categories_products_category_three_idToproduct_categories"]>, Omit<product_categoriesChildren<TGraph, [...TPath, "product_categories_products_category_three_idToproduct_categories"]>, "products_products_category_three_idToproduct_categories">, TGraph, [...TPath, "product_categories_products_category_three_idToproduct_categories"]>>;
 product_categories_products_category_two_idToproduct_categories: Parent<ModelInputs<product_categoriesScalars, product_categoriesParents<TGraph, [...TPath, "product_categories_products_category_two_idToproduct_categories"]>, Omit<product_categoriesChildren<TGraph, [...TPath, "product_categories_products_category_two_idToproduct_categories"]>, "products_products_category_two_idToproduct_categories">, TGraph, [...TPath, "product_categories_products_category_two_idToproduct_categories"]>>;
};
type productsChildren<TGraph extends any[], TPath extends string[] = []> = {
 collection_items_denormalized: Child<ModelInputs<collection_items_denormalizedScalars, Omit<collection_items_denormalizedParents<TGraph, [...TPath, "collection_items_denormalized"]>, "products">, collection_items_denormalizedChildren<TGraph, [...TPath, "collection_items_denormalized"]>, TGraph, [...TPath, "collection_items_denormalized"]>>;
 collection_products: Child<ModelInputs<collection_productsScalars, Omit<collection_productsParents<TGraph, [...TPath, "collection_products"]>, "products">, collection_productsChildren<TGraph, [...TPath, "collection_products"]>, TGraph, [...TPath, "collection_products"]>>;
 product_attachments: Child<ModelInputs<product_attachmentsScalars, Omit<product_attachmentsParents<TGraph, [...TPath, "product_attachments"]>, "products">, product_attachmentsChildren<TGraph, [...TPath, "product_attachments"]>, TGraph, [...TPath, "product_attachments"]>>;
 product_attributes: Child<ModelInputs<product_attributesScalars, Omit<product_attributesParents<TGraph, [...TPath, "product_attributes"]>, "products">, product_attributesChildren<TGraph, [...TPath, "product_attributes"]>, TGraph, [...TPath, "product_attributes"]>>;
 product_custom_content: Child<ModelInputs<product_custom_contentScalars, Omit<product_custom_contentParents<TGraph, [...TPath, "product_custom_content"]>, "products">, product_custom_contentChildren<TGraph, [...TPath, "product_custom_content"]>, TGraph, [...TPath, "product_custom_content"]>>;
 product_custom_fields: Child<ModelInputs<product_custom_fieldsScalars, Omit<product_custom_fieldsParents<TGraph, [...TPath, "product_custom_fields"]>, "products">, product_custom_fieldsChildren<TGraph, [...TPath, "product_custom_fields"]>, TGraph, [...TPath, "product_custom_fields"]>>;
 product_product_options: Child<ModelInputs<product_product_optionsScalars, Omit<product_product_optionsParents<TGraph, [...TPath, "product_product_options"]>, "products">, product_product_optionsChildren<TGraph, [...TPath, "product_product_options"]>, TGraph, [...TPath, "product_product_options"]>>;
 product_variants: Child<ModelInputs<product_variantsScalars, Omit<product_variantsParents<TGraph, [...TPath, "product_variants"]>, "products">, product_variantsChildren<TGraph, [...TPath, "product_variants"]>, TGraph, [...TPath, "product_variants"]>>;
 recommended_products_recommended_products_paired_product_idToproducts: Child<ModelInputs<recommended_productsScalars, Omit<recommended_productsParents<TGraph, [...TPath, "recommended_products_recommended_products_paired_product_idToproducts"]>, "products_recommended_products_paired_product_idToproducts">, recommended_productsChildren<TGraph, [...TPath, "recommended_products_recommended_products_paired_product_idToproducts"]>, TGraph, [...TPath, "recommended_products_recommended_products_paired_product_idToproducts"]>>;
 recommended_products_recommended_products_product_idToproducts: Child<ModelInputs<recommended_productsScalars, Omit<recommended_productsParents<TGraph, [...TPath, "recommended_products_recommended_products_product_idToproducts"]>, "products_recommended_products_product_idToproducts">, recommended_productsChildren<TGraph, [...TPath, "recommended_products_recommended_products_product_idToproducts"]>, TGraph, [...TPath, "recommended_products_recommended_products_product_idToproducts"]>>;
};
type productsModel = ModelInputs<productsScalars, productsParents<productsGraph>, productsChildren<productsGraph>, productsGraph>;
type promo_codesScalars = {
  amount: number;
  code: string;
  constraints?: promo_code_constraintsEnum[];
  created_at_utc: string;
  end: string | null;
  exclusion_brands: string[] | null;
  id?: number;
  is_valid: boolean;
  link_to_tac: string;
  max_usage: number | null;
  start: string | null;
  type: promocode_typeEnum;
  updated_at_utc: string;
}
type promo_codesParents<TGraph extends any[], TPath extends string[] = []> = {

};
type promo_codesChildren<TGraph extends any[], TPath extends string[] = []> = {
 cart_promo_codes: Child<ModelInputs<cart_promo_codesScalars, Omit<cart_promo_codesParents<TGraph, [...TPath, "cart_promo_codes"]>, "promo_codes">, cart_promo_codesChildren<TGraph, [...TPath, "cart_promo_codes"]>, TGraph, [...TPath, "cart_promo_codes"]>>;
 checkout_promo_codes: Child<ModelInputs<checkout_promo_codesScalars, Omit<checkout_promo_codesParents<TGraph, [...TPath, "checkout_promo_codes"]>, "promo_codes">, checkout_promo_codesChildren<TGraph, [...TPath, "checkout_promo_codes"]>, TGraph, [...TPath, "checkout_promo_codes"]>>;
};
type promo_codesModel = ModelInputs<promo_codesScalars, promo_codesParents<promo_codesGraph>, promo_codesChildren<promo_codesGraph>, promo_codesGraph>;
type purchasesScalars = {
  attachment_id: number | null;
  client_id: number;
  created_at_utc: string;
  currency_iso_code: string;
  description: string;
  expert_commission_conversion_rate: number | null;
  expert_id: number | null;
  id?: number;
  is_expert_commission_paid: boolean | null;
  platform_commission_amount?: number;
  policy: string | null;
  retail_price?: number;
  shipping_additional_address: string | null;
  shipping_address: string | null;
  shipping_city: string | null;
  shipping_country_iso_code: string | null;
  shipping_country_state: string | null;
  shipping_first_name: string | null;
  shipping_last_name: string | null;
  shipping_phone: string | null;
  shipping_price?: number;
  shipping_zip_code: string | null;
  status: purchases_status_typeEnum;
  stripe_expert_transfer_id: string | null;
  tax?: number;
  total_price: number;
  tracking_url: string | null;
  updated_at_utc?: string;
  vendor_expert_commission: number;
  vendor_expert_commission_amount?: number;
  vendor_id: number | null;
  vendor_price?: number;
}
type purchasesParents<TGraph extends any[], TPath extends string[] = []> = {
 attachments: Parent<ModelInputs<attachmentsScalars, attachmentsParents<TGraph, [...TPath, "attachments"]>, Omit<attachmentsChildren<TGraph, [...TPath, "attachments"]>, "purchases">, TGraph, [...TPath, "attachments"]>>;
 clients: Parent<ModelInputs<clientsScalars, clientsParents<TGraph, [...TPath, "clients"]>, Omit<clientsChildren<TGraph, [...TPath, "clients"]>, "purchases">, TGraph, [...TPath, "clients"]>>;
 experts: Parent<ModelInputs<expertsScalars, expertsParents<TGraph, [...TPath, "experts"]>, Omit<expertsChildren<TGraph, [...TPath, "experts"]>, "purchases">, TGraph, [...TPath, "experts"]>>;
 vendors: Parent<ModelInputs<vendorsScalars, vendorsParents<TGraph, [...TPath, "vendors"]>, Omit<vendorsChildren<TGraph, [...TPath, "vendors"]>, "purchases">, TGraph, [...TPath, "vendors"]>>;
};
type purchasesChildren<TGraph extends any[], TPath extends string[] = []> = {
 checkout_item_purchases: Child<ModelInputs<checkout_item_purchasesScalars, Omit<checkout_item_purchasesParents<TGraph, [...TPath, "checkout_item_purchases"]>, "purchases">, checkout_item_purchasesChildren<TGraph, [...TPath, "checkout_item_purchases"]>, TGraph, [...TPath, "checkout_item_purchases"]>>;
};
type purchasesModel = ModelInputs<purchasesScalars, purchasesParents<purchasesGraph>, purchasesChildren<purchasesGraph>, purchasesGraph>;
type recommended_productsScalars = {
  created_at_utc: string;
  id?: number;
  paired_product_id: number;
  position_index_weight: number;
  product_id: number;
  updated_at_utc?: string;
}
type recommended_productsParents<TGraph extends any[], TPath extends string[] = []> = {
 products_recommended_products_paired_product_idToproducts: Parent<ModelInputs<productsScalars, productsParents<TGraph, [...TPath, "products_recommended_products_paired_product_idToproducts"]>, Omit<productsChildren<TGraph, [...TPath, "products_recommended_products_paired_product_idToproducts"]>, "recommended_products_recommended_products_paired_product_idToproducts">, TGraph, [...TPath, "products_recommended_products_paired_product_idToproducts"]>>;
 products_recommended_products_product_idToproducts: Parent<ModelInputs<productsScalars, productsParents<TGraph, [...TPath, "products_recommended_products_product_idToproducts"]>, Omit<productsChildren<TGraph, [...TPath, "products_recommended_products_product_idToproducts"]>, "recommended_products_recommended_products_product_idToproducts">, TGraph, [...TPath, "products_recommended_products_product_idToproducts"]>>;
};
type recommended_productsChildren<TGraph extends any[], TPath extends string[] = []> = {

};
type recommended_productsModel = ModelInputs<recommended_productsScalars, recommended_productsParents<recommended_productsGraph>, recommended_productsChildren<recommended_productsGraph>, recommended_productsGraph>;
type refund_checkout_itemsScalars = {
  checkout_item_id: number;
  refund_id: number;
}
type refund_checkout_itemsParents<TGraph extends any[], TPath extends string[] = []> = {
 checkout_items: Parent<ModelInputs<checkout_itemsScalars, checkout_itemsParents<TGraph, [...TPath, "checkout_items"]>, Omit<checkout_itemsChildren<TGraph, [...TPath, "checkout_items"]>, "refund_checkout_items">, TGraph, [...TPath, "checkout_items"]>>;
 refunds: Parent<ModelInputs<refundsScalars, refundsParents<TGraph, [...TPath, "refunds"]>, Omit<refundsChildren<TGraph, [...TPath, "refunds"]>, "refund_checkout_items">, TGraph, [...TPath, "refunds"]>>;
};
type refund_checkout_itemsChildren<TGraph extends any[], TPath extends string[] = []> = {

};
type refund_checkout_itemsModel = ModelInputs<refund_checkout_itemsScalars, refund_checkout_itemsParents<refund_checkout_itemsGraph>, refund_checkout_itemsChildren<refund_checkout_itemsGraph>, refund_checkout_itemsGraph>;
type refundsScalars = {
  cancellation_fee: number;
  created_at_utc?: string;
  id?: number;
  price: number | null;
  stripe_refund_id: string | null;
  updated_at_utc?: string;
}
type refundsParents<TGraph extends any[], TPath extends string[] = []> = {

};
type refundsChildren<TGraph extends any[], TPath extends string[] = []> = {
 refund_checkout_items: Child<ModelInputs<refund_checkout_itemsScalars, Omit<refund_checkout_itemsParents<TGraph, [...TPath, "refund_checkout_items"]>, "refunds">, refund_checkout_itemsChildren<TGraph, [...TPath, "refund_checkout_items"]>, TGraph, [...TPath, "refund_checkout_items"]>>;
 refunds_credit_transactions: Child<ModelInputs<refunds_credit_transactionsScalars, Omit<refunds_credit_transactionsParents<TGraph, [...TPath, "refunds_credit_transactions"]>, "refunds">, refunds_credit_transactionsChildren<TGraph, [...TPath, "refunds_credit_transactions"]>, TGraph, [...TPath, "refunds_credit_transactions"]>>;
};
type refundsModel = ModelInputs<refundsScalars, refundsParents<refundsGraph>, refundsChildren<refundsGraph>, refundsGraph>;
type refunds_credit_transactionsScalars = {
  credit_transaction_id: number;
  refund_id: number;
}
type refunds_credit_transactionsParents<TGraph extends any[], TPath extends string[] = []> = {
 credit_transactions: Parent<ModelInputs<credit_transactionsScalars, credit_transactionsParents<TGraph, [...TPath, "credit_transactions"]>, Omit<credit_transactionsChildren<TGraph, [...TPath, "credit_transactions"]>, "refunds_credit_transactions">, TGraph, [...TPath, "credit_transactions"]>>;
 refunds: Parent<ModelInputs<refundsScalars, refundsParents<TGraph, [...TPath, "refunds"]>, Omit<refundsChildren<TGraph, [...TPath, "refunds"]>, "refunds_credit_transactions">, TGraph, [...TPath, "refunds"]>>;
};
type refunds_credit_transactionsChildren<TGraph extends any[], TPath extends string[] = []> = {

};
type refunds_credit_transactionsModel = ModelInputs<refunds_credit_transactionsScalars, refunds_credit_transactionsParents<refunds_credit_transactionsGraph>, refunds_credit_transactionsChildren<refunds_credit_transactionsGraph>, refunds_credit_transactionsGraph>;
type regionsScalars = {
  id?: number;
  parent_id: number | null;
  position_index_weight: number | null;
  title: string;
}
type regionsParents<TGraph extends any[], TPath extends string[] = []> = {
 regions: Parent<ModelInputs<regionsScalars, regionsParents<TGraph, [...TPath, "regions"]>, Omit<regionsChildren<TGraph, [...TPath, "regions"]>, "regions">, TGraph, [...TPath, "regions"]>>;
};
type regionsChildren<TGraph extends any[], TPath extends string[] = []> = {
 expert_regions: Child<ModelInputs<expert_regionsScalars, Omit<expert_regionsParents<TGraph, [...TPath, "expert_regions"]>, "regions">, expert_regionsChildren<TGraph, [...TPath, "expert_regions"]>, TGraph, [...TPath, "expert_regions"]>>;
 regions: Child<ModelInputs<regionsScalars, Omit<regionsParents<TGraph, [...TPath, "regions"]>, "regions">, regionsChildren<TGraph, [...TPath, "regions"]>, TGraph, [...TPath, "regions"]>>;
};
type regionsModel = ModelInputs<regionsScalars, regionsParents<regionsGraph>, regionsChildren<regionsGraph>, regionsGraph>;
type role_actionsScalars = {
  action_id: number;
  role_id: number;
}
type role_actionsParents<TGraph extends any[], TPath extends string[] = []> = {
 actions: Parent<ModelInputs<actionsScalars, actionsParents<TGraph, [...TPath, "actions"]>, Omit<actionsChildren<TGraph, [...TPath, "actions"]>, "role_actions">, TGraph, [...TPath, "actions"]>>;
 roles: Parent<ModelInputs<rolesScalars, rolesParents<TGraph, [...TPath, "roles"]>, Omit<rolesChildren<TGraph, [...TPath, "roles"]>, "role_actions">, TGraph, [...TPath, "roles"]>>;
};
type role_actionsChildren<TGraph extends any[], TPath extends string[] = []> = {

};
type role_actionsModel = ModelInputs<role_actionsScalars, role_actionsParents<role_actionsGraph>, role_actionsChildren<role_actionsGraph>, role_actionsGraph>;
type rolesScalars = {
  id?: number;
  title: string;
}
type rolesParents<TGraph extends any[], TPath extends string[] = []> = {

};
type rolesChildren<TGraph extends any[], TPath extends string[] = []> = {
 admin_roles: Child<ModelInputs<admin_rolesScalars, Omit<admin_rolesParents<TGraph, [...TPath, "admin_roles"]>, "roles">, admin_rolesChildren<TGraph, [...TPath, "admin_roles"]>, TGraph, [...TPath, "admin_roles"]>>;
 role_actions: Child<ModelInputs<role_actionsScalars, Omit<role_actionsParents<TGraph, [...TPath, "role_actions"]>, "roles">, role_actionsChildren<TGraph, [...TPath, "role_actions"]>, TGraph, [...TPath, "role_actions"]>>;
};
type rolesModel = ModelInputs<rolesScalars, rolesParents<rolesGraph>, rolesChildren<rolesGraph>, rolesGraph>;
type session_availabilitiesScalars = {
  availability_id: number;
  session_id: number;
}
type session_availabilitiesParents<TGraph extends any[], TPath extends string[] = []> = {
 expert_user_availabilities: Parent<ModelInputs<expert_user_availabilitiesScalars, expert_user_availabilitiesParents<TGraph, [...TPath, "expert_user_availabilities"]>, Omit<expert_user_availabilitiesChildren<TGraph, [...TPath, "expert_user_availabilities"]>, "session_availabilities">, TGraph, [...TPath, "expert_user_availabilities"]>>;
 sessions: Parent<ModelInputs<sessionsScalars, sessionsParents<TGraph, [...TPath, "sessions"]>, Omit<sessionsChildren<TGraph, [...TPath, "sessions"]>, "session_availabilities">, TGraph, [...TPath, "sessions"]>>;
};
type session_availabilitiesChildren<TGraph extends any[], TPath extends string[] = []> = {

};
type session_availabilitiesModel = ModelInputs<session_availabilitiesScalars, session_availabilitiesParents<session_availabilitiesGraph>, session_availabilitiesChildren<session_availabilitiesGraph>, session_availabilitiesGraph>;
type session_client_attachmentsScalars = {
  attachment_id: number;
  id?: number;
  session_client_id: number;
}
type session_client_attachmentsParents<TGraph extends any[], TPath extends string[] = []> = {
 attachments: Parent<ModelInputs<attachmentsScalars, attachmentsParents<TGraph, [...TPath, "attachments"]>, Omit<attachmentsChildren<TGraph, [...TPath, "attachments"]>, "session_client_attachments">, TGraph, [...TPath, "attachments"]>>;
 session_clients: Parent<ModelInputs<session_clientsScalars, session_clientsParents<TGraph, [...TPath, "session_clients"]>, Omit<session_clientsChildren<TGraph, [...TPath, "session_clients"]>, "session_client_attachments">, TGraph, [...TPath, "session_clients"]>>;
};
type session_client_attachmentsChildren<TGraph extends any[], TPath extends string[] = []> = {

};
type session_client_attachmentsModel = ModelInputs<session_client_attachmentsScalars, session_client_attachmentsParents<session_client_attachmentsGraph>, session_client_attachmentsChildren<session_client_attachmentsGraph>, session_client_attachmentsGraph>;
type session_client_notificationsScalars = {
  id?: number;
  sent_at_utc?: string;
  session_client_id: number;
  type: session_client_notifications_type_typeEnum;
}
type session_client_notificationsParents<TGraph extends any[], TPath extends string[] = []> = {
 session_clients: Parent<ModelInputs<session_clientsScalars, session_clientsParents<TGraph, [...TPath, "session_clients"]>, Omit<session_clientsChildren<TGraph, [...TPath, "session_clients"]>, "session_client_notifications">, TGraph, [...TPath, "session_clients"]>>;
};
type session_client_notificationsChildren<TGraph extends any[], TPath extends string[] = []> = {

};
type session_client_notificationsModel = ModelInputs<session_client_notificationsScalars, session_client_notificationsParents<session_client_notificationsGraph>, session_client_notificationsChildren<session_client_notificationsGraph>, session_client_notificationsGraph>;
type session_clientsScalars = {
  cancel_info: Json | null;
  client_description: string | null;
  client_id: number;
  client_phone: string | null;
  created_at_utc: string;
  guests: Json | null;
  id?: number;
  is_stripe_transfer_enabled: boolean | null;
  questionnaire_data: Json | null;
  review_token: string | null;
  session_id: number;
  status: string;
  stripe_transfer_id: string | null;
  transfer_conversion_rate: number | null;
  updated_at_utc?: string;
}
type session_clientsParents<TGraph extends any[], TPath extends string[] = []> = {
 clients: Parent<ModelInputs<clientsScalars, clientsParents<TGraph, [...TPath, "clients"]>, Omit<clientsChildren<TGraph, [...TPath, "clients"]>, "session_clients">, TGraph, [...TPath, "clients"]>>;
 sessions: Parent<ModelInputs<sessionsScalars, sessionsParents<TGraph, [...TPath, "sessions"]>, Omit<sessionsChildren<TGraph, [...TPath, "sessions"]>, "session_clients">, TGraph, [...TPath, "sessions"]>>;
};
type session_clientsChildren<TGraph extends any[], TPath extends string[] = []> = {
 checkout_item_session_bookings: Child<ModelInputs<checkout_item_session_bookingsScalars, Omit<checkout_item_session_bookingsParents<TGraph, [...TPath, "checkout_item_session_bookings"]>, "session_clients">, checkout_item_session_bookingsChildren<TGraph, [...TPath, "checkout_item_session_bookings"]>, TGraph, [...TPath, "checkout_item_session_bookings"]>>;
 session_client_attachments: Child<ModelInputs<session_client_attachmentsScalars, Omit<session_client_attachmentsParents<TGraph, [...TPath, "session_client_attachments"]>, "session_clients">, session_client_attachmentsChildren<TGraph, [...TPath, "session_client_attachments"]>, TGraph, [...TPath, "session_client_attachments"]>>;
 session_client_notifications: Child<ModelInputs<session_client_notificationsScalars, Omit<session_client_notificationsParents<TGraph, [...TPath, "session_client_notifications"]>, "session_clients">, session_client_notificationsChildren<TGraph, [...TPath, "session_client_notifications"]>, TGraph, [...TPath, "session_client_notifications"]>>;
 session_reports: Child<ModelInputs<session_reportsScalars, Omit<session_reportsParents<TGraph, [...TPath, "session_reports"]>, "session_clients">, session_reportsChildren<TGraph, [...TPath, "session_reports"]>, TGraph, [...TPath, "session_reports"]>>;
 session_reviews: Child<ModelInputs<session_reviewsScalars, Omit<session_reviewsParents<TGraph, [...TPath, "session_reviews"]>, "session_clients">, session_reviewsChildren<TGraph, [...TPath, "session_reviews"]>, TGraph, [...TPath, "session_reviews"]>>;
};
type session_clientsModel = ModelInputs<session_clientsScalars, session_clientsParents<session_clientsGraph>, session_clientsChildren<session_clientsGraph>, session_clientsGraph>;
type session_logsScalars = {
  created_at_utc: string;
  event_type: string;
  expert_user_id: number;
  id?: number;
  occurred_at_utc: string;
  session_id: number;
}
type session_logsParents<TGraph extends any[], TPath extends string[] = []> = {
 expert_users: Parent<ModelInputs<expert_usersScalars, expert_usersParents<TGraph, [...TPath, "expert_users"]>, Omit<expert_usersChildren<TGraph, [...TPath, "expert_users"]>, "session_logs">, TGraph, [...TPath, "expert_users"]>>;
 sessions: Parent<ModelInputs<sessionsScalars, sessionsParents<TGraph, [...TPath, "sessions"]>, Omit<sessionsChildren<TGraph, [...TPath, "sessions"]>, "session_logs">, TGraph, [...TPath, "sessions"]>>;
};
type session_logsChildren<TGraph extends any[], TPath extends string[] = []> = {

};
type session_logsModel = ModelInputs<session_logsScalars, session_logsParents<session_logsGraph>, session_logsChildren<session_logsGraph>, session_logsGraph>;
type session_report_itemsScalars = {
  attachment_id: number | null;
  created_at_utc: string;
  id?: number;
  note: string | null;
  position_index_weight: number | null;
  publisher: string;
  session_report_id: number;
  title: string;
  type?: session_report_item_type_enumEnum;
  updated_at_utc?: string;
  url: string;
}
type session_report_itemsParents<TGraph extends any[], TPath extends string[] = []> = {
 attachments: Parent<ModelInputs<attachmentsScalars, attachmentsParents<TGraph, [...TPath, "attachments"]>, Omit<attachmentsChildren<TGraph, [...TPath, "attachments"]>, "session_report_items">, TGraph, [...TPath, "attachments"]>>;
 session_reports: Parent<ModelInputs<session_reportsScalars, session_reportsParents<TGraph, [...TPath, "session_reports"]>, Omit<session_reportsChildren<TGraph, [...TPath, "session_reports"]>, "session_report_items">, TGraph, [...TPath, "session_reports"]>>;
};
type session_report_itemsChildren<TGraph extends any[], TPath extends string[] = []> = {

};
type session_report_itemsModel = ModelInputs<session_report_itemsScalars, session_report_itemsParents<session_report_itemsGraph>, session_report_itemsChildren<session_report_itemsGraph>, session_report_itemsGraph>;
type session_reportsScalars = {
  created_at_utc: string;
  id?: number;
  note: string | null;
  session_client_id: number;
  updated_at_utc?: string;
}
type session_reportsParents<TGraph extends any[], TPath extends string[] = []> = {
 session_clients: Parent<ModelInputs<session_clientsScalars, session_clientsParents<TGraph, [...TPath, "session_clients"]>, Omit<session_clientsChildren<TGraph, [...TPath, "session_clients"]>, "session_reports">, TGraph, [...TPath, "session_clients"]>>;
};
type session_reportsChildren<TGraph extends any[], TPath extends string[] = []> = {
 files_and_notes_items: Child<ModelInputs<files_and_notes_itemsScalars, Omit<files_and_notes_itemsParents<TGraph, [...TPath, "files_and_notes_items"]>, "session_reports">, files_and_notes_itemsChildren<TGraph, [...TPath, "files_and_notes_items"]>, TGraph, [...TPath, "files_and_notes_items"]>>;
 session_report_items: Child<ModelInputs<session_report_itemsScalars, Omit<session_report_itemsParents<TGraph, [...TPath, "session_report_items"]>, "session_reports">, session_report_itemsChildren<TGraph, [...TPath, "session_report_items"]>, TGraph, [...TPath, "session_report_items"]>>;
};
type session_reportsModel = ModelInputs<session_reportsScalars, session_reportsParents<session_reportsGraph>, session_reportsChildren<session_reportsGraph>, session_reportsGraph>;
type session_reviewsScalars = {
  created_at_utc: string;
  expert_user_id: number;
  feedback: string | null;
  id?: number;
  is_visible?: boolean;
  rating: number;
  session_client_id: number | null;
}
type session_reviewsParents<TGraph extends any[], TPath extends string[] = []> = {
 expert_users: Parent<ModelInputs<expert_usersScalars, expert_usersParents<TGraph, [...TPath, "expert_users"]>, Omit<expert_usersChildren<TGraph, [...TPath, "expert_users"]>, "session_reviews">, TGraph, [...TPath, "expert_users"]>>;
 session_clients: Parent<ModelInputs<session_clientsScalars, session_clientsParents<TGraph, [...TPath, "session_clients"]>, Omit<session_clientsChildren<TGraph, [...TPath, "session_clients"]>, "session_reviews">, TGraph, [...TPath, "session_clients"]>>;
};
type session_reviewsChildren<TGraph extends any[], TPath extends string[] = []> = {

};
type session_reviewsModel = ModelInputs<session_reviewsScalars, session_reviewsParents<session_reviewsGraph>, session_reviewsChildren<session_reviewsGraph>, session_reviewsGraph>;
type sessionsScalars = {
  created_at_utc: string;
  end_at_utc: string;
  expert_id: number;
  expert_joined_at_utc: string | null;
  expert_session_id: number | null;
  expert_user_id: number;
  id?: number;
  session_data: Json;
  start_at_utc: string;
  status: string;
  updated_at_utc?: string;
  zoom_session_id: string | null;
}
type sessionsParents<TGraph extends any[], TPath extends string[] = []> = {
 expert_sessions: Parent<ModelInputs<expert_sessionsScalars, expert_sessionsParents<TGraph, [...TPath, "expert_sessions"]>, Omit<expert_sessionsChildren<TGraph, [...TPath, "expert_sessions"]>, "sessions">, TGraph, [...TPath, "expert_sessions"]>>;
 expert_users: Parent<ModelInputs<expert_usersScalars, expert_usersParents<TGraph, [...TPath, "expert_users"]>, Omit<expert_usersChildren<TGraph, [...TPath, "expert_users"]>, "sessions">, TGraph, [...TPath, "expert_users"]>>;
 experts: Parent<ModelInputs<expertsScalars, expertsParents<TGraph, [...TPath, "experts"]>, Omit<expertsChildren<TGraph, [...TPath, "experts"]>, "sessions">, TGraph, [...TPath, "experts"]>>;
};
type sessionsChildren<TGraph extends any[], TPath extends string[] = []> = {
 session_availabilities: Child<ModelInputs<session_availabilitiesScalars, Omit<session_availabilitiesParents<TGraph, [...TPath, "session_availabilities"]>, "sessions">, session_availabilitiesChildren<TGraph, [...TPath, "session_availabilities"]>, TGraph, [...TPath, "session_availabilities"]>>;
 session_clients: Child<ModelInputs<session_clientsScalars, Omit<session_clientsParents<TGraph, [...TPath, "session_clients"]>, "sessions">, session_clientsChildren<TGraph, [...TPath, "session_clients"]>, TGraph, [...TPath, "session_clients"]>>;
 session_logs: Child<ModelInputs<session_logsScalars, Omit<session_logsParents<TGraph, [...TPath, "session_logs"]>, "sessions">, session_logsChildren<TGraph, [...TPath, "session_logs"]>, TGraph, [...TPath, "session_logs"]>>;
};
type sessionsModel = ModelInputs<sessionsScalars, sessionsParents<sessionsGraph>, sessionsChildren<sessionsGraph>, sessionsGraph>;
type sourcesScalars = {
  address_line1: string;
  address_line2: string | null;
  city: string;
  company_name: string | null;
  country: string;
  country_code: string;
  created_at_utc: string;
  email: string | null;
  first_name: string | null;
  flx_id: number;
  id?: number;
  last_name: string | null;
  name: string | null;
  phone: string | null;
  postal: string;
  state: string | null;
  state_code: string | null;
  updated_at_utc?: string;
  vendor_name: string | null;
}
type sourcesParents<TGraph extends any[], TPath extends string[] = []> = {

};
type sourcesChildren<TGraph extends any[], TPath extends string[] = []> = {
 cart_shipments: Child<ModelInputs<cart_shipmentsScalars, Omit<cart_shipmentsParents<TGraph, [...TPath, "cart_shipments"]>, "sources">, cart_shipmentsChildren<TGraph, [...TPath, "cart_shipments"]>, TGraph, [...TPath, "cart_shipments"]>>;
 order_shipments: Child<ModelInputs<order_shipmentsScalars, Omit<order_shipmentsParents<TGraph, [...TPath, "order_shipments"]>, "sources">, order_shipmentsChildren<TGraph, [...TPath, "order_shipments"]>, TGraph, [...TPath, "order_shipments"]>>;
 product_variant_sources: Child<ModelInputs<product_variant_sourcesScalars, Omit<product_variant_sourcesParents<TGraph, [...TPath, "product_variant_sources"]>, "sources">, product_variant_sourcesChildren<TGraph, [...TPath, "product_variant_sources"]>, TGraph, [...TPath, "product_variant_sources"]>>;
};
type sourcesModel = ModelInputs<sourcesScalars, sourcesParents<sourcesGraph>, sourcesChildren<sourcesGraph>, sourcesGraph>;
type tagsScalars = {
  id?: number;
  title: string;
}
type tagsParents<TGraph extends any[], TPath extends string[] = []> = {

};
type tagsChildren<TGraph extends any[], TPath extends string[] = []> = {
 expert_tags: Child<ModelInputs<expert_tagsScalars, Omit<expert_tagsParents<TGraph, [...TPath, "expert_tags"]>, "tags">, expert_tagsChildren<TGraph, [...TPath, "expert_tags"]>, TGraph, [...TPath, "expert_tags"]>>;
};
type tagsModel = ModelInputs<tagsScalars, tagsParents<tagsGraph>, tagsChildren<tagsGraph>, tagsGraph>;
type trusted_sourcesScalars = {
  child_src?: boolean;
  connect_src?: boolean;
  created_at_utc?: string;
  domain: string;
  font_src?: boolean;
  frame_src?: boolean;
  id?: number;
  img_src?: boolean;
  manifest_src?: boolean;
  media_src?: boolean;
  object_src?: boolean;
  prefetch_src?: boolean;
  script_src?: boolean;
  script_src_attr?: boolean;
  script_src_elem?: boolean;
  style_src?: boolean;
  style_src_attr?: boolean;
  style_src_elem?: boolean;
  updated_at_utc?: string;
  worker_src?: boolean;
}
type trusted_sourcesParents<TGraph extends any[], TPath extends string[] = []> = {

};
type trusted_sourcesChildren<TGraph extends any[], TPath extends string[] = []> = {

};
type trusted_sourcesModel = ModelInputs<trusted_sourcesScalars, trusted_sourcesParents<trusted_sourcesGraph>, trusted_sourcesChildren<trusted_sourcesGraph>, trusted_sourcesGraph>;
type vendorsScalars = {
  attachment_id: number | null;
  brands: Json;
  created_at_utc: string;
  expert_commission: number;
  id?: number;
  is_deleted?: boolean;
  name: string;
  policy: string | null;
  updated_at_utc?: string;
  website_url: string | null;
}
type vendorsParents<TGraph extends any[], TPath extends string[] = []> = {
 attachments: Parent<ModelInputs<attachmentsScalars, attachmentsParents<TGraph, [...TPath, "attachments"]>, Omit<attachmentsChildren<TGraph, [...TPath, "attachments"]>, "vendors">, TGraph, [...TPath, "attachments"]>>;
};
type vendorsChildren<TGraph extends any[], TPath extends string[] = []> = {
 purchases: Child<ModelInputs<purchasesScalars, Omit<purchasesParents<TGraph, [...TPath, "purchases"]>, "vendors">, purchasesChildren<TGraph, [...TPath, "purchases"]>, TGraph, [...TPath, "purchases"]>>;
};
type vendorsModel = ModelInputs<vendorsScalars, vendorsParents<vendorsGraph>, vendorsChildren<vendorsGraph>, vendorsGraph>;
type video_attachmentsScalars = {
  created_at_utc: string;
  filename_extension: string | null;
  guid: string | null;
  id?: number;
  name: string | null;
  updated_at_utc?: string;
}
type video_attachmentsParents<TGraph extends any[], TPath extends string[] = []> = {

};
type video_attachmentsChildren<TGraph extends any[], TPath extends string[] = []> = {
 cms_video_section_widgets: Child<ModelInputs<cms_video_section_widgetsScalars, Omit<cms_video_section_widgetsParents<TGraph, [...TPath, "cms_video_section_widgets"]>, "video_attachments">, cms_video_section_widgetsChildren<TGraph, [...TPath, "cms_video_section_widgets"]>, TGraph, [...TPath, "cms_video_section_widgets"]>>;
 cms_video_widgets: Child<ModelInputs<cms_video_widgetsScalars, Omit<cms_video_widgetsParents<TGraph, [...TPath, "cms_video_widgets"]>, "video_attachments">, cms_video_widgetsChildren<TGraph, [...TPath, "cms_video_widgets"]>, TGraph, [...TPath, "cms_video_widgets"]>>;
};
type video_attachmentsModel = ModelInputs<video_attachmentsScalars, video_attachmentsParents<video_attachmentsGraph>, video_attachmentsChildren<video_attachmentsGraph>, video_attachmentsGraph>;
type actionsParentsGraph = {

};
type actionsChildrenGraph = {
 role_actions: Array<Omit<role_actionsGraph[number], "actions">>;
};
type actionsGraph = Array<actionsScalars & actionsParentsGraph & actionsChildrenGraph>;
type admin_rolesParentsGraph = {
 admins: Array<Omit<adminsGraph[number], "admin_roles">>;
 roles: Array<Omit<rolesGraph[number], "admin_roles">>;
};
type admin_rolesChildrenGraph = {

};
type admin_rolesGraph = Array<admin_rolesScalars & admin_rolesParentsGraph & admin_rolesChildrenGraph>;
type adminsParentsGraph = {

};
type adminsChildrenGraph = {
 admin_roles: Array<Omit<admin_rolesGraph[number], "admins">>;
 order_notes: Array<Omit<order_notesGraph[number], "admins">>;
};
type adminsGraph = Array<adminsScalars & adminsParentsGraph & adminsChildrenGraph>;
type attachmentsParentsGraph = {
 base_attachments: Array<Omit<base_attachmentsGraph[number], "attachments">>;
};
type attachmentsChildrenGraph = {
 cms_article_pages: Array<Omit<cms_article_pagesGraph[number], "attachments">>;
 cms_card_navigation_widget_items: Array<Omit<cms_card_navigation_widget_itemsGraph[number], "attachments">>;
 cms_category_collection_widget_items: Array<Omit<cms_category_collection_widget_itemsGraph[number], "attachments">>;
 cms_category_header_widget_items: Array<Omit<cms_category_header_widget_itemsGraph[number], "attachments">>;
 cms_collection_header_widgets_cms_collection_header_widgets_header_image_attachment_idToattachments: Array<Omit<cms_collection_header_widgetsGraph[number], "attachments_cms_collection_header_widgets_header_image_attachment_idToattachments">>;
 cms_collection_header_widgets_cms_collection_header_widgets_mobile_image_attachment_idToattachments: Array<Omit<cms_collection_header_widgetsGraph[number], "attachments_cms_collection_header_widgets_mobile_image_attachment_idToattachments">>;
 cms_collections_carousel_widget_items_cms_collections_carousel_widget_items_preview_image_attachment_idToattachments: Array<Omit<cms_collections_carousel_widget_itemsGraph[number], "attachments_cms_collections_carousel_widget_items_preview_image_attachment_idToattachments">>;
 cms_collections_carousel_widget_items_cms_collections_carousel_widget_items_profile_image_attachment_idToattachments: Array<Omit<cms_collections_carousel_widget_itemsGraph[number], "attachments_cms_collections_carousel_widget_items_profile_image_attachment_idToattachments">>;
 cms_consultation_listing_widgets: Array<Omit<cms_consultation_listing_widgetsGraph[number], "attachments">>;
 cms_double_image_widgets_cms_double_image_widgets_first_attachment_idToattachments: Array<Omit<cms_double_image_widgetsGraph[number], "attachments_cms_double_image_widgets_first_attachment_idToattachments">>;
 cms_double_image_widgets_cms_double_image_widgets_second_attachment_idToattachments: Array<Omit<cms_double_image_widgetsGraph[number], "attachments_cms_double_image_widgets_second_attachment_idToattachments">>;
 cms_expert_collections_widget_items_cms_expert_collections_widget_items_preview_image_attachment_idToattachments: Array<Omit<cms_expert_collections_widget_itemsGraph[number], "attachments_cms_expert_collections_widget_items_preview_image_attachment_idToattachments">>;
 cms_expert_collections_widget_items_cms_expert_collections_widget_items_profile_image_attachment_idToattachments: Array<Omit<cms_expert_collections_widget_itemsGraph[number], "attachments_cms_expert_collections_widget_items_profile_image_attachment_idToattachments">>;
 cms_gallery_widget_items: Array<Omit<cms_gallery_widget_itemsGraph[number], "attachments">>;
 cms_hero_carousel_widget_items: Array<Omit<cms_hero_carousel_widget_itemsGraph[number], "attachments">>;
 cms_hero_main_widgets: Array<Omit<cms_hero_main_widgetsGraph[number], "attachments">>;
 cms_hero_widgets: Array<Omit<cms_hero_widgetsGraph[number], "attachments">>;
 cms_info_listing_widgets: Array<Omit<cms_info_listing_widgetsGraph[number], "attachments">>;
 cms_introduction_widgets: Array<Omit<cms_introduction_widgetsGraph[number], "attachments">>;
 cms_products_widget_items: Array<Omit<cms_products_widget_itemsGraph[number], "attachments">>;
 cms_single_image_widgets: Array<Omit<cms_single_image_widgetsGraph[number], "attachments">>;
 cms_spotlight_widgets: Array<Omit<cms_spotlight_widgetsGraph[number], "attachments">>;
 cms_video_section_widgets: Array<Omit<cms_video_section_widgetsGraph[number], "attachments">>;
 cms_video_widgets: Array<Omit<cms_video_widgetsGraph[number], "attachments">>;
 cms_widget_item_three_column_cards_cms_widget_item_three_column_cards_first_attachment_idToattachments: Array<Omit<cms_widget_item_three_column_cardsGraph[number], "attachments_cms_widget_item_three_column_cards_first_attachment_idToattachments">>;
 cms_widget_item_three_column_cards_cms_widget_item_three_column_cards_second_attachment_idToattachments: Array<Omit<cms_widget_item_three_column_cardsGraph[number], "attachments_cms_widget_item_three_column_cards_second_attachment_idToattachments">>;
 cms_widget_item_three_column_cards_cms_widget_item_three_column_cards_third_attachment_idToattachments: Array<Omit<cms_widget_item_three_column_cardsGraph[number], "attachments_cms_widget_item_three_column_cards_third_attachment_idToattachments">>;
 cms_widget_item_two_column_cards_cms_widget_item_two_column_cards_first_attachment_idToattachments: Array<Omit<cms_widget_item_two_column_cardsGraph[number], "attachments_cms_widget_item_two_column_cards_first_attachment_idToattachments">>;
 cms_widget_item_two_column_cards_cms_widget_item_two_column_cards_second_attachment_idToattachments: Array<Omit<cms_widget_item_two_column_cardsGraph[number], "attachments_cms_widget_item_two_column_cards_second_attachment_idToattachments">>;
 expert_attachments: Array<Omit<expert_attachmentsGraph[number], "attachments">>;
 experts_experts_headshot_image_attachment_idToattachments: Array<Omit<expertsGraph[number], "attachments_experts_headshot_image_attachment_idToattachments">>;
 experts_experts_profile_image_attachment_idToattachments: Array<Omit<expertsGraph[number], "attachments_experts_profile_image_attachment_idToattachments">>;
 external_product_previews: Array<Omit<external_product_previewsGraph[number], "attachments">>;
 files_and_notes_items: Array<Omit<files_and_notes_itemsGraph[number], "attachments">>;
 navigation_items: Array<Omit<navigation_itemsGraph[number], "attachments">>;
 product_attachments: Array<Omit<product_attachmentsGraph[number], "attachments">>;
 product_variant_attachments: Array<Omit<product_variant_attachmentsGraph[number], "attachments">>;
 purchases: Array<Omit<purchasesGraph[number], "attachments">>;
 session_client_attachments: Array<Omit<session_client_attachmentsGraph[number], "attachments">>;
 session_report_items: Array<Omit<session_report_itemsGraph[number], "attachments">>;
 vendors: Array<Omit<vendorsGraph[number], "attachments">>;
};
type attachmentsGraph = Array<attachmentsScalars & attachmentsParentsGraph & attachmentsChildrenGraph>;
type base_attachmentsParentsGraph = {

};
type base_attachmentsChildrenGraph = {
 attachments: Array<Omit<attachmentsGraph[number], "base_attachments">>;
};
type base_attachmentsGraph = Array<base_attachmentsScalars & base_attachmentsParentsGraph & base_attachmentsChildrenGraph>;
type brandsParentsGraph = {

};
type brandsChildrenGraph = {
 cms_brand_pages: Array<Omit<cms_brand_pagesGraph[number], "brands">>;
 collection_product_brands: Array<Omit<collection_product_brandsGraph[number], "brands">>;
 products: Array<Omit<productsGraph[number], "brands">>;
};
type brandsGraph = Array<brandsScalars & brandsParentsGraph & brandsChildrenGraph>;
type cart_item_product_variantsParentsGraph = {
 cart_items: Array<Omit<cart_itemsGraph[number], "cart_item_product_variants">>;
 product_variants: Array<Omit<product_variantsGraph[number], "cart_item_product_variants">>;
};
type cart_item_product_variantsChildrenGraph = {

};
type cart_item_product_variantsGraph = Array<cart_item_product_variantsScalars & cart_item_product_variantsParentsGraph & cart_item_product_variantsChildrenGraph>;
type cart_item_shipmentsParentsGraph = {
 cart_items: Array<Omit<cart_itemsGraph[number], "cart_item_shipments">>;
 cart_shipments: Array<Omit<cart_shipmentsGraph[number], "cart_item_shipments">>;
};
type cart_item_shipmentsChildrenGraph = {

};
type cart_item_shipmentsGraph = Array<cart_item_shipmentsScalars & cart_item_shipmentsParentsGraph & cart_item_shipmentsChildrenGraph>;
type cart_itemsParentsGraph = {
 carts: Array<Omit<cartsGraph[number], "cart_items">>;
};
type cart_itemsChildrenGraph = {
 cart_item_product_variants: Array<Omit<cart_item_product_variantsGraph[number], "cart_items">>;
 cart_item_shipments: Array<Omit<cart_item_shipmentsGraph[number], "cart_items">>;
 commission_cart_item: Array<Omit<commission_cart_itemGraph[number], "cart_items">>;
};
type cart_itemsGraph = Array<cart_itemsScalars & cart_itemsParentsGraph & cart_itemsChildrenGraph>;
type cart_promo_codesParentsGraph = {
 carts: Array<Omit<cartsGraph[number], "cart_promo_codes">>;
 promo_codes: Array<Omit<promo_codesGraph[number], "cart_promo_codes">>;
};
type cart_promo_codesChildrenGraph = {

};
type cart_promo_codesGraph = Array<cart_promo_codesScalars & cart_promo_codesParentsGraph & cart_promo_codesChildrenGraph>;
type cart_shipment_arta_quote_servicesParentsGraph = {
 cart_shipment_arta_quotes: Array<Omit<cart_shipment_arta_quotesGraph[number], "cart_shipment_arta_quote_services">>;
};
type cart_shipment_arta_quote_servicesChildrenGraph = {

};
type cart_shipment_arta_quote_servicesGraph = Array<cart_shipment_arta_quote_servicesScalars & cart_shipment_arta_quote_servicesParentsGraph & cart_shipment_arta_quote_servicesChildrenGraph>;
type cart_shipment_arta_quotesParentsGraph = {
 cart_shipments: Array<Omit<cart_shipmentsGraph[number], "cart_shipment_arta_quotes">>;
};
type cart_shipment_arta_quotesChildrenGraph = {
 cart_shipment_arta_quote_services: Array<Omit<cart_shipment_arta_quote_servicesGraph[number], "cart_shipment_arta_quotes">>;
};
type cart_shipment_arta_quotesGraph = Array<cart_shipment_arta_quotesScalars & cart_shipment_arta_quotesParentsGraph & cart_shipment_arta_quotesChildrenGraph>;
type cart_shipment_freight_club_quotesParentsGraph = {
 cart_shipments: Array<Omit<cart_shipmentsGraph[number], "cart_shipment_freight_club_quotes">>;
};
type cart_shipment_freight_club_quotesChildrenGraph = {

};
type cart_shipment_freight_club_quotesGraph = Array<cart_shipment_freight_club_quotesScalars & cart_shipment_freight_club_quotesParentsGraph & cart_shipment_freight_club_quotesChildrenGraph>;
type cart_shipment_vendor_quotesParentsGraph = {
 cart_shipments: Array<Omit<cart_shipmentsGraph[number], "cart_shipment_vendor_quotes">>;
};
type cart_shipment_vendor_quotesChildrenGraph = {

};
type cart_shipment_vendor_quotesGraph = Array<cart_shipment_vendor_quotesScalars & cart_shipment_vendor_quotesParentsGraph & cart_shipment_vendor_quotesChildrenGraph>;
type cart_shipmentsParentsGraph = {
 carts: Array<Omit<cartsGraph[number], "cart_shipments">>;
 sources: Array<Omit<sourcesGraph[number], "cart_shipments">>;
};
type cart_shipmentsChildrenGraph = {
 cart_item_shipments: Array<Omit<cart_item_shipmentsGraph[number], "cart_shipments">>;
 cart_shipment_arta_quotes: Array<Omit<cart_shipment_arta_quotesGraph[number], "cart_shipments">>;
 cart_shipment_freight_club_quotes: Array<Omit<cart_shipment_freight_club_quotesGraph[number], "cart_shipments">>;
 cart_shipment_vendor_quotes: Array<Omit<cart_shipment_vendor_quotesGraph[number], "cart_shipments">>;
};
type cart_shipmentsGraph = Array<cart_shipmentsScalars & cart_shipmentsParentsGraph & cart_shipmentsChildrenGraph>;
type cartsParentsGraph = {
 clients: Array<Omit<clientsGraph[number], "carts">>;
};
type cartsChildrenGraph = {
 cart_items: Array<Omit<cart_itemsGraph[number], "carts">>;
 cart_promo_codes: Array<Omit<cart_promo_codesGraph[number], "carts">>;
 cart_shipments: Array<Omit<cart_shipmentsGraph[number], "carts">>;
 order_cart: Array<Omit<order_cartGraph[number], "carts">>;
};
type cartsGraph = Array<cartsScalars & cartsParentsGraph & cartsChildrenGraph>;
type categoriesParentsGraph = {
 categories: Array<Omit<categoriesGraph[number], "categories">>;
};
type categoriesChildrenGraph = {
 categories: Array<Omit<categoriesGraph[number], "categories">>;
 expert_application_categories: Array<Omit<expert_application_categoriesGraph[number], "categories">>;
 expert_categories: Array<Omit<expert_categoriesGraph[number], "categories">>;
};
type categoriesGraph = Array<categoriesScalars & categoriesParentsGraph & categoriesChildrenGraph>;
type checkout_clientParentsGraph = {
 checkouts: Array<Omit<checkoutsGraph[number], "checkout_client">>;
 clients: Array<Omit<clientsGraph[number], "checkout_client">>;
};
type checkout_clientChildrenGraph = {

};
type checkout_clientGraph = Array<checkout_clientScalars & checkout_clientParentsGraph & checkout_clientChildrenGraph>;
type checkout_couponsParentsGraph = {
 checkouts: Array<Omit<checkoutsGraph[number], "checkout_coupons">>;
 coupons: Array<Omit<couponsGraph[number], "checkout_coupons">>;
};
type checkout_couponsChildrenGraph = {

};
type checkout_couponsGraph = Array<checkout_couponsScalars & checkout_couponsParentsGraph & checkout_couponsChildrenGraph>;
type checkout_credit_transactionsParentsGraph = {
 checkouts: Array<Omit<checkoutsGraph[number], "checkout_credit_transactions">>;
 credit_transactions: Array<Omit<credit_transactionsGraph[number], "checkout_credit_transactions">>;
};
type checkout_credit_transactionsChildrenGraph = {

};
type checkout_credit_transactionsGraph = Array<checkout_credit_transactionsScalars & checkout_credit_transactionsParentsGraph & checkout_credit_transactionsChildrenGraph>;
type checkout_guest_userParentsGraph = {
 checkouts: Array<Omit<checkoutsGraph[number], "checkout_guest_user">>;
 guest_users: Array<Omit<guest_usersGraph[number], "checkout_guest_user">>;
};
type checkout_guest_userChildrenGraph = {

};
type checkout_guest_userGraph = Array<checkout_guest_userScalars & checkout_guest_userParentsGraph & checkout_guest_userChildrenGraph>;
type checkout_item_couponsParentsGraph = {
 checkout_items: Array<Omit<checkout_itemsGraph[number], "checkout_item_coupons">>;
 checkouts: Array<Omit<checkoutsGraph[number], "checkout_item_coupons">>;
 coupons: Array<Omit<couponsGraph[number], "checkout_item_coupons">>;
};
type checkout_item_couponsChildrenGraph = {

};
type checkout_item_couponsGraph = Array<checkout_item_couponsScalars & checkout_item_couponsParentsGraph & checkout_item_couponsChildrenGraph>;
type checkout_item_order_itemsParentsGraph = {
 checkout_items: Array<Omit<checkout_itemsGraph[number], "checkout_item_order_items">>;
 order_items: Array<Omit<order_itemsGraph[number], "checkout_item_order_items">>;
};
type checkout_item_order_itemsChildrenGraph = {

};
type checkout_item_order_itemsGraph = Array<checkout_item_order_itemsScalars & checkout_item_order_itemsParentsGraph & checkout_item_order_itemsChildrenGraph>;
type checkout_item_purchasesParentsGraph = {
 checkout_items: Array<Omit<checkout_itemsGraph[number], "checkout_item_purchases">>;
 purchases: Array<Omit<purchasesGraph[number], "checkout_item_purchases">>;
};
type checkout_item_purchasesChildrenGraph = {

};
type checkout_item_purchasesGraph = Array<checkout_item_purchasesScalars & checkout_item_purchasesParentsGraph & checkout_item_purchasesChildrenGraph>;
type checkout_item_session_bookingsParentsGraph = {
 checkout_items: Array<Omit<checkout_itemsGraph[number], "checkout_item_session_bookings">>;
 session_clients: Array<Omit<session_clientsGraph[number], "checkout_item_session_bookings">>;
};
type checkout_item_session_bookingsChildrenGraph = {

};
type checkout_item_session_bookingsGraph = Array<checkout_item_session_bookingsScalars & checkout_item_session_bookingsParentsGraph & checkout_item_session_bookingsChildrenGraph>;
type checkout_item_shipmentsParentsGraph = {
 checkout_items: Array<Omit<checkout_itemsGraph[number], "checkout_item_shipments">>;
 order_shipments: Array<Omit<order_shipmentsGraph[number], "checkout_item_shipments">>;
};
type checkout_item_shipmentsChildrenGraph = {

};
type checkout_item_shipmentsGraph = Array<checkout_item_shipmentsScalars & checkout_item_shipmentsParentsGraph & checkout_item_shipmentsChildrenGraph>;
type checkout_itemsParentsGraph = {
 checkouts: Array<Omit<checkoutsGraph[number], "checkout_items">>;
};
type checkout_itemsChildrenGraph = {
 checkout_item_coupons: Array<Omit<checkout_item_couponsGraph[number], "checkout_items">>;
 checkout_item_order_items: Array<Omit<checkout_item_order_itemsGraph[number], "checkout_items">>;
 checkout_item_purchases: Array<Omit<checkout_item_purchasesGraph[number], "checkout_items">>;
 checkout_item_session_bookings: Array<Omit<checkout_item_session_bookingsGraph[number], "checkout_items">>;
 checkout_item_shipments: Array<Omit<checkout_item_shipmentsGraph[number], "checkout_items">>;
 discounts: Array<Omit<discountsGraph[number], "checkout_items">>;
 refund_checkout_items: Array<Omit<refund_checkout_itemsGraph[number], "checkout_items">>;
};
type checkout_itemsGraph = Array<checkout_itemsScalars & checkout_itemsParentsGraph & checkout_itemsChildrenGraph>;
type checkout_promo_codesParentsGraph = {
 checkouts: Array<Omit<checkoutsGraph[number], "checkout_promo_codes">>;
 promo_codes: Array<Omit<promo_codesGraph[number], "checkout_promo_codes">>;
};
type checkout_promo_codesChildrenGraph = {

};
type checkout_promo_codesGraph = Array<checkout_promo_codesScalars & checkout_promo_codesParentsGraph & checkout_promo_codesChildrenGraph>;
type checkoutsParentsGraph = {

};
type checkoutsChildrenGraph = {
 checkout_client: Array<Omit<checkout_clientGraph[number], "checkouts">>;
 checkout_coupons: Array<Omit<checkout_couponsGraph[number], "checkouts">>;
 checkout_credit_transactions: Array<Omit<checkout_credit_transactionsGraph[number], "checkouts">>;
 checkout_guest_user: Array<Omit<checkout_guest_userGraph[number], "checkouts">>;
 checkout_item_coupons: Array<Omit<checkout_item_couponsGraph[number], "checkouts">>;
 checkout_items: Array<Omit<checkout_itemsGraph[number], "checkouts">>;
 checkout_promo_codes: Array<Omit<checkout_promo_codesGraph[number], "checkouts">>;
};
type checkoutsGraph = Array<checkoutsScalars & checkoutsParentsGraph & checkoutsChildrenGraph>;
type client_addressesParentsGraph = {
 clients: Array<Omit<clientsGraph[number], "client_addresses">>;
};
type client_addressesChildrenGraph = {

};
type client_addressesGraph = Array<client_addressesScalars & client_addressesParentsGraph & client_addressesChildrenGraph>;
type client_expert_availability_subscriptionsParentsGraph = {
 clients: Array<Omit<clientsGraph[number], "client_expert_availability_subscriptions">>;
 expert_sessions: Array<Omit<expert_sessionsGraph[number], "client_expert_availability_subscriptions">>;
 experts: Array<Omit<expertsGraph[number], "client_expert_availability_subscriptions">>;
};
type client_expert_availability_subscriptionsChildrenGraph = {

};
type client_expert_availability_subscriptionsGraph = Array<client_expert_availability_subscriptionsScalars & client_expert_availability_subscriptionsParentsGraph & client_expert_availability_subscriptionsChildrenGraph>;
type client_experts_notificationsParentsGraph = {
 clients: Array<Omit<clientsGraph[number], "client_experts_notifications">>;
 experts: Array<Omit<expertsGraph[number], "client_experts_notifications">>;
};
type client_experts_notificationsChildrenGraph = {

};
type client_experts_notificationsGraph = Array<client_experts_notificationsScalars & client_experts_notificationsParentsGraph & client_experts_notificationsChildrenGraph>;
type client_favorite_expertsParentsGraph = {
 clients: Array<Omit<clientsGraph[number], "client_favorite_experts">>;
 experts: Array<Omit<expertsGraph[number], "client_favorite_experts">>;
};
type client_favorite_expertsChildrenGraph = {

};
type client_favorite_expertsGraph = Array<client_favorite_expertsScalars & client_favorite_expertsParentsGraph & client_favorite_expertsChildrenGraph>;
type client_warningsParentsGraph = {
 clients: Array<Omit<clientsGraph[number], "client_warnings">>;
};
type client_warningsChildrenGraph = {

};
type client_warningsGraph = Array<client_warningsScalars & client_warningsParentsGraph & client_warningsChildrenGraph>;
type clientsParentsGraph = {

};
type clientsChildrenGraph = {
 carts: Array<Omit<cartsGraph[number], "clients">>;
 checkout_client: Array<Omit<checkout_clientGraph[number], "clients">>;
 client_addresses: Array<Omit<client_addressesGraph[number], "clients">>;
 client_expert_availability_subscriptions: Array<Omit<client_expert_availability_subscriptionsGraph[number], "clients">>;
 client_experts_notifications: Array<Omit<client_experts_notificationsGraph[number], "clients">>;
 client_favorite_experts: Array<Omit<client_favorite_expertsGraph[number], "clients">>;
 client_warnings: Array<Omit<client_warningsGraph[number], "clients">>;
 credit_transactions: Array<Omit<credit_transactionsGraph[number], "clients">>;
 feature_flag_client: Array<Omit<feature_flag_clientGraph[number], "clients">>;
 order_clients: Array<Omit<order_clientsGraph[number], "clients">>;
 purchases: Array<Omit<purchasesGraph[number], "clients">>;
 session_clients: Array<Omit<session_clientsGraph[number], "clients">>;
};
type clientsGraph = Array<clientsScalars & clientsParentsGraph & clientsChildrenGraph>;
type cms_alphabetical_index_widgetsParentsGraph = {
 cms_widgets: Array<Omit<cms_widgetsGraph[number], "cms_alphabetical_index_widgets">>;
};
type cms_alphabetical_index_widgetsChildrenGraph = {

};
type cms_alphabetical_index_widgetsGraph = Array<cms_alphabetical_index_widgetsScalars & cms_alphabetical_index_widgetsParentsGraph & cms_alphabetical_index_widgetsChildrenGraph>;
type cms_alt_experts_listing_widgetsParentsGraph = {
 cms_widgets: Array<Omit<cms_widgetsGraph[number], "cms_alt_experts_listing_widgets">>;
};
type cms_alt_experts_listing_widgetsChildrenGraph = {

};
type cms_alt_experts_listing_widgetsGraph = Array<cms_alt_experts_listing_widgetsScalars & cms_alt_experts_listing_widgetsParentsGraph & cms_alt_experts_listing_widgetsChildrenGraph>;
type cms_alt_value_proposition_widgetsParentsGraph = {
 cms_widgets: Array<Omit<cms_widgetsGraph[number], "cms_alt_value_proposition_widgets">>;
};
type cms_alt_value_proposition_widgetsChildrenGraph = {

};
type cms_alt_value_proposition_widgetsGraph = Array<cms_alt_value_proposition_widgetsScalars & cms_alt_value_proposition_widgetsParentsGraph & cms_alt_value_proposition_widgetsChildrenGraph>;
type cms_article_heading_widgetsParentsGraph = {
 cms_widgets: Array<Omit<cms_widgetsGraph[number], "cms_article_heading_widgets">>;
};
type cms_article_heading_widgetsChildrenGraph = {

};
type cms_article_heading_widgetsGraph = Array<cms_article_heading_widgetsScalars & cms_article_heading_widgetsParentsGraph & cms_article_heading_widgetsChildrenGraph>;
type cms_article_pagesParentsGraph = {
 attachments: Array<Omit<attachmentsGraph[number], "cms_article_pages">>;
 cms_pages: Array<Omit<cms_pagesGraph[number], "cms_article_pages">>;
 cms_widgets: Array<Omit<cms_widgetsGraph[number], "cms_article_pages">>;
};
type cms_article_pagesChildrenGraph = {
 cms_articles_widget_items: Array<Omit<cms_articles_widget_itemsGraph[number], "cms_article_pages">>;
};
type cms_article_pagesGraph = Array<cms_article_pagesScalars & cms_article_pagesParentsGraph & cms_article_pagesChildrenGraph>;
type cms_articles_widget_itemsParentsGraph = {
 cms_article_pages: Array<Omit<cms_article_pagesGraph[number], "cms_articles_widget_items">>;
 cms_articles_widgets: Array<Omit<cms_articles_widgetsGraph[number], "cms_articles_widget_items">>;
};
type cms_articles_widget_itemsChildrenGraph = {

};
type cms_articles_widget_itemsGraph = Array<cms_articles_widget_itemsScalars & cms_articles_widget_itemsParentsGraph & cms_articles_widget_itemsChildrenGraph>;
type cms_articles_widgetsParentsGraph = {
 cms_widgets: Array<Omit<cms_widgetsGraph[number], "cms_articles_widgets">>;
};
type cms_articles_widgetsChildrenGraph = {
 cms_articles_widget_items: Array<Omit<cms_articles_widget_itemsGraph[number], "cms_articles_widgets">>;
};
type cms_articles_widgetsGraph = Array<cms_articles_widgetsScalars & cms_articles_widgetsParentsGraph & cms_articles_widgetsChildrenGraph>;
type cms_banner_widgetsParentsGraph = {
 cms_widgets: Array<Omit<cms_widgetsGraph[number], "cms_banner_widgets">>;
 experts: Array<Omit<expertsGraph[number], "cms_banner_widgets">>;
};
type cms_banner_widgetsChildrenGraph = {

};
type cms_banner_widgetsGraph = Array<cms_banner_widgetsScalars & cms_banner_widgetsParentsGraph & cms_banner_widgetsChildrenGraph>;
type cms_brand_pagesParentsGraph = {
 brands: Array<Omit<brandsGraph[number], "cms_brand_pages">>;
 cms_pages: Array<Omit<cms_pagesGraph[number], "cms_brand_pages">>;
};
type cms_brand_pagesChildrenGraph = {

};
type cms_brand_pagesGraph = Array<cms_brand_pagesScalars & cms_brand_pagesParentsGraph & cms_brand_pagesChildrenGraph>;
type cms_card_navigation_widget_itemsParentsGraph = {
 attachments: Array<Omit<attachmentsGraph[number], "cms_card_navigation_widget_items">>;
 cms_card_navigation_widgets: Array<Omit<cms_card_navigation_widgetsGraph[number], "cms_card_navigation_widget_items">>;
 cms_pages: Array<Omit<cms_pagesGraph[number], "cms_card_navigation_widget_items">>;
};
type cms_card_navigation_widget_itemsChildrenGraph = {

};
type cms_card_navigation_widget_itemsGraph = Array<cms_card_navigation_widget_itemsScalars & cms_card_navigation_widget_itemsParentsGraph & cms_card_navigation_widget_itemsChildrenGraph>;
type cms_card_navigation_widgetsParentsGraph = {
 cms_widgets: Array<Omit<cms_widgetsGraph[number], "cms_card_navigation_widgets">>;
};
type cms_card_navigation_widgetsChildrenGraph = {
 cms_card_navigation_widget_items: Array<Omit<cms_card_navigation_widget_itemsGraph[number], "cms_card_navigation_widgets">>;
};
type cms_card_navigation_widgetsGraph = Array<cms_card_navigation_widgetsScalars & cms_card_navigation_widgetsParentsGraph & cms_card_navigation_widgetsChildrenGraph>;
type cms_category_collection_widget_itemsParentsGraph = {
 attachments: Array<Omit<attachmentsGraph[number], "cms_category_collection_widget_items">>;
 cms_category_collection_widgets: Array<Omit<cms_category_collection_widgetsGraph[number], "cms_category_collection_widget_items">>;
 cms_showroom_pages: Array<Omit<cms_showroom_pagesGraph[number], "cms_category_collection_widget_items">>;
};
type cms_category_collection_widget_itemsChildrenGraph = {

};
type cms_category_collection_widget_itemsGraph = Array<cms_category_collection_widget_itemsScalars & cms_category_collection_widget_itemsParentsGraph & cms_category_collection_widget_itemsChildrenGraph>;
type cms_category_collection_widgetsParentsGraph = {
 cms_widgets: Array<Omit<cms_widgetsGraph[number], "cms_category_collection_widgets">>;
};
type cms_category_collection_widgetsChildrenGraph = {
 cms_category_collection_widget_items: Array<Omit<cms_category_collection_widget_itemsGraph[number], "cms_category_collection_widgets">>;
};
type cms_category_collection_widgetsGraph = Array<cms_category_collection_widgetsScalars & cms_category_collection_widgetsParentsGraph & cms_category_collection_widgetsChildrenGraph>;
type cms_category_header_widget_itemsParentsGraph = {
 attachments: Array<Omit<attachmentsGraph[number], "cms_category_header_widget_items">>;
 cms_category_header_widgets: Array<Omit<cms_category_header_widgetsGraph[number], "cms_category_header_widget_items">>;
};
type cms_category_header_widget_itemsChildrenGraph = {

};
type cms_category_header_widget_itemsGraph = Array<cms_category_header_widget_itemsScalars & cms_category_header_widget_itemsParentsGraph & cms_category_header_widget_itemsChildrenGraph>;
type cms_category_header_widgetsParentsGraph = {
 cms_widgets: Array<Omit<cms_widgetsGraph[number], "cms_category_header_widgets">>;
 experts: Array<Omit<expertsGraph[number], "cms_category_header_widgets">>;
};
type cms_category_header_widgetsChildrenGraph = {
 cms_category_header_widget_items: Array<Omit<cms_category_header_widget_itemsGraph[number], "cms_category_header_widgets">>;
};
type cms_category_header_widgetsGraph = Array<cms_category_header_widgetsScalars & cms_category_header_widgetsParentsGraph & cms_category_header_widgetsChildrenGraph>;
type cms_category_pagesParentsGraph = {
 cms_pages: Array<Omit<cms_pagesGraph[number], "cms_category_pages">>;
 product_categories: Array<Omit<product_categoriesGraph[number], "cms_category_pages">>;
};
type cms_category_pagesChildrenGraph = {

};
type cms_category_pagesGraph = Array<cms_category_pagesScalars & cms_category_pagesParentsGraph & cms_category_pagesChildrenGraph>;
type cms_collection_header_widgetsParentsGraph = {
 attachments_cms_collection_header_widgets_header_image_attachment_idToattachments: Array<Omit<attachmentsGraph[number], "cms_collection_header_widgets_cms_collection_header_widgets_header_image_attachment_idToattachments">>;
 attachments_cms_collection_header_widgets_mobile_image_attachment_idToattachments: Array<Omit<attachmentsGraph[number], "cms_collection_header_widgets_cms_collection_header_widgets_mobile_image_attachment_idToattachments">>;
 cms_widgets: Array<Omit<cms_widgetsGraph[number], "cms_collection_header_widgets">>;
};
type cms_collection_header_widgetsChildrenGraph = {

};
type cms_collection_header_widgetsGraph = Array<cms_collection_header_widgetsScalars & cms_collection_header_widgetsParentsGraph & cms_collection_header_widgetsChildrenGraph>;
type cms_collections_carousel_widget_itemsParentsGraph = {
 attachments_cms_collections_carousel_widget_items_preview_image_attachment_idToattachments: Array<Omit<attachmentsGraph[number], "cms_collections_carousel_widget_items_cms_collections_carousel_widget_items_preview_image_attachment_idToattachments">>;
 attachments_cms_collections_carousel_widget_items_profile_image_attachment_idToattachments: Array<Omit<attachmentsGraph[number], "cms_collections_carousel_widget_items_cms_collections_carousel_widget_items_profile_image_attachment_idToattachments">>;
 cms_collections_carousel_widgets: Array<Omit<cms_collections_carousel_widgetsGraph[number], "cms_collections_carousel_widget_items">>;
 cms_showroom_pages: Array<Omit<cms_showroom_pagesGraph[number], "cms_collections_carousel_widget_items">>;
};
type cms_collections_carousel_widget_itemsChildrenGraph = {

};
type cms_collections_carousel_widget_itemsGraph = Array<cms_collections_carousel_widget_itemsScalars & cms_collections_carousel_widget_itemsParentsGraph & cms_collections_carousel_widget_itemsChildrenGraph>;
type cms_collections_carousel_widgetsParentsGraph = {
 cms_showroom_pages: Array<Omit<cms_showroom_pagesGraph[number], "cms_collections_carousel_widgets">>;
 cms_widgets: Array<Omit<cms_widgetsGraph[number], "cms_collections_carousel_widgets">>;
};
type cms_collections_carousel_widgetsChildrenGraph = {
 cms_collections_carousel_widget_items: Array<Omit<cms_collections_carousel_widget_itemsGraph[number], "cms_collections_carousel_widgets">>;
};
type cms_collections_carousel_widgetsGraph = Array<cms_collections_carousel_widgetsScalars & cms_collections_carousel_widgetsParentsGraph & cms_collections_carousel_widgetsChildrenGraph>;
type cms_concierge_widgetsParentsGraph = {
 cms_widgets: Array<Omit<cms_widgetsGraph[number], "cms_concierge_widgets">>;
};
type cms_concierge_widgetsChildrenGraph = {

};
type cms_concierge_widgetsGraph = Array<cms_concierge_widgetsScalars & cms_concierge_widgetsParentsGraph & cms_concierge_widgetsChildrenGraph>;
type cms_consultation_listing_widgetsParentsGraph = {
 attachments: Array<Omit<attachmentsGraph[number], "cms_consultation_listing_widgets">>;
 cms_listing_widgets: Array<Omit<cms_listing_widgetsGraph[number], "cms_consultation_listing_widgets">>;
 experts: Array<Omit<expertsGraph[number], "cms_consultation_listing_widgets">>;
};
type cms_consultation_listing_widgetsChildrenGraph = {

};
type cms_consultation_listing_widgetsGraph = Array<cms_consultation_listing_widgetsScalars & cms_consultation_listing_widgetsParentsGraph & cms_consultation_listing_widgetsChildrenGraph>;
type cms_consultation_pagesParentsGraph = {
 cms_pages: Array<Omit<cms_pagesGraph[number], "cms_consultation_pages">>;
};
type cms_consultation_pagesChildrenGraph = {

};
type cms_consultation_pagesGraph = Array<cms_consultation_pagesScalars & cms_consultation_pagesParentsGraph & cms_consultation_pagesChildrenGraph>;
type cms_double_image_widgetsParentsGraph = {
 attachments_cms_double_image_widgets_first_attachment_idToattachments: Array<Omit<attachmentsGraph[number], "cms_double_image_widgets_cms_double_image_widgets_first_attachment_idToattachments">>;
 attachments_cms_double_image_widgets_second_attachment_idToattachments: Array<Omit<attachmentsGraph[number], "cms_double_image_widgets_cms_double_image_widgets_second_attachment_idToattachments">>;
 cms_widgets: Array<Omit<cms_widgetsGraph[number], "cms_double_image_widgets">>;
};
type cms_double_image_widgetsChildrenGraph = {

};
type cms_double_image_widgetsGraph = Array<cms_double_image_widgetsScalars & cms_double_image_widgetsParentsGraph & cms_double_image_widgetsChildrenGraph>;
type cms_expert_collections_widget_itemsParentsGraph = {
 attachments_cms_expert_collections_widget_items_preview_image_attachment_idToattachments: Array<Omit<attachmentsGraph[number], "cms_expert_collections_widget_items_cms_expert_collections_widget_items_preview_image_attachment_idToattachments">>;
 attachments_cms_expert_collections_widget_items_profile_image_attachment_idToattachments: Array<Omit<attachmentsGraph[number], "cms_expert_collections_widget_items_cms_expert_collections_widget_items_profile_image_attachment_idToattachments">>;
 cms_expert_collections_widgets: Array<Omit<cms_expert_collections_widgetsGraph[number], "cms_expert_collections_widget_items">>;
 cms_showroom_pages: Array<Omit<cms_showroom_pagesGraph[number], "cms_expert_collections_widget_items">>;
};
type cms_expert_collections_widget_itemsChildrenGraph = {

};
type cms_expert_collections_widget_itemsGraph = Array<cms_expert_collections_widget_itemsScalars & cms_expert_collections_widget_itemsParentsGraph & cms_expert_collections_widget_itemsChildrenGraph>;
type cms_expert_collections_widgetsParentsGraph = {
 cms_widgets: Array<Omit<cms_widgetsGraph[number], "cms_expert_collections_widgets">>;
};
type cms_expert_collections_widgetsChildrenGraph = {
 cms_expert_collections_widget_items: Array<Omit<cms_expert_collections_widget_itemsGraph[number], "cms_expert_collections_widgets">>;
};
type cms_expert_collections_widgetsGraph = Array<cms_expert_collections_widgetsScalars & cms_expert_collections_widgetsParentsGraph & cms_expert_collections_widgetsChildrenGraph>;
type cms_experts_listing_widgetsParentsGraph = {
 cms_widgets: Array<Omit<cms_widgetsGraph[number], "cms_experts_listing_widgets">>;
};
type cms_experts_listing_widgetsChildrenGraph = {

};
type cms_experts_listing_widgetsGraph = Array<cms_experts_listing_widgetsScalars & cms_experts_listing_widgetsParentsGraph & cms_experts_listing_widgetsChildrenGraph>;
type cms_experts_widget_itemsParentsGraph = {
 cms_experts_widgets: Array<Omit<cms_experts_widgetsGraph[number], "cms_experts_widget_items">>;
 experts: Array<Omit<expertsGraph[number], "cms_experts_widget_items">>;
};
type cms_experts_widget_itemsChildrenGraph = {

};
type cms_experts_widget_itemsGraph = Array<cms_experts_widget_itemsScalars & cms_experts_widget_itemsParentsGraph & cms_experts_widget_itemsChildrenGraph>;
type cms_experts_widgetsParentsGraph = {
 cms_widgets: Array<Omit<cms_widgetsGraph[number], "cms_experts_widgets">>;
};
type cms_experts_widgetsChildrenGraph = {
 cms_experts_widget_items: Array<Omit<cms_experts_widget_itemsGraph[number], "cms_experts_widgets">>;
};
type cms_experts_widgetsGraph = Array<cms_experts_widgetsScalars & cms_experts_widgetsParentsGraph & cms_experts_widgetsChildrenGraph>;
type cms_featured_in_widgetsParentsGraph = {
 cms_widgets: Array<Omit<cms_widgetsGraph[number], "cms_featured_in_widgets">>;
};
type cms_featured_in_widgetsChildrenGraph = {

};
type cms_featured_in_widgetsGraph = Array<cms_featured_in_widgetsScalars & cms_featured_in_widgetsParentsGraph & cms_featured_in_widgetsChildrenGraph>;
type cms_gallery_widget_itemsParentsGraph = {
 attachments: Array<Omit<attachmentsGraph[number], "cms_gallery_widget_items">>;
 cms_gallery_widgets: Array<Omit<cms_gallery_widgetsGraph[number], "cms_gallery_widget_items">>;
 experts: Array<Omit<expertsGraph[number], "cms_gallery_widget_items">>;
};
type cms_gallery_widget_itemsChildrenGraph = {

};
type cms_gallery_widget_itemsGraph = Array<cms_gallery_widget_itemsScalars & cms_gallery_widget_itemsParentsGraph & cms_gallery_widget_itemsChildrenGraph>;
type cms_gallery_widgetsParentsGraph = {
 cms_widgets: Array<Omit<cms_widgetsGraph[number], "cms_gallery_widgets">>;
};
type cms_gallery_widgetsChildrenGraph = {
 cms_gallery_widget_items: Array<Omit<cms_gallery_widget_itemsGraph[number], "cms_gallery_widgets">>;
};
type cms_gallery_widgetsGraph = Array<cms_gallery_widgetsScalars & cms_gallery_widgetsParentsGraph & cms_gallery_widgetsChildrenGraph>;
type cms_gift_card_widgetsParentsGraph = {
 cms_widgets: Array<Omit<cms_widgetsGraph[number], "cms_gift_card_widgets">>;
};
type cms_gift_card_widgetsChildrenGraph = {

};
type cms_gift_card_widgetsGraph = Array<cms_gift_card_widgetsScalars & cms_gift_card_widgetsParentsGraph & cms_gift_card_widgetsChildrenGraph>;
type cms_help_listing_widgetsParentsGraph = {
 cms_listing_widgets: Array<Omit<cms_listing_widgetsGraph[number], "cms_help_listing_widgets">>;
};
type cms_help_listing_widgetsChildrenGraph = {

};
type cms_help_listing_widgetsGraph = Array<cms_help_listing_widgetsScalars & cms_help_listing_widgetsParentsGraph & cms_help_listing_widgetsChildrenGraph>;
type cms_hero_carousel_widget_itemsParentsGraph = {
 attachments: Array<Omit<attachmentsGraph[number], "cms_hero_carousel_widget_items">>;
 cms_hero_carousel_widgets: Array<Omit<cms_hero_carousel_widgetsGraph[number], "cms_hero_carousel_widget_items">>;
};
type cms_hero_carousel_widget_itemsChildrenGraph = {

};
type cms_hero_carousel_widget_itemsGraph = Array<cms_hero_carousel_widget_itemsScalars & cms_hero_carousel_widget_itemsParentsGraph & cms_hero_carousel_widget_itemsChildrenGraph>;
type cms_hero_carousel_widgetsParentsGraph = {
 cms_widgets: Array<Omit<cms_widgetsGraph[number], "cms_hero_carousel_widgets">>;
};
type cms_hero_carousel_widgetsChildrenGraph = {
 cms_hero_carousel_widget_items: Array<Omit<cms_hero_carousel_widget_itemsGraph[number], "cms_hero_carousel_widgets">>;
};
type cms_hero_carousel_widgetsGraph = Array<cms_hero_carousel_widgetsScalars & cms_hero_carousel_widgetsParentsGraph & cms_hero_carousel_widgetsChildrenGraph>;
type cms_hero_main_widgetsParentsGraph = {
 attachments: Array<Omit<attachmentsGraph[number], "cms_hero_main_widgets">>;
 cms_widgets: Array<Omit<cms_widgetsGraph[number], "cms_hero_main_widgets">>;
};
type cms_hero_main_widgetsChildrenGraph = {

};
type cms_hero_main_widgetsGraph = Array<cms_hero_main_widgetsScalars & cms_hero_main_widgetsParentsGraph & cms_hero_main_widgetsChildrenGraph>;
type cms_hero_widgetsParentsGraph = {
 attachments: Array<Omit<attachmentsGraph[number], "cms_hero_widgets">>;
 cms_widgets: Array<Omit<cms_widgetsGraph[number], "cms_hero_widgets">>;
};
type cms_hero_widgetsChildrenGraph = {

};
type cms_hero_widgetsGraph = Array<cms_hero_widgetsScalars & cms_hero_widgetsParentsGraph & cms_hero_widgetsChildrenGraph>;
type cms_info_cards_widgetsParentsGraph = {
 cms_widgets: Array<Omit<cms_widgetsGraph[number], "cms_info_cards_widgets">>;
};
type cms_info_cards_widgetsChildrenGraph = {

};
type cms_info_cards_widgetsGraph = Array<cms_info_cards_widgetsScalars & cms_info_cards_widgetsParentsGraph & cms_info_cards_widgetsChildrenGraph>;
type cms_info_listing_widgetsParentsGraph = {
 attachments: Array<Omit<attachmentsGraph[number], "cms_info_listing_widgets">>;
 cms_listing_widgets: Array<Omit<cms_listing_widgetsGraph[number], "cms_info_listing_widgets">>;
};
type cms_info_listing_widgetsChildrenGraph = {

};
type cms_info_listing_widgetsGraph = Array<cms_info_listing_widgetsScalars & cms_info_listing_widgetsParentsGraph & cms_info_listing_widgetsChildrenGraph>;
type cms_introduction_widgetsParentsGraph = {
 attachments: Array<Omit<attachmentsGraph[number], "cms_introduction_widgets">>;
 cms_widgets: Array<Omit<cms_widgetsGraph[number], "cms_introduction_widgets">>;
};
type cms_introduction_widgetsChildrenGraph = {

};
type cms_introduction_widgetsGraph = Array<cms_introduction_widgetsScalars & cms_introduction_widgetsParentsGraph & cms_introduction_widgetsChildrenGraph>;
type cms_listing_widgetsParentsGraph = {

};
type cms_listing_widgetsChildrenGraph = {
 cms_consultation_listing_widgets: Array<Omit<cms_consultation_listing_widgetsGraph[number], "cms_listing_widgets">>;
 cms_help_listing_widgets: Array<Omit<cms_help_listing_widgetsGraph[number], "cms_listing_widgets">>;
 cms_info_listing_widgets: Array<Omit<cms_info_listing_widgetsGraph[number], "cms_listing_widgets">>;
 cms_quotation_listing_widgets: Array<Omit<cms_quotation_listing_widgetsGraph[number], "cms_listing_widgets">>;
 cms_widget_listing_widgets: Array<Omit<cms_widget_listing_widgetsGraph[number], "cms_listing_widgets">>;
};
type cms_listing_widgetsGraph = Array<cms_listing_widgetsScalars & cms_listing_widgetsParentsGraph & cms_listing_widgetsChildrenGraph>;
type cms_multi_collection_widget_itemsParentsGraph = {
 cms_multi_collection_widgets: Array<Omit<cms_multi_collection_widgetsGraph[number], "cms_multi_collection_widget_items">>;
 collections: Array<Omit<collectionsGraph[number], "cms_multi_collection_widget_items">>;
};
type cms_multi_collection_widget_itemsChildrenGraph = {

};
type cms_multi_collection_widget_itemsGraph = Array<cms_multi_collection_widget_itemsScalars & cms_multi_collection_widget_itemsParentsGraph & cms_multi_collection_widget_itemsChildrenGraph>;
type cms_multi_collection_widgetsParentsGraph = {
 cms_showroom_pages: Array<Omit<cms_showroom_pagesGraph[number], "cms_multi_collection_widgets">>;
 cms_widgets: Array<Omit<cms_widgetsGraph[number], "cms_multi_collection_widgets">>;
};
type cms_multi_collection_widgetsChildrenGraph = {
 cms_multi_collection_widget_items: Array<Omit<cms_multi_collection_widget_itemsGraph[number], "cms_multi_collection_widgets">>;
};
type cms_multi_collection_widgetsGraph = Array<cms_multi_collection_widgetsScalars & cms_multi_collection_widgetsParentsGraph & cms_multi_collection_widgetsChildrenGraph>;
type cms_pagesParentsGraph = {

};
type cms_pagesChildrenGraph = {
 cms_article_pages: Array<Omit<cms_article_pagesGraph[number], "cms_pages">>;
 cms_brand_pages: Array<Omit<cms_brand_pagesGraph[number], "cms_pages">>;
 cms_card_navigation_widget_items: Array<Omit<cms_card_navigation_widget_itemsGraph[number], "cms_pages">>;
 cms_category_pages: Array<Omit<cms_category_pagesGraph[number], "cms_pages">>;
 cms_consultation_pages: Array<Omit<cms_consultation_pagesGraph[number], "cms_pages">>;
 cms_showroom_pages: Array<Omit<cms_showroom_pagesGraph[number], "cms_pages">>;
 cms_widgets: Array<Omit<cms_widgetsGraph[number], "cms_pages">>;
 navigation_items: Array<Omit<navigation_itemsGraph[number], "cms_pages">>;
};
type cms_pagesGraph = Array<cms_pagesScalars & cms_pagesParentsGraph & cms_pagesChildrenGraph>;
type cms_products_widget_itemsParentsGraph = {
 attachments: Array<Omit<attachmentsGraph[number], "cms_products_widget_items">>;
 cms_products_widgets: Array<Omit<cms_products_widgetsGraph[number], "cms_products_widget_items">>;
};
type cms_products_widget_itemsChildrenGraph = {

};
type cms_products_widget_itemsGraph = Array<cms_products_widget_itemsScalars & cms_products_widget_itemsParentsGraph & cms_products_widget_itemsChildrenGraph>;
type cms_products_widgetsParentsGraph = {
 cms_widgets: Array<Omit<cms_widgetsGraph[number], "cms_products_widgets">>;
};
type cms_products_widgetsChildrenGraph = {
 cms_products_widget_items: Array<Omit<cms_products_widget_itemsGraph[number], "cms_products_widgets">>;
};
type cms_products_widgetsGraph = Array<cms_products_widgetsScalars & cms_products_widgetsParentsGraph & cms_products_widgetsChildrenGraph>;
type cms_qa_widget_itemsParentsGraph = {
 cms_qa_widgets: Array<Omit<cms_qa_widgetsGraph[number], "cms_qa_widget_items">>;
};
type cms_qa_widget_itemsChildrenGraph = {

};
type cms_qa_widget_itemsGraph = Array<cms_qa_widget_itemsScalars & cms_qa_widget_itemsParentsGraph & cms_qa_widget_itemsChildrenGraph>;
type cms_qa_widgetsParentsGraph = {
 cms_widgets: Array<Omit<cms_widgetsGraph[number], "cms_qa_widgets">>;
};
type cms_qa_widgetsChildrenGraph = {
 cms_qa_widget_items: Array<Omit<cms_qa_widget_itemsGraph[number], "cms_qa_widgets">>;
};
type cms_qa_widgetsGraph = Array<cms_qa_widgetsScalars & cms_qa_widgetsParentsGraph & cms_qa_widgetsChildrenGraph>;
type cms_quotation_listing_widgetsParentsGraph = {
 cms_listing_widgets: Array<Omit<cms_listing_widgetsGraph[number], "cms_quotation_listing_widgets">>;
};
type cms_quotation_listing_widgetsChildrenGraph = {

};
type cms_quotation_listing_widgetsGraph = Array<cms_quotation_listing_widgetsScalars & cms_quotation_listing_widgetsParentsGraph & cms_quotation_listing_widgetsChildrenGraph>;
type cms_rich_text_widgetsParentsGraph = {
 cms_widgets: Array<Omit<cms_widgetsGraph[number], "cms_rich_text_widgets">>;
};
type cms_rich_text_widgetsChildrenGraph = {

};
type cms_rich_text_widgetsGraph = Array<cms_rich_text_widgetsScalars & cms_rich_text_widgetsParentsGraph & cms_rich_text_widgetsChildrenGraph>;
type cms_section_widget_itemsParentsGraph = {
 cms_section_widgets: Array<Omit<cms_section_widgetsGraph[number], "cms_section_widget_items">>;
 cms_widget_items: Array<Omit<cms_widget_itemsGraph[number], "cms_section_widget_items">>;
};
type cms_section_widget_itemsChildrenGraph = {

};
type cms_section_widget_itemsGraph = Array<cms_section_widget_itemsScalars & cms_section_widget_itemsParentsGraph & cms_section_widget_itemsChildrenGraph>;
type cms_section_widgetsParentsGraph = {
 cms_widgets: Array<Omit<cms_widgetsGraph[number], "cms_section_widgets">>;
};
type cms_section_widgetsChildrenGraph = {
 cms_section_widget_items: Array<Omit<cms_section_widget_itemsGraph[number], "cms_section_widgets">>;
};
type cms_section_widgetsGraph = Array<cms_section_widgetsScalars & cms_section_widgetsParentsGraph & cms_section_widgetsChildrenGraph>;
type cms_showroom_pagesParentsGraph = {
 cms_pages: Array<Omit<cms_pagesGraph[number], "cms_showroom_pages">>;
};
type cms_showroom_pagesChildrenGraph = {
 cms_category_collection_widget_items: Array<Omit<cms_category_collection_widget_itemsGraph[number], "cms_showroom_pages">>;
 cms_collections_carousel_widget_items: Array<Omit<cms_collections_carousel_widget_itemsGraph[number], "cms_showroom_pages">>;
 cms_collections_carousel_widgets: Array<Omit<cms_collections_carousel_widgetsGraph[number], "cms_showroom_pages">>;
 cms_expert_collections_widget_items: Array<Omit<cms_expert_collections_widget_itemsGraph[number], "cms_showroom_pages">>;
 cms_multi_collection_widgets: Array<Omit<cms_multi_collection_widgetsGraph[number], "cms_showroom_pages">>;
};
type cms_showroom_pagesGraph = Array<cms_showroom_pagesScalars & cms_showroom_pagesParentsGraph & cms_showroom_pagesChildrenGraph>;
type cms_single_image_widgetsParentsGraph = {
 attachments: Array<Omit<attachmentsGraph[number], "cms_single_image_widgets">>;
 cms_widgets: Array<Omit<cms_widgetsGraph[number], "cms_single_image_widgets">>;
};
type cms_single_image_widgetsChildrenGraph = {

};
type cms_single_image_widgetsGraph = Array<cms_single_image_widgetsScalars & cms_single_image_widgetsParentsGraph & cms_single_image_widgetsChildrenGraph>;
type cms_spotlight_widgetsParentsGraph = {
 attachments: Array<Omit<attachmentsGraph[number], "cms_spotlight_widgets">>;
 cms_widgets: Array<Omit<cms_widgetsGraph[number], "cms_spotlight_widgets">>;
 experts: Array<Omit<expertsGraph[number], "cms_spotlight_widgets">>;
};
type cms_spotlight_widgetsChildrenGraph = {

};
type cms_spotlight_widgetsGraph = Array<cms_spotlight_widgetsScalars & cms_spotlight_widgetsParentsGraph & cms_spotlight_widgetsChildrenGraph>;
type cms_testimonials_widget_itemsParentsGraph = {
 cms_testimonials_widgets: Array<Omit<cms_testimonials_widgetsGraph[number], "cms_testimonials_widget_items">>;
};
type cms_testimonials_widget_itemsChildrenGraph = {

};
type cms_testimonials_widget_itemsGraph = Array<cms_testimonials_widget_itemsScalars & cms_testimonials_widget_itemsParentsGraph & cms_testimonials_widget_itemsChildrenGraph>;
type cms_testimonials_widgetsParentsGraph = {
 cms_widgets: Array<Omit<cms_widgetsGraph[number], "cms_testimonials_widgets">>;
};
type cms_testimonials_widgetsChildrenGraph = {
 cms_testimonials_widget_items: Array<Omit<cms_testimonials_widget_itemsGraph[number], "cms_testimonials_widgets">>;
};
type cms_testimonials_widgetsGraph = Array<cms_testimonials_widgetsScalars & cms_testimonials_widgetsParentsGraph & cms_testimonials_widgetsChildrenGraph>;
type cms_value_proposition_widgetsParentsGraph = {
 cms_widgets: Array<Omit<cms_widgetsGraph[number], "cms_value_proposition_widgets">>;
};
type cms_value_proposition_widgetsChildrenGraph = {

};
type cms_value_proposition_widgetsGraph = Array<cms_value_proposition_widgetsScalars & cms_value_proposition_widgetsParentsGraph & cms_value_proposition_widgetsChildrenGraph>;
type cms_video_section_widgetsParentsGraph = {
 attachments: Array<Omit<attachmentsGraph[number], "cms_video_section_widgets">>;
 cms_widgets: Array<Omit<cms_widgetsGraph[number], "cms_video_section_widgets">>;
 video_attachments: Array<Omit<video_attachmentsGraph[number], "cms_video_section_widgets">>;
};
type cms_video_section_widgetsChildrenGraph = {

};
type cms_video_section_widgetsGraph = Array<cms_video_section_widgetsScalars & cms_video_section_widgetsParentsGraph & cms_video_section_widgetsChildrenGraph>;
type cms_video_widgetsParentsGraph = {
 attachments: Array<Omit<attachmentsGraph[number], "cms_video_widgets">>;
 cms_widgets: Array<Omit<cms_widgetsGraph[number], "cms_video_widgets">>;
 video_attachments: Array<Omit<video_attachmentsGraph[number], "cms_video_widgets">>;
};
type cms_video_widgetsChildrenGraph = {

};
type cms_video_widgetsGraph = Array<cms_video_widgetsScalars & cms_video_widgetsParentsGraph & cms_video_widgetsChildrenGraph>;
type cms_widget_item_buttonsParentsGraph = {
 cms_widget_items: Array<Omit<cms_widget_itemsGraph[number], "cms_widget_item_buttons">>;
};
type cms_widget_item_buttonsChildrenGraph = {

};
type cms_widget_item_buttonsGraph = Array<cms_widget_item_buttonsScalars & cms_widget_item_buttonsParentsGraph & cms_widget_item_buttonsChildrenGraph>;
type cms_widget_item_headlinesParentsGraph = {
 cms_widget_items: Array<Omit<cms_widget_itemsGraph[number], "cms_widget_item_headlines">>;
};
type cms_widget_item_headlinesChildrenGraph = {

};
type cms_widget_item_headlinesGraph = Array<cms_widget_item_headlinesScalars & cms_widget_item_headlinesParentsGraph & cms_widget_item_headlinesChildrenGraph>;
type cms_widget_item_three_column_cardsParentsGraph = {
 attachments_cms_widget_item_three_column_cards_first_attachment_idToattachments: Array<Omit<attachmentsGraph[number], "cms_widget_item_three_column_cards_cms_widget_item_three_column_cards_first_attachment_idToattachments">>;
 attachments_cms_widget_item_three_column_cards_second_attachment_idToattachments: Array<Omit<attachmentsGraph[number], "cms_widget_item_three_column_cards_cms_widget_item_three_column_cards_second_attachment_idToattachments">>;
 attachments_cms_widget_item_three_column_cards_third_attachment_idToattachments: Array<Omit<attachmentsGraph[number], "cms_widget_item_three_column_cards_cms_widget_item_three_column_cards_third_attachment_idToattachments">>;
 cms_widget_items: Array<Omit<cms_widget_itemsGraph[number], "cms_widget_item_three_column_cards">>;
};
type cms_widget_item_three_column_cardsChildrenGraph = {

};
type cms_widget_item_three_column_cardsGraph = Array<cms_widget_item_three_column_cardsScalars & cms_widget_item_three_column_cardsParentsGraph & cms_widget_item_three_column_cardsChildrenGraph>;
type cms_widget_item_two_column_cardsParentsGraph = {
 attachments_cms_widget_item_two_column_cards_first_attachment_idToattachments: Array<Omit<attachmentsGraph[number], "cms_widget_item_two_column_cards_cms_widget_item_two_column_cards_first_attachment_idToattachments">>;
 attachments_cms_widget_item_two_column_cards_second_attachment_idToattachments: Array<Omit<attachmentsGraph[number], "cms_widget_item_two_column_cards_cms_widget_item_two_column_cards_second_attachment_idToattachments">>;
 cms_widget_items: Array<Omit<cms_widget_itemsGraph[number], "cms_widget_item_two_column_cards">>;
};
type cms_widget_item_two_column_cardsChildrenGraph = {

};
type cms_widget_item_two_column_cardsGraph = Array<cms_widget_item_two_column_cardsScalars & cms_widget_item_two_column_cardsParentsGraph & cms_widget_item_two_column_cardsChildrenGraph>;
type cms_widget_itemsParentsGraph = {

};
type cms_widget_itemsChildrenGraph = {
 cms_section_widget_items: Array<Omit<cms_section_widget_itemsGraph[number], "cms_widget_items">>;
 cms_widget_item_buttons: Array<Omit<cms_widget_item_buttonsGraph[number], "cms_widget_items">>;
 cms_widget_item_headlines: Array<Omit<cms_widget_item_headlinesGraph[number], "cms_widget_items">>;
 cms_widget_item_three_column_cards: Array<Omit<cms_widget_item_three_column_cardsGraph[number], "cms_widget_items">>;
 cms_widget_item_two_column_cards: Array<Omit<cms_widget_item_two_column_cardsGraph[number], "cms_widget_items">>;
};
type cms_widget_itemsGraph = Array<cms_widget_itemsScalars & cms_widget_itemsParentsGraph & cms_widget_itemsChildrenGraph>;
type cms_widget_listing_widgetsParentsGraph = {
 cms_listing_widgets: Array<Omit<cms_listing_widgetsGraph[number], "cms_widget_listing_widgets">>;
 cms_widgets: Array<Omit<cms_widgetsGraph[number], "cms_widget_listing_widgets">>;
};
type cms_widget_listing_widgetsChildrenGraph = {

};
type cms_widget_listing_widgetsGraph = Array<cms_widget_listing_widgetsScalars & cms_widget_listing_widgetsParentsGraph & cms_widget_listing_widgetsChildrenGraph>;
type cms_widgetsParentsGraph = {
 cms_pages: Array<Omit<cms_pagesGraph[number], "cms_widgets">>;
};
type cms_widgetsChildrenGraph = {
 cms_alphabetical_index_widgets: Array<Omit<cms_alphabetical_index_widgetsGraph[number], "cms_widgets">>;
 cms_alt_experts_listing_widgets: Array<Omit<cms_alt_experts_listing_widgetsGraph[number], "cms_widgets">>;
 cms_alt_value_proposition_widgets: Array<Omit<cms_alt_value_proposition_widgetsGraph[number], "cms_widgets">>;
 cms_article_heading_widgets: Array<Omit<cms_article_heading_widgetsGraph[number], "cms_widgets">>;
 cms_article_pages: Array<Omit<cms_article_pagesGraph[number], "cms_widgets">>;
 cms_articles_widgets: Array<Omit<cms_articles_widgetsGraph[number], "cms_widgets">>;
 cms_banner_widgets: Array<Omit<cms_banner_widgetsGraph[number], "cms_widgets">>;
 cms_card_navigation_widgets: Array<Omit<cms_card_navigation_widgetsGraph[number], "cms_widgets">>;
 cms_category_collection_widgets: Array<Omit<cms_category_collection_widgetsGraph[number], "cms_widgets">>;
 cms_category_header_widgets: Array<Omit<cms_category_header_widgetsGraph[number], "cms_widgets">>;
 cms_collection_header_widgets: Array<Omit<cms_collection_header_widgetsGraph[number], "cms_widgets">>;
 cms_collections_carousel_widgets: Array<Omit<cms_collections_carousel_widgetsGraph[number], "cms_widgets">>;
 cms_concierge_widgets: Array<Omit<cms_concierge_widgetsGraph[number], "cms_widgets">>;
 cms_double_image_widgets: Array<Omit<cms_double_image_widgetsGraph[number], "cms_widgets">>;
 cms_expert_collections_widgets: Array<Omit<cms_expert_collections_widgetsGraph[number], "cms_widgets">>;
 cms_experts_listing_widgets: Array<Omit<cms_experts_listing_widgetsGraph[number], "cms_widgets">>;
 cms_experts_widgets: Array<Omit<cms_experts_widgetsGraph[number], "cms_widgets">>;
 cms_featured_in_widgets: Array<Omit<cms_featured_in_widgetsGraph[number], "cms_widgets">>;
 cms_gallery_widgets: Array<Omit<cms_gallery_widgetsGraph[number], "cms_widgets">>;
 cms_gift_card_widgets: Array<Omit<cms_gift_card_widgetsGraph[number], "cms_widgets">>;
 cms_hero_carousel_widgets: Array<Omit<cms_hero_carousel_widgetsGraph[number], "cms_widgets">>;
 cms_hero_main_widgets: Array<Omit<cms_hero_main_widgetsGraph[number], "cms_widgets">>;
 cms_hero_widgets: Array<Omit<cms_hero_widgetsGraph[number], "cms_widgets">>;
 cms_info_cards_widgets: Array<Omit<cms_info_cards_widgetsGraph[number], "cms_widgets">>;
 cms_introduction_widgets: Array<Omit<cms_introduction_widgetsGraph[number], "cms_widgets">>;
 cms_multi_collection_widgets: Array<Omit<cms_multi_collection_widgetsGraph[number], "cms_widgets">>;
 cms_products_widgets: Array<Omit<cms_products_widgetsGraph[number], "cms_widgets">>;
 cms_qa_widgets: Array<Omit<cms_qa_widgetsGraph[number], "cms_widgets">>;
 cms_rich_text_widgets: Array<Omit<cms_rich_text_widgetsGraph[number], "cms_widgets">>;
 cms_section_widgets: Array<Omit<cms_section_widgetsGraph[number], "cms_widgets">>;
 cms_single_image_widgets: Array<Omit<cms_single_image_widgetsGraph[number], "cms_widgets">>;
 cms_spotlight_widgets: Array<Omit<cms_spotlight_widgetsGraph[number], "cms_widgets">>;
 cms_testimonials_widgets: Array<Omit<cms_testimonials_widgetsGraph[number], "cms_widgets">>;
 cms_value_proposition_widgets: Array<Omit<cms_value_proposition_widgetsGraph[number], "cms_widgets">>;
 cms_video_section_widgets: Array<Omit<cms_video_section_widgetsGraph[number], "cms_widgets">>;
 cms_video_widgets: Array<Omit<cms_video_widgetsGraph[number], "cms_widgets">>;
 cms_widget_listing_widgets: Array<Omit<cms_widget_listing_widgetsGraph[number], "cms_widgets">>;
};
type cms_widgetsGraph = Array<cms_widgetsScalars & cms_widgetsParentsGraph & cms_widgetsChildrenGraph>;
type collection_items_denormalizedParentsGraph = {
 collections: Array<Omit<collectionsGraph[number], "collection_items_denormalized">>;
 product_categories_collection_items_denormalized_category_one_idToproduct_categories: Array<Omit<product_categoriesGraph[number], "collection_items_denormalized_collection_items_denormalized_category_one_idToproduct_categories">>;
 product_categories_collection_items_denormalized_category_three_idToproduct_categories: Array<Omit<product_categoriesGraph[number], "collection_items_denormalized_collection_items_denormalized_category_three_idToproduct_categories">>;
 product_categories_collection_items_denormalized_category_two_idToproduct_categories: Array<Omit<product_categoriesGraph[number], "collection_items_denormalized_collection_items_denormalized_category_two_idToproduct_categories">>;
 product_variants: Array<Omit<product_variantsGraph[number], "collection_items_denormalized">>;
 products: Array<Omit<productsGraph[number], "collection_items_denormalized">>;
};
type collection_items_denormalizedChildrenGraph = {

};
type collection_items_denormalizedGraph = Array<collection_items_denormalizedScalars & collection_items_denormalizedParentsGraph & collection_items_denormalizedChildrenGraph>;
type collection_product_brandsParentsGraph = {
 brands: Array<Omit<brandsGraph[number], "collection_product_brands">>;
 collections: Array<Omit<collectionsGraph[number], "collection_product_brands">>;
};
type collection_product_brandsChildrenGraph = {

};
type collection_product_brandsGraph = Array<collection_product_brandsScalars & collection_product_brandsParentsGraph & collection_product_brandsChildrenGraph>;
type collection_productsParentsGraph = {
 collections: Array<Omit<collectionsGraph[number], "collection_products">>;
 product_variants: Array<Omit<product_variantsGraph[number], "collection_products">>;
 products: Array<Omit<productsGraph[number], "collection_products">>;
};
type collection_productsChildrenGraph = {

};
type collection_productsGraph = Array<collection_productsScalars & collection_productsParentsGraph & collection_productsChildrenGraph>;
type collectionsParentsGraph = {
 experts: Array<Omit<expertsGraph[number], "collections">>;
};
type collectionsChildrenGraph = {
 cms_multi_collection_widget_items: Array<Omit<cms_multi_collection_widget_itemsGraph[number], "collections">>;
 collection_items_denormalized: Array<Omit<collection_items_denormalizedGraph[number], "collections">>;
 collection_product_brands: Array<Omit<collection_product_brandsGraph[number], "collections">>;
 collection_products: Array<Omit<collection_productsGraph[number], "collections">>;
 collections_product_categories: Array<Omit<collections_product_categoriesGraph[number], "collections">>;
};
type collectionsGraph = Array<collectionsScalars & collectionsParentsGraph & collectionsChildrenGraph>;
type collections_product_categoriesParentsGraph = {
 collections: Array<Omit<collectionsGraph[number], "collections_product_categories">>;
 product_categories: Array<Omit<product_categoriesGraph[number], "collections_product_categories">>;
};
type collections_product_categoriesChildrenGraph = {

};
type collections_product_categoriesGraph = Array<collections_product_categoriesScalars & collections_product_categoriesParentsGraph & collections_product_categoriesChildrenGraph>;
type commission_cart_itemParentsGraph = {
 cart_items: Array<Omit<cart_itemsGraph[number], "commission_cart_item">>;
 commissions: Array<Omit<commissionsGraph[number], "commission_cart_item">>;
};
type commission_cart_itemChildrenGraph = {

};
type commission_cart_itemGraph = Array<commission_cart_itemScalars & commission_cart_itemParentsGraph & commission_cart_itemChildrenGraph>;
type commission_expertParentsGraph = {
 commissions: Array<Omit<commissionsGraph[number], "commission_expert">>;
 experts: Array<Omit<expertsGraph[number], "commission_expert">>;
};
type commission_expertChildrenGraph = {

};
type commission_expertGraph = Array<commission_expertScalars & commission_expertParentsGraph & commission_expertChildrenGraph>;
type commission_order_itemParentsGraph = {
 commissions: Array<Omit<commissionsGraph[number], "commission_order_item">>;
 order_items: Array<Omit<order_itemsGraph[number], "commission_order_item">>;
};
type commission_order_itemChildrenGraph = {

};
type commission_order_itemGraph = Array<commission_order_itemScalars & commission_order_itemParentsGraph & commission_order_itemChildrenGraph>;
type commissionsParentsGraph = {

};
type commissionsChildrenGraph = {
 commission_cart_item: Array<Omit<commission_cart_itemGraph[number], "commissions">>;
 commission_expert: Array<Omit<commission_expertGraph[number], "commissions">>;
 commission_order_item: Array<Omit<commission_order_itemGraph[number], "commissions">>;
};
type commissionsGraph = Array<commissionsScalars & commissionsParentsGraph & commissionsChildrenGraph>;
type couponsParentsGraph = {

};
type couponsChildrenGraph = {
 checkout_coupons: Array<Omit<checkout_couponsGraph[number], "coupons">>;
 checkout_item_coupons: Array<Omit<checkout_item_couponsGraph[number], "coupons">>;
 coupons_different_recipients: Array<Omit<coupons_different_recipientsGraph[number], "coupons">>;
};
type couponsGraph = Array<couponsScalars & couponsParentsGraph & couponsChildrenGraph>;
type coupons_different_recipientsParentsGraph = {
 coupons: Array<Omit<couponsGraph[number], "coupons_different_recipients">>;
};
type coupons_different_recipientsChildrenGraph = {

};
type coupons_different_recipientsGraph = Array<coupons_different_recipientsScalars & coupons_different_recipientsParentsGraph & coupons_different_recipientsChildrenGraph>;
type coupons_settingsParentsGraph = {

};
type coupons_settingsChildrenGraph = {

};
type coupons_settingsGraph = Array<coupons_settingsScalars & coupons_settingsParentsGraph & coupons_settingsChildrenGraph>;
type credit_transactionsParentsGraph = {
 clients: Array<Omit<clientsGraph[number], "credit_transactions">>;
};
type credit_transactionsChildrenGraph = {
 checkout_credit_transactions: Array<Omit<checkout_credit_transactionsGraph[number], "credit_transactions">>;
 refunds_credit_transactions: Array<Omit<refunds_credit_transactionsGraph[number], "credit_transactions">>;
};
type credit_transactionsGraph = Array<credit_transactionsScalars & credit_transactionsParentsGraph & credit_transactionsChildrenGraph>;
type currency_ratesParentsGraph = {

};
type currency_ratesChildrenGraph = {

};
type currency_ratesGraph = Array<currency_ratesScalars & currency_ratesParentsGraph & currency_ratesChildrenGraph>;
type discountsParentsGraph = {
 checkout_items: Array<Omit<checkout_itemsGraph[number], "discounts">>;
};
type discountsChildrenGraph = {

};
type discountsGraph = Array<discountsScalars & discountsParentsGraph & discountsChildrenGraph>;
type expert_application_categoriesParentsGraph = {
 categories: Array<Omit<categoriesGraph[number], "expert_application_categories">>;
 expert_applications: Array<Omit<expert_applicationsGraph[number], "expert_application_categories">>;
};
type expert_application_categoriesChildrenGraph = {

};
type expert_application_categoriesGraph = Array<expert_application_categoriesScalars & expert_application_categoriesParentsGraph & expert_application_categoriesChildrenGraph>;
type expert_applicationsParentsGraph = {

};
type expert_applicationsChildrenGraph = {
 expert_application_categories: Array<Omit<expert_application_categoriesGraph[number], "expert_applications">>;
};
type expert_applicationsGraph = Array<expert_applicationsScalars & expert_applicationsParentsGraph & expert_applicationsChildrenGraph>;
type expert_attachmentsParentsGraph = {
 attachments: Array<Omit<attachmentsGraph[number], "expert_attachments">>;
 experts: Array<Omit<expertsGraph[number], "expert_attachments">>;
};
type expert_attachmentsChildrenGraph = {

};
type expert_attachmentsGraph = Array<expert_attachmentsScalars & expert_attachmentsParentsGraph & expert_attachmentsChildrenGraph>;
type expert_categoriesParentsGraph = {
 categories: Array<Omit<categoriesGraph[number], "expert_categories">>;
 experts: Array<Omit<expertsGraph[number], "expert_categories">>;
};
type expert_categoriesChildrenGraph = {

};
type expert_categoriesGraph = Array<expert_categoriesScalars & expert_categoriesParentsGraph & expert_categoriesChildrenGraph>;
type expert_expertisesParentsGraph = {
 experts: Array<Omit<expertsGraph[number], "expert_expertises">>;
};
type expert_expertisesChildrenGraph = {

};
type expert_expertisesGraph = Array<expert_expertisesScalars & expert_expertisesParentsGraph & expert_expertisesChildrenGraph>;
type expert_regionsParentsGraph = {
 experts: Array<Omit<expertsGraph[number], "expert_regions">>;
 regions: Array<Omit<regionsGraph[number], "expert_regions">>;
};
type expert_regionsChildrenGraph = {

};
type expert_regionsGraph = Array<expert_regionsScalars & expert_regionsParentsGraph & expert_regionsChildrenGraph>;
type expert_sessionsParentsGraph = {
 expert_users: Array<Omit<expert_usersGraph[number], "expert_sessions">>;
 experts: Array<Omit<expertsGraph[number], "expert_sessions">>;
};
type expert_sessionsChildrenGraph = {
 client_expert_availability_subscriptions: Array<Omit<client_expert_availability_subscriptionsGraph[number], "expert_sessions">>;
 sessions: Array<Omit<sessionsGraph[number], "expert_sessions">>;
};
type expert_sessionsGraph = Array<expert_sessionsScalars & expert_sessionsParentsGraph & expert_sessionsChildrenGraph>;
type expert_tagsParentsGraph = {
 experts: Array<Omit<expertsGraph[number], "expert_tags">>;
 tags: Array<Omit<tagsGraph[number], "expert_tags">>;
};
type expert_tagsChildrenGraph = {

};
type expert_tagsGraph = Array<expert_tagsScalars & expert_tagsParentsGraph & expert_tagsChildrenGraph>;
type expert_testimonialsParentsGraph = {
 expert_users: Array<Omit<expert_usersGraph[number], "expert_testimonials">>;
 experts: Array<Omit<expertsGraph[number], "expert_testimonials">>;
};
type expert_testimonialsChildrenGraph = {

};
type expert_testimonialsGraph = Array<expert_testimonialsScalars & expert_testimonialsParentsGraph & expert_testimonialsChildrenGraph>;
type expert_user_availabilitiesParentsGraph = {
 expert_user_availability_templates: Array<Omit<expert_user_availability_templatesGraph[number], "expert_user_availabilities">>;
 expert_users: Array<Omit<expert_usersGraph[number], "expert_user_availabilities">>;
 experts: Array<Omit<expertsGraph[number], "expert_user_availabilities">>;
};
type expert_user_availabilitiesChildrenGraph = {
 session_availabilities: Array<Omit<session_availabilitiesGraph[number], "expert_user_availabilities">>;
};
type expert_user_availabilitiesGraph = Array<expert_user_availabilitiesScalars & expert_user_availabilitiesParentsGraph & expert_user_availabilitiesChildrenGraph>;
type expert_user_availabilities_analyticsParentsGraph = {

};
type expert_user_availabilities_analyticsChildrenGraph = {

};
type expert_user_availabilities_analyticsGraph = Array<expert_user_availabilities_analyticsScalars & expert_user_availabilities_analyticsParentsGraph & expert_user_availabilities_analyticsChildrenGraph>;
type expert_user_availability_templatesParentsGraph = {
 expert_users: Array<Omit<expert_usersGraph[number], "expert_user_availability_templates">>;
 experts: Array<Omit<expertsGraph[number], "expert_user_availability_templates">>;
};
type expert_user_availability_templatesChildrenGraph = {
 expert_user_availabilities: Array<Omit<expert_user_availabilitiesGraph[number], "expert_user_availability_templates">>;
};
type expert_user_availability_templatesGraph = Array<expert_user_availability_templatesScalars & expert_user_availability_templatesParentsGraph & expert_user_availability_templatesChildrenGraph>;
type expert_user_notification_emailsParentsGraph = {
 expert_users: Array<Omit<expert_usersGraph[number], "expert_user_notification_emails">>;
};
type expert_user_notification_emailsChildrenGraph = {

};
type expert_user_notification_emailsGraph = Array<expert_user_notification_emailsScalars & expert_user_notification_emailsParentsGraph & expert_user_notification_emailsChildrenGraph>;
type expert_usersParentsGraph = {
 experts: Array<Omit<expertsGraph[number], "expert_users">>;
};
type expert_usersChildrenGraph = {
 expert_sessions: Array<Omit<expert_sessionsGraph[number], "expert_users">>;
 expert_testimonials: Array<Omit<expert_testimonialsGraph[number], "expert_users">>;
 expert_user_availabilities: Array<Omit<expert_user_availabilitiesGraph[number], "expert_users">>;
 expert_user_availability_templates: Array<Omit<expert_user_availability_templatesGraph[number], "expert_users">>;
 expert_user_notification_emails: Array<Omit<expert_user_notification_emailsGraph[number], "expert_users">>;
 feature_flag_expert_user: Array<Omit<feature_flag_expert_userGraph[number], "expert_users">>;
 session_logs: Array<Omit<session_logsGraph[number], "expert_users">>;
 session_reviews: Array<Omit<session_reviewsGraph[number], "expert_users">>;
 sessions: Array<Omit<sessionsGraph[number], "expert_users">>;
};
type expert_usersGraph = Array<expert_usersScalars & expert_usersParentsGraph & expert_usersChildrenGraph>;
type expert_videosParentsGraph = {
 experts: Array<Omit<expertsGraph[number], "expert_videos">>;
};
type expert_videosChildrenGraph = {

};
type expert_videosGraph = Array<expert_videosScalars & expert_videosParentsGraph & expert_videosChildrenGraph>;
type expert_warningsParentsGraph = {
 experts: Array<Omit<expertsGraph[number], "expert_warnings">>;
};
type expert_warningsChildrenGraph = {

};
type expert_warningsGraph = Array<expert_warningsScalars & expert_warningsParentsGraph & expert_warningsChildrenGraph>;
type expertsParentsGraph = {
 attachments_experts_headshot_image_attachment_idToattachments: Array<Omit<attachmentsGraph[number], "experts_experts_headshot_image_attachment_idToattachments">>;
 attachments_experts_profile_image_attachment_idToattachments: Array<Omit<attachmentsGraph[number], "experts_experts_profile_image_attachment_idToattachments">>;
};
type expertsChildrenGraph = {
 client_expert_availability_subscriptions: Array<Omit<client_expert_availability_subscriptionsGraph[number], "experts">>;
 client_experts_notifications: Array<Omit<client_experts_notificationsGraph[number], "experts">>;
 client_favorite_experts: Array<Omit<client_favorite_expertsGraph[number], "experts">>;
 cms_banner_widgets: Array<Omit<cms_banner_widgetsGraph[number], "experts">>;
 cms_category_header_widgets: Array<Omit<cms_category_header_widgetsGraph[number], "experts">>;
 cms_consultation_listing_widgets: Array<Omit<cms_consultation_listing_widgetsGraph[number], "experts">>;
 cms_experts_widget_items: Array<Omit<cms_experts_widget_itemsGraph[number], "experts">>;
 cms_gallery_widget_items: Array<Omit<cms_gallery_widget_itemsGraph[number], "experts">>;
 cms_spotlight_widgets: Array<Omit<cms_spotlight_widgetsGraph[number], "experts">>;
 collections: Array<Omit<collectionsGraph[number], "experts">>;
 commission_expert: Array<Omit<commission_expertGraph[number], "experts">>;
 expert_attachments: Array<Omit<expert_attachmentsGraph[number], "experts">>;
 expert_categories: Array<Omit<expert_categoriesGraph[number], "experts">>;
 expert_expertises: Array<Omit<expert_expertisesGraph[number], "experts">>;
 expert_regions: Array<Omit<expert_regionsGraph[number], "experts">>;
 expert_sessions: Array<Omit<expert_sessionsGraph[number], "experts">>;
 expert_tags: Array<Omit<expert_tagsGraph[number], "experts">>;
 expert_testimonials: Array<Omit<expert_testimonialsGraph[number], "experts">>;
 expert_user_availabilities: Array<Omit<expert_user_availabilitiesGraph[number], "experts">>;
 expert_user_availability_templates: Array<Omit<expert_user_availability_templatesGraph[number], "experts">>;
 expert_users: Array<Omit<expert_usersGraph[number], "experts">>;
 expert_videos: Array<Omit<expert_videosGraph[number], "experts">>;
 expert_warnings: Array<Omit<expert_warningsGraph[number], "experts">>;
 product_custom_content: Array<Omit<product_custom_contentGraph[number], "experts">>;
 product_variant_custom_content: Array<Omit<product_variant_custom_contentGraph[number], "experts">>;
 purchases: Array<Omit<purchasesGraph[number], "experts">>;
 sessions: Array<Omit<sessionsGraph[number], "experts">>;
};
type expertsGraph = Array<expertsScalars & expertsParentsGraph & expertsChildrenGraph>;
type external_product_previewsParentsGraph = {
 attachments: Array<Omit<attachmentsGraph[number], "external_product_previews">>;
};
type external_product_previewsChildrenGraph = {

};
type external_product_previewsGraph = Array<external_product_previewsScalars & external_product_previewsParentsGraph & external_product_previewsChildrenGraph>;
type feature_flag_clientParentsGraph = {
 clients: Array<Omit<clientsGraph[number], "feature_flag_client">>;
 feature_flags: Array<Omit<feature_flagsGraph[number], "feature_flag_client">>;
};
type feature_flag_clientChildrenGraph = {

};
type feature_flag_clientGraph = Array<feature_flag_clientScalars & feature_flag_clientParentsGraph & feature_flag_clientChildrenGraph>;
type feature_flag_expert_userParentsGraph = {
 expert_users: Array<Omit<expert_usersGraph[number], "feature_flag_expert_user">>;
 feature_flags: Array<Omit<feature_flagsGraph[number], "feature_flag_expert_user">>;
};
type feature_flag_expert_userChildrenGraph = {

};
type feature_flag_expert_userGraph = Array<feature_flag_expert_userScalars & feature_flag_expert_userParentsGraph & feature_flag_expert_userChildrenGraph>;
type feature_flagsParentsGraph = {

};
type feature_flagsChildrenGraph = {
 feature_flag_client: Array<Omit<feature_flag_clientGraph[number], "feature_flags">>;
 feature_flag_expert_user: Array<Omit<feature_flag_expert_userGraph[number], "feature_flags">>;
};
type feature_flagsGraph = Array<feature_flagsScalars & feature_flagsParentsGraph & feature_flagsChildrenGraph>;
type files_and_notes_itemsParentsGraph = {
 attachments: Array<Omit<attachmentsGraph[number], "files_and_notes_items">>;
 session_reports: Array<Omit<session_reportsGraph[number], "files_and_notes_items">>;
};
type files_and_notes_itemsChildrenGraph = {

};
type files_and_notes_itemsGraph = Array<files_and_notes_itemsScalars & files_and_notes_itemsParentsGraph & files_and_notes_itemsChildrenGraph>;
type guest_usersParentsGraph = {

};
type guest_usersChildrenGraph = {
 checkout_guest_user: Array<Omit<checkout_guest_userGraph[number], "guest_users">>;
 order_guest_users: Array<Omit<order_guest_usersGraph[number], "guest_users">>;
};
type guest_usersGraph = Array<guest_usersScalars & guest_usersParentsGraph & guest_usersChildrenGraph>;
type knex_migrationsParentsGraph = {

};
type knex_migrationsChildrenGraph = {

};
type knex_migrationsGraph = Array<knex_migrationsScalars & knex_migrationsParentsGraph & knex_migrationsChildrenGraph>;
type knex_migrations_lockParentsGraph = {

};
type knex_migrations_lockChildrenGraph = {

};
type knex_migrations_lockGraph = Array<knex_migrations_lockScalars & knex_migrations_lockParentsGraph & knex_migrations_lockChildrenGraph>;
type navigation_groupsParentsGraph = {

};
type navigation_groupsChildrenGraph = {
 navigations: Array<Omit<navigationsGraph[number], "navigation_groups">>;
};
type navigation_groupsGraph = Array<navigation_groupsScalars & navigation_groupsParentsGraph & navigation_groupsChildrenGraph>;
type navigation_itemsParentsGraph = {
 attachments: Array<Omit<attachmentsGraph[number], "navigation_items">>;
 cms_pages: Array<Omit<cms_pagesGraph[number], "navigation_items">>;
 navigation_items: Array<Omit<navigation_itemsGraph[number], "navigation_items">>;
 navigations: Array<Omit<navigationsGraph[number], "navigation_items">>;
};
type navigation_itemsChildrenGraph = {
 navigation_items: Array<Omit<navigation_itemsGraph[number], "navigation_items">>;
};
type navigation_itemsGraph = Array<navigation_itemsScalars & navigation_itemsParentsGraph & navigation_itemsChildrenGraph>;
type navigationsParentsGraph = {
 navigation_groups: Array<Omit<navigation_groupsGraph[number], "navigations">>;
};
type navigationsChildrenGraph = {
 navigation_items: Array<Omit<navigation_itemsGraph[number], "navigations">>;
};
type navigationsGraph = Array<navigationsScalars & navigationsParentsGraph & navigationsChildrenGraph>;
type order_cartParentsGraph = {
 carts: Array<Omit<cartsGraph[number], "order_cart">>;
 orders: Array<Omit<ordersGraph[number], "order_cart">>;
};
type order_cartChildrenGraph = {

};
type order_cartGraph = Array<order_cartScalars & order_cartParentsGraph & order_cartChildrenGraph>;
type order_clientsParentsGraph = {
 clients: Array<Omit<clientsGraph[number], "order_clients">>;
 orders: Array<Omit<ordersGraph[number], "order_clients">>;
};
type order_clientsChildrenGraph = {

};
type order_clientsGraph = Array<order_clientsScalars & order_clientsParentsGraph & order_clientsChildrenGraph>;
type order_guest_usersParentsGraph = {
 guest_users: Array<Omit<guest_usersGraph[number], "order_guest_users">>;
 orders: Array<Omit<ordersGraph[number], "order_guest_users">>;
};
type order_guest_usersChildrenGraph = {

};
type order_guest_usersGraph = Array<order_guest_usersScalars & order_guest_usersParentsGraph & order_guest_usersChildrenGraph>;
type order_item_shipmentsParentsGraph = {
 order_items: Array<Omit<order_itemsGraph[number], "order_item_shipments">>;
 order_shipments: Array<Omit<order_shipmentsGraph[number], "order_item_shipments">>;
};
type order_item_shipmentsChildrenGraph = {

};
type order_item_shipmentsGraph = Array<order_item_shipmentsScalars & order_item_shipmentsParentsGraph & order_item_shipmentsChildrenGraph>;
type order_itemsParentsGraph = {
 orders: Array<Omit<ordersGraph[number], "order_items">>;
 product_variants: Array<Omit<product_variantsGraph[number], "order_items">>;
};
type order_itemsChildrenGraph = {
 checkout_item_order_items: Array<Omit<checkout_item_order_itemsGraph[number], "order_items">>;
 commission_order_item: Array<Omit<commission_order_itemGraph[number], "order_items">>;
 order_item_shipments: Array<Omit<order_item_shipmentsGraph[number], "order_items">>;
};
type order_itemsGraph = Array<order_itemsScalars & order_itemsParentsGraph & order_itemsChildrenGraph>;
type order_notesParentsGraph = {
 admins: Array<Omit<adminsGraph[number], "order_notes">>;
 orders: Array<Omit<ordersGraph[number], "order_notes">>;
};
type order_notesChildrenGraph = {

};
type order_notesGraph = Array<order_notesScalars & order_notesParentsGraph & order_notesChildrenGraph>;
type order_sendgrid_eventsParentsGraph = {

};
type order_sendgrid_eventsChildrenGraph = {

};
type order_sendgrid_eventsGraph = Array<order_sendgrid_eventsScalars & order_sendgrid_eventsParentsGraph & order_sendgrid_eventsChildrenGraph>;
type order_shipment_arta_quote_servicesParentsGraph = {
 order_shipment_arta_quotes: Array<Omit<order_shipment_arta_quotesGraph[number], "order_shipment_arta_quote_services">>;
};
type order_shipment_arta_quote_servicesChildrenGraph = {

};
type order_shipment_arta_quote_servicesGraph = Array<order_shipment_arta_quote_servicesScalars & order_shipment_arta_quote_servicesParentsGraph & order_shipment_arta_quote_servicesChildrenGraph>;
type order_shipment_arta_quotesParentsGraph = {
 order_shipments: Array<Omit<order_shipmentsGraph[number], "order_shipment_arta_quotes">>;
};
type order_shipment_arta_quotesChildrenGraph = {
 order_shipment_arta_quote_services: Array<Omit<order_shipment_arta_quote_servicesGraph[number], "order_shipment_arta_quotes">>;
};
type order_shipment_arta_quotesGraph = Array<order_shipment_arta_quotesScalars & order_shipment_arta_quotesParentsGraph & order_shipment_arta_quotesChildrenGraph>;
type order_shipment_freight_club_quotesParentsGraph = {
 order_shipments: Array<Omit<order_shipmentsGraph[number], "order_shipment_freight_club_quotes">>;
};
type order_shipment_freight_club_quotesChildrenGraph = {

};
type order_shipment_freight_club_quotesGraph = Array<order_shipment_freight_club_quotesScalars & order_shipment_freight_club_quotesParentsGraph & order_shipment_freight_club_quotesChildrenGraph>;
type order_shipmentsParentsGraph = {
 orders: Array<Omit<ordersGraph[number], "order_shipments">>;
 sources: Array<Omit<sourcesGraph[number], "order_shipments">>;
};
type order_shipmentsChildrenGraph = {
 checkout_item_shipments: Array<Omit<checkout_item_shipmentsGraph[number], "order_shipments">>;
 order_item_shipments: Array<Omit<order_item_shipmentsGraph[number], "order_shipments">>;
 order_shipment_arta_quotes: Array<Omit<order_shipment_arta_quotesGraph[number], "order_shipments">>;
 order_shipment_freight_club_quotes: Array<Omit<order_shipment_freight_club_quotesGraph[number], "order_shipments">>;
 order_shipments_vendor_shippings: Array<Omit<order_shipments_vendor_shippingsGraph[number], "order_shipments">>;
};
type order_shipmentsGraph = Array<order_shipmentsScalars & order_shipmentsParentsGraph & order_shipmentsChildrenGraph>;
type order_shipments_vendor_shippingsParentsGraph = {
 order_shipments: Array<Omit<order_shipmentsGraph[number], "order_shipments_vendor_shippings">>;
};
type order_shipments_vendor_shippingsChildrenGraph = {

};
type order_shipments_vendor_shippingsGraph = Array<order_shipments_vendor_shippingsScalars & order_shipments_vendor_shippingsParentsGraph & order_shipments_vendor_shippingsChildrenGraph>;
type ordersParentsGraph = {

};
type ordersChildrenGraph = {
 order_cart: Array<Omit<order_cartGraph[number], "orders">>;
 order_clients: Array<Omit<order_clientsGraph[number], "orders">>;
 order_guest_users: Array<Omit<order_guest_usersGraph[number], "orders">>;
 order_items: Array<Omit<order_itemsGraph[number], "orders">>;
 order_notes: Array<Omit<order_notesGraph[number], "orders">>;
 order_shipments: Array<Omit<order_shipmentsGraph[number], "orders">>;
};
type ordersGraph = Array<ordersScalars & ordersParentsGraph & ordersChildrenGraph>;
type product_attachmentsParentsGraph = {
 attachments: Array<Omit<attachmentsGraph[number], "product_attachments">>;
 products: Array<Omit<productsGraph[number], "product_attachments">>;
};
type product_attachmentsChildrenGraph = {

};
type product_attachmentsGraph = Array<product_attachmentsScalars & product_attachmentsParentsGraph & product_attachmentsChildrenGraph>;
type product_attributesParentsGraph = {
 products: Array<Omit<productsGraph[number], "product_attributes">>;
};
type product_attributesChildrenGraph = {

};
type product_attributesGraph = Array<product_attributesScalars & product_attributesParentsGraph & product_attributesChildrenGraph>;
type product_categoriesParentsGraph = {
 product_categories: Array<Omit<product_categoriesGraph[number], "product_categories">>;
};
type product_categoriesChildrenGraph = {
 cms_category_pages: Array<Omit<cms_category_pagesGraph[number], "product_categories">>;
 collection_items_denormalized_collection_items_denormalized_category_one_idToproduct_categories: Array<Omit<collection_items_denormalizedGraph[number], "product_categories_collection_items_denormalized_category_one_idToproduct_categories">>;
 collection_items_denormalized_collection_items_denormalized_category_three_idToproduct_categories: Array<Omit<collection_items_denormalizedGraph[number], "product_categories_collection_items_denormalized_category_three_idToproduct_categories">>;
 collection_items_denormalized_collection_items_denormalized_category_two_idToproduct_categories: Array<Omit<collection_items_denormalizedGraph[number], "product_categories_collection_items_denormalized_category_two_idToproduct_categories">>;
 collections_product_categories: Array<Omit<collections_product_categoriesGraph[number], "product_categories">>;
 product_categories: Array<Omit<product_categoriesGraph[number], "product_categories">>;
 products_products_category_one_idToproduct_categories: Array<Omit<productsGraph[number], "product_categories_products_category_one_idToproduct_categories">>;
 products_products_category_three_idToproduct_categories: Array<Omit<productsGraph[number], "product_categories_products_category_three_idToproduct_categories">>;
 products_products_category_two_idToproduct_categories: Array<Omit<productsGraph[number], "product_categories_products_category_two_idToproduct_categories">>;
};
type product_categoriesGraph = Array<product_categoriesScalars & product_categoriesParentsGraph & product_categoriesChildrenGraph>;
type product_custom_contentParentsGraph = {
 experts: Array<Omit<expertsGraph[number], "product_custom_content">>;
 products: Array<Omit<productsGraph[number], "product_custom_content">>;
};
type product_custom_contentChildrenGraph = {

};
type product_custom_contentGraph = Array<product_custom_contentScalars & product_custom_contentParentsGraph & product_custom_contentChildrenGraph>;
type product_custom_fieldsParentsGraph = {
 products: Array<Omit<productsGraph[number], "product_custom_fields">>;
};
type product_custom_fieldsChildrenGraph = {

};
type product_custom_fieldsGraph = Array<product_custom_fieldsScalars & product_custom_fieldsParentsGraph & product_custom_fieldsChildrenGraph>;
type product_optionsParentsGraph = {

};
type product_optionsChildrenGraph = {
 product_product_options: Array<Omit<product_product_optionsGraph[number], "product_options">>;
 product_variant_option_values: Array<Omit<product_variant_option_valuesGraph[number], "product_options">>;
};
type product_optionsGraph = Array<product_optionsScalars & product_optionsParentsGraph & product_optionsChildrenGraph>;
type product_product_optionsParentsGraph = {
 product_options: Array<Omit<product_optionsGraph[number], "product_product_options">>;
 products: Array<Omit<productsGraph[number], "product_product_options">>;
};
type product_product_optionsChildrenGraph = {

};
type product_product_optionsGraph = Array<product_product_optionsScalars & product_product_optionsParentsGraph & product_product_optionsChildrenGraph>;
type product_variant_attachmentsParentsGraph = {
 attachments: Array<Omit<attachmentsGraph[number], "product_variant_attachments">>;
 product_variants: Array<Omit<product_variantsGraph[number], "product_variant_attachments">>;
};
type product_variant_attachmentsChildrenGraph = {

};
type product_variant_attachmentsGraph = Array<product_variant_attachmentsScalars & product_variant_attachmentsParentsGraph & product_variant_attachmentsChildrenGraph>;
type product_variant_custom_contentParentsGraph = {
 experts: Array<Omit<expertsGraph[number], "product_variant_custom_content">>;
 product_variants: Array<Omit<product_variantsGraph[number], "product_variant_custom_content">>;
};
type product_variant_custom_contentChildrenGraph = {

};
type product_variant_custom_contentGraph = Array<product_variant_custom_contentScalars & product_variant_custom_contentParentsGraph & product_variant_custom_contentChildrenGraph>;
type product_variant_custom_fieldsParentsGraph = {
 product_variants: Array<Omit<product_variantsGraph[number], "product_variant_custom_fields">>;
};
type product_variant_custom_fieldsChildrenGraph = {

};
type product_variant_custom_fieldsGraph = Array<product_variant_custom_fieldsScalars & product_variant_custom_fieldsParentsGraph & product_variant_custom_fieldsChildrenGraph>;
type product_variant_option_valuesParentsGraph = {
 product_options: Array<Omit<product_optionsGraph[number], "product_variant_option_values">>;
 product_variants: Array<Omit<product_variantsGraph[number], "product_variant_option_values">>;
};
type product_variant_option_valuesChildrenGraph = {

};
type product_variant_option_valuesGraph = Array<product_variant_option_valuesScalars & product_variant_option_valuesParentsGraph & product_variant_option_valuesChildrenGraph>;
type product_variant_sourcesParentsGraph = {
 product_variants: Array<Omit<product_variantsGraph[number], "product_variant_sources">>;
 sources: Array<Omit<sourcesGraph[number], "product_variant_sources">>;
};
type product_variant_sourcesChildrenGraph = {

};
type product_variant_sourcesGraph = Array<product_variant_sourcesScalars & product_variant_sourcesParentsGraph & product_variant_sourcesChildrenGraph>;
type product_variantsParentsGraph = {
 products: Array<Omit<productsGraph[number], "product_variants">>;
};
type product_variantsChildrenGraph = {
 cart_item_product_variants: Array<Omit<cart_item_product_variantsGraph[number], "product_variants">>;
 collection_items_denormalized: Array<Omit<collection_items_denormalizedGraph[number], "product_variants">>;
 collection_products: Array<Omit<collection_productsGraph[number], "product_variants">>;
 order_items: Array<Omit<order_itemsGraph[number], "product_variants">>;
 product_variant_attachments: Array<Omit<product_variant_attachmentsGraph[number], "product_variants">>;
 product_variant_custom_content: Array<Omit<product_variant_custom_contentGraph[number], "product_variants">>;
 product_variant_custom_fields: Array<Omit<product_variant_custom_fieldsGraph[number], "product_variants">>;
 product_variant_option_values: Array<Omit<product_variant_option_valuesGraph[number], "product_variants">>;
 product_variant_sources: Array<Omit<product_variant_sourcesGraph[number], "product_variants">>;
};
type product_variantsGraph = Array<product_variantsScalars & product_variantsParentsGraph & product_variantsChildrenGraph>;
type productsParentsGraph = {
 brands: Array<Omit<brandsGraph[number], "products">>;
 product_categories_products_category_one_idToproduct_categories: Array<Omit<product_categoriesGraph[number], "products_products_category_one_idToproduct_categories">>;
 product_categories_products_category_three_idToproduct_categories: Array<Omit<product_categoriesGraph[number], "products_products_category_three_idToproduct_categories">>;
 product_categories_products_category_two_idToproduct_categories: Array<Omit<product_categoriesGraph[number], "products_products_category_two_idToproduct_categories">>;
};
type productsChildrenGraph = {
 collection_items_denormalized: Array<Omit<collection_items_denormalizedGraph[number], "products">>;
 collection_products: Array<Omit<collection_productsGraph[number], "products">>;
 product_attachments: Array<Omit<product_attachmentsGraph[number], "products">>;
 product_attributes: Array<Omit<product_attributesGraph[number], "products">>;
 product_custom_content: Array<Omit<product_custom_contentGraph[number], "products">>;
 product_custom_fields: Array<Omit<product_custom_fieldsGraph[number], "products">>;
 product_product_options: Array<Omit<product_product_optionsGraph[number], "products">>;
 product_variants: Array<Omit<product_variantsGraph[number], "products">>;
 recommended_products_recommended_products_paired_product_idToproducts: Array<Omit<recommended_productsGraph[number], "products_recommended_products_paired_product_idToproducts">>;
 recommended_products_recommended_products_product_idToproducts: Array<Omit<recommended_productsGraph[number], "products_recommended_products_product_idToproducts">>;
};
type productsGraph = Array<productsScalars & productsParentsGraph & productsChildrenGraph>;
type promo_codesParentsGraph = {

};
type promo_codesChildrenGraph = {
 cart_promo_codes: Array<Omit<cart_promo_codesGraph[number], "promo_codes">>;
 checkout_promo_codes: Array<Omit<checkout_promo_codesGraph[number], "promo_codes">>;
};
type promo_codesGraph = Array<promo_codesScalars & promo_codesParentsGraph & promo_codesChildrenGraph>;
type purchasesParentsGraph = {
 attachments: Array<Omit<attachmentsGraph[number], "purchases">>;
 clients: Array<Omit<clientsGraph[number], "purchases">>;
 experts: Array<Omit<expertsGraph[number], "purchases">>;
 vendors: Array<Omit<vendorsGraph[number], "purchases">>;
};
type purchasesChildrenGraph = {
 checkout_item_purchases: Array<Omit<checkout_item_purchasesGraph[number], "purchases">>;
};
type purchasesGraph = Array<purchasesScalars & purchasesParentsGraph & purchasesChildrenGraph>;
type recommended_productsParentsGraph = {
 products_recommended_products_paired_product_idToproducts: Array<Omit<productsGraph[number], "recommended_products_recommended_products_paired_product_idToproducts">>;
 products_recommended_products_product_idToproducts: Array<Omit<productsGraph[number], "recommended_products_recommended_products_product_idToproducts">>;
};
type recommended_productsChildrenGraph = {

};
type recommended_productsGraph = Array<recommended_productsScalars & recommended_productsParentsGraph & recommended_productsChildrenGraph>;
type refund_checkout_itemsParentsGraph = {
 checkout_items: Array<Omit<checkout_itemsGraph[number], "refund_checkout_items">>;
 refunds: Array<Omit<refundsGraph[number], "refund_checkout_items">>;
};
type refund_checkout_itemsChildrenGraph = {

};
type refund_checkout_itemsGraph = Array<refund_checkout_itemsScalars & refund_checkout_itemsParentsGraph & refund_checkout_itemsChildrenGraph>;
type refundsParentsGraph = {

};
type refundsChildrenGraph = {
 refund_checkout_items: Array<Omit<refund_checkout_itemsGraph[number], "refunds">>;
 refunds_credit_transactions: Array<Omit<refunds_credit_transactionsGraph[number], "refunds">>;
};
type refundsGraph = Array<refundsScalars & refundsParentsGraph & refundsChildrenGraph>;
type refunds_credit_transactionsParentsGraph = {
 credit_transactions: Array<Omit<credit_transactionsGraph[number], "refunds_credit_transactions">>;
 refunds: Array<Omit<refundsGraph[number], "refunds_credit_transactions">>;
};
type refunds_credit_transactionsChildrenGraph = {

};
type refunds_credit_transactionsGraph = Array<refunds_credit_transactionsScalars & refunds_credit_transactionsParentsGraph & refunds_credit_transactionsChildrenGraph>;
type regionsParentsGraph = {
 regions: Array<Omit<regionsGraph[number], "regions">>;
};
type regionsChildrenGraph = {
 expert_regions: Array<Omit<expert_regionsGraph[number], "regions">>;
 regions: Array<Omit<regionsGraph[number], "regions">>;
};
type regionsGraph = Array<regionsScalars & regionsParentsGraph & regionsChildrenGraph>;
type role_actionsParentsGraph = {
 actions: Array<Omit<actionsGraph[number], "role_actions">>;
 roles: Array<Omit<rolesGraph[number], "role_actions">>;
};
type role_actionsChildrenGraph = {

};
type role_actionsGraph = Array<role_actionsScalars & role_actionsParentsGraph & role_actionsChildrenGraph>;
type rolesParentsGraph = {

};
type rolesChildrenGraph = {
 admin_roles: Array<Omit<admin_rolesGraph[number], "roles">>;
 role_actions: Array<Omit<role_actionsGraph[number], "roles">>;
};
type rolesGraph = Array<rolesScalars & rolesParentsGraph & rolesChildrenGraph>;
type session_availabilitiesParentsGraph = {
 expert_user_availabilities: Array<Omit<expert_user_availabilitiesGraph[number], "session_availabilities">>;
 sessions: Array<Omit<sessionsGraph[number], "session_availabilities">>;
};
type session_availabilitiesChildrenGraph = {

};
type session_availabilitiesGraph = Array<session_availabilitiesScalars & session_availabilitiesParentsGraph & session_availabilitiesChildrenGraph>;
type session_client_attachmentsParentsGraph = {
 attachments: Array<Omit<attachmentsGraph[number], "session_client_attachments">>;
 session_clients: Array<Omit<session_clientsGraph[number], "session_client_attachments">>;
};
type session_client_attachmentsChildrenGraph = {

};
type session_client_attachmentsGraph = Array<session_client_attachmentsScalars & session_client_attachmentsParentsGraph & session_client_attachmentsChildrenGraph>;
type session_client_notificationsParentsGraph = {
 session_clients: Array<Omit<session_clientsGraph[number], "session_client_notifications">>;
};
type session_client_notificationsChildrenGraph = {

};
type session_client_notificationsGraph = Array<session_client_notificationsScalars & session_client_notificationsParentsGraph & session_client_notificationsChildrenGraph>;
type session_clientsParentsGraph = {
 clients: Array<Omit<clientsGraph[number], "session_clients">>;
 sessions: Array<Omit<sessionsGraph[number], "session_clients">>;
};
type session_clientsChildrenGraph = {
 checkout_item_session_bookings: Array<Omit<checkout_item_session_bookingsGraph[number], "session_clients">>;
 session_client_attachments: Array<Omit<session_client_attachmentsGraph[number], "session_clients">>;
 session_client_notifications: Array<Omit<session_client_notificationsGraph[number], "session_clients">>;
 session_reports: Array<Omit<session_reportsGraph[number], "session_clients">>;
 session_reviews: Array<Omit<session_reviewsGraph[number], "session_clients">>;
};
type session_clientsGraph = Array<session_clientsScalars & session_clientsParentsGraph & session_clientsChildrenGraph>;
type session_logsParentsGraph = {
 expert_users: Array<Omit<expert_usersGraph[number], "session_logs">>;
 sessions: Array<Omit<sessionsGraph[number], "session_logs">>;
};
type session_logsChildrenGraph = {

};
type session_logsGraph = Array<session_logsScalars & session_logsParentsGraph & session_logsChildrenGraph>;
type session_report_itemsParentsGraph = {
 attachments: Array<Omit<attachmentsGraph[number], "session_report_items">>;
 session_reports: Array<Omit<session_reportsGraph[number], "session_report_items">>;
};
type session_report_itemsChildrenGraph = {

};
type session_report_itemsGraph = Array<session_report_itemsScalars & session_report_itemsParentsGraph & session_report_itemsChildrenGraph>;
type session_reportsParentsGraph = {
 session_clients: Array<Omit<session_clientsGraph[number], "session_reports">>;
};
type session_reportsChildrenGraph = {
 files_and_notes_items: Array<Omit<files_and_notes_itemsGraph[number], "session_reports">>;
 session_report_items: Array<Omit<session_report_itemsGraph[number], "session_reports">>;
};
type session_reportsGraph = Array<session_reportsScalars & session_reportsParentsGraph & session_reportsChildrenGraph>;
type session_reviewsParentsGraph = {
 expert_users: Array<Omit<expert_usersGraph[number], "session_reviews">>;
 session_clients: Array<Omit<session_clientsGraph[number], "session_reviews">>;
};
type session_reviewsChildrenGraph = {

};
type session_reviewsGraph = Array<session_reviewsScalars & session_reviewsParentsGraph & session_reviewsChildrenGraph>;
type sessionsParentsGraph = {
 expert_sessions: Array<Omit<expert_sessionsGraph[number], "sessions">>;
 expert_users: Array<Omit<expert_usersGraph[number], "sessions">>;
 experts: Array<Omit<expertsGraph[number], "sessions">>;
};
type sessionsChildrenGraph = {
 session_availabilities: Array<Omit<session_availabilitiesGraph[number], "sessions">>;
 session_clients: Array<Omit<session_clientsGraph[number], "sessions">>;
 session_logs: Array<Omit<session_logsGraph[number], "sessions">>;
};
type sessionsGraph = Array<sessionsScalars & sessionsParentsGraph & sessionsChildrenGraph>;
type sourcesParentsGraph = {

};
type sourcesChildrenGraph = {
 cart_shipments: Array<Omit<cart_shipmentsGraph[number], "sources">>;
 order_shipments: Array<Omit<order_shipmentsGraph[number], "sources">>;
 product_variant_sources: Array<Omit<product_variant_sourcesGraph[number], "sources">>;
};
type sourcesGraph = Array<sourcesScalars & sourcesParentsGraph & sourcesChildrenGraph>;
type tagsParentsGraph = {

};
type tagsChildrenGraph = {
 expert_tags: Array<Omit<expert_tagsGraph[number], "tags">>;
};
type tagsGraph = Array<tagsScalars & tagsParentsGraph & tagsChildrenGraph>;
type trusted_sourcesParentsGraph = {

};
type trusted_sourcesChildrenGraph = {

};
type trusted_sourcesGraph = Array<trusted_sourcesScalars & trusted_sourcesParentsGraph & trusted_sourcesChildrenGraph>;
type vendorsParentsGraph = {
 attachments: Array<Omit<attachmentsGraph[number], "vendors">>;
};
type vendorsChildrenGraph = {
 purchases: Array<Omit<purchasesGraph[number], "vendors">>;
};
type vendorsGraph = Array<vendorsScalars & vendorsParentsGraph & vendorsChildrenGraph>;
type video_attachmentsParentsGraph = {

};
type video_attachmentsChildrenGraph = {
 cms_video_section_widgets: Array<Omit<cms_video_section_widgetsGraph[number], "video_attachments">>;
 cms_video_widgets: Array<Omit<cms_video_widgetsGraph[number], "video_attachments">>;
};
type video_attachmentsGraph = Array<video_attachmentsScalars & video_attachmentsParentsGraph & video_attachmentsChildrenGraph>;
export type SnapletClient = {
  actions: (inputs: actionsModel, options?: PlanOptions) => Plan;
  admin_roles: (inputs: admin_rolesModel, options?: PlanOptions) => Plan;
  admins: (inputs: adminsModel, options?: PlanOptions) => Plan;
  attachments: (inputs: attachmentsModel, options?: PlanOptions) => Plan;
  base_attachments: (inputs: base_attachmentsModel, options?: PlanOptions) => Plan;
  brands: (inputs: brandsModel, options?: PlanOptions) => Plan;
  cart_item_product_variants: (inputs: cart_item_product_variantsModel, options?: PlanOptions) => Plan;
  cart_item_shipments: (inputs: cart_item_shipmentsModel, options?: PlanOptions) => Plan;
  cart_items: (inputs: cart_itemsModel, options?: PlanOptions) => Plan;
  cart_promo_codes: (inputs: cart_promo_codesModel, options?: PlanOptions) => Plan;
  cart_shipment_arta_quote_services: (inputs: cart_shipment_arta_quote_servicesModel, options?: PlanOptions) => Plan;
  cart_shipment_arta_quotes: (inputs: cart_shipment_arta_quotesModel, options?: PlanOptions) => Plan;
  cart_shipment_freight_club_quotes: (inputs: cart_shipment_freight_club_quotesModel, options?: PlanOptions) => Plan;
  cart_shipment_vendor_quotes: (inputs: cart_shipment_vendor_quotesModel, options?: PlanOptions) => Plan;
  cart_shipments: (inputs: cart_shipmentsModel, options?: PlanOptions) => Plan;
  carts: (inputs: cartsModel, options?: PlanOptions) => Plan;
  categories: (inputs: categoriesModel, options?: PlanOptions) => Plan;
  checkout_client: (inputs: checkout_clientModel, options?: PlanOptions) => Plan;
  checkout_coupons: (inputs: checkout_couponsModel, options?: PlanOptions) => Plan;
  checkout_credit_transactions: (inputs: checkout_credit_transactionsModel, options?: PlanOptions) => Plan;
  checkout_guest_user: (inputs: checkout_guest_userModel, options?: PlanOptions) => Plan;
  checkout_item_coupons: (inputs: checkout_item_couponsModel, options?: PlanOptions) => Plan;
  checkout_item_order_items: (inputs: checkout_item_order_itemsModel, options?: PlanOptions) => Plan;
  checkout_item_purchases: (inputs: checkout_item_purchasesModel, options?: PlanOptions) => Plan;
  checkout_item_session_bookings: (inputs: checkout_item_session_bookingsModel, options?: PlanOptions) => Plan;
  checkout_item_shipments: (inputs: checkout_item_shipmentsModel, options?: PlanOptions) => Plan;
  checkout_items: (inputs: checkout_itemsModel, options?: PlanOptions) => Plan;
  checkout_promo_codes: (inputs: checkout_promo_codesModel, options?: PlanOptions) => Plan;
  checkouts: (inputs: checkoutsModel, options?: PlanOptions) => Plan;
  client_addresses: (inputs: client_addressesModel, options?: PlanOptions) => Plan;
  client_expert_availability_subscriptions: (inputs: client_expert_availability_subscriptionsModel, options?: PlanOptions) => Plan;
  client_experts_notifications: (inputs: client_experts_notificationsModel, options?: PlanOptions) => Plan;
  client_favorite_experts: (inputs: client_favorite_expertsModel, options?: PlanOptions) => Plan;
  client_warnings: (inputs: client_warningsModel, options?: PlanOptions) => Plan;
  clients: (inputs: clientsModel, options?: PlanOptions) => Plan;
  cms_alphabetical_index_widgets: (inputs: cms_alphabetical_index_widgetsModel, options?: PlanOptions) => Plan;
  cms_alt_experts_listing_widgets: (inputs: cms_alt_experts_listing_widgetsModel, options?: PlanOptions) => Plan;
  cms_alt_value_proposition_widgets: (inputs: cms_alt_value_proposition_widgetsModel, options?: PlanOptions) => Plan;
  cms_article_heading_widgets: (inputs: cms_article_heading_widgetsModel, options?: PlanOptions) => Plan;
  cms_article_pages: (inputs: cms_article_pagesModel, options?: PlanOptions) => Plan;
  cms_articles_widget_items: (inputs: cms_articles_widget_itemsModel, options?: PlanOptions) => Plan;
  cms_articles_widgets: (inputs: cms_articles_widgetsModel, options?: PlanOptions) => Plan;
  cms_banner_widgets: (inputs: cms_banner_widgetsModel, options?: PlanOptions) => Plan;
  cms_brand_pages: (inputs: cms_brand_pagesModel, options?: PlanOptions) => Plan;
  cms_card_navigation_widget_items: (inputs: cms_card_navigation_widget_itemsModel, options?: PlanOptions) => Plan;
  cms_card_navigation_widgets: (inputs: cms_card_navigation_widgetsModel, options?: PlanOptions) => Plan;
  cms_category_collection_widget_items: (inputs: cms_category_collection_widget_itemsModel, options?: PlanOptions) => Plan;
  cms_category_collection_widgets: (inputs: cms_category_collection_widgetsModel, options?: PlanOptions) => Plan;
  cms_category_header_widget_items: (inputs: cms_category_header_widget_itemsModel, options?: PlanOptions) => Plan;
  cms_category_header_widgets: (inputs: cms_category_header_widgetsModel, options?: PlanOptions) => Plan;
  cms_category_pages: (inputs: cms_category_pagesModel, options?: PlanOptions) => Plan;
  cms_collection_header_widgets: (inputs: cms_collection_header_widgetsModel, options?: PlanOptions) => Plan;
  cms_collections_carousel_widget_items: (inputs: cms_collections_carousel_widget_itemsModel, options?: PlanOptions) => Plan;
  cms_collections_carousel_widgets: (inputs: cms_collections_carousel_widgetsModel, options?: PlanOptions) => Plan;
  cms_concierge_widgets: (inputs: cms_concierge_widgetsModel, options?: PlanOptions) => Plan;
  cms_consultation_listing_widgets: (inputs: cms_consultation_listing_widgetsModel, options?: PlanOptions) => Plan;
  cms_consultation_pages: (inputs: cms_consultation_pagesModel, options?: PlanOptions) => Plan;
  cms_double_image_widgets: (inputs: cms_double_image_widgetsModel, options?: PlanOptions) => Plan;
  cms_expert_collections_widget_items: (inputs: cms_expert_collections_widget_itemsModel, options?: PlanOptions) => Plan;
  cms_expert_collections_widgets: (inputs: cms_expert_collections_widgetsModel, options?: PlanOptions) => Plan;
  cms_experts_listing_widgets: (inputs: cms_experts_listing_widgetsModel, options?: PlanOptions) => Plan;
  cms_experts_widget_items: (inputs: cms_experts_widget_itemsModel, options?: PlanOptions) => Plan;
  cms_experts_widgets: (inputs: cms_experts_widgetsModel, options?: PlanOptions) => Plan;
  cms_featured_in_widgets: (inputs: cms_featured_in_widgetsModel, options?: PlanOptions) => Plan;
  cms_gallery_widget_items: (inputs: cms_gallery_widget_itemsModel, options?: PlanOptions) => Plan;
  cms_gallery_widgets: (inputs: cms_gallery_widgetsModel, options?: PlanOptions) => Plan;
  cms_gift_card_widgets: (inputs: cms_gift_card_widgetsModel, options?: PlanOptions) => Plan;
  cms_help_listing_widgets: (inputs: cms_help_listing_widgetsModel, options?: PlanOptions) => Plan;
  cms_hero_carousel_widget_items: (inputs: cms_hero_carousel_widget_itemsModel, options?: PlanOptions) => Plan;
  cms_hero_carousel_widgets: (inputs: cms_hero_carousel_widgetsModel, options?: PlanOptions) => Plan;
  cms_hero_main_widgets: (inputs: cms_hero_main_widgetsModel, options?: PlanOptions) => Plan;
  cms_hero_widgets: (inputs: cms_hero_widgetsModel, options?: PlanOptions) => Plan;
  cms_info_cards_widgets: (inputs: cms_info_cards_widgetsModel, options?: PlanOptions) => Plan;
  cms_info_listing_widgets: (inputs: cms_info_listing_widgetsModel, options?: PlanOptions) => Plan;
  cms_introduction_widgets: (inputs: cms_introduction_widgetsModel, options?: PlanOptions) => Plan;
  cms_listing_widgets: (inputs: cms_listing_widgetsModel, options?: PlanOptions) => Plan;
  cms_multi_collection_widget_items: (inputs: cms_multi_collection_widget_itemsModel, options?: PlanOptions) => Plan;
  cms_multi_collection_widgets: (inputs: cms_multi_collection_widgetsModel, options?: PlanOptions) => Plan;
  cms_pages: (inputs: cms_pagesModel, options?: PlanOptions) => Plan;
  cms_products_widget_items: (inputs: cms_products_widget_itemsModel, options?: PlanOptions) => Plan;
  cms_products_widgets: (inputs: cms_products_widgetsModel, options?: PlanOptions) => Plan;
  cms_qa_widget_items: (inputs: cms_qa_widget_itemsModel, options?: PlanOptions) => Plan;
  cms_qa_widgets: (inputs: cms_qa_widgetsModel, options?: PlanOptions) => Plan;
  cms_quotation_listing_widgets: (inputs: cms_quotation_listing_widgetsModel, options?: PlanOptions) => Plan;
  cms_rich_text_widgets: (inputs: cms_rich_text_widgetsModel, options?: PlanOptions) => Plan;
  cms_section_widget_items: (inputs: cms_section_widget_itemsModel, options?: PlanOptions) => Plan;
  cms_section_widgets: (inputs: cms_section_widgetsModel, options?: PlanOptions) => Plan;
  cms_showroom_pages: (inputs: cms_showroom_pagesModel, options?: PlanOptions) => Plan;
  cms_single_image_widgets: (inputs: cms_single_image_widgetsModel, options?: PlanOptions) => Plan;
  cms_spotlight_widgets: (inputs: cms_spotlight_widgetsModel, options?: PlanOptions) => Plan;
  cms_testimonials_widget_items: (inputs: cms_testimonials_widget_itemsModel, options?: PlanOptions) => Plan;
  cms_testimonials_widgets: (inputs: cms_testimonials_widgetsModel, options?: PlanOptions) => Plan;
  cms_value_proposition_widgets: (inputs: cms_value_proposition_widgetsModel, options?: PlanOptions) => Plan;
  cms_video_section_widgets: (inputs: cms_video_section_widgetsModel, options?: PlanOptions) => Plan;
  cms_video_widgets: (inputs: cms_video_widgetsModel, options?: PlanOptions) => Plan;
  cms_widget_item_buttons: (inputs: cms_widget_item_buttonsModel, options?: PlanOptions) => Plan;
  cms_widget_item_headlines: (inputs: cms_widget_item_headlinesModel, options?: PlanOptions) => Plan;
  cms_widget_item_three_column_cards: (inputs: cms_widget_item_three_column_cardsModel, options?: PlanOptions) => Plan;
  cms_widget_item_two_column_cards: (inputs: cms_widget_item_two_column_cardsModel, options?: PlanOptions) => Plan;
  cms_widget_items: (inputs: cms_widget_itemsModel, options?: PlanOptions) => Plan;
  cms_widget_listing_widgets: (inputs: cms_widget_listing_widgetsModel, options?: PlanOptions) => Plan;
  cms_widgets: (inputs: cms_widgetsModel, options?: PlanOptions) => Plan;
  collection_items_denormalized: (inputs: collection_items_denormalizedModel, options?: PlanOptions) => Plan;
  collection_product_brands: (inputs: collection_product_brandsModel, options?: PlanOptions) => Plan;
  collection_products: (inputs: collection_productsModel, options?: PlanOptions) => Plan;
  collections: (inputs: collectionsModel, options?: PlanOptions) => Plan;
  collections_product_categories: (inputs: collections_product_categoriesModel, options?: PlanOptions) => Plan;
  commission_cart_item: (inputs: commission_cart_itemModel, options?: PlanOptions) => Plan;
  commission_expert: (inputs: commission_expertModel, options?: PlanOptions) => Plan;
  commission_order_item: (inputs: commission_order_itemModel, options?: PlanOptions) => Plan;
  commissions: (inputs: commissionsModel, options?: PlanOptions) => Plan;
  coupons: (inputs: couponsModel, options?: PlanOptions) => Plan;
  coupons_different_recipients: (inputs: coupons_different_recipientsModel, options?: PlanOptions) => Plan;
  coupons_settings: (inputs: coupons_settingsModel, options?: PlanOptions) => Plan;
  credit_transactions: (inputs: credit_transactionsModel, options?: PlanOptions) => Plan;
  currency_rates: (inputs: currency_ratesModel, options?: PlanOptions) => Plan;
  discounts: (inputs: discountsModel, options?: PlanOptions) => Plan;
  expert_application_categories: (inputs: expert_application_categoriesModel, options?: PlanOptions) => Plan;
  expert_applications: (inputs: expert_applicationsModel, options?: PlanOptions) => Plan;
  expert_attachments: (inputs: expert_attachmentsModel, options?: PlanOptions) => Plan;
  expert_categories: (inputs: expert_categoriesModel, options?: PlanOptions) => Plan;
  expert_expertises: (inputs: expert_expertisesModel, options?: PlanOptions) => Plan;
  expert_regions: (inputs: expert_regionsModel, options?: PlanOptions) => Plan;
  expert_sessions: (inputs: expert_sessionsModel, options?: PlanOptions) => Plan;
  expert_tags: (inputs: expert_tagsModel, options?: PlanOptions) => Plan;
  expert_testimonials: (inputs: expert_testimonialsModel, options?: PlanOptions) => Plan;
  expert_user_availabilities: (inputs: expert_user_availabilitiesModel, options?: PlanOptions) => Plan;
  expert_user_availabilities_analytics: (inputs: expert_user_availabilities_analyticsModel, options?: PlanOptions) => Plan;
  expert_user_availability_templates: (inputs: expert_user_availability_templatesModel, options?: PlanOptions) => Plan;
  expert_user_notification_emails: (inputs: expert_user_notification_emailsModel, options?: PlanOptions) => Plan;
  expert_users: (inputs: expert_usersModel, options?: PlanOptions) => Plan;
  expert_videos: (inputs: expert_videosModel, options?: PlanOptions) => Plan;
  expert_warnings: (inputs: expert_warningsModel, options?: PlanOptions) => Plan;
  experts: (inputs: expertsModel, options?: PlanOptions) => Plan;
  external_product_previews: (inputs: external_product_previewsModel, options?: PlanOptions) => Plan;
  feature_flag_client: (inputs: feature_flag_clientModel, options?: PlanOptions) => Plan;
  feature_flag_expert_user: (inputs: feature_flag_expert_userModel, options?: PlanOptions) => Plan;
  feature_flags: (inputs: feature_flagsModel, options?: PlanOptions) => Plan;
  files_and_notes_items: (inputs: files_and_notes_itemsModel, options?: PlanOptions) => Plan;
  guest_users: (inputs: guest_usersModel, options?: PlanOptions) => Plan;
  knex_migrations: (inputs: knex_migrationsModel, options?: PlanOptions) => Plan;
  knex_migrations_lock: (inputs: knex_migrations_lockModel, options?: PlanOptions) => Plan;
  navigation_groups: (inputs: navigation_groupsModel, options?: PlanOptions) => Plan;
  navigation_items: (inputs: navigation_itemsModel, options?: PlanOptions) => Plan;
  navigations: (inputs: navigationsModel, options?: PlanOptions) => Plan;
  order_cart: (inputs: order_cartModel, options?: PlanOptions) => Plan;
  order_clients: (inputs: order_clientsModel, options?: PlanOptions) => Plan;
  order_guest_users: (inputs: order_guest_usersModel, options?: PlanOptions) => Plan;
  order_item_shipments: (inputs: order_item_shipmentsModel, options?: PlanOptions) => Plan;
  order_items: (inputs: order_itemsModel, options?: PlanOptions) => Plan;
  order_notes: (inputs: order_notesModel, options?: PlanOptions) => Plan;
  order_sendgrid_events: (inputs: order_sendgrid_eventsModel, options?: PlanOptions) => Plan;
  order_shipment_arta_quote_services: (inputs: order_shipment_arta_quote_servicesModel, options?: PlanOptions) => Plan;
  order_shipment_arta_quotes: (inputs: order_shipment_arta_quotesModel, options?: PlanOptions) => Plan;
  order_shipment_freight_club_quotes: (inputs: order_shipment_freight_club_quotesModel, options?: PlanOptions) => Plan;
  order_shipments: (inputs: order_shipmentsModel, options?: PlanOptions) => Plan;
  order_shipments_vendor_shippings: (inputs: order_shipments_vendor_shippingsModel, options?: PlanOptions) => Plan;
  orders: (inputs: ordersModel, options?: PlanOptions) => Plan;
  product_attachments: (inputs: product_attachmentsModel, options?: PlanOptions) => Plan;
  product_attributes: (inputs: product_attributesModel, options?: PlanOptions) => Plan;
  product_categories: (inputs: product_categoriesModel, options?: PlanOptions) => Plan;
  product_custom_content: (inputs: product_custom_contentModel, options?: PlanOptions) => Plan;
  product_custom_fields: (inputs: product_custom_fieldsModel, options?: PlanOptions) => Plan;
  product_options: (inputs: product_optionsModel, options?: PlanOptions) => Plan;
  product_product_options: (inputs: product_product_optionsModel, options?: PlanOptions) => Plan;
  product_variant_attachments: (inputs: product_variant_attachmentsModel, options?: PlanOptions) => Plan;
  product_variant_custom_content: (inputs: product_variant_custom_contentModel, options?: PlanOptions) => Plan;
  product_variant_custom_fields: (inputs: product_variant_custom_fieldsModel, options?: PlanOptions) => Plan;
  product_variant_option_values: (inputs: product_variant_option_valuesModel, options?: PlanOptions) => Plan;
  product_variant_sources: (inputs: product_variant_sourcesModel, options?: PlanOptions) => Plan;
  product_variants: (inputs: product_variantsModel, options?: PlanOptions) => Plan;
  products: (inputs: productsModel, options?: PlanOptions) => Plan;
  promo_codes: (inputs: promo_codesModel, options?: PlanOptions) => Plan;
  purchases: (inputs: purchasesModel, options?: PlanOptions) => Plan;
  recommended_products: (inputs: recommended_productsModel, options?: PlanOptions) => Plan;
  refund_checkout_items: (inputs: refund_checkout_itemsModel, options?: PlanOptions) => Plan;
  refunds: (inputs: refundsModel, options?: PlanOptions) => Plan;
  refunds_credit_transactions: (inputs: refunds_credit_transactionsModel, options?: PlanOptions) => Plan;
  regions: (inputs: regionsModel, options?: PlanOptions) => Plan;
  role_actions: (inputs: role_actionsModel, options?: PlanOptions) => Plan;
  roles: (inputs: rolesModel, options?: PlanOptions) => Plan;
  session_availabilities: (inputs: session_availabilitiesModel, options?: PlanOptions) => Plan;
  session_client_attachments: (inputs: session_client_attachmentsModel, options?: PlanOptions) => Plan;
  session_client_notifications: (inputs: session_client_notificationsModel, options?: PlanOptions) => Plan;
  session_clients: (inputs: session_clientsModel, options?: PlanOptions) => Plan;
  session_logs: (inputs: session_logsModel, options?: PlanOptions) => Plan;
  session_report_items: (inputs: session_report_itemsModel, options?: PlanOptions) => Plan;
  session_reports: (inputs: session_reportsModel, options?: PlanOptions) => Plan;
  session_reviews: (inputs: session_reviewsModel, options?: PlanOptions) => Plan;
  sessions: (inputs: sessionsModel, options?: PlanOptions) => Plan;
  sources: (inputs: sourcesModel, options?: PlanOptions) => Plan;
  tags: (inputs: tagsModel, options?: PlanOptions) => Plan;
  trusted_sources: (inputs: trusted_sourcesModel, options?: PlanOptions) => Plan;
  vendors: (inputs: vendorsModel, options?: PlanOptions) => Plan;
  video_attachments: (inputs: video_attachmentsModel, options?: PlanOptions) => Plan;
};