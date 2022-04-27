import{_ as t,d}from"./app.c0db0540.js";const e={},o=d('<h1 id="\u9891\u9053\u76F8\u5173api" tabindex="-1"><a class="header-anchor" href="#\u9891\u9053\u76F8\u5173api" aria-hidden="true">#</a> \u9891\u9053\u76F8\u5173API</h1><blockquote><p>\u6CE8\u610F: QQ\u9891\u9053\u529F\u80FD\u76EE\u524D\u8FD8\u5728\u6D4B\u8BD5\u9636\u6BB5, go-cqhttp \u4E5F\u5728\u9002\u914D\u7684\u521D\u671F\u9636\u6BB5, \u4EE5\u4E0B <code>API</code> <code>Event</code> \u7684\u5B57\u6BB5\u540D\u53EF\u80FD\u5B58\u5728\u9519\u8BEF\u5E76\u5747\u6709\u53EF\u80FD\u5728\u540E\u7EED\u7248\u672C\u4FEE\u6539/\u6DFB\u52A0/\u5220\u9664. \u76EE\u524D\u4EC5\u4F9B\u5F00\u53D1\u8005\u6D4B\u8BD5\u4EE5\u53CA\u9002\u914D\u4F7F\u7528</p></blockquote><p>QQ\u9891\u9053\u76F8\u5173\u529F\u80FD\u7684\u4E8B\u4EF6\u4EE5\u53CAAPI</p><h2 id="\u547D\u540D\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#\u547D\u540D\u8BF4\u660E" aria-hidden="true">#</a> \u547D\u540D\u8BF4\u660E</h2><p>API\u4EE5\u53CA\u5B57\u6BB5\u76F8\u5173\u547D\u540D\u5747\u4E3A\u53C2\u8003QQ\u5B98\u65B9\u547D\u540D\u6216\u76F8\u4F3C\u4EA7\u54C1\u547D\u540D\u89C4\u5219, \u7531\u4E8EQQ\u9891\u9053\u7684\u8D26\u53F7\u7CFB\u7EDF\u72EC\u7ACB\u4E8EQQ\u672C\u4F53, \u6240\u4EE5\u5404\u4E2A <code>ID</code> \u5E76\u4E0D\u80FD\u548CQQ\u901A\u7528.\u4E5F\u65E0\u6CD5\u901A\u8FC7 <code>tiny_id</code> \u83B7\u53D6\u5230 <code>QQ\u53F7</code></p><p>\u4E0B\u8868\u4E3A\u5E38\u89C1\u5B57\u6BB5\u547D\u540D\u8BF4\u660E</p><table><thead><tr><th>\u547D\u540D</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td><code>tiny_id</code></td><td>\u5728\u9891\u9053\u7CFB\u7EDF\u4E2D\u4EE3\u8868\u7528\u6237ID, \u4E0EQQ\u53F7\u5E76\u4E0D\u901A\u7528</td></tr><tr><td><code>guild_id</code></td><td>\u9891\u9053ID</td></tr><tr><td><code>channel_id</code></td><td>\u5B50\u9891\u9053ID</td></tr></tbody></table><blockquote><p>\u6240\u6709\u9891\u9053\u76F8\u5173\u4E8B\u4EF6\u7684 <code>user_id</code> \u5747\u4E3A <code>tiny_id</code></p></blockquote><h2 id="\u7279\u6B8A\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#\u7279\u6B8A\u8BF4\u660E" aria-hidden="true">#</a> \u7279\u6B8A\u8BF4\u660E</h2><ul><li>\u7531\u4E8E\u9891\u9053\u7684\u9650\u5236, \u76EE\u524D\u65E0\u6CD5\u901A\u8FC7\u56FE\u7247\u6458\u8981\u67E5\u8BE2\u5230\u9891\u9053\u56FE\u7247\u6D88\u606F\u7684\u8BE6\u7EC6\u4FE1\u606F, \u6240\u4EE5\u901A\u8FC7\u9891\u9053\u6D88\u606F\u6536\u5230\u7684\u56FE\u7247\u5747\u4F1A\u4E0B\u8F7D\u5B8C\u6574\u6587\u4EF6\u5230 <code>images/guild-images</code>. (\u7FA4\u56FE\u7247\u8F6C\u53D1\u4E0D\u53D7\u6B64\u9650\u5236)</li><li>\u7531\u4E8E\u65E0\u6CD5\u901A\u8FC7 <code>GlobalID</code> \u653E\u4E0B\u9891\u9053\u6D88\u606F\u7684ID, \u6240\u4EE5\u6240\u6709\u9891\u9053\u6D88\u606F\u7684 <code>message_id</code> \u5747\u4E3A <code>string</code> \u7C7B\u578B</li><li><code>send_msg</code> API\u5C06\u65E0\u6CD5\u53D1\u9001\u9891\u9053\u6D88\u606F</li><li><code>get_msg</code> API\u6682\u65F6\u65E0\u6CD5\u83B7\u53D6\u9891\u9053\u6D88\u606F</li><li><code>reply</code> \u7B49\u6D88\u606F\u7C7B\u578B\u6682\u4E0D\u652F\u6301\u89E3\u6790</li><li><code>at</code> \u6D88\u606F\u7684 <code>target</code> \u4F9D\u7136\u4F7F\u7528 <code>qq</code> \u5B57\u6BB5, \u4EE5\u4FDD\u8BC1\u4E00\u81F4\u6027. \u4F46\u5185\u5BB9\u4E3A <code>tiny_id</code></li><li>\u6240\u6709\u4E8B\u4EF6\u7684 <code>self_id</code> \u5747\u4E3A BOT \u7684QQ\u53F7. <code>tiny_id</code> \u5C06\u653E\u5728 <code>self_tiny_id</code> \u5B57\u6BB5</li><li>\u9075\u5FAA\u6211\u4EEC\u4E00\u8D2F\u7684\u539F\u5219, \u5C06\u4E0D\u4F1A\u652F\u6301\u4E3B\u52A8\u52A0\u9891\u9053/\u4E3B\u52A8\u62C9\u4EBA/\u7EA2\u5305\u76F8\u5173\u6D88\u606F\u7C7B\u578B</li><li>\u9891\u9053\u76F8\u5173\u7684API\u4EC5\u80FD\u5728 <code>Android Phone</code> \u548C <code>iPad</code> \u534F\u8BAE\u4E0A\u4F7F\u7528.</li><li>\u7531\u4E8E\u9891\u9053\u76F8\u5173ID\u7684\u6570\u636E\u7C7B\u578B\u5747\u4E3A <code>uint64</code> , \u4E3A\u4FDD\u8BC1\u4E0D\u8D85\u8FC7\u67D0\u4E9B\u8BED\u8A00\u7684\u5B89\u5168\u503C\u8303\u56F4, \u5728 <code>v1.0.0-beta8-fix3</code> \u4EE5\u540E, \u6240\u6709ID\u76F8\u5173\u6570\u636E\u5C06\u8F6C\u6362\u4E3A <code>string</code> \u7C7B\u578B, API\u8C03\u7528 <code>uint64</code> \u6216 <code>string</code> \u5747\u53EF\u63A5\u53D7.</li><li>\u4E3A\u4FDD\u8BC1\u4E00\u81F4\u6027, \u6240\u6709\u9891\u9053\u63A5\u53E3\u8FD4\u56DE\u7684 <code>\u7528\u6237ID</code> \u5747\u547D\u540D\u4E3A <code>tiny_id</code>, \u6240\u6709\u9891\u9053\u76F8\u5173\u63A5\u53E3\u7684 <code>\u7528\u6237ID</code> \u5165\u53C2\u5747\u547D\u540D\u4E3A <code>user_id</code></li></ul><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2><h3 id="\u83B7\u53D6\u9891\u9053\u7CFB\u7EDF\u5185bot\u7684\u8D44\u6599" tabindex="-1"><a class="header-anchor" href="#\u83B7\u53D6\u9891\u9053\u7CFB\u7EDF\u5185bot\u7684\u8D44\u6599" aria-hidden="true">#</a> \u83B7\u53D6\u9891\u9053\u7CFB\u7EDF\u5185BOT\u7684\u8D44\u6599</h3><p>\u7EC8\u7ED3\u70B9: <code>/get_guild_service_profile</code></p><p><strong>\u54CD\u5E94\u6570\u636E</strong></p><table><thead><tr><th>\u5B57\u6BB5</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td><code>nickname</code></td><td>string</td><td>\u6635\u79F0</td></tr><tr><td><code>tiny_id</code></td><td>string</td><td>\u81EA\u8EAB\u7684ID</td></tr><tr><td><code>avatar_url</code></td><td>string</td><td>\u5934\u50CF\u94FE\u63A5</td></tr></tbody></table><h3 id="\u83B7\u53D6\u9891\u9053\u5217\u8868" tabindex="-1"><a class="header-anchor" href="#\u83B7\u53D6\u9891\u9053\u5217\u8868" aria-hidden="true">#</a> \u83B7\u53D6\u9891\u9053\u5217\u8868</h3><p>\u7EC8\u7ED3\u70B9: <code>/get_guild_list</code></p><p><strong>\u54CD\u5E94\u6570\u636E</strong></p><p>\u6B63\u5E38\u60C5\u51B5\u4E0B\u54CD\u5E94 <code>GuildInfo</code> \u6570\u7EC4, \u672A\u52A0\u5165\u4EFB\u4F55\u9891\u9053\u54CD\u5E94 <code>null</code></p><p>GuildInfo:</p><table><thead><tr><th>\u5B57\u6BB5</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td><code>guild_id</code></td><td>string</td><td>\u9891\u9053ID</td></tr><tr><td><code>guild_name</code></td><td>string</td><td>\u9891\u9053\u540D\u79F0</td></tr><tr><td><code>guild_display_id</code></td><td>int64</td><td>\u9891\u9053\u663E\u793AID, \u516C\u6D4B\u540E\u53EF\u80FD\u4F5C\u4E3A\u641C\u7D22ID\u4F7F\u7528</td></tr></tbody></table><h3 id="\u901A\u8FC7\u8BBF\u5BA2\u83B7\u53D6\u9891\u9053\u5143\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u901A\u8FC7\u8BBF\u5BA2\u83B7\u53D6\u9891\u9053\u5143\u6570\u636E" aria-hidden="true">#</a> \u901A\u8FC7\u8BBF\u5BA2\u83B7\u53D6\u9891\u9053\u5143\u6570\u636E</h3><p>\u7EC8\u7ED3\u70B9: <code>/get_guild_meta_by_guest</code></p><p><strong>\u53C2\u6570</strong></p><table><thead><tr><th>\u5B57\u6BB5</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td><code>guild_id</code></td><td>string</td><td>\u9891\u9053ID</td></tr></tbody></table><p><strong>\u54CD\u5E94\u6570\u636E</strong></p><table><thead><tr><th>\u5B57\u6BB5</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td><code>guild_id</code></td><td>string</td><td>\u9891\u9053ID</td></tr><tr><td><code>guild_name</code></td><td>string</td><td>\u9891\u9053\u540D\u79F0</td></tr><tr><td><code>guild_profile</code></td><td>string</td><td>\u9891\u9053\u7B80\u4ECB</td></tr><tr><td><code>create_time</code></td><td>int64</td><td>\u521B\u5EFA\u65F6\u95F4</td></tr><tr><td><code>max_member_count</code></td><td>int64</td><td>\u9891\u9053\u4EBA\u6570\u4E0A\u9650</td></tr><tr><td><code>max_robot_count</code></td><td>int64</td><td>\u9891\u9053BOT\u6570\u4E0A\u9650</td></tr><tr><td><code>max_admin_count</code></td><td>int64</td><td>\u9891\u9053\u7BA1\u7406\u5458\u4EBA\u6570\u4E0A\u9650</td></tr><tr><td><code>member_count</code></td><td>int64</td><td>\u5DF2\u52A0\u5165\u4EBA\u6570</td></tr><tr><td><code>owner_id</code></td><td>string</td><td>\u521B\u5EFA\u8005ID</td></tr></tbody></table><h3 id="\u83B7\u53D6\u5B50\u9891\u9053\u5217\u8868" tabindex="-1"><a class="header-anchor" href="#\u83B7\u53D6\u5B50\u9891\u9053\u5217\u8868" aria-hidden="true">#</a> \u83B7\u53D6\u5B50\u9891\u9053\u5217\u8868</h3><p>\u7EC8\u7ED3\u70B9: <code>/get_guild_channel_list</code></p><p><strong>\u53C2\u6570</strong></p><table><thead><tr><th>\u5B57\u6BB5</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td><code>guild_id</code></td><td>string</td><td>\u9891\u9053ID</td></tr><tr><td><code>no_cache</code></td><td>bool</td><td>\u662F\u5426\u65E0\u89C6\u7F13\u5B58</td></tr></tbody></table><p><strong>\u54CD\u5E94\u6570\u636E</strong></p><p>\u6B63\u5E38\u60C5\u51B5\u4E0B\u54CD\u5E94 <code>ChannelInfo</code> \u6570\u7EC4, \u672A\u627E\u5230\u4EFB\u4F55\u5B50\u9891\u9053\u54CD\u5E94 <code>null</code></p><p>ChannelInfo:</p><table><thead><tr><th>\u5B57\u6BB5</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td><code>owner_guild_id</code></td><td>string</td><td>\u6240\u5C5E\u9891\u9053ID</td></tr><tr><td><code>channel_id</code></td><td>string</td><td>\u5B50\u9891\u9053ID</td></tr><tr><td><code>channel_type</code></td><td>int32</td><td>\u5B50\u9891\u9053\u7C7B\u578B</td></tr><tr><td><code>channel_name</code></td><td>string</td><td>\u5B50\u9891\u9053\u540D\u79F0</td></tr><tr><td><code>create_time</code></td><td>int64</td><td>\u521B\u5EFA\u65F6\u95F4</td></tr><tr><td><code>creator_tiny_id</code></td><td>string</td><td>\u521B\u5EFA\u8005ID</td></tr><tr><td><code>talk_permission</code></td><td>int32</td><td>\u53D1\u8A00\u6743\u9650\u7C7B\u578B</td></tr><tr><td><code>visible_type</code></td><td>int32</td><td>\u53EF\u89C6\u6027\u7C7B\u578B</td></tr><tr><td><code>current_slow_mode</code></td><td>int32</td><td>\u5F53\u524D\u542F\u7528\u7684\u6162\u901F\u6A21\u5F0FKey</td></tr><tr><td><code>slow_modes</code></td><td>[]SlowModeInfo</td><td>\u9891\u9053\u5185\u53EF\u7528\u6162\u901F\u6A21\u5F0F\u7C7B\u578B\u5217\u8868</td></tr></tbody></table><p>SlowModeInfo:</p><table><thead><tr><th>\u5B57\u6BB5</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td><code>slow_mode_key</code></td><td>int32</td><td>\u6162\u901F\u6A21\u5F0FKey</td></tr><tr><td><code>slow_mode_text</code></td><td>string</td><td>\u6162\u901F\u6A21\u5F0F\u8BF4\u660E</td></tr><tr><td><code>speak_frequency</code></td><td>int32</td><td>\u5468\u671F\u5185\u53D1\u8A00\u9891\u7387\u9650\u5236</td></tr><tr><td><code>slow_mode_circle</code></td><td>int32</td><td>\u5355\u4F4D\u5468\u671F\u65F6\u95F4, \u5355\u4F4D\u79D2</td></tr></tbody></table><p>\u5DF2\u77E5\u5B50\u9891\u9053\u7C7B\u578B\u5217\u8868</p><table><thead><tr><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>1</td><td>\u6587\u5B57\u9891\u9053</td></tr><tr><td>2</td><td>\u8BED\u97F3\u9891\u9053</td></tr><tr><td>5</td><td>\u76F4\u64AD\u9891\u9053</td></tr><tr><td>7</td><td>\u4E3B\u9898\u9891\u9053</td></tr></tbody></table><h3 id="\u83B7\u53D6\u9891\u9053\u6210\u5458\u5217\u8868" tabindex="-1"><a class="header-anchor" href="#\u83B7\u53D6\u9891\u9053\u6210\u5458\u5217\u8868" aria-hidden="true">#</a> \u83B7\u53D6\u9891\u9053\u6210\u5458\u5217\u8868</h3><p>\u7EC8\u7ED3\u70B9: <code>/get_guild_member_list</code></p><blockquote><p>\u7531\u4E8E\u9891\u9053\u4EBA\u6570\u8F83\u591A(\u6570\u4E07), \u8BF7\u5C3D\u91CF\u4E0D\u8981\u5168\u91CF\u62C9\u53D6\u6210\u5458\u5217\u8868, \u8FD9\u5C06\u4F1A\u5BFC\u81F4\u4E25\u91CD\u7684\u6027\u80FD\u95EE\u9898</p><p>\u5C3D\u91CF\u4F7F\u7528 <code>get_guild_member_profile</code> \u63A5\u53E3\u4EE3\u66FF\u5168\u91CF\u62C9\u53D6</p></blockquote><p><strong>\u53C2\u6570</strong></p><table><thead><tr><th>\u5B57\u6BB5</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td><code>guild_id</code></td><td>string</td><td>\u9891\u9053ID</td></tr><tr><td><code>next_token</code></td><td>string</td><td>\u7FFB\u9875Token</td></tr></tbody></table><blockquote><p><code>next_token</code> \u4E3A\u7A7A\u7684\u60C5\u51B5\u4E0B, \u5C06\u8FD4\u56DE\u7B2C\u4E00\u9875\u7684\u6570\u636E, \u5E76\u5728\u8FD4\u56DE\u503C\u9644\u5E26\u4E0B\u4E00\u9875\u7684 <code>token</code></p></blockquote><p><strong>\u54CD\u5E94\u6570\u636E</strong></p><table><thead><tr><th>\u5B57\u6BB5</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td><code>members</code></td><td>[]GuildMemberInfo</td><td>\u6210\u5458\u5217\u8868</td></tr><tr><td><code>finished</code></td><td>bool</td><td>\u662F\u5426\u6700\u7EC8\u9875</td></tr><tr><td><code>next_token</code></td><td>string</td><td>\u7FFB\u9875Token</td></tr></tbody></table><p>GuildMemberInfo:</p><table><thead><tr><th>\u5B57\u6BB5</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td><code>tiny_id</code></td><td>string</td><td>\u6210\u5458ID</td></tr><tr><td><code>title</code></td><td>string</td><td>\u6210\u5458\u5934\u8854</td></tr><tr><td><code>nickname</code></td><td>string</td><td>\u6210\u5458\u6635\u79F0</td></tr><tr><td><code>role_id</code></td><td>string</td><td>\u6240\u5728\u6743\u9650\u7EC4ID</td></tr><tr><td><code>role_name</code></td><td>string</td><td>\u6240\u5728\u6743\u9650\u7EC4\u540D\u79F0</td></tr></tbody></table><blockquote><p>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u9891\u9053\u7BA1\u7406\u5458\u7684\u6743\u9650\u7EC4ID\u4E3A <code>2</code>, \u90E8\u5206\u9891\u9053\u53EF\u80FD\u4F1A\u53E6\u884C\u521B\u5EFA, \u9700\u624B\u52A8\u5224\u65AD</p><p>\u6B64\u63A5\u53E3\u4EC5\u5C55\u73B0\u6700\u65B0\u7684\u6743\u9650\u7EC4, \u83B7\u53D6\u7528\u6237\u52A0\u5165\u7684\u6240\u6709\u6743\u9650\u7EC4\u8BF7\u4F7F\u7528 <code>get_guild_member_profile</code> \u63A5\u53E3</p></blockquote><h3 id="\u5355\u72EC\u83B7\u53D6\u9891\u9053\u6210\u5458\u4FE1\u606F" tabindex="-1"><a class="header-anchor" href="#\u5355\u72EC\u83B7\u53D6\u9891\u9053\u6210\u5458\u4FE1\u606F" aria-hidden="true">#</a> \u5355\u72EC\u83B7\u53D6\u9891\u9053\u6210\u5458\u4FE1\u606F</h3><p>\u7EC8\u7ED3\u70B9: <code>/get_guild_member_profile</code></p><p><strong>\u53C2\u6570</strong></p><table><thead><tr><th>\u5B57\u6BB5</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td><code>guild_id</code></td><td>string</td><td>\u9891\u9053ID</td></tr><tr><td><code>user_id</code></td><td>string</td><td>\u7528\u6237ID</td></tr></tbody></table><p><strong>\u54CD\u5E94\u6570\u636E</strong></p><table><thead><tr><th>\u5B57\u6BB5</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td><code>tiny_id</code></td><td>string</td><td>\u7528\u6237ID</td></tr><tr><td><code>nickname</code></td><td>string</td><td>\u7528\u6237\u6635\u79F0</td></tr><tr><td><code>avatar_url</code></td><td>string</td><td>\u5934\u50CF\u5730\u5740</td></tr><tr><td><code>join_time</code></td><td>int64</td><td>\u52A0\u5165\u65F6\u95F4</td></tr><tr><td><code>roles</code></td><td>[]RoleInfo</td><td>\u52A0\u5165\u7684\u6240\u6709\u6743\u9650\u7EC4</td></tr></tbody></table><p>RoleInfo:</p><table><thead><tr><th>\u5B57\u6BB5</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td><code>role_id</code></td><td>string</td><td>\u6743\u9650\u7EC4ID</td></tr><tr><td><code>role_name</code></td><td>string</td><td>\u6743\u9650\u7EC4\u540D\u79F0</td></tr></tbody></table><h3 id="\u53D1\u9001\u4FE1\u606F\u5230\u5B50\u9891\u9053" tabindex="-1"><a class="header-anchor" href="#\u53D1\u9001\u4FE1\u606F\u5230\u5B50\u9891\u9053" aria-hidden="true">#</a> \u53D1\u9001\u4FE1\u606F\u5230\u5B50\u9891\u9053</h3><p>\u7EC8\u7ED3\u70B9: <code>/send_guild_channel_msg</code></p><p><strong>\u53C2\u6570</strong></p><table><thead><tr><th>\u5B57\u6BB5</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td><code>guild_id</code></td><td>string</td><td>\u9891\u9053ID</td></tr><tr><td><code>channel_id</code></td><td>string</td><td>\u5B50\u9891\u9053ID</td></tr><tr><td><code>message</code></td><td>Message</td><td>\u6D88\u606F, \u4E0E\u539F\u6709\u6D88\u606F\u7C7B\u578B\u76F8\u540C</td></tr></tbody></table><p><strong>\u54CD\u5E94\u6570\u636E</strong></p><table><thead><tr><th>\u5B57\u6BB5</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td><code>message_id</code></td><td>string</td><td>\u6D88\u606FID</td></tr></tbody></table><h3 id="\u83B7\u53D6\u8BDD\u9898\u9891\u9053\u5E16\u5B50" tabindex="-1"><a class="header-anchor" href="#\u83B7\u53D6\u8BDD\u9898\u9891\u9053\u5E16\u5B50" aria-hidden="true">#</a> \u83B7\u53D6\u8BDD\u9898\u9891\u9053\u5E16\u5B50</h3><p>\u7EC8\u7ED3\u70B9: <code>/get_topic_channel_feeds</code></p><p><strong>\u53C2\u6570</strong></p><table><thead><tr><th>\u5B57\u6BB5</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td><code>guild_id</code></td><td>string</td><td>\u9891\u9053ID</td></tr><tr><td><code>channel_id</code></td><td>string</td><td>\u5B50\u9891\u9053ID</td></tr></tbody></table><p><strong>\u54CD\u5E94\u6570\u636E</strong></p><p>\u8FD4\u56DE <code>FeedInfo</code> \u6570\u7EC4</p><p>FeedInfo:</p><table><thead><tr><th>\u5B57\u6BB5</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td><code>id</code></td><td>string</td><td>\u5E16\u5B50ID</td></tr><tr><td><code>channel_id</code></td><td>string</td><td>\u5B50\u9891\u9053ID</td></tr><tr><td><code>guild_id</code></td><td>string</td><td>\u9891\u9053ID</td></tr><tr><td><code>create_time</code></td><td>int64</td><td>\u53D1\u5E16\u65F6\u95F4</td></tr><tr><td><code>title</code></td><td>string</td><td>\u5E16\u5B50\u6807\u9898</td></tr><tr><td><code>sub_title</code></td><td>string</td><td>\u5E16\u5B50\u526F\u6807\u9898</td></tr><tr><td><code>poster_info</code></td><td>PosterInfo</td><td>\u53D1\u5E16\u4EBA\u4FE1\u606F</td></tr><tr><td><code>resource</code></td><td>ResourceInfo</td><td>\u5A92\u4F53\u8D44\u6E90\u4FE1\u606F</td></tr><tr><td><code>resource.images</code></td><td>[]FeedMedia</td><td>\u5E16\u5B50\u9644\u5E26\u7684\u56FE\u7247\u5217\u8868</td></tr><tr><td><code>resource.videos</code></td><td>[]FeedMedia</td><td>\u5E16\u5B50\u9644\u5E26\u7684\u89C6\u9891\u5217\u8868</td></tr><tr><td><code>contents</code></td><td>[]FeedContent</td><td>\u5E16\u5B50\u5185\u5BB9</td></tr></tbody></table><p>PosterInfo:</p><table><thead><tr><th>\u5B57\u6BB5</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td><code>tiny_id</code></td><td>string</td><td>\u53D1\u5E16\u4EBAID</td></tr><tr><td><code>nickname</code></td><td>string</td><td>\u53D1\u5E16\u4EBA\u6635\u79F0</td></tr><tr><td><code>icon_url</code></td><td>string</td><td>\u53D1\u5E16\u4EBA\u5934\u50CF\u94FE\u63A5</td></tr></tbody></table><p>FeedMedia:</p><table><thead><tr><th>\u5B57\u6BB5</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td><code>file_id</code></td><td>string</td><td>\u5A92\u4F53ID</td></tr><tr><td><code>pattern_id</code></td><td>string</td><td>\u63A7\u4EF6ID?(\u4E0D\u786E\u5B9A)</td></tr><tr><td><code>url</code></td><td>string</td><td>\u5A92\u4F53\u94FE\u63A5</td></tr><tr><td><code>height</code></td><td>int32</td><td>\u5A92\u4F53\u9AD8\u5EA6</td></tr><tr><td><code>width</code></td><td>int32</td><td>\u5A92\u4F53\u5BBD\u5EA6</td></tr></tbody></table><p>FeedContent:</p><table><thead><tr><th>\u5B57\u6BB5</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td><code>type</code></td><td>string</td><td>\u5185\u5BB9\u7C7B\u578B</td></tr><tr><td><code>data</code></td><td>Data</td><td>\u5185\u5BB9\u6570\u636E</td></tr></tbody></table><h4 id="\u5185\u5BB9\u7C7B\u578B\u5217\u8868" tabindex="-1"><a class="header-anchor" href="#\u5185\u5BB9\u7C7B\u578B\u5217\u8868" aria-hidden="true">#</a> \u5185\u5BB9\u7C7B\u578B\u5217\u8868:</h4><table><thead><tr><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td><code>text</code></td><td>\u6587\u672C</td></tr><tr><td><code>face</code></td><td>\u8868\u60C5</td></tr><tr><td><code>at</code></td><td>At</td></tr><tr><td><code>url_quote</code></td><td>\u94FE\u63A5\u5F15\u7528</td></tr><tr><td><code>channel_quote</code></td><td>\u5B50\u9891\u9053\u5F15\u7528</td></tr></tbody></table><h4 id="\u5185\u5BB9\u7C7B\u578B\u5BF9\u5E94\u6570\u636E\u5217\u8868" tabindex="-1"><a class="header-anchor" href="#\u5185\u5BB9\u7C7B\u578B\u5BF9\u5E94\u6570\u636E\u5217\u8868" aria-hidden="true">#</a> \u5185\u5BB9\u7C7B\u578B\u5BF9\u5E94\u6570\u636E\u5217\u8868:</h4><ul><li><code>text</code></li></ul><table><thead><tr><th>\u5B57\u6BB5</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td><code>text</code></td><td>string</td><td>\u6587\u672C\u5185\u5BB9</td></tr></tbody></table><ul><li><code>face</code></li></ul><table><thead><tr><th>\u5B57\u6BB5</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td><code>id</code></td><td>string</td><td>\u8868\u60C5ID</td></tr></tbody></table><ul><li><code>at</code></li></ul><table><thead><tr><th>\u5B57\u6BB5</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td><code>id</code></td><td>string</td><td>\u76EE\u6807ID</td></tr><tr><td><code>qq</code></td><td>string</td><td>\u76EE\u6807ID, \u4E3A\u786E\u4FDD\u548C <code>array message</code> \u7684\u4E00\u81F4\u6027\u4FDD\u7559</td></tr></tbody></table><ul><li><code>url_quote</code></li></ul><table><thead><tr><th>\u5B57\u6BB5</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td><code>display_text</code></td><td>string</td><td>\u663E\u793A\u6587\u672C</td></tr><tr><td><code>url</code></td><td>string</td><td>\u94FE\u63A5</td></tr></tbody></table><ul><li><code>channel_quote</code></li></ul><table><thead><tr><th>\u5B57\u6BB5</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td><code>display_text</code></td><td>string</td><td>\u663E\u793A\u6587\u672C</td></tr><tr><td><code>guild_id</code></td><td>string</td><td>\u9891\u9053ID</td></tr><tr><td><code>channel_id</code></td><td>string</td><td>\u5B50\u9891\u9053ID</td></tr></tbody></table><h2 id="\u4E8B\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u4E8B\u4EF6" aria-hidden="true">#</a> \u4E8B\u4EF6</h2><h3 id="\u6536\u5230\u9891\u9053\u6D88\u606F" tabindex="-1"><a class="header-anchor" href="#\u6536\u5230\u9891\u9053\u6D88\u606F" aria-hidden="true">#</a> \u6536\u5230\u9891\u9053\u6D88\u606F</h3><p><strong>\u4E0A\u62A5\u6570\u636E</strong></p><table><thead><tr><th>\u5B57\u6BB5</th><th>\u7C7B\u578B</th><th>\u53EF\u80FD\u7684\u503C</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td><code>post_type</code></td><td>string</td><td><code>message</code></td><td>\u4E0A\u62A5\u7C7B\u578B</td></tr><tr><td><code>message_type</code></td><td>string</td><td><code>guild</code></td><td>\u6D88\u606F\u7C7B\u578B</td></tr><tr><td><code>sub_type</code></td><td>string</td><td><code>channel</code></td><td>\u6D88\u606F\u5B50\u7C7B\u578B</td></tr><tr><td><code>guild_id</code></td><td>string</td><td></td><td>\u9891\u9053ID</td></tr><tr><td><code>channel_id</code></td><td>string</td><td></td><td>\u5B50\u9891\u9053ID</td></tr><tr><td><code>user_id</code></td><td>string</td><td></td><td>\u6D88\u606F\u53D1\u9001\u8005ID</td></tr><tr><td><code>message_id</code></td><td>string</td><td></td><td>\u6D88\u606FID</td></tr><tr><td><code>sender</code></td><td>Sender</td><td></td><td>\u53D1\u9001\u8005</td></tr><tr><td><code>message</code></td><td>Message</td><td></td><td>\u6D88\u606F\u5185\u5BB9</td></tr></tbody></table><blockquote><p>\u6CE8: \u6B64\u5904\u7684 <code>Sender</code> \u5BF9\u8C61\u4E3A\u4FDD\u8BC1\u4E00\u81F4\u6027, <code>user_id</code> \u4E3A <code>uint64</code> \u7C7B\u578B, \u5E76\u6DFB\u52A0\u4E86 <code>string</code> \u7C7B\u578B\u7684 <code>tiny_id</code> \u5B57\u6BB5</p></blockquote><h3 id="\u9891\u9053\u6D88\u606F\u8868\u60C5\u8D34\u66F4\u65B0" tabindex="-1"><a class="header-anchor" href="#\u9891\u9053\u6D88\u606F\u8868\u60C5\u8D34\u66F4\u65B0" aria-hidden="true">#</a> \u9891\u9053\u6D88\u606F\u8868\u60C5\u8D34\u66F4\u65B0</h3><p><strong>\u4E0A\u62A5\u6570\u636E</strong></p><table><thead><tr><th>\u5B57\u6BB5</th><th>\u7C7B\u578B</th><th>\u53EF\u80FD\u7684\u503C</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td><code>post_type</code></td><td>string</td><td><code>notice</code></td><td>\u4E0A\u62A5\u7C7B\u578B</td></tr><tr><td><code>notice_type</code></td><td>string</td><td><code>message_reactions_updated</code></td><td>\u6D88\u606F\u7C7B\u578B</td></tr><tr><td><code>guild_id</code></td><td>string</td><td></td><td>\u9891\u9053ID</td></tr><tr><td><code>channel_id</code></td><td>string</td><td></td><td>\u5B50\u9891\u9053ID</td></tr><tr><td><code>user_id</code></td><td>string</td><td></td><td>\u64CD\u4F5C\u8005ID</td></tr><tr><td><code>message_id</code></td><td>string</td><td></td><td>\u6D88\u606FID</td></tr><tr><td><code>current_reactions</code></td><td>[]ReactionInfo</td><td></td><td>\u5F53\u524D\u6D88\u606F\u88AB\u8D34\u8868\u60C5\u5217\u8868</td></tr></tbody></table><p>ReactionInfo:</p><table><thead><tr><th>\u5B57\u6BB5</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td><code>emoji_id</code></td><td>string</td><td>\u8868\u60C5ID</td></tr><tr><td><code>emoji_index</code></td><td>int32</td><td>\u8868\u60C5\u5BF9\u5E94\u6570\u503CID</td></tr><tr><td><code>emoji_type</code></td><td>int32</td><td>\u8868\u60C5\u7C7B\u578B</td></tr><tr><td><code>emoji_name</code></td><td>string</td><td>\u8868\u60C5\u540D\u5B57</td></tr><tr><td><code>count</code></td><td>int32</td><td>\u5F53\u524D\u8868\u60C5\u88AB\u8D34\u6570\u91CF</td></tr><tr><td><code>clicked</code></td><td>bool</td><td>BOT\u662F\u5426\u70B9\u51FB</td></tr></tbody></table><h3 id="\u5B50\u9891\u9053\u4FE1\u606F\u66F4\u65B0" tabindex="-1"><a class="header-anchor" href="#\u5B50\u9891\u9053\u4FE1\u606F\u66F4\u65B0" aria-hidden="true">#</a> \u5B50\u9891\u9053\u4FE1\u606F\u66F4\u65B0</h3><p><strong>\u4E0A\u62A5\u6570\u636E</strong></p><table><thead><tr><th>\u5B57\u6BB5</th><th>\u7C7B\u578B</th><th>\u53EF\u80FD\u7684\u503C</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td><code>post_type</code></td><td>string</td><td><code>notice</code></td><td>\u4E0A\u62A5\u7C7B\u578B</td></tr><tr><td><code>notice_type</code></td><td>string</td><td><code>channel_updated</code></td><td>\u6D88\u606F\u7C7B\u578B</td></tr><tr><td><code>guild_id</code></td><td>string</td><td></td><td>\u9891\u9053ID</td></tr><tr><td><code>channel_id</code></td><td>string</td><td></td><td>\u5B50\u9891\u9053ID</td></tr><tr><td><code>user_id</code></td><td>string</td><td></td><td>\u64CD\u4F5C\u8005ID</td></tr><tr><td><code>operator_id</code></td><td>string</td><td></td><td>\u64CD\u4F5C\u8005ID</td></tr><tr><td><code>old_info</code></td><td>ChannelInfo</td><td></td><td>\u66F4\u65B0\u524D\u7684\u9891\u9053\u4FE1\u606F</td></tr><tr><td><code>new_info</code></td><td>ChannelInfo</td><td></td><td>\u66F4\u65B0\u540E\u7684\u9891\u9053\u4FE1\u606F</td></tr></tbody></table><h3 id="\u5B50\u9891\u9053\u521B\u5EFA" tabindex="-1"><a class="header-anchor" href="#\u5B50\u9891\u9053\u521B\u5EFA" aria-hidden="true">#</a> \u5B50\u9891\u9053\u521B\u5EFA</h3><p><strong>\u4E0A\u62A5\u6570\u636E</strong></p><table><thead><tr><th>\u5B57\u6BB5</th><th>\u7C7B\u578B</th><th>\u53EF\u80FD\u7684\u503C</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td><code>post_type</code></td><td>string</td><td><code>notice</code></td><td>\u4E0A\u62A5\u7C7B\u578B</td></tr><tr><td><code>notice_type</code></td><td>string</td><td><code>channel_created</code></td><td>\u6D88\u606F\u7C7B\u578B</td></tr><tr><td><code>guild_id</code></td><td>string</td><td></td><td>\u9891\u9053ID</td></tr><tr><td><code>channel_id</code></td><td>string</td><td></td><td>\u5B50\u9891\u9053ID</td></tr><tr><td><code>user_id</code></td><td>string</td><td></td><td>\u64CD\u4F5C\u8005ID</td></tr><tr><td><code>operator_id</code></td><td>string</td><td></td><td>\u64CD\u4F5C\u8005ID</td></tr><tr><td><code>channel_info</code></td><td>ChannelInfo</td><td></td><td>\u9891\u9053\u4FE1\u606F</td></tr></tbody></table><h3 id="\u5B50\u9891\u9053\u5220\u9664" tabindex="-1"><a class="header-anchor" href="#\u5B50\u9891\u9053\u5220\u9664" aria-hidden="true">#</a> \u5B50\u9891\u9053\u5220\u9664</h3><p><strong>\u4E0A\u62A5\u6570\u636E</strong></p><table><thead><tr><th>\u5B57\u6BB5</th><th>\u7C7B\u578B</th><th>\u53EF\u80FD\u7684\u503C</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td><code>post_type</code></td><td>string</td><td><code>notice</code></td><td>\u4E0A\u62A5\u7C7B\u578B</td></tr><tr><td><code>notice_type</code></td><td>string</td><td><code>channel_destroyed</code></td><td>\u6D88\u606F\u7C7B\u578B</td></tr><tr><td><code>guild_id</code></td><td>string</td><td></td><td>\u9891\u9053ID</td></tr><tr><td><code>channel_id</code></td><td>string</td><td></td><td>\u5B50\u9891\u9053ID</td></tr><tr><td><code>user_id</code></td><td>string</td><td></td><td>\u64CD\u4F5C\u8005ID</td></tr><tr><td><code>operator_id</code></td><td>string</td><td></td><td>\u64CD\u4F5C\u8005ID</td></tr><tr><td><code>channel_info</code></td><td>ChannelInfo</td><td></td><td>\u9891\u9053\u4FE1\u606F</td></tr></tbody></table>',110);function r(c,h){return o}var a=t(e,[["render",r],["__file","sidebar.html.vue"]]);export{a as default};
