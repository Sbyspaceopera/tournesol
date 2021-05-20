/**
 * Tournesol API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The PatchedVideoCommentsSerializerV2 model module.
 * @module model/PatchedVideoCommentsSerializerV2
 * @version 2.0.0
 */
class PatchedVideoCommentsSerializerV2 {
    /**
     * Constructs a new <code>PatchedVideoCommentsSerializerV2</code>.
     * Serialize comments.
     * @alias module:model/PatchedVideoCommentsSerializerV2
     */
    constructor() { 
        
        PatchedVideoCommentsSerializerV2.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PatchedVideoCommentsSerializerV2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PatchedVideoCommentsSerializerV2} obj Optional instance to populate.
     * @return {module:model/PatchedVideoCommentsSerializerV2} The populated <code>PatchedVideoCommentsSerializerV2</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PatchedVideoCommentsSerializerV2();

            if (data.hasOwnProperty('user')) {
                obj['user'] = ApiClient.convertToType(data['user'], 'Number');
            }
            if (data.hasOwnProperty('video')) {
                obj['video'] = ApiClient.convertToType(data['video'], 'String');
            }
            if (data.hasOwnProperty('parent_comment')) {
                obj['parent_comment'] = ApiClient.convertToType(data['parent_comment'], 'Number');
            }
            if (data.hasOwnProperty('comment')) {
                obj['comment'] = ApiClient.convertToType(data['comment'], 'String');
            }
            if (data.hasOwnProperty('username')) {
                obj['username'] = ApiClient.convertToType(data['username'], 'String');
            }
            if (data.hasOwnProperty('anonymized_username_id')) {
                obj['anonymized_username_id'] = ApiClient.convertToType(data['anonymized_username_id'], 'Number');
            }
            if (data.hasOwnProperty('datetime_lastedit')) {
                obj['datetime_lastedit'] = ApiClient.convertToType(data['datetime_lastedit'], 'Date');
            }
            if (data.hasOwnProperty('datetime_add')) {
                obj['datetime_add'] = ApiClient.convertToType(data['datetime_add'], 'Date');
            }
            if (data.hasOwnProperty('votes_plus')) {
                obj['votes_plus'] = ApiClient.convertToType(data['votes_plus'], 'Number');
            }
            if (data.hasOwnProperty('anonymous')) {
                obj['anonymous'] = ApiClient.convertToType(data['anonymous'], 'Boolean');
            }
            if (data.hasOwnProperty('votes_minus')) {
                obj['votes_minus'] = ApiClient.convertToType(data['votes_minus'], 'Number');
            }
            if (data.hasOwnProperty('red_flags')) {
                obj['red_flags'] = ApiClient.convertToType(data['red_flags'], 'Number');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('children')) {
                obj['children'] = ApiClient.convertToType(data['children'], 'Number');
            }
            if (data.hasOwnProperty('datetime_add_ago')) {
                obj['datetime_add_ago'] = ApiClient.convertToType(data['datetime_add_ago'], 'String');
            }
            if (data.hasOwnProperty('edited_m_added_s')) {
                obj['edited_m_added_s'] = ApiClient.convertToType(data['edited_m_added_s'], 'Number');
            }
            if (data.hasOwnProperty('largely_recommended')) {
                obj['largely_recommended'] = ApiClient.convertToType(data['largely_recommended'], 'Boolean');
            }
            if (data.hasOwnProperty('reliability')) {
                obj['reliability'] = ApiClient.convertToType(data['reliability'], 'Boolean');
            }
            if (data.hasOwnProperty('importance')) {
                obj['importance'] = ApiClient.convertToType(data['importance'], 'Boolean');
            }
            if (data.hasOwnProperty('engaging')) {
                obj['engaging'] = ApiClient.convertToType(data['engaging'], 'Boolean');
            }
            if (data.hasOwnProperty('pedagogy')) {
                obj['pedagogy'] = ApiClient.convertToType(data['pedagogy'], 'Boolean');
            }
            if (data.hasOwnProperty('layman_friendly')) {
                obj['layman_friendly'] = ApiClient.convertToType(data['layman_friendly'], 'Boolean');
            }
            if (data.hasOwnProperty('diversity_inclusion')) {
                obj['diversity_inclusion'] = ApiClient.convertToType(data['diversity_inclusion'], 'Boolean');
            }
            if (data.hasOwnProperty('backfire_risk')) {
                obj['backfire_risk'] = ApiClient.convertToType(data['backfire_risk'], 'Boolean');
            }
            if (data.hasOwnProperty('better_habits')) {
                obj['better_habits'] = ApiClient.convertToType(data['better_habits'], 'Boolean');
            }
            if (data.hasOwnProperty('entertaining_relaxing')) {
                obj['entertaining_relaxing'] = ApiClient.convertToType(data['entertaining_relaxing'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} user
 */
PatchedVideoCommentsSerializerV2.prototype['user'] = undefined;

/**
 * @member {String} video
 */
PatchedVideoCommentsSerializerV2.prototype['video'] = undefined;

/**
 * @member {Number} parent_comment
 */
PatchedVideoCommentsSerializerV2.prototype['parent_comment'] = undefined;

/**
 * Comment body text/html
 * @member {String} comment
 */
PatchedVideoCommentsSerializerV2.prototype['comment'] = undefined;

/**
 * User username
 * @member {String} username
 */
PatchedVideoCommentsSerializerV2.prototype['username'] = undefined;

/**
 * ID of the hash of the username
 * @member {Number} anonymized_username_id
 */
PatchedVideoCommentsSerializerV2.prototype['anonymized_username_id'] = undefined;

/**
 * Time the comment was edited the last time
 * @member {Date} datetime_lastedit
 */
PatchedVideoCommentsSerializerV2.prototype['datetime_lastedit'] = undefined;

/**
 * Time the comment was added
 * @member {Date} datetime_add
 */
PatchedVideoCommentsSerializerV2.prototype['datetime_add'] = undefined;

/**
 * Number of likes
 * @member {Number} votes_plus
 */
PatchedVideoCommentsSerializerV2.prototype['votes_plus'] = undefined;

/**
 * Do not show author's username
 * @member {Boolean} anonymous
 */
PatchedVideoCommentsSerializerV2.prototype['anonymous'] = undefined;

/**
 * Number of dislikes
 * @member {Number} votes_minus
 */
PatchedVideoCommentsSerializerV2.prototype['votes_minus'] = undefined;

/**
 * Number of red flags
 * @member {Number} red_flags
 */
PatchedVideoCommentsSerializerV2.prototype['red_flags'] = undefined;

/**
 * @member {Number} id
 */
PatchedVideoCommentsSerializerV2.prototype['id'] = undefined;

/**
 * Number of children comments
 * @member {Number} children
 */
PatchedVideoCommentsSerializerV2.prototype['children'] = undefined;

/**
 * Human-readable x time units ago
 * @member {String} datetime_add_ago
 */
PatchedVideoCommentsSerializerV2.prototype['datetime_add_ago'] = undefined;

/**
 * Edited minus created time in seconds
 * @member {Number} edited_m_added_s
 */
PatchedVideoCommentsSerializerV2.prototype['edited_m_added_s'] = undefined;

/**
 * Should be largely recommended
 * @member {Boolean} largely_recommended
 */
PatchedVideoCommentsSerializerV2.prototype['largely_recommended'] = undefined;

/**
 * Reliable and not misleading
 * @member {Boolean} reliability
 */
PatchedVideoCommentsSerializerV2.prototype['reliability'] = undefined;

/**
 * Important and actionable
 * @member {Boolean} importance
 */
PatchedVideoCommentsSerializerV2.prototype['importance'] = undefined;

/**
 * Engaging and thought-provoking
 * @member {Boolean} engaging
 */
PatchedVideoCommentsSerializerV2.prototype['engaging'] = undefined;

/**
 * Clear and pedagogical
 * @member {Boolean} pedagogy
 */
PatchedVideoCommentsSerializerV2.prototype['pedagogy'] = undefined;

/**
 * Layman-friendly
 * @member {Boolean} layman_friendly
 */
PatchedVideoCommentsSerializerV2.prototype['layman_friendly'] = undefined;

/**
 * Diversity and Inclusion
 * @member {Boolean} diversity_inclusion
 */
PatchedVideoCommentsSerializerV2.prototype['diversity_inclusion'] = undefined;

/**
 * Resilience to backfiring risks
 * @member {Boolean} backfire_risk
 */
PatchedVideoCommentsSerializerV2.prototype['backfire_risk'] = undefined;

/**
 * Encourages better habits
 * @member {Boolean} better_habits
 */
PatchedVideoCommentsSerializerV2.prototype['better_habits'] = undefined;

/**
 * Entertaining and relaxing
 * @member {Boolean} entertaining_relaxing
 */
PatchedVideoCommentsSerializerV2.prototype['entertaining_relaxing'] = undefined;






export default PatchedVideoCommentsSerializerV2;

