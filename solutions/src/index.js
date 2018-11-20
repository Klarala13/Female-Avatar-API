window.jQuery = $;
window.$ = $;

import AvatarWidget from "./modules/AvatarWidget";
new AvatarWidget({ container: "#avatars" });

import AvatarWidgetAdvanced from "./modules/AvatarWidgetAdvanced";
new AvatarWidgetAdvanced({ container: "#avatars-advanced" });

import AvatarWidgetCrazy from "./modules/AvatarWidgetCrazy";
new AvatarWidgetCrazy({ container: "#avatars-crazy" });
