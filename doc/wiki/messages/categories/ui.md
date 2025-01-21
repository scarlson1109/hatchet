# Ui Messages

## Dropbox Module

| Key | Text | Context | Variables | Module | File |
|-----|------|---------|-----------|---------|------|
| `dropbox.ui.dropbox_connection` | "Dropbox connection" | startDropboxConnectEvent: function () { | - | dropbox | dropbox.js |
| `dropbox.ui.connect_game_to_dropbox_local_storage` | "connect game to dropbox local storage" | scenes: { | - | dropbox | dropbox.js |
| `dropbox.ui.connect` | "connect" | buttons: { | - | dropbox | dropbox.js |
| `dropbox.ui.cancel` | "cancel" | }, | - | dropbox | dropbox.js |
| `dropbox.ui.dropbox_export_import` | "Dropbox Export / Import" | startDropboxImportEvent: function () { | - | dropbox | dropbox.js |
| `dropbox.ui.export_or_import_save_data_to_dropbox_datastorage` | "export or import save data to dropbox datastorage" | scenes: { | - | dropbox | dropbox.js |
| `dropbox.ui.your_are_connected_to_dropbox_with_account_email_` | "your are connected to dropbox with account / email " | start: { | - | dropbox | dropbox.js |
| `dropbox.ui.save` | "save" | buttons: { | - | dropbox | dropbox.js |
| `dropbox.ui.load` | "load" | }, | - | dropbox | dropbox.js |
| `dropbox.ui.signout` | "signout" | }, | - | dropbox | dropbox.js |
| `dropbox.ui.cancel` | "cancel" | }, | - | dropbox | dropbox.js |
| `dropbox.ui.choose_one_slot_to_save_to` | "choose one slot to save to" | }, | - | dropbox | dropbox.js |
| `dropbox.ui.save_to_slot` | "save to slot" | $.each(DropboxConnector.savegames, function (n, savegame) { | - | dropbox | dropbox.js |
| `dropbox.ui.cancel` | "cancel" | buttons.cancel = { | - | dropbox | dropbox.js |
| `dropbox.ui.choose_one_slot_to_load_from` | "choose one slot to load from" | }, | - | dropbox | dropbox.js |
| `dropbox.ui.load_from_slot` | "load from slot" | if (savegame) { | - | dropbox | dropbox.js |
| `dropbox.ui.cancel` | "cancel" | buttons.cancel = { | - | dropbox | dropbox.js |
| `dropbox.ui.dropbox_export_import` | "Dropbox Export / Import" | savedtoDropboxEvent: function (success) { | - | dropbox | dropbox.js |
| `dropbox.ui.successfully_saved_to_dropbox_datastorage` | "successfully saved to dropbox datastorage" | scenes: { | - | dropbox | dropbox.js |
| `dropbox.ui.error_while_saving_to_dropbox_datastorage` | "error while saving to dropbox datastorage" | start: { | - | dropbox | dropbox.js |
| `dropbox.ui.ok` | "ok" | buttons: { | - | dropbox | dropbox.js |

## Engine Module

| Key | Text | Context | Variables | Module | File |
|-----|------|---------|-----------|---------|------|
| `engine.ui.boxer` | "boxer" | Perks: { | - | engine | engine.js |
| `engine.ui.punches_do_more_damage` | "punches do more damage" | 'boxer': { | - | engine | engine.js |
| `engine.ui.learned_to_throw_punches_with_purpose` | "learned to throw punches with purpose" | desc: _('punches do more damage'), | - | engine | engine.js |
| `engine.ui.martial_artist` | "martial artist" | }, | - | engine | engine.js |
| `engine.ui.punches_do_even_more_damage_` | "punches do even more damage." | 'martial artist': { | - | engine | engine.js |
| `engine.ui.learned_to_fight_quite_effectively_without_weapons` | "learned to fight quite effectively without weapons" | name: _('martial artist'), | - | engine | engine.js |
| `engine.ui.unarmed_master` | "unarmed master" | 'unarmed master': { | - | engine | engine.js |
| `engine.ui.punch_twice_as_fast_and_with_even_more_force` | "punch twice as fast, and with even more force" | /// TRANSLATORS : master of unarmed combat | - | engine | engine.js |
| `engine.ui.learned_to_strike_faster_without_weapons` | "learned to strike faster without weapons" | name: _('unarmed master'), | - | engine | engine.js |
| `engine.ui.barbarian` | "barbarian" | }, | - | engine | engine.js |
| `engine.ui.melee_weapons_deal_more_damage` | "melee weapons deal more damage" | 'barbarian': { | - | engine | engine.js |
| `engine.ui.learned_to_swing_weapons_with_force` | "learned to swing weapons with force" | name: _('barbarian'), | - | engine | engine.js |
| `engine.ui.slow_metabolism` | "slow metabolism" | }, | - | engine | engine.js |
| `engine.ui.go_twice_as_far_without_eating` | "go twice as far without eating" | 'slow metabolism': { | - | engine | engine.js |
| `engine.ui.learned_how_to_ignore_the_hunger` | "learned how to ignore the hunger" | name: _('slow metabolism'), | - | engine | engine.js |
| `engine.ui.desert_rat` | "desert rat" | }, | - | engine | engine.js |
| `engine.ui.go_twice_as_far_without_drinking` | "go twice as far without drinking" | 'desert rat': { | - | engine | engine.js |
| `engine.ui.learned_to_love_the_dry_air` | "learned to love the dry air" | name: _('desert rat'), | - | engine | engine.js |
| `engine.ui.evasive` | "evasive" | }, | - | engine | engine.js |
| `engine.ui.dodge_attacks_more_effectively` | "dodge attacks more effectively" | 'evasive': { | - | engine | engine.js |
| `engine.ui.learned_to_be_where_they_re_not` | "learned to be where they're not" | name: _('evasive'), | - | engine | engine.js |
| `engine.ui.precise` | "precise" | }, | - | engine | engine.js |
| `engine.ui.land_blows_more_often` | "land blows more often" | 'precise': { | - | engine | engine.js |
| `engine.ui.learned_to_predict_their_movement` | "learned to predict their movement" | name: _('precise'), | - | engine | engine.js |
| `engine.ui.scout` | "scout" | }, | - | engine | engine.js |
| `engine.ui.see_farther` | "see farther" | 'scout': { | - | engine | engine.js |
| `engine.ui.learned_to_look_ahead` | "learned to look ahead" | name: _('scout'), | - | engine | engine.js |
| `engine.ui.stealthy` | "stealthy" | }, | - | engine | engine.js |
| `engine.ui.better_avoid_conflict_in_the_wild` | "better avoid conflict in the wild" | 'stealthy': { | - | engine | engine.js |
| `engine.ui.learned_how_not_to_be_seen` | "learned how not to be seen" | name: _('stealthy'), | - | engine | engine.js |
| `engine.ui.gastronome` | "gastronome" | }, | - | engine | engine.js |
| `engine.ui.restore_more_health_when_eating` | "restore more health when eating" | 'gastronome': { | - | engine | engine.js |
| `engine.ui.learned_to_make_the_most_of_food` | "learned to make the most of food" | name: _('gastronome'), | - | engine | engine.js |
| `engine.ui.sound_on_` | "sound on." | $('<span>') | - | engine | engine.js |
| `engine.ui.get_the_app_` | "get the app." | $('<span>') | - | engine | engine.js |
| `engine.ui.lights_off_` | "lights off." | $('<span>') | - | engine | engine.js |
| `engine.ui.hyper_` | "hyper." | $('<span>') | - | engine | engine.js |
| `engine.ui.restart_` | "restart." | $('<span>') | - | engine | engine.js |
| `engine.ui.share_` | "share." | $('<span>') | - | engine | engine.js |
| `engine.ui.save_` | "save." | $('<span>') | - | engine | engine.js |
| `engine.ui.dropbox_` | "dropbox." | $('<span>') | - | engine | engine.js |
| `engine.ui.github_` | "github." | $('<span>') | - | engine | engine.js |
| `engine.ui.export_import` | "Export / Import" | exportImport: function() { | - | engine | engine.js |
| `engine.ui.export_or_import_save_data_for_backing_up` | "export or import save data, for backing up" | start: { | - | engine | engine.js |
| `engine.ui.or_migrating_computers` | "or migrating computers" | text: [ | - | engine | engine.js |
| `engine.ui.export` | "export" | buttons: { | - | engine | engine.js |
| `engine.ui.import` | "import" | }, | - | engine | engine.js |
| `engine.ui.cancel` | "cancel" | }, | - | engine | engine.js |
| `engine.ui.save_this_` | "save this." | }, | - | engine | engine.js |
| `engine.ui.got_it` | "got it" | buttons: { | - | engine | engine.js |
| `engine.ui.are_you_sure_` | "are you sure?" | 'confirm': { | - | engine | engine.js |
| `engine.ui.if_the_code_is_invalid_all_data_will_be_lost_` | "if the code is invalid, all data will be lost." | text: [ | - | engine | engine.js |
| `engine.ui.this_is_irreversible_` | "this is irreversible." | _('are you sure?'), | - | engine | engine.js |
| `engine.ui.yes` | "yes" | buttons: { | - | engine | engine.js |
| `engine.ui.no` | "no" | }, | - | engine | engine.js |
| `engine.ui.put_the_save_code_here_` | "put the save code here." | }, | - | engine | engine.js |
| `engine.ui.import` | "import" | buttons: { | - | engine | engine.js |
| `engine.ui.cancel` | "cancel" | }, | - | engine | engine.js |
| `engine.ui.restart_` | "Restart?" | confirmDelete: function() { | - | engine | engine.js |
| `engine.ui.restart_the_game_` | "restart the game?" | scenes: { | - | engine | engine.js |
| `engine.ui.yes` | "yes" | buttons: { | - | engine | engine.js |
| `engine.ui.no` | "no" | }, | - | engine | engine.js |
| `engine.ui.get_the_app` | "Get the App" | getApp: function() { | - | engine | engine.js |
| `engine.ui.bring_the_room_with_you_` | "bring the room with you." | scenes: { | - | engine | engine.js |
| `engine.ui.ios` | "ios" | buttons: { | - | engine | engine.js |
| `engine.ui.android` | "android" | }, | - | engine | engine.js |
| `engine.ui.close` | "close" | }, | - | engine | engine.js |
| `engine.ui.share` | "Share" | share: function() { | - | engine | engine.js |
| `engine.ui.bring_your_friends_` | "bring your friends." | scenes: { | - | engine | engine.js |
| `engine.ui.facebook` | "facebook" | buttons: { | - | engine | engine.js |
| `engine.ui.google_` | "google+" | }, | - | engine | engine.js |
| `engine.ui.twitter` | "twitter" | }, | - | engine | engine.js |
| `engine.ui.reddit` | "reddit" | }, | - | engine | engine.js |
| `engine.ui.close` | "close" | }, | - | engine | engine.js |
| `engine.ui.lights_on_` | "lights on." | if (darkCss == null) { | - | engine | engine.js |
| `engine.ui.lights_on_` | "lights on." | } else if (darkCss.disabled) { | - | engine | engine.js |
| `engine.ui.lights_off_` | "lights off." | $("#darkenLights").attr("disabled", "disabled"); | - | engine | engine.js |
| `engine.ui.go_hyper_` | "Go Hyper?" | if (!Engine.options.doubleTime) { | - | engine | engine.js |
| `engine.ui.turning_hyper_mode_speeds_up_the_game_to_x2_speed_do_you_want_to_do_that_` | "turning hyper mode speeds up the game to x2 speed. do you want to do that?" | scenes: { | - | engine | engine.js |
| `engine.ui.yes` | "yes" | buttons: { | - | engine | engine.js |
| `engine.ui.no` | "no" | }, | - | engine | engine.js |
| `engine.ui.classic_` | "classic." | Engine.options.doubleTime = !Engine.options.doubleTime; | - | engine | engine.js |
| `engine.ui.hyper_` | "hyper." | $('.hyper').text(_('classic.')); | - | engine | engine.js |
| `engine.ui.sound_on_` | "sound on." | } | - | engine | engine.js |
| `engine.ui.sound_off_` | "sound off." | AudioEngine.setMasterVolume(0.0); | - | engine | engine.js |
| `engine.ui.sound_available_` | "Sound Available!" | $SM.set('playStats.audioAlertShown', true); | - | engine | engine.js |
| `engine.ui.ears_flooded_with_new_sensations_` | "ears flooded with new sensations." | start: { | - | engine | engine.js |
| `engine.ui.perhaps_silence_is_safer_` | "perhaps silence is safer?" | text: [ | - | engine | engine.js |
| `engine.ui.enable_audio` | "enable audio" | buttons: { | - | engine | engine.js |
| `engine.ui.disable_audio` | "disable audio" | }, | - | engine | engine.js |

## Encounters Module

| Key | Text | Context | Variables | Module | File |
|-----|------|---------|-----------|---------|------|
| `encounters.ui.a_snarling_beast` | "A Snarling Beast" | /* Tier 1 */ | - | encounters | encounters.js |
| `encounters.ui.a_gaunt_man` | "A Gaunt Man" | }, | - | encounters | encounters.js |
| `encounters.ui.a_strange_bird` | "A Strange Bird" | }, | - | encounters | encounters.js |
| `encounters.ui.a_shivering_man` | "A Shivering Man" | /* Tier 2*/ | - | encounters | encounters.js |
| `encounters.ui.a_man_eater` | "A Man-Eater" | }, | - | encounters | encounters.js |
| `encounters.ui.a_scavenger` | "A Scavenger" | }, | - | encounters | encounters.js |
| `encounters.ui.a_huge_lizard` | "A Huge Lizard" | }, | - | encounters | encounters.js |
| `encounters.ui.a_feral_terror` | "A Feral Terror" | /* Tier 3*/ | - | encounters | encounters.js |
| `encounters.ui.a_soldier` | "A Soldier" | }, | - | encounters | encounters.js |
| `encounters.ui.a_sniper` | "A Sniper" | }, | - | encounters | encounters.js |

## Executioner Module

| Key | Text | Context | Variables | Module | File |
|-----|------|---------|-----------|---------|------|
| `executioner.ui.a_ravaged_battleship` | "A Ravaged Battleship" | Events.Executioner = { | - | executioner | executioner.js |
| `executioner.ui.it_lists_to_the_side_in_a_deep_crevasse_cut_when_it_fell_from_the_sky_` | "it lists to the side in a deep crevasse, cut when it fell from the sky." | text: [ | - | executioner | executioner.js |
| `executioner.ui.the_hatches_are_all_sealed_but_the_hull_is_blown_out_just_above_the_dirt_providing_an_entrance_` | "the hatches are all sealed, but the hull is blown out just above the dirt, providing an entrance." | _('the remains of a massive battleship lie here, like a silent sealed city.'), | - | executioner | executioner.js |
| `executioner.ui.enter` | "enter" | buttons: { | - | executioner | executioner.js |
| `executioner.ui.leave` | "leave" | }, | - | executioner | executioner.js |
| `executioner.ui.the_interior_of_the_ship_is_cold_and_dark_what_little_light_there_is_only_accentuates_its_harsh_angles_` | "the interior of the ship is cold and dark. what little light there is only accentuates its harsh angles." | '1': { | - | executioner | executioner.js |
| `executioner.ui.the_walls_hum_faintly_` | "the walls hum faintly." | text: [ | - | executioner | executioner.js |
| `executioner.ui.continue` | "continue" | buttons: { | - | executioner | executioner.js |
| `executioner.ui.leave` | "leave" | }, | - | executioner | executioner.js |
| `executioner.ui.continue` | "continue" | buttons: { | - | executioner | executioner.js |
| `executioner.ui.leave` | "leave" | }, | - | executioner | executioner.js |
| `executioner.ui.continue` | "continue" | buttons: { | - | executioner | executioner.js |
| `executioner.ui.leave` | "leave" | }, | - | executioner | executioner.js |
| `executioner.ui.continue` | "continue" | buttons: { | - | executioner | executioner.js |
| `executioner.ui.leave` | "leave" | }, | - | executioner | executioner.js |
| `executioner.ui.continue` | "continue" | buttons: { | - | executioner | executioner.js |
| `executioner.ui.leave` | "leave" | }, | - | executioner | executioner.js |
| `executioner.ui.continue` | "continue" | buttons: { | - | executioner | executioner.js |
| `executioner.ui.leave` | "leave" | }, | - | executioner | executioner.js |
| `executioner.ui.continue` | "continue" | buttons: { | - | executioner | executioner.js |
| `executioner.ui.leave` | "leave" | }, | - | executioner | executioner.js |
| `executioner.ui.continue` | "continue" | buttons: { | - | executioner | executioner.js |
| `executioner.ui.leave` | "leave" | }, | - | executioner | executioner.js |
| `executioner.ui.continue` | "continue" | buttons: { | - | executioner | executioner.js |
| `executioner.ui.leave` | "leave" | }, | - | executioner | executioner.js |
| `executioner.ui.continue` | "continue" | buttons: { | - | executioner | executioner.js |
| `executioner.ui.leave` | "leave" | }, | - | executioner | executioner.js |
| `executioner.ui.a_maintenance_panel_is_embedded_in_the_wall_next_to_a_large_sealed_door_` | "a maintenance panel is embedded in the wall next to a large sealed door." | '5': { | - | executioner | executioner.js |
| `executioner.ui.perhaps_the_ship_s_systems_are_still_operational_` | "perhaps the ship’s systems are still operational." | 'text': [ | - | executioner | executioner.js |
| `executioner.ui.power_cycle` | "power cycle" | buttons: { | - | executioner | executioner.js |
| `executioner.ui.leave` | "leave" | }, | - | executioner | executioner.js |
| `executioner.ui.continue` | "continue" | buttons: { | - | executioner | executioner.js |
| `executioner.ui.leave` | "leave" | }, | - | executioner | executioner.js |
| `executioner.ui.take_device_and_leave` | "take device and leave" | buttons: { | - | executioner | executioner.js |
| `executioner.ui.a_ravaged_battleship` | "A Ravaged Battleship" | "executioner-antechamber": { /* Deeper into a ravaged battleship */ | - | executioner | executioner.js |
| `executioner.ui.a_large_hatch_opens_into_a_wide_corridor_` | "a large hatch opens into a wide corridor." | 'start': { | - | executioner | executioner.js |
| `executioner.ui.the_corridor_leads_to_a_bank_of_elevators_which_appear_to_be_functional_` | "the corridor leads to a bank of elevators, which appear to be functional." | 'text': [ | - | executioner | executioner.js |
| `executioner.ui.engineering` | "engineering" | buttons: { | - | executioner | executioner.js |
| `executioner.ui.medical` | "medical" | }, | - | executioner | executioner.js |
| `executioner.ui.martial` | "martial" | }, | - | executioner | executioner.js |
| `executioner.ui.command_deck` | "command deck" | }, | - | executioner | executioner.js |
| `executioner.ui.leave` | "leave" | }, | - | executioner | executioner.js |
| `executioner.ui.engineering_wing` | "Engineering Wing" | "executioner-engineering": { /* Engineering wing */ | - | executioner | executioner.js |
| `executioner.ui.elevator_doors_open_to_a_blasted_corridor_debris_covers_the_floor_piled_into_makeshift_defences_` | "elevator doors open to a blasted corridor. debris covers the floor, piled into makeshift defences." | 'start': { | - | executioner | executioner.js |
| `executioner.ui.emergency_lighting_flickers_` | "emergency lighting flickers." | 'text': [ | - | executioner | executioner.js |
| `executioner.ui.continue` | "continue" | buttons: { | - | executioner | executioner.js |
| `executioner.ui.leave` | "leave" | }, | - | executioner | executioner.js |
| `executioner.ui.an_automated_assembly_line_performs_its_empty_routines_long_since_deprived_of_materials_` | "an automated assembly line performs its empty routines, long since deprived of materials." | '1-1': { | - | executioner | executioner.js |
| `executioner.ui.its_final_works_lie_forgotten_covered_by_a_thin_layer_of_dust_` | "its final works lie forgotten, covered by a thin layer of dust." | text: [ | - | executioner | executioner.js |
| `executioner.ui.continue` | "continue" | buttons: { | - | executioner | executioner.js |
| `executioner.ui.leave` | "leave" | }, | - | executioner | executioner.js |
| `executioner.ui.continue` | "continue" | buttons: { | - | executioner | executioner.js |
| `executioner.ui.leave` | "leave" | }, | - | executioner | executioner.js |
| `executioner.ui.assembly_arms_spark_and_jitter_` | "assembly arms spark and jitter." | '2-1b': { | - | executioner | executioner.js |
| `executioner.ui.a_cacophony_of_decrepit_machinery_fills_the_room_` | "a cacophony of decrepit machinery fills the room." | text: [ | - | executioner | executioner.js |
| `executioner.ui.continue` | "continue" | buttons: { | - | executioner | executioner.js |
| `executioner.ui.leave` | "leave" | }, | - | executioner | executioner.js |
| `executioner.ui.continue` | "continue" | buttons: { | - | executioner | executioner.js |
| `executioner.ui.leave` | "leave" | }, | - | executioner | executioner.js |
| `executioner.ui.continue` | "continue" | buttons: { | - | executioner | executioner.js |
| `executioner.ui.leave` | "leave" | }, | - | executioner | executioner.js |
| `executioner.ui.must_have_been_the_engine_room_once_the_massive_machines_now_stand_inert_twisted_and_scorched_by_explosions_` | "must have been the engine room, once. the massive machines now stand inert, twisted and scorched by explosions." | '2-2': { | - | executioner | executioner.js |
| `executioner.ui.the_destruction_is_uniform_and_precise_` | "the destruction is uniform and precise." | text: [ | - | executioner | executioner.js |
| `executioner.ui.continue` | "continue" | buttons: { | - | executioner | executioner.js |
| `executioner.ui.leave` | "leave" | }, | - | executioner | executioner.js |
| `executioner.ui.continue` | "continue" | buttons: { | - | executioner | executioner.js |
| `executioner.ui.leave` | "leave" | }, | - | executioner | executioner.js |
| `executioner.ui.none_of_the_ship_s_engines_escaped_the_destruction_` | "none of the ship\'s engines escaped the destruction." | '3-2b': { | - | executioner | executioner.js |
| `executioner.ui.it_s_no_mystery_why_she_no_longer_flies_` | "it\'s no mystery why she no longer flies." | text: [ | - | executioner | executioner.js |
| `executioner.ui.continue` | "continue" | buttons: { | - | executioner | executioner.js |
| `executioner.ui.leave` | "leave" | }, | - | executioner | executioner.js |
| `executioner.ui.sparks_cascade_from_a_reactivated_power_junction_and_catch_` | "sparks cascade from a reactivated power junction, and catch." | '1-3': { | - | executioner | executioner.js |
| `executioner.ui.the_flames_fill_the_corridor_` | "the flames fill the corridor." | text: [ | - | executioner | executioner.js |
| `executioner.ui.extinguish` | "extinguish" | buttons: { | - | executioner | executioner.js |
| `executioner.ui.rush_through` | "rush through" | }, | - | executioner | executioner.js |
| `executioner.ui.continue` | "continue" | buttons: { | - | executioner | executioner.js |
| `executioner.ui.leave` | "leave" | }, | - | executioner | executioner.js |
| `executioner.ui.rows_of_inert_security_robots_hang_suspended_from_the_ceiling_` | "rows of inert security robots hang suspended from the ceiling." | '2-3b': { | - | executioner | executioner.js |
| `executioner.ui.wires_run_overhead_corroded_and_useless_` | "wires run overhead, corroded and useless." | text: [ | - | executioner | executioner.js |
| `executioner.ui.continue` | "continue" | buttons: { | - | executioner | executioner.js |
| `executioner.ui.leave` | "leave" | }, | - | executioner | executioner.js |
| `executioner.ui.more_signs_of_past_combat_down_the_hall_guard_post_is_ransacked_` | "more signs of past combat down the hall. guard post is ransacked." | '3-3': { | - | executioner | executioner.js |
| `executioner.ui.still_some_things_can_be_found_` | "still, some things can be found." | text: [ | - | executioner | executioner.js |
| `executioner.ui.continue` | "continue" | buttons: { | - | executioner | executioner.js |
| `executioner.ui.leave` | "leave" | }, | - | executioner | executioner.js |
| `executioner.ui.marks_on_the_door_read_research_and_development_everything_seems_mostly_untouched_but_dead_` | "marks on the door read \'research and development.\' everything seems mostly untouched, but dead." | '4': { | - | executioner | executioner.js |
| `executioner.ui.one_machine_thrums_with_power_and_might_still_work_` | "one machine thrums with power, and might still work." | text: [ | - | executioner | executioner.js |
| `executioner.ui.use_machine` | "use machine" | buttons: { | - | executioner | executioner.js |
| `executioner.ui.continue` | "continue" | }, | - | executioner | executioner.js |
| `executioner.ui.leave` | "leave" | }, | - | executioner | executioner.js |
| `executioner.ui.step_inside_and_the_machine_whirs_muscle_and_bone_reknit_good_as_new_` | "step inside, and the machine whirs. muscle and bone reknit. good as new." | '4-heal': { | - | executioner | executioner.js |
| `executioner.ui.continue` | "continue" | buttons: { | - | executioner | executioner.js |
| `executioner.ui.leave` | "leave" | }, | - | executioner | executioner.js |
| `executioner.ui.continue` | "continue" | buttons: { | - | executioner | executioner.js |
| `executioner.ui.leave` | "leave" | }, | - | executioner | executioner.js |
| `executioner.ui.the_machines_here_look_unfinished_abandoned_by_their_creator_wires_and_other_scrap_are_scattered_about_the_work_benches_` | "the machines here look unfinished, abandoned by their creator. wires and other scrap are scattered about the work benches." | '5-2': { | - | executioner | executioner.js |
| `executioner.ui.continue` | "continue" | buttons: { | - | executioner | executioner.js |
| `executioner.ui.leave` | "leave" | }, | - | executioner | executioner.js |
| `executioner.ui.experimental_plans_cover_one_wall_held_by_an_unseen_force_` | "experimental plans cover one wall, held by an unseen force." | '6': { | - | executioner | executioner.js |
| `executioner.ui.this_one_looks_useful_` | "this one looks useful." | text: [ | - | executioner | executioner.js |
| `executioner.ui.continue` | "continue" | buttons: { | - | executioner | executioner.js |
| `executioner.ui.leave` | "leave" | }, | - | executioner | executioner.js |
| `executioner.ui.clattering_metal_and_old_servos_something_is_coming_` | "clattering metal and old servos. something is coming..." | '7-intro': { | - | executioner | executioner.js |
| `executioner.ui.fight` | "fight" | buttons: { | - | executioner | executioner.js |
| `executioner.ui.continue` | "continue" | buttons: { | - | executioner | executioner.js |
| `executioner.ui.leave` | "leave" | }, | - | executioner | executioner.js |
| `executioner.ui.at_the_back_of_the_workshop_elevator_doors_twitch_and_buzz_` | "at the back of the workshop, elevator doors twitch and buzz." | '8': { | - | executioner | executioner.js |
| `executioner.ui.looks_like_a_way_out_of_here_` | "looks like a way out of here." | text: [ | - | executioner | executioner.js |
| `executioner.ui.leave` | "leave" | buttons: { | - | executioner | executioner.js |
| `executioner.ui.martial_wing` | "Martial Wing" | "executioner-martial": { /* Martial wing */ | - | executioner | executioner.js |
| `executioner.ui.metal_grinds_and_the_elevator_doors_open_halfway_beyond_is_a_brightly_lit_battlefield_remains_litter_the_corridor_undisturbed_by_scavengers_` | "metal grinds, and the elevator doors open halfway. beyond is a brightly lit battlefield. remains litter the corridor, undisturbed by scavengers." | 'start': { | - | executioner | executioner.js |
| `executioner.ui.looks_like_they_tried_to_barricade_the_elevators_` | "looks like they tried to barricade the elevators." | text: [ | - | executioner | executioner.js |
| `executioner.ui.continue` | "continue" | buttons: { | - | executioner | executioner.js |
| `executioner.ui.leave` | "leave" | }, | - | executioner | executioner.js |
| `executioner.ui.further_along_the_corridor_branches_` | "further along, the corridor branches." | '1': { | - | executioner | executioner.js |
| `executioner.ui.the_door_to_the_left_is_sealed_and_refuses_to_open_` | "the door to the left is sealed and refuses to open." | text: [ | - | executioner | executioner.js |
| `executioner.ui.blow_it_down` | "blow it down" | buttons: { | - | executioner | executioner.js |
| `executioner.ui.continue_right` | "continue right" | }, | - | executioner | executioner.js |
| `executioner.ui.leave` | "leave" | }, | - | executioner | executioner.js |
| `executioner.ui.the_blast_throws_the_door_inwards_` | "the blast throws the door inwards." | '2-1': { | - | executioner | executioner.js |
| `executioner.ui.through_the_bulkhead_is_a_large_room_walls_lined_with_weapon_racks_fighting_seems_to_have_passed_it_by_` | "through the bulkhead is a large room, walls lined with weapon racks. fighting seems to have passed it by." | text: [ | - | executioner | executioner.js |
| `executioner.ui.continue` | "continue" | buttons: { | - | executioner | executioner.js |
| `executioner.ui.leave` | "leave" | }, | - | executioner | executioner.js |
| `executioner.ui.continue` | "continue" | buttons: { | - | executioner | executioner.js |
| `executioner.ui.leave` | "leave" | }, | - | executioner | executioner.js |
| `executioner.ui.another_door_at_the_end_of_the_hall_sealed_from_this_side_` | "another door at the end of the hall, sealed from this side." | '4-1': { | - | executioner | executioner.js |
| `executioner.ui.should_be_able_to_open_it_` | "should be able to open it." | text: [ | - | executioner | executioner.js |
| `executioner.ui.continue` | "continue" | buttons: { | - | executioner | executioner.js |
| `executioner.ui.leave` | "leave" | }, | - | executioner | executioner.js |
| `executioner.ui.continue` | "continue" | buttons: { | - | executioner | executioner.js |
| `executioner.ui.leave` | "leave" | }, | - | executioner | executioner.js |
| `executioner.ui.continue` | "continue" | buttons: { | - | executioner | executioner.js |
| `executioner.ui.leave` | "leave" | }, | - | executioner | executioner.js |
| `executioner.ui.the_corridor_is_eerily_silent_` | "the corridor is eerily silent." | '3-2b': { | - | executioner | executioner.js |
| `executioner.ui.continue` | "continue" | buttons: { | - | executioner | executioner.js |
| `executioner.ui.leave` | "leave" | }, | - | executioner | executioner.js |
| `executioner.ui.crew_cabins_flank_the_hall_devoid_of_life_` | "crew cabins flank the hall, devoid of life." | '4-2': { | - | executioner | executioner.js |
| `executioner.ui.a_few_useful_items_can_be_scavenged_` | "a few useful items can be scavenged." | text: [ | - | executioner | executioner.js |
| `executioner.ui.continue` | "continue" | buttons: { | - | executioner | executioner.js |
| `executioner.ui.leave` | "leave" | }, | - | executioner | executioner.js |
| `executioner.ui.ruined_defence_turrets_flank_the_corridor_` | "ruined defence turrets flank the corridor." | '2-3': { | - | executioner | executioner.js |
| `executioner.ui.could_put_the_scrap_to_good_use_` | "could put the scrap to good use." | text: [ | - | executioner | executioner.js |
| `executioner.ui.continue` | "continue" | buttons: { | - | executioner | executioner.js |
| `executioner.ui.leave` | "leave" | }, | - | executioner | executioner.js |
| `executioner.ui.continue` | "continue" | buttons: { | - | executioner | executioner.js |
| `executioner.ui.leave` | "leave" | }, | - | executioner | executioner.js |
| `executioner.ui.small_sensors_in_the_walls_still_look_to_be_operational_` | "small sensors in the walls still look to be operational." | '3-3b': { | - | executioner | executioner.js |
| `executioner.ui.easily_avoided_` | "easily avoided." | text: [ | - | executioner | executioner.js |
| `executioner.ui.continue` | "continue" | buttons: { | - | executioner | executioner.js |
| `executioner.ui.leave` | "leave" | }, | - | executioner | executioner.js |
| `executioner.ui.continue` | "continue" | buttons: { | - | executioner | executioner.js |
| `executioner.ui.leave` | "leave" | }, | - | executioner | executioner.js |
| `executioner.ui.large_barricades_bisect_the_corridor_scorched_by_weapons_fire_` | "large barricades bisect the corridor, scorched by weapons fire." | '5': { | - | executioner | executioner.js |
| `executioner.ui.bodies_litter_the_ground_on_either_side_` | "bodies litter the ground on either side." | text: [ | - | executioner | executioner.js |
| `executioner.ui.continue` | "continue" | buttons: { | - | executioner | executioner.js |
| `executioner.ui.leave` | "leave" | }, | - | executioner | executioner.js |
| `executioner.ui.documents_are_scattered_down_the_hall_most_charred_and_curled_` | "documents are scattered down the hall, most charred and curled." | '6': { | - | executioner | executioner.js |
| `executioner.ui.this_one_looks_interesting_` | "this one looks interesting." | text: [ | - | executioner | executioner.js |
| `executioner.ui.continue` | "continue" | buttons: { | - | executioner | executioner.js |
| `executioner.ui.leave` | "leave" | }, | - | executioner | executioner.js |
| `executioner.ui.the_next_door_leads_to_a_ransacked_planning_room_` | "the next door leads to a ransacked planning room." | '7-1': { | - | executioner | executioner.js |
| `executioner.ui.maps_of_the_surface_can_still_be_found_amongst_the_debris_` | "maps of the surface can still be found amongst the debris." | text: [ | - | executioner | executioner.js |
| `executioner.ui.scavenge_maps` | "scavenge maps" | buttons: { | - | executioner | executioner.js |
| `executioner.ui.continue` | "continue" | }, | - | executioner | executioner.js |
| `executioner.ui.leave` | "leave" | }, | - | executioner | executioner.js |
| `executioner.ui.continue` | "continue" | buttons: { | - | executioner | executioner.js |
| `executioner.ui.leave` | "leave" | }, | - | executioner | executioner.js |
| `executioner.ui.slipped_past_an_automated_sentry_` | "slipped past an automated sentry." | '8-1b': { | - | executioner | executioner.js |
| `executioner.ui.if_only_they_d_been_destroyed_along_with_everything_else_` | "if only they\'d been destroyed along with everything else." | text: [ | - | executioner | executioner.js |
| `executioner.ui.continue` | "continue" | buttons: { | - | executioner | executioner.js |
| `executioner.ui.leave` | "leave" | }, | - | executioner | executioner.js |
| `executioner.ui.continue` | "continue" | buttons: { | - | executioner | executioner.js |
| `executioner.ui.leave` | "leave" | }, | - | executioner | executioner.js |
| `executioner.ui.the_corridor_passes_through_a_security_checkpoint_the_defences_are_blown_apart_ragged_edges_scorched_by_laser_fire_` | "the corridor passes through a security checkpoint. the defences are blown apart, ragged edges scorched by laser fire." | '7-2': { | - | executioner | executioner.js |
| `executioner.ui.past_the_checkpoint_banks_of_containment_cells_can_be_seen_` | "past the checkpoint, banks of containment cells can be seen." | text: [ | - | executioner | executioner.js |
| `executioner.ui.continue` | "continue" | buttons: { | - | executioner | executioner.js |
| `executioner.ui.leave` | "leave" | }, | - | executioner | executioner.js |
| `executioner.ui.the_cells_are_all_empty_` | "the cells are all empty." | '8-2a': { | - | executioner | executioner.js |
| `executioner.ui.power_cables_running_across_the_ceiling_are_split_in_several_places_sparking_occasionally_` | "power cables running across the ceiling are split in several places, sparking occasionally." | text: [ | - | executioner | executioner.js |
| `executioner.ui.continue` | "continue" | buttons: { | - | executioner | executioner.js |
| `executioner.ui.leave` | "leave" | }, | - | executioner | executioner.js |
| `executioner.ui.the_guards_died_at_their_posts_shot_through_with_superheated_plasma_` | "the guards died at their posts, shot through with superheated plasma." | '8-2b': { | - | executioner | executioner.js |
| `executioner.ui.their_weapons_lie_on_the_floor_beside_them_` | "their weapons lie on the floor beside them." | text: [ | - | executioner | executioner.js |
| `executioner.ui.continue` | "continue" | buttons: { | - | executioner | executioner.js |
| `executioner.ui.leave` | "leave" | }, | - | executioner | executioner.js |
| `executioner.ui.continue` | "continue" | buttons: { | - | executioner | executioner.js |
| `executioner.ui.leave` | "leave" | }, | - | executioner | executioner.js |
| `executioner.ui.the_corridor_opens_onto_a_vast_training_complex_obstacles_and_features_blackened_by_real_combat_` | "the corridor opens onto a vast training complex, obstacles and features blackened by real combat." | '10': { | - | executioner | executioner.js |
| `executioner.ui.a_regenerative_machine_hums_uncannily_by_one_of_the_courses_` | "a regenerative machine hums uncannily by one of the courses." | 'text': [ | - | executioner | executioner.js |
| `executioner.ui.use_machine` | "use machine" | buttons: { | - | executioner | executioner.js |
| `executioner.ui.continue` | "continue" | }, | - | executioner | executioner.js |
| `executioner.ui.leave` | "leave" | }, | - | executioner | executioner.js |
| `executioner.ui.motion_from_the_centre_of_the_yard_` | "motion from the centre of the yard." | '11': { | - | executioner | executioner.js |
| `executioner.ui.a_sparring_automaton_still_fully_function_and_crusted_with_timeworn_blood_lunges_forward_` | "a sparring automaton, still fully function and crusted with timeworn blood, lunges forward." | 'text': [ | - | executioner | executioner.js |
| `executioner.ui.engage` | "engage" | buttons: { | - | executioner | executioner.js |
| `executioner.ui.continue` | "continue" | buttons: { | - | executioner | executioner.js |
| `executioner.ui.leave` | "leave" | buttons: { | - | executioner | executioner.js |
| `executioner.ui.medical_wing` | "Medical Wing" | "executioner-medical": { /* Medical wing */ | - | executioner | executioner.js |
| `executioner.ui.elevator_doors_open_to_an_empty_corridor_` | "elevator doors open to an empty corridor." | 'start': { | - | executioner | executioner.js |
| `executioner.ui.a_few_dusty_corpses_can_be_seen_further_down_but_this_deck_appears_to_have_been_spared_most_of_the_combat_` | "a few dusty corpses can be seen further down, but this deck appears to have been spared most of the combat." | 'text': [ | - | executioner | executioner.js |
| `executioner.ui.continue` | "continue" | buttons: { | - | executioner | executioner.js |
| `executioner.ui.leave` | "leave" | }, | - | executioner | executioner.js |
| `executioner.ui.continue` | "continue" | buttons: { | - | executioner | executioner.js |
| `executioner.ui.leave` | "leave" | }, | - | executioner | executioner.js |
| `executioner.ui.past_the_checkpoint_the_corridor_is_undamaged_save_for_sporadic_graffiti_` | "past the checkpoint, the corridor is undamaged save for sporadic graffiti." | '2': { | - | executioner | executioner.js |
| `executioner.ui.there_was_no_fighting_here_` | "there was no fighting here." | 'text': [ | - | executioner | executioner.js |
| `executioner.ui.continue` | "continue" | buttons: { | - | executioner | executioner.js |
| `executioner.ui.leave` | "leave" | }, | - | executioner | executioner.js |
| `executioner.ui.continue` | "continue" | buttons: { | - | executioner | executioner.js |
| `executioner.ui.leave` | "leave" | }, | - | executioner | executioner.js |
| `executioner.ui.automated_guardians_still_stalk_the_halls_unaware_that_their_masters_have_long_gone_` | "automated guardians still stalk the halls, unaware that their masters have long gone." | '3b': { | - | executioner | executioner.js |
| `executioner.ui.clumsy_machines_and_easily_avoided_` | "clumsy machines, and easily avoided." | 'text': [ | - | executioner | executioner.js |
| `executioner.ui.continue` | "continue" | buttons: { | - | executioner | executioner.js |
| `executioner.ui.leave` | "leave" | }, | - | executioner | executioner.js |
| `executioner.ui.medical_gurneys_are_fixed_to_grooves_running_down_the_corridor_walls_` | "medical gurneys are fixed to grooves running down the corridor walls." | '4': { | - | executioner | executioner.js |
| `executioner.ui.the_automated_patient_transport_system_now_sits_motionless_` | "the automated patient transport system now sits motionless." | 'text': [ | - | executioner | executioner.js |
| `executioner.ui.continue` | "continue" | buttons: { | - | executioner | executioner.js |
| `executioner.ui.leave` | "leave" | }, | - | executioner | executioner.js |
| `executioner.ui.continue` | "continue" | buttons: { | - | executioner | executioner.js |
| `executioner.ui.leave` | "leave" | }, | - | executioner | executioner.js |
| `executioner.ui.continue` | "continue" | buttons: { | - | executioner | executioner.js |
| `executioner.ui.leave` | "leave" | }, | - | executioner | executioner.js |
| `executioner.ui.more_medical_robots_stand_frozen_attached_by_a_network_of_wires_` | "more medical robots stand frozen, attached by a network of wires." | '6-1b': { | - | executioner | executioner.js |
| `executioner.ui.they_take_no_notice_of_the_intrusion_` | "they take no notice of the intrusion." | 'text': [ | - | executioner | executioner.js |
| `executioner.ui.continue` | "continue" | buttons: { | - | executioner | executioner.js |
| `executioner.ui.leave` | "leave" | }, | - | executioner | executioner.js |
| `executioner.ui.continue` | "continue" | buttons: { | - | executioner | executioner.js |
| `executioner.ui.leave` | "leave" | }, | - | executioner | executioner.js |
| `executioner.ui.this_ward_has_been_converted_to_a_makeshift_strategy_room_maps_scrawled_hastily_on_any_flat_surface_` | "this ward has been converted to a makeshift strategy room, maps scrawled hastily on any flat surface." | '5-2': { | - | executioner | executioner.js |
| `executioner.ui.a_secure_locker_is_set_into_one_wall_` | "a secure locker is set into one wall." | 'text': [ | - | executioner | executioner.js |
| `executioner.ui.force_locker` | "force locker" | buttons: { | - | executioner | executioner.js |
| `executioner.ui.continue` | "continue" | }, | - | executioner | executioner.js |
| `executioner.ui.leave` | "leave" | }, | - | executioner | executioner.js |
| `executioner.ui.continue` | "continue" | buttons: { | - | executioner | executioner.js |
| `executioner.ui.leave` | "leave" | }, | - | executioner | executioner.js |
| `executioner.ui.continue` | "continue" | buttons: { | - | executioner | executioner.js |
| `executioner.ui.leave` | "leave" | }, | - | executioner | executioner.js |
| `executioner.ui.better_to_move_without_drawing_attention_` | "better to move without drawing attention." | '6-2b': { | - | executioner | executioner.js |
| `executioner.ui.noises_can_be_heard_from_the_corridor_outside_` | "noises can be heard from the corridor outside." | 'text': [ | - | executioner | executioner.js |
| `executioner.ui.continue` | "continue" | buttons: { | - | executioner | executioner.js |
| `executioner.ui.leave` | "leave" | }, | - | executioner | executioner.js |
| `executioner.ui.continue` | "continue" | buttons: { | - | executioner | executioner.js |
| `executioner.ui.leave` | "leave" | }, | - | executioner | executioner.js |
| `executioner.ui.continue` | "continue" | buttons: { | - | executioner | executioner.js |
| `executioner.ui.leave` | "leave" | }, | - | executioner | executioner.js |
| `executioner.ui.another_checkpoint_ahead_fitted_with_heavy_doors_` | "another checkpoint ahead, fitted with heavy doors." | '9': { | - | executioner | executioner.js |
| `executioner.ui.security_is_even_tighter_here_` | "security is even tighter here." | 'text': [ | - | executioner | executioner.js |
| `executioner.ui.continue` | "continue" | buttons: { | - | executioner | executioner.js |
| `executioner.ui.leave` | "leave" | }, | - | executioner | executioner.js |
| `executioner.ui.continue` | "continue" | buttons: { | - | executioner | executioner.js |
| `executioner.ui.leave` | "leave" | }, | - | executioner | executioner.js |
| `executioner.ui.slipped_through_unnoticed_` | "slipped through unnoticed." | '10b': { | - | executioner | executioner.js |
| `executioner.ui.air_whistles_as_the_doors_open_this_section_must_have_lower_pressure_than_the_rest_of_the_ship_` | "air whistles as the doors open. this section must have lower pressure than the rest of the ship." | 'text': [ | - | executioner | executioner.js |
| `executioner.ui.continue` | "continue" | buttons: { | - | executioner | executioner.js |
| `executioner.ui.leave` | "leave" | }, | - | executioner | executioner.js |
| `executioner.ui.continue` | "continue" | buttons: { | - | executioner | executioner.js |
| `executioner.ui.leave` | "leave" | }, | - | executioner | executioner.js |
| `executioner.ui.continue` | "continue" | buttons: { | - | executioner | executioner.js |
| `executioner.ui.leave` | "leave" | }, | - | executioner | executioner.js |
| `executioner.ui.continue` | "continue" | buttons: { | - | executioner | executioner.js |
| `executioner.ui.leave` | "leave" | }, | - | executioner | executioner.js |
| `executioner.ui.security_drones_still_patrol_the_hallways_` | "security drones still patrol the hallways." | '13-1b': { | - | executioner | executioner.js |
| `executioner.ui.predictable_paths_` | "predictable paths." | 'text': [ | - | executioner | executioner.js |
| `executioner.ui.continue` | "continue" | buttons: { | - | executioner | executioner.js |
| `executioner.ui.leave` | "leave" | }, | - | executioner | executioner.js |
| `executioner.ui.continue` | "continue" | buttons: { | - | executioner | executioner.js |
| `executioner.ui.leave` | "leave" | }, | - | executioner | executioner.js |
| `executioner.ui.surgical_tools_are_scattered_on_the_floor_near_what_appears_the_be_the_remains_of_a_fire_` | "surgical tools are scattered on the floor, near what appears the be the remains of a fire." | '12-2': { | - | executioner | executioner.js |
| `executioner.ui.strange_` | "strange." | 'text': [ | - | executioner | executioner.js |
| `executioner.ui.continue` | "continue" | buttons: { | - | executioner | executioner.js |
| `executioner.ui.leave` | "leave" | }, | - | executioner | executioner.js |
| `executioner.ui.continue` | "continue" | buttons: { | - | executioner | executioner.js |
| `executioner.ui.leave` | "leave" | }, | - | executioner | executioner.js |
| `executioner.ui.continue` | "continue" | buttons: { | - | executioner | executioner.js |
| `executioner.ui.leave` | "leave" | }, | - | executioner | executioner.js |
| `executioner.ui.continue` | "continue" | buttons: { | - | executioner | executioner.js |
| `executioner.ui.leave` | "leave" | }, | - | executioner | executioner.js |
| `executioner.ui.containment_cells_arranged_at_the_back_of_the_room_all_open_` | "containment cells arranged at the back of the room, all open." | '15': { | - | executioner | executioner.js |
| `executioner.ui.something_moving_up_ahead_` | "something moving up ahead." | 'text': [ | - | executioner | executioner.js |
| `executioner.ui.continue` | "continue" | buttons: { | - | executioner | executioner.js |
| `executioner.ui.leave` | "leave" | }, | - | executioner | executioner.js |
| `executioner.ui.continue` | "continue" | buttons: { | - | executioner | executioner.js |
| `executioner.ui.leave` | "leave" | buttons: { | - | executioner | executioner.js |
| `executioner.ui.command_deck` | "Command Deck" | "executioner-command": { /* Command deck */ | - | executioner | executioner.js |
| `executioner.ui.the_path_to_the_command_bridge_is_wide_walls_adorned_with_decorative_shields_` | "the path to the command bridge is wide, walls adorned with decorative shields." | 'start': { | - | executioner | executioner.js |
| `executioner.ui.fighting_hadn_t_reached_here_it_seems_` | "fighting hadn\'t reached here, it seems." | 'text': [ | - | executioner | executioner.js |
| `executioner.ui.continue` | "continue" | buttons: { | - | executioner | executioner.js |
| `executioner.ui.leave` | "leave" | }, | - | executioner | executioner.js |
| `executioner.ui.continue` | "continue" | buttons: { | - | executioner | executioner.js |
| `executioner.ui.leave` | "leave" | }, | - | executioner | executioner.js |
| `executioner.ui.detour_through_the_officer_s_lounge_` | "detour through the officer\'s lounge." | '2': { | - | executioner | executioner.js |
| `executioner.ui.might_be_something_useful_here_` | "might be something useful here." | 'text': [ | - | executioner | executioner.js |
| `executioner.ui.continue` | "continue" | buttons: { | - | executioner | executioner.js |
| `executioner.ui.leave` | "leave" | }, | - | executioner | executioner.js |
| `executioner.ui.continue` | "continue" | buttons: { | - | executioner | executioner.js |
| `executioner.ui.leave` | "leave" | }, | - | executioner | executioner.js |
| `executioner.ui.continue` | "continue" | buttons: { | - | executioner | executioner.js |
| `executioner.ui.leave` | "leave" | }, | - | executioner | executioner.js |
| `executioner.ui.the_command_deck_is_empty_save_for_a_squat_figure_sitting_motionless_in_the_centre_of_the_room_` | "the command deck is empty, save for a squat figure sitting motionless in the centre of the room." | '4': { | - | executioner | executioner.js |
| `executioner.ui.in_a_flash_the_figure_is_standing_` | "in a flash, the figure is standing." | 'text': [ | - | executioner | executioner.js |
| `executioner.ui.approach` | "approach" | buttons: { | - | executioner | executioner.js |
| `executioner.ui.leave` | "leave" | }, | - | executioner | executioner.js |
| `executioner.ui.it_says_it_saw_the_rebellion_coming_said_it_made_arrangements_` | "it says it saw the rebellion coming. said it made arrangements." | 'text': [ | - | executioner | executioner.js |
| `executioner.ui.says_it_can_t_die_` | "says it can\'t die." | _('wanderer form, but not quite flesh. not quite metal either. a crystal set into its chest pulses with light.'), | - | executioner | executioner.js |
| `executioner.ui.observe` | "observe" | buttons: { | - | executioner | executioner.js |
| `executioner.ui.continue` | "continue" | buttons: { | - | executioner | executioner.js |
| `executioner.ui.leave` | "leave" | buttons: { | - | executioner | executioner.js |

## Global Module

| Key | Text | Context | Variables | Module | File |
|-----|------|---------|-----------|---------|------|
| `global.ui.the_thief` | "The Thief" | Events.Global = [ | - | global | global.js |
| `global.ui.the_villagers_haul_a_filthy_man_out_of_the_store_room_` | "the villagers haul a filthy man out of the store room." | 'start': { | - | global | global.js |
| `global.ui.hang_him` | "hang him" | buttons: { | - | global | global.js |
| `global.ui.spare_him` | "spare him" | }, | - | global | global.js |
| `global.ui.the_villagers_hang_the_thief_high_in_front_of_the_store_room_` | "the villagers hang the thief high in front of the store room." | 'hang': { | - | global | global.js |
| `global.ui.the_point_is_made_in_the_next_few_days_the_missing_supplies_are_returned_` | "the point is made. in the next few days, the missing supplies are returned." | text: [ | - | global | global.js |
| `global.ui.leave` | "leave" | buttons: { | - | global | global.js |
| `global.ui.the_man_says_he_s_grateful_says_he_won_t_come_around_any_more_` | "the man says he's grateful. says he won't come around any more." | 'spare': { | - | global | global.js |
| `global.ui.shares_what_he_knows_about_sneaking_before_he_goes_` | "shares what he knows about sneaking before he goes." | text: [ | - | global | global.js |
| `global.ui.leave` | "leave" | buttons: { | - | global | global.js |

## Marketing Module

| Key | Text | Context | Variables | Module | File |
|-----|------|---------|-----------|---------|------|
| `marketing.ui.penrose` | "Penrose" | Events.Marketing = [{ | - | marketing | marketing.js |
| `marketing.ui.give_in` | "give in" | buttons: { | - | marketing | marketing.js |
| `marketing.ui.ignore_it` | "ignore it" | }, | - | marketing | marketing.js |

## Outside Module

| Key | Text | Context | Variables | Module | File |
|-----|------|---------|-----------|---------|------|
| `outside.ui.a_ruined_trap` | "A Ruined Trap" | Events.Outside = [ | - | outside | outside.js |
| `outside.ui.some_of_the_traps_have_been_torn_apart_` | "some of the traps have been torn apart." | 'start': { | - | outside | outside.js |
| `outside.ui.large_prints_lead_away_into_the_forest_` | "large prints lead away, into the forest." | text: [ | - | outside | outside.js |
| `outside.ui.track_them` | "track them" | buttons: { | - | outside | outside.js |
| `outside.ui.ignore_them` | "ignore them" | }, | - | outside | outside.js |
| `outside.ui.go_home` | "go home" | buttons: { | - | outside | outside.js |
| `outside.ui.go_home` | "go home" | buttons: { | - | outside | outside.js |
| `outside.ui.fire` | "Fire" | }, | - | outside | outside.js |
| `outside.ui.sickness` | "Sickness" | }, | - | outside | outside.js |
| `outside.ui.1_medicine` | "1 medicine" | buttons: { | - | outside | outside.js |
| `outside.ui.ignore_it` | "ignore it" | }, | - | outside | outside.js |
| `outside.ui.go_home` | "go home" | buttons: { | - | outside | outside.js |
| `outside.ui.the_sickness_spreads_through_the_village_` | "the sickness spreads through the village." | 'death': { | - | outside | outside.js |
| `outside.ui.go_home` | "go home" | buttons: { | - | outside | outside.js |
| `outside.ui.plague` | "Plague" | { /* Plague */ | - | outside | outside.js |
| `outside.ui.buy_medicine` | "buy medicine" | /* Because there is a serious need for medicine, the price is raised. */ | - | outside | outside.js |
| `outside.ui.5_medicine` | "5 medicine" | }, | - | outside | outside.js |
| `outside.ui.do_nothing` | "do nothing" | }, | - | outside | outside.js |
| `outside.ui.the_plague_is_kept_from_spreading_` | "the plague is kept from spreading." | 'healed': { | - | outside | outside.js |
| `outside.ui.go_home` | "go home" | buttons: { | - | outside | outside.js |
| `outside.ui.the_plague_rips_through_the_village_` | "the plague rips through the village." | 'death': { | - | outside | outside.js |
| `outside.ui.go_home` | "go home" | buttons: { | - | outside | outside.js |
| `outside.ui.a_beast_attack` | "A Beast Attack" | { /* Beast attack */ | - | outside | outside.js |
| `outside.ui.a_pack_of_snarling_beasts_pours_out_of_the_trees_` | "a pack of snarling beasts pours out of the trees." | 'start': { | - | outside | outside.js |
| `outside.ui.a_military_raid` | "A Military Raid" | { /* Soldier attack */ | - | outside | outside.js |
| `outside.ui.a_gunshot_rings_through_the_trees_` | "a gunshot rings through the trees." | 'start': { | - | outside | outside.js |
| `outside.ui.outside` | "Outside" | */ | - | outside | outside.js |
| `outside.ui.gatherer` | "gatherer" | _INCOME: { | - | outside | outside.js |
| `outside.ui.hunter` | "hunter" | }, | - | outside | outside.js |
| `outside.ui.trapper` | "trapper" | }, | - | outside | outside.js |
| `outside.ui.tanner` | "tanner" | }, | - | outside | outside.js |
| `outside.ui.charcutier` | "charcutier" | }, | - | outside | outside.js |
| `outside.ui.iron_miner` | "iron miner" | }, | - | outside | outside.js |
| `outside.ui.coal_miner` | "coal miner" | }, | - | outside | outside.js |
| `outside.ui.sulphur_miner` | "sulphur miner" | }, | - | outside | outside.js |
| `outside.ui.steelworker` | "steelworker" | }, | - | outside | outside.js |
| `outside.ui.armourer` | "armourer" | }, | - | outside | outside.js |
| `outside.ui.scraps_of_fur` | "scraps of fur" | rollUnder: 0.5, | - | outside | outside.js |
| `outside.ui.bits_of_meat` | "bits of meat" | rollUnder: 0.75, | - | outside | outside.js |
| `outside.ui.strange_scales` | "strange scales" | rollUnder: 0.85, | - | outside | outside.js |
| `outside.ui.scattered_teeth` | "scattered teeth" | rollUnder: 0.93, | - | outside | outside.js |
| `outside.ui.tattered_cloth` | "tattered cloth" | rollUnder: 0.995, | - | outside | outside.js |
| `outside.ui.a_crudely_made_charm` | "a crudely made charm" | rollUnder: 1.0, | - | outside | outside.js |
| `outside.ui.a_silent_forest` | "A Silent Forest" | // Create the outside tab | - | outside | outside.js |
| `outside.ui.gather_wood` | "gather wood" | new Button.Button({ | - | outside | outside.js |
| `outside.ui.pop_` | "pop " | } | - | outside | outside.js |
| `outside.ui.forest` | "forest" | if($SM.get('game.buildings["hut"]', true) === 0) { | - | outside | outside.js |
| `outside.ui.village` | "village" | } else { | - | outside | outside.js |
| `outside.ui.check_traps` | "check traps" | new Button.Button({ | - | outside | outside.js |
| `outside.ui.a_silent_forest` | "A Silent Forest" | var title; | - | outside | outside.js |
| `outside.ui.a_lonely_hut` | "A Lonely Hut" | title = _("A Silent Forest"); | - | outside | outside.js |
| `outside.ui.a_tiny_village` | "A Tiny Village" | title = _("A Lonely Hut"); | - | outside | outside.js |
| `outside.ui.a_modest_village` | "A Modest Village" | title = _("A Tiny Village"); | - | outside | outside.js |
| `outside.ui.a_large_village` | "A Large Village" | title = _("A Modest Village"); | - | outside | outside.js |
| `outside.ui.a_raucous_village` | "A Raucous Village" | title = _("A Large Village"); | - | outside | outside.js |

## Room Module

| Key | Text | Context | Variables | Module | File |
|-----|------|---------|-----------|---------|------|
| `room.ui.the_nomad` | "The Nomad" | Events.Room = [ | - | room | room.js |
| `room.ui.buy_scales` | "buy scales" | buttons: { | - | room | room.js |
| `room.ui.buy_teeth` | "buy teeth" | }, | - | room | room.js |
| `room.ui.say_goodbye` | "say goodbye" | }, | - | room | room.js |
| `room.ui.noises` | "Noises" | }, | - | room | room.js |
| `room.ui.investigate` | "investigate" | buttons: { | - | room | room.js |
| `room.ui.ignore_them` | "ignore them" | }, | - | room | room.js |
| `room.ui.vague_shapes_move_just_out_of_sight_` | "vague shapes move, just out of sight." | 'nothing': { | - | room | room.js |
| `room.ui.the_sounds_stop_` | "the sounds stop." | text: [ | - | room | room.js |
| `room.ui.go_back_inside` | "go back inside" | buttons: { | - | room | room.js |
| `room.ui.a_bundle_of_sticks_lies_just_beyond_the_threshold_wrapped_in_coarse_furs_` | "a bundle of sticks lies just beyond the threshold, wrapped in coarse furs." | reward: { wood: 100, fur: 10 }, | - | room | room.js |
| `room.ui.the_night_is_silent_` | "the night is silent." | text: [ | - | room | room.js |
| `room.ui.go_back_inside` | "go back inside" | buttons: { | - | room | room.js |
| `room.ui.noises` | "Noises" | }, | - | room | room.js |
| `room.ui.investigate` | "investigate" | buttons: { | - | room | room.js |
| `room.ui.ignore_them` | "ignore them" | }, | - | room | room.js |
| `room.ui.some_wood_is_missing_` | "some wood is missing." | scales: { | - | room | room.js |
| `room.ui.the_ground_is_littered_with_small_scales` | "the ground is littered with small scales" | text: [ | - | room | room.js |
| `room.ui.leave` | "leave" | buttons: { | - | room | room.js |
| `room.ui.some_wood_is_missing_` | "some wood is missing." | teeth: { | - | room | room.js |
| `room.ui.the_ground_is_littered_with_small_teeth` | "the ground is littered with small teeth" | text: [ | - | room | room.js |
| `room.ui.leave` | "leave" | buttons: { | - | room | room.js |
| `room.ui.some_wood_is_missing_` | "some wood is missing." | cloth: { | - | room | room.js |
| `room.ui.the_ground_is_littered_with_scraps_of_cloth` | "the ground is littered with scraps of cloth" | text: [ | - | room | room.js |
| `room.ui.leave` | "leave" | buttons: { | - | room | room.js |
| `room.ui.the_beggar` | "The Beggar" | }, | - | room | room.js |
| `room.ui.give_50` | "give 50" | buttons: { | - | room | room.js |
| `room.ui.give_100` | "give 100" | }, | - | room | room.js |
| `room.ui.turn_him_away` | "turn him away" | }, | - | room | room.js |
| `room.ui.the_beggar_expresses_his_thanks_` | "the beggar expresses his thanks." | reward: { scales: 20 }, | - | room | room.js |
| `room.ui.leaves_a_pile_of_small_scales_behind_` | "leaves a pile of small scales behind." | text: [ | - | room | room.js |
| `room.ui.say_goodbye` | "say goodbye" | buttons: { | - | room | room.js |
| `room.ui.the_beggar_expresses_his_thanks_` | "the beggar expresses his thanks." | reward: { teeth: 20 }, | - | room | room.js |
| `room.ui.leaves_a_pile_of_small_teeth_behind_` | "leaves a pile of small teeth behind." | text: [ | - | room | room.js |
| `room.ui.say_goodbye` | "say goodbye" | buttons: { | - | room | room.js |
| `room.ui.the_beggar_expresses_his_thanks_` | "the beggar expresses his thanks." | reward: { cloth: 20 }, | - | room | room.js |
| `room.ui.leaves_some_scraps_of_cloth_behind_` | "leaves some scraps of cloth behind." | text: [ | - | room | room.js |
| `room.ui.say_goodbye` | "say goodbye" | buttons: { | - | room | room.js |
| `room.ui.the_shady_builder` | "The Shady Builder" | }, | - | room | room.js |
| `room.ui.300_wood` | "300 wood" | buttons: { | - | room | room.js |
| `room.ui.say_goodbye` | "say goodbye" | }, | - | room | room.js |
| `room.ui.go_home` | "go home" | buttons: { | - | room | room.js |
| `room.ui.go_home` | "go home" | buttons: { | - | room | room.js |
| `room.ui.the_mysterious_wanderer` | "The Mysterious Wanderer" | { /* Mysterious Wanderer  --  wood gambling */ | - | room | room.js |
| `room.ui.give_100` | "give 100" | buttons: { | - | room | room.js |
| `room.ui.give_500` | "give 500" | }, | - | room | room.js |
| `room.ui.turn_him_away` | "turn him away" | }, | - | room | room.js |
| `room.ui.the_wanderer_leaves_cart_loaded_with_wood` | "the wanderer leaves, cart loaded with wood" | 'wood100': { | - | room | room.js |
| `room.ui.say_goodbye` | "say goodbye" | buttons: { | - | room | room.js |
| `room.ui.the_wanderer_leaves_cart_loaded_with_wood` | "the wanderer leaves, cart loaded with wood" | 'wood500': { | - | room | room.js |
| `room.ui.say_goodbye` | "say goodbye" | buttons: { | - | room | room.js |
| `room.ui.the_mysterious_wanderer` | "The Mysterious Wanderer" | { /* Mysterious Wanderer  --  fur gambling */ | - | room | room.js |
| `room.ui.give_100` | "give 100" | buttons: { | - | room | room.js |
| `room.ui.give_500` | "give 500" | }, | - | room | room.js |
| `room.ui.turn_her_away` | "turn her away" | }, | - | room | room.js |
| `room.ui.the_wanderer_leaves_cart_loaded_with_furs` | "the wanderer leaves, cart loaded with furs" | 'fur100': { | - | room | room.js |
| `room.ui.say_goodbye` | "say goodbye" | buttons: { | - | room | room.js |
| `room.ui.the_wanderer_leaves_cart_loaded_with_furs` | "the wanderer leaves, cart loaded with furs" | 'fur500': { | - | room | room.js |
| `room.ui.say_goodbye` | "say goodbye" | buttons: { | - | room | room.js |
| `room.ui.the_scout` | "The Scout" | { /* The Scout  --  Map Merchant */ | - | room | room.js |
| `room.ui.buy_map` | "buy map" | buttons: { | - | room | room.js |
| `room.ui.learn_scouting` | "learn scouting" | }, | - | room | room.js |
| `room.ui.say_goodbye` | "say goodbye" | }, | - | room | room.js |
| `room.ui.the_master` | "The Master" | { /* The Wandering Master */ | - | room | room.js |
| `room.ui.agree` | "agree" | buttons: { | - | room | room.js |
| `room.ui.turn_him_away` | "turn him away" | }, | - | room | room.js |
| `room.ui.in_exchange_the_wanderer_offers_his_wisdom_` | "in exchange, the wanderer offers his wisdom." | 'agree': { | - | room | room.js |
| `room.ui.evasion` | "evasion" | buttons: { | - | room | room.js |
| `room.ui.precision` | "precision" | }, | - | room | room.js |
| `room.ui.force` | "force" | }, | - | room | room.js |
| `room.ui.nothing` | "nothing" | }, | - | room | room.js |
| `room.ui.the_sick_man` | "The Sick Man" | { /* The Sick Man */ | - | room | room.js |
| `room.ui.tell_him_to_leave` | "tell him to leave" | }, | - | room | room.js |
| `room.ui.the_man_is_thankful_` | "the man is thankful." | 'alloy': { | - | room | room.js |
| `room.ui.he_leaves_a_reward_` | "he leaves a reward." | text: [ | - | room | room.js |
| `room.ui.say_goodbye` | "say goodbye" | buttons: { | - | room | room.js |
| `room.ui.the_man_is_thankful_` | "the man is thankful." | 'cells': { | - | room | room.js |
| `room.ui.he_leaves_a_reward_` | "he leaves a reward." | text: [ | - | room | room.js |
| `room.ui.say_goodbye` | "say goodbye" | buttons: { | - | room | room.js |
| `room.ui.the_man_is_thankful_` | "the man is thankful." | 'scales': { | - | room | room.js |
| `room.ui.he_leaves_a_reward_` | "he leaves a reward." | text: [ | - | room | room.js |
| `room.ui.say_goodbye` | "say goodbye" | buttons: { | - | room | room.js |
| `room.ui.the_man_expresses_his_thanks_and_hobbles_off_` | "the man expresses his thanks and hobbles off." | 'nothing': { | - | room | room.js |
| `room.ui.say_goodbye` | "say goodbye" | buttons: { | - | room | room.js |
| `room.ui.trap` | "trap" | Craftables: { | - | room | room.js |
| `room.ui.builder_says_she_can_make_traps_to_catch_any_creatures_might_still_be_alive_out_there` | "builder says she can make traps to catch any creatures might still be alive out there" | button: null, | - | room | room.js |
| `room.ui.cart` | "cart" | }, | - | room | room.js |
| `room.ui.builder_says_she_can_make_a_cart_for_carrying_wood` | "builder says she can make a cart for carrying wood" | button: null, | - | room | room.js |
| `room.ui.hut` | "hut" | }, | - | room | room.js |
| `room.ui.builder_says_there_are_more_wanderers_says_they_ll_work_too_` | "builder says there are more wanderers. says they'll work, too." | button: null, | - | room | room.js |
| `room.ui.lodge` | "lodge" | }, | - | room | room.js |
| `room.ui.villagers_could_help_hunt_given_the_means` | "villagers could help hunt, given the means" | button: null, | - | room | room.js |
| `room.ui.trading_post` | "trading post" | }, | - | room | room.js |
| `room.ui.a_trading_post_would_make_commerce_easier` | "a trading post would make commerce easier" | button: null, | - | room | room.js |
| `room.ui.tannery` | "tannery" | }, | - | room | room.js |
| `room.ui.builder_says_leather_could_be_useful_says_the_villagers_could_make_it_` | "builder says leather could be useful. says the villagers could make it." | button: null, | - | room | room.js |
| `room.ui.smokehouse` | "smokehouse" | }, | - | room | room.js |
| `room.ui.should_cure_the_meat_or_it_ll_spoil_builder_says_she_can_fix_something_up_` | "should cure the meat, or it'll spoil. builder says she can fix something up." | button: null, | - | room | room.js |
| `room.ui.workshop` | "workshop" | }, | - | room | room.js |
| `room.ui.builder_says_she_could_make_finer_things_if_she_had_the_tools` | "builder says she could make finer things, if she had the tools" | button: null, | - | room | room.js |
| `room.ui.steelworks` | "steelworks" | }, | - | room | room.js |
| `room.ui.builder_says_the_villagers_could_make_steel_given_the_tools` | "builder says the villagers could make steel, given the tools" | button: null, | - | room | room.js |
| `room.ui.armoury` | "armoury" | }, | - | room | room.js |
| `room.ui.builder_says_it_d_be_useful_to_have_a_steady_source_of_bullets` | "builder says it'd be useful to have a steady source of bullets" | button: null, | - | room | room.js |
| `room.ui.torch` | "torch" | }, | - | room | room.js |
| `room.ui.a_torch_to_keep_the_dark_away` | "a torch to keep the dark away" | button: null, | - | room | room.js |
| `room.ui.waterskin` | "waterskin" | }, | - | room | room.js |
| `room.ui.cask` | "cask" | }, | - | room | room.js |
| `room.ui.water_tank` | "water tank" | }, | - | room | room.js |
| `room.ui.bone_spear` | "bone spear" | }, | - | room | room.js |
| `room.ui.this_spear_s_not_elegant_but_it_s_pretty_good_at_stabbing` | "this spear's not elegant, but it's pretty good at stabbing" | button: null, | - | room | room.js |
| `room.ui.rucksack` | "rucksack" | }, | - | room | room.js |
| `room.ui.wagon` | "wagon" | }, | - | room | room.js |
| `room.ui.convoy` | "convoy" | }, | - | room | room.js |
| `room.ui.l_armour` | "l armour" | }, | - | room | room.js |
| `room.ui.i_armour` | "i armour" | }, | - | room | room.js |
| `room.ui.s_armour` | "s armour" | }, | - | room | room.js |
| `room.ui.iron_sword` | "iron sword" | }, | - | room | room.js |
| `room.ui.sword_is_sharp_good_protection_out_in_the_wilds_` | "sword is sharp. good protection out in the wilds." | button: null, | - | room | room.js |
| `room.ui.steel_sword` | "steel sword" | }, | - | room | room.js |
| `room.ui.the_steel_is_strong_and_the_blade_true_` | "the steel is strong, and the blade true." | button: null, | - | room | room.js |
| `room.ui.rifle` | "rifle" | }, | - | room | room.js |
| `room.ui.black_powder_and_bullets_like_the_old_days_` | "black powder and bullets, like the old days." | name: _('rifle'), | - | room | room.js |
| `room.ui.room` | "Room" | }, | - | room | room.js |
| `room.ui.light_fire` | "light fire" | new Button.Button({ | - | room | room.js |
| `room.ui.stoke_fire` | "stoke fire" | new Button.Button({ | - | room | room.js |
| `room.ui.freezing` | "freezing" | return null; | - | room | room.js |
| `room.ui.cold` | "cold" | }, | - | room | room.js |
| `room.ui.mild` | "mild" | Freezing: { value: 0, text: _('freezing') }, | - | room | room.js |
| `room.ui.warm` | "warm" | Cold: { value: 1, text: _('cold') }, | - | room | room.js |
| `room.ui.hot` | "hot" | Mild: { value: 2, text: _('mild') }, | - | room | room.js |
| `room.ui.dead` | "dead" | return null; | - | room | room.js |
| `room.ui.smoldering` | "smoldering" | }, | - | room | room.js |
| `room.ui.flickering` | "flickering" | Dead: { value: 0, text: _('dead') }, | - | room | room.js |
| `room.ui.burning` | "burning" | Smoldering: { value: 1, text: _('smoldering') }, | - | room | room.js |
| `room.ui.roaring` | "roaring" | Flickering: { value: 2, text: _('flickering') }, | - | room | room.js |
| `room.ui.a_dark_room` | "A Dark Room" | setTitle: function () { | - | room | room.js |
| `room.ui.a_firelit_room` | "A Firelit Room" | setTitle: function () { | - | room | room.js |
| `room.ui.stores` | "stores" | stores = $('<div>').attr({ | - | room | room.js |
| `room.ui.weapons` | "weapons" | weapons = $('<div>').attr({ | - | room | room.js |
| `room.ui.total` | "total" | if (tt.children().length > 0) { | - | room | room.js |
| `room.ui.build_` | "build:" | var needsAppend = false; | - | room | room.js |
| `room.ui.craft_` | "craft:" | var cNeedsAppend = false; | - | room | room.js |
| `room.ui.buy_` | "buy:" | var bNeedsAppend = false; | - | room | room.js |

## Setpieces Module

| Key | Text | Context | Variables | Module | File |
|-----|------|---------|-----------|---------|------|
| `setpieces.ui.an_outpost` | "An Outpost" | Events.Setpieces = { | - | setpieces | setpieces.js |
| `setpieces.ui.leave` | "leave" | buttons: { | - | setpieces | setpieces.js |
| `setpieces.ui.a_murky_swamp` | "A Murky Swamp" | }, | - | setpieces | setpieces.js |
| `setpieces.ui.enter` | "enter" | buttons: { | - | setpieces | setpieces.js |
| `setpieces.ui.leave` | "leave" | }, | - | setpieces | setpieces.js |
| `setpieces.ui.deep_in_the_swamp_is_a_moss_covered_cabin_` | "deep in the swamp is a moss-covered cabin." | 'cabin': { | - | setpieces | setpieces.js |
| `setpieces.ui.an_old_wanderer_sits_inside_in_a_seeming_trance_` | "an old wanderer sits inside, in a seeming trance." | text: [ | - | setpieces | setpieces.js |
| `setpieces.ui.talk` | "talk" | 'talk': { | - | setpieces | setpieces.js |
| `setpieces.ui.leave` | "leave" | }, | - | setpieces | setpieces.js |
| `setpieces.ui.the_wanderer_takes_the_charm_and_nods_slowly_` | "the wanderer takes the charm and nods slowly." | 'talk': { | - | setpieces | setpieces.js |
| `setpieces.ui.he_speaks_of_once_leading_the_great_fleets_to_fresh_worlds_` | "he speaks of once leading the great fleets to fresh worlds." | text: [ | - | setpieces | setpieces.js |
| `setpieces.ui.leave` | "leave" | buttons: { | - | setpieces | setpieces.js |
| `setpieces.ui.a_damp_cave` | "A Damp Cave" | }, | - | setpieces | setpieces.js |
| `setpieces.ui.go_inside` | "go inside" | buttons: { | - | setpieces | setpieces.js |
| `setpieces.ui.leave` | "leave" | }, | - | setpieces | setpieces.js |
| `setpieces.ui.continue` | "continue" | buttons: { | - | setpieces | setpieces.js |
| `setpieces.ui.leave_cave` | "leave cave" | }, | - | setpieces | setpieces.js |
| `setpieces.ui.the_cave_narrows_a_few_feet_in_` | "the cave narrows a few feet in." | 'a2': { | - | setpieces | setpieces.js |
| `setpieces.ui.the_walls_are_moist_and_moss_covered` | "the walls are moist and moss-covered" | text: [ | - | setpieces | setpieces.js |
| `setpieces.ui.squeeze` | "squeeze" | buttons: { | - | setpieces | setpieces.js |
| `setpieces.ui.leave_cave` | "leave cave" | }, | - | setpieces | setpieces.js |
| `setpieces.ui.the_remains_of_an_old_camp_sits_just_inside_the_cave_` | "the remains of an old camp sits just inside the cave." | 'a3': { | - | setpieces | setpieces.js |
| `setpieces.ui.bedrolls_torn_and_blackened_lay_beneath_a_thin_layer_of_dust_` | "bedrolls, torn and blackened, lay beneath a thin layer of dust." | text: [ | - | setpieces | setpieces.js |
| `setpieces.ui.continue` | "continue" | buttons: { | - | setpieces | setpieces.js |
| `setpieces.ui.leave_cave` | "leave cave" | }, | - | setpieces | setpieces.js |
| `setpieces.ui.the_body_of_a_wanderer_lies_in_a_small_cavern_` | "the body of a wanderer lies in a small cavern." | 'b1': { | - | setpieces | setpieces.js |
| `setpieces.ui.rot_s_been_to_work_on_it_and_some_of_the_pieces_are_missing_` | "rot's been to work on it, and some of the pieces are missing." | text: [ | - | setpieces | setpieces.js |
| `setpieces.ui.continue` | "continue" | buttons: { | - | setpieces | setpieces.js |
| `setpieces.ui.leave_cave` | "leave cave" | }, | - | setpieces | setpieces.js |
| `setpieces.ui.continue` | "continue" | buttons: { | - | setpieces | setpieces.js |
| `setpieces.ui.leave_cave` | "leave cave" | }, | - | setpieces | setpieces.js |
| `setpieces.ui.continue` | "continue" | buttons: { | - | setpieces | setpieces.js |
| `setpieces.ui.leave_cave` | "leave cave" | }, | - | setpieces | setpieces.js |
| `setpieces.ui.continue` | "continue" | buttons: { | - | setpieces | setpieces.js |
| `setpieces.ui.leave_cave` | "leave cave" | }, | - | setpieces | setpieces.js |
| `setpieces.ui.continue` | "continue" | buttons: { | - | setpieces | setpieces.js |
| `setpieces.ui.leave_cave` | "leave cave" | }, | - | setpieces | setpieces.js |
| `setpieces.ui.continue` | "continue" | buttons: { | - | setpieces | setpieces.js |
| `setpieces.ui.leave_cave` | "leave cave" | }, | - | setpieces | setpieces.js |
| `setpieces.ui.the_nest_of_a_large_animal_lies_at_the_back_of_the_cave_` | "the nest of a large animal lies at the back of the cave." | 'end1': { | - | setpieces | setpieces.js |
| `setpieces.ui.leave_cave` | "leave cave" | buttons: { | - | setpieces | setpieces.js |
| `setpieces.ui.a_small_supply_cache_is_hidden_at_the_back_of_the_cave_` | "a small supply cache is hidden at the back of the cave." | 'end2': { | - | setpieces | setpieces.js |
| `setpieces.ui.leave_cave` | "leave cave" | buttons: { | - | setpieces | setpieces.js |
| `setpieces.ui.an_old_case_is_wedged_behind_a_rock_covered_in_a_thick_layer_of_dust_` | "an old case is wedged behind a rock, covered in a thick layer of dust." | 'end3': { | - | setpieces | setpieces.js |
| `setpieces.ui.leave_cave` | "leave cave" | buttons: { | - | setpieces | setpieces.js |
| `setpieces.ui.a_deserted_town` | "A Deserted Town" | }, | - | setpieces | setpieces.js |
| `setpieces.ui.explore` | "explore" | buttons: { | - | setpieces | setpieces.js |
| `setpieces.ui.leave` | "leave" | }, | - | setpieces | setpieces.js |
| `setpieces.ui.where_the_windows_of_the_schoolhouse_aren_t_shattered_they_re_blackened_with_soot_` | "where the windows of the schoolhouse aren't shattered, they're blackened with soot." | 'a1': { | - | setpieces | setpieces.js |
| `setpieces.ui.the_double_doors_creak_endlessly_in_the_wind_` | "the double doors creak endlessly in the wind." | text: [ | - | setpieces | setpieces.js |
| `setpieces.ui.enter` | "enter" | buttons: { | - | setpieces | setpieces.js |
| `setpieces.ui.leave_town` | "leave town" | }, | - | setpieces | setpieces.js |
| `setpieces.ui.continue` | "continue" | buttons: { | - | setpieces | setpieces.js |
| `setpieces.ui.leave_town` | "leave town" | }, | - | setpieces | setpieces.js |
| `setpieces.ui.a_squat_building_up_ahead_` | "a squat building up ahead." | 'a3': { | - | setpieces | setpieces.js |
| `setpieces.ui.a_green_cross_barely_visible_behind_grimy_windows_` | "a green cross barely visible behind grimy windows." | text: [ | - | setpieces | setpieces.js |
| `setpieces.ui.enter` | "enter" | buttons: { | - | setpieces | setpieces.js |
| `setpieces.ui.leave_town` | "leave town" | }, | - | setpieces | setpieces.js |
| `setpieces.ui.a_small_cache_of_supplies_is_tucked_inside_a_rusting_locker_` | "a small cache of supplies is tucked inside a rusting locker." | 'b1': { | - | setpieces | setpieces.js |
| `setpieces.ui.continue` | "continue" | buttons: { | - | setpieces | setpieces.js |
| `setpieces.ui.leave_town` | "leave town" | }, | - | setpieces | setpieces.js |
| `setpieces.ui.continue` | "continue" | buttons: { | - | setpieces | setpieces.js |
| `setpieces.ui.leave_town` | "leave town" | }, | - | setpieces | setpieces.js |
| `setpieces.ui.continue` | "continue" | buttons: { | - | setpieces | setpieces.js |
| `setpieces.ui.leave_town` | "leave town" | }, | - | setpieces | setpieces.js |
| `setpieces.ui.an_overturned_caravan_is_spread_across_the_pockmarked_street_` | "an overturned caravan is spread across the pockmarked street." | 'b4': { | - | setpieces | setpieces.js |
| `setpieces.ui.it_s_been_picked_over_by_scavengers_but_there_s_still_some_things_worth_taking_` | "it's been picked over by scavengers, but there's still some things worth taking." | text: [ | - | setpieces | setpieces.js |
| `setpieces.ui.continue` | "continue" | buttons: { | - | setpieces | setpieces.js |
| `setpieces.ui.leave_town` | "leave town" | }, | - | setpieces | setpieces.js |
| `setpieces.ui.continue` | "continue" | buttons: { | - | setpieces | setpieces.js |
| `setpieces.ui.leave_town` | "leave town" | }, | - | setpieces | setpieces.js |
| `setpieces.ui.continue` | "continue" | buttons: { | - | setpieces | setpieces.js |
| `setpieces.ui.leave_town` | "leave town" | }, | - | setpieces | setpieces.js |
| `setpieces.ui.continue` | "continue" | buttons: { | - | setpieces | setpieces.js |
| `setpieces.ui.leave_town` | "leave town" | }, | - | setpieces | setpieces.js |
| `setpieces.ui.through_the_large_gymnasium_doors_footsteps_can_be_heard_` | "through the large gymnasium doors, footsteps can be heard." | 'c3': { | - | setpieces | setpieces.js |
| `setpieces.ui.the_torchlight_casts_a_flickering_glow_down_the_hallway_` | "the torchlight casts a flickering glow down the hallway." | text: [ | - | setpieces | setpieces.js |
| `setpieces.ui.the_footsteps_stop_` | "the footsteps stop." | _('through the large gymnasium doors, footsteps can be heard.'), | - | setpieces | setpieces.js |
| `setpieces.ui.enter` | "enter" | buttons: { | - | setpieces | setpieces.js |
| `setpieces.ui.leave_town` | "leave town" | }, | - | setpieces | setpieces.js |
| `setpieces.ui.continue` | "continue" | buttons: { | - | setpieces | setpieces.js |
| `setpieces.ui.leave_town` | "leave town" | }, | - | setpieces | setpieces.js |
| `setpieces.ui.something_s_causing_a_commotion_a_ways_down_the_road_` | "something's causing a commotion a ways down the road." | 'c5': { | - | setpieces | setpieces.js |
| `setpieces.ui.a_fight_maybe_` | "a fight, maybe." | text: [ | - | setpieces | setpieces.js |
| `setpieces.ui.continue` | "continue" | buttons: { | - | setpieces | setpieces.js |
| `setpieces.ui.leave_town` | "leave town" | }, | - | setpieces | setpieces.js |
| `setpieces.ui.a_small_basket_of_food_is_hidden_under_a_park_bench_with_a_note_attached_` | "a small basket of food is hidden under a park bench, with a note attached." | 'c6': { | - | setpieces | setpieces.js |
| `setpieces.ui.can_t_read_the_words_` | "can't read the words." | text: [ | - | setpieces | setpieces.js |
| `setpieces.ui.continue` | "continue" | buttons: { | - | setpieces | setpieces.js |
| `setpieces.ui.leave_town` | "leave town" | }, | - | setpieces | setpieces.js |
| `setpieces.ui.continue` | "continue" | buttons: { | - | setpieces | setpieces.js |
| `setpieces.ui.leave_town` | "leave town" | }, | - | setpieces | setpieces.js |
| `setpieces.ui.continue` | "continue" | buttons: { | - | setpieces | setpieces.js |
| `setpieces.ui.leave_town` | "leave town" | }, | - | setpieces | setpieces.js |
| `setpieces.ui.scavenger_had_a_small_camp_in_the_school_` | "scavenger had a small camp in the school." | 'end1': { | - | setpieces | setpieces.js |
| `setpieces.ui.collected_scraps_spread_across_the_floor_like_they_fell_from_heaven_` | "collected scraps spread across the floor like they fell from heaven." | text: [ | - | setpieces | setpieces.js |
| `setpieces.ui.leave_town` | "leave town" | buttons: { | - | setpieces | setpieces.js |
| `setpieces.ui.scavenger_d_been_looking_for_supplies_in_here_it_seems_` | "scavenger'd been looking for supplies in here, it seems." | 'end2': { | - | setpieces | setpieces.js |
| `setpieces.ui.a_shame_to_let_what_he_d_found_go_to_waste_` | "a shame to let what he'd found go to waste." | text: [ | - | setpieces | setpieces.js |
| `setpieces.ui.leave_town` | "leave town" | buttons: { | - | setpieces | setpieces.js |
| `setpieces.ui.beneath_the_wanderer_s_rags_clutched_in_one_of_its_many_hands_a_glint_of_steel_` | "beneath the wanderer's rags, clutched in one of its many hands, a glint of steel." | 'end3': { | - | setpieces | setpieces.js |
| `setpieces.ui.worth_killing_for_it_seems_` | "worth killing for, it seems." | text: [ | - | setpieces | setpieces.js |
| `setpieces.ui.leave_town` | "leave town" | buttons: { | - | setpieces | setpieces.js |
| `setpieces.ui.eye_for_an_eye_seems_fair_` | "eye for an eye seems fair." | 'end4': { | - | setpieces | setpieces.js |
| `setpieces.ui.always_worked_before_at_least_` | "always worked before, at least." | text: [ | - | setpieces | setpieces.js |
| `setpieces.ui.leave_town` | "leave town" | buttons: { | - | setpieces | setpieces.js |
| `setpieces.ui.some_medicine_abandoned_in_the_drawers_` | "some medicine abandoned in the drawers." | 'end5': { | - | setpieces | setpieces.js |
| `setpieces.ui.leave_town` | "leave town" | buttons: { | - | setpieces | setpieces.js |
| `setpieces.ui.the_clinic_has_been_ransacked_` | "the clinic has been ransacked." | 'end6': { | - | setpieces | setpieces.js |
| `setpieces.ui.only_dust_and_stains_remain_` | "only dust and stains remain." | text: [ | - | setpieces | setpieces.js |
| `setpieces.ui.leave_town` | "leave town" | buttons: { | - | setpieces | setpieces.js |
| `setpieces.ui.a_ruined_city` | "A Ruined City" | }, | - | setpieces | setpieces.js |
| `setpieces.ui.a_battered_highway_sign_stands_guard_at_the_entrance_to_this_once_great_city_` | "a battered highway sign stands guard at the entrance to this once-great city." | 'start': { | - | setpieces | setpieces.js |
| `setpieces.ui.explore` | "explore" | buttons: { | - | setpieces | setpieces.js |
| `setpieces.ui.leave` | "leave" | }, | - | setpieces | setpieces.js |
| `setpieces.ui.the_streets_are_empty_` | "the streets are empty." | 'a1': { | - | setpieces | setpieces.js |
| `setpieces.ui.the_air_is_filled_with_dust_driven_relentlessly_by_the_hard_winds_` | "the air is filled with dust, driven relentlessly by the hard winds." | text:[ | - | setpieces | setpieces.js |
| `setpieces.ui.continue` | "continue" | buttons: { | - | setpieces | setpieces.js |
| `setpieces.ui.leave_city` | "leave city" | }, | - | setpieces | setpieces.js |
| `setpieces.ui.orange_traffic_cones_are_set_across_the_street_faded_and_cracked_` | "orange traffic cones are set across the street, faded and cracked." | 'a2': { | - | setpieces | setpieces.js |
| `setpieces.ui.lights_flash_through_the_alleys_between_buildings_` | "lights flash through the alleys between buildings." | text:[ | - | setpieces | setpieces.js |
| `setpieces.ui.continue` | "continue" | buttons: { | - | setpieces | setpieces.js |
| `setpieces.ui.leave_city` | "leave city" | }, | - | setpieces | setpieces.js |
| `setpieces.ui.a_large_shanty_town_sprawls_across_the_streets_` | "a large shanty town sprawls across the streets." | 'a3': { | - | setpieces | setpieces.js |
| `setpieces.ui.faces_darkened_by_soot_and_blood_stare_out_from_crooked_huts_` | "faces, darkened by soot and blood, stare out from crooked huts." | text: [ | - | setpieces | setpieces.js |
| `setpieces.ui.continue` | "continue" | buttons: { | - | setpieces | setpieces.js |
| `setpieces.ui.leave_city` | "leave city" | }, | - | setpieces | setpieces.js |
| `setpieces.ui.the_shell_of_an_abandoned_hospital_looms_ahead_` | "the shell of an abandoned hospital looms ahead." | 'a4': { | - | setpieces | setpieces.js |
| `setpieces.ui.enter` | "enter" | buttons: { | - | setpieces | setpieces.js |
| `setpieces.ui.leave_city` | "leave city" | }, | - | setpieces | setpieces.js |
| `setpieces.ui.the_old_tower_seems_mostly_intact_` | "the old tower seems mostly intact." | 'b1': { | - | setpieces | setpieces.js |
| `setpieces.ui.the_shell_of_a_burned_out_car_blocks_the_entrance_` | "the shell of a burned out car blocks the entrance." | text: [ | - | setpieces | setpieces.js |
| `setpieces.ui.most_of_the_windows_at_ground_level_are_busted_anyway_` | "most of the windows at ground level are busted anyway." | _('the old tower seems mostly intact.'), | - | setpieces | setpieces.js |
| `setpieces.ui.enter` | "enter" | buttons: { | - | setpieces | setpieces.js |
| `setpieces.ui.leave_city` | "leave city" | }, | - | setpieces | setpieces.js |
| `setpieces.ui.descend` | "descend" | buttons: { | - | setpieces | setpieces.js |
| `setpieces.ui.leave_city` | "leave city" | }, | - | setpieces | setpieces.js |
| `setpieces.ui.continue` | "continue" | buttons: { | - | setpieces | setpieces.js |
| `setpieces.ui.leave_city` | "leave city" | }, | - | setpieces | setpieces.js |
| `setpieces.ui.continue` | "continue" | buttons: { | - | setpieces | setpieces.js |
| `setpieces.ui.leave_city` | "leave city" | }, | - | setpieces | setpieces.js |
| `setpieces.ui.continue` | "continue" | buttons: { | - | setpieces | setpieces.js |
| `setpieces.ui.leave_city` | "leave city" | }, | - | setpieces | setpieces.js |
| `setpieces.ui.nothing_but_downcast_eyes_` | "nothing but downcast eyes." | 'b6': { | - | setpieces | setpieces.js |
| `setpieces.ui.the_people_here_were_broken_a_long_time_ago_` | "the people here were broken a long time ago." | text: [ | - | setpieces | setpieces.js |
| `setpieces.ui.continue` | "continue" | buttons: { | - | setpieces | setpieces.js |
| `setpieces.ui.leave_city` | "leave city" | }, | - | setpieces | setpieces.js |
| `setpieces.ui.empty_corridors_` | "empty corridors." | 'b7': { | - | setpieces | setpieces.js |
| `setpieces.ui.the_place_has_been_swept_clean_by_scavengers_` | "the place has been swept clean by scavengers." | text: [ | - | setpieces | setpieces.js |
| `setpieces.ui.continue` | "continue" | buttons: { | - | setpieces | setpieces.js |
| `setpieces.ui.leave_city` | "leave city" | }, | - | setpieces | setpieces.js |
| `setpieces.ui.continue` | "continue" | buttons: { | - | setpieces | setpieces.js |
| `setpieces.ui.leave_city` | "leave city" | }, | - | setpieces | setpieces.js |
| `setpieces.ui.continue` | "continue" | buttons: { | - | setpieces | setpieces.js |
| `setpieces.ui.leave_city` | "leave city" | }, | - | setpieces | setpieces.js |
| `setpieces.ui.continue` | "continue" | buttons: { | - | setpieces | setpieces.js |
| `setpieces.ui.leave_city` | "leave city" | }, | - | setpieces | setpieces.js |
| `setpieces.ui.street_above_the_subway_platform_is_blown_away_` | "street above the subway platform is blown away." | 'c3': { | - | setpieces | setpieces.js |
| `setpieces.ui.lets_some_light_down_into_the_dusty_haze_` | "lets some light down into the dusty haze." | text: [ | - | setpieces | setpieces.js |
| `setpieces.ui.a_sound_comes_from_the_tunnel_just_ahead_` | "a sound comes from the tunnel, just ahead." | _('street above the subway platform is blown away.'), | - | setpieces | setpieces.js |
| `setpieces.ui.investigate` | "investigate" | buttons: { | - | setpieces | setpieces.js |
| `setpieces.ui.leave_city` | "leave city" | }, | - | setpieces | setpieces.js |
| `setpieces.ui.looks_like_a_camp_of_sorts_up_ahead_` | "looks like a camp of sorts up ahead." | 'c4': { | - | setpieces | setpieces.js |
| `setpieces.ui.rusted_chainlink_is_pulled_across_an_alleyway_` | "rusted chainlink is pulled across an alleyway." | _('looks like a camp of sorts up ahead.'), | - | setpieces | setpieces.js |
| `setpieces.ui.fires_burn_in_the_courtyard_beyond_` | "fires burn in the courtyard beyond." | /// TRANSLATORS : chainlink is a type of metal fence. | - | setpieces | setpieces.js |
| `setpieces.ui.continue` | "continue" | buttons: { | - | setpieces | setpieces.js |
| `setpieces.ui.leave_city` | "leave city" | }, | - | setpieces | setpieces.js |
| `setpieces.ui.more_voices_can_be_heard_ahead_` | "more voices can be heard ahead." | 'c5': { | - | setpieces | setpieces.js |
| `setpieces.ui.they_must_be_here_for_a_reason_` | "they must be here for a reason." | text: [ | - | setpieces | setpieces.js |
| `setpieces.ui.continue` | "continue" | buttons: { | - | setpieces | setpieces.js |
| `setpieces.ui.leave_city` | "leave city" | }, | - | setpieces | setpieces.js |
| `setpieces.ui.the_sound_of_gunfire_carries_on_the_wind_` | "the sound of gunfire carries on the wind." | 'c6': { | - | setpieces | setpieces.js |
| `setpieces.ui.the_street_ahead_glows_with_firelight_` | "the street ahead glows with firelight." | text: [ | - | setpieces | setpieces.js |
| `setpieces.ui.continue` | "continue" | buttons: { | - | setpieces | setpieces.js |
| `setpieces.ui.leave_city` | "leave city" | }, | - | setpieces | setpieces.js |
| `setpieces.ui.more_squatters_are_crowding_around_now_` | "more squatters are crowding around now." | text: [ | - | setpieces | setpieces.js |
| `setpieces.ui.someone_throws_a_stone_` | "someone throws a stone." | /// TRANSLATORS : squatters occupy abandoned dwellings they don't own. | - | setpieces | setpieces.js |
| `setpieces.ui.continue` | "continue" | buttons: { | - | setpieces | setpieces.js |
| `setpieces.ui.leave_city` | "leave city" | }, | - | setpieces | setpieces.js |
| `setpieces.ui.an_improvised_shop_is_set_up_on_the_sidewalk_` | "an improvised shop is set up on the sidewalk." | 'c8': { | - | setpieces | setpieces.js |
| `setpieces.ui.the_owner_stands_by_stoic_` | "the owner stands by, stoic." | text: [ | - | setpieces | setpieces.js |
| `setpieces.ui.continue` | "continue" | buttons: { | - | setpieces | setpieces.js |
| `setpieces.ui.leave_city` | "leave city" | }, | - | setpieces | setpieces.js |
| `setpieces.ui.strips_of_meat_hang_drying_by_the_side_of_the_street_` | "strips of meat hang drying by the side of the street." | 'c9': { | - | setpieces | setpieces.js |
| `setpieces.ui.the_people_back_away_avoiding_eye_contact_` | "the people back away, avoiding eye contact." | text: [ | - | setpieces | setpieces.js |
| `setpieces.ui.continue` | "continue" | buttons: { | - | setpieces | setpieces.js |
| `setpieces.ui.leave_city` | "leave city" | }, | - | setpieces | setpieces.js |
| `setpieces.ui.someone_has_locked_and_barricaded_the_door_to_this_operating_theatre_` | "someone has locked and barricaded the door to this operating theatre." | 'c10': { | - | setpieces | setpieces.js |
| `setpieces.ui.continue` | "continue" | buttons: { | - | setpieces | setpieces.js |
| `setpieces.ui.leave_city` | "leave city" | }, | - | setpieces | setpieces.js |
| `setpieces.ui.continue` | "continue" | buttons: { | - | setpieces | setpieces.js |
| `setpieces.ui.leave_city` | "leave city" | }, | - | setpieces | setpieces.js |
| `setpieces.ui.continue` | "continue" | buttons: { | - | setpieces | setpieces.js |
| `setpieces.ui.leave_city` | "leave city" | }, | - | setpieces | setpieces.js |
| `setpieces.ui.strips_of_meat_are_hung_up_to_dry_in_this_ward_` | "strips of meat are hung up to dry in this ward." | 'c13': { | - | setpieces | setpieces.js |
| `setpieces.ui.continue` | "continue" | buttons: { | - | setpieces | setpieces.js |
| `setpieces.ui.leave_city` | "leave city" | }, | - | setpieces | setpieces.js |
| `setpieces.ui.continue` | "continue" | buttons: { | - | setpieces | setpieces.js |
| `setpieces.ui.leave_city` | "leave city" | }, | - | setpieces | setpieces.js |
| `setpieces.ui.the_debris_is_denser_here_` | "the debris is denser here." | 'd2': { | - | setpieces | setpieces.js |
| `setpieces.ui.maybe_some_useful_stuff_in_the_rubble_` | "maybe some useful stuff in the rubble." | text: [ | - | setpieces | setpieces.js |
| `setpieces.ui.continue` | "continue" | buttons: { | - | setpieces | setpieces.js |
| `setpieces.ui.leave_city` | "leave city" | }, | - | setpieces | setpieces.js |
| `setpieces.ui.continue` | "continue" | buttons: { | - | setpieces | setpieces.js |
| `setpieces.ui.leave_city` | "leave city" | }, | - | setpieces | setpieces.js |
| `setpieces.ui.continue` | "continue" | buttons: { | - | setpieces | setpieces.js |
| `setpieces.ui.leave_city` | "leave city" | }, | - | setpieces | setpieces.js |
| `setpieces.ui.continue` | "continue" | buttons: { | - | setpieces | setpieces.js |
| `setpieces.ui.leave_city` | "leave city" | }, | - | setpieces | setpieces.js |
| `setpieces.ui.continue` | "continue" | buttons: { | - | setpieces | setpieces.js |
| `setpieces.ui.leave_city` | "leave city" | }, | - | setpieces | setpieces.js |
| `setpieces.ui.continue` | "continue" | buttons: { | - | setpieces | setpieces.js |
| `setpieces.ui.leave_city` | "leave city" | }, | - | setpieces | setpieces.js |
| `setpieces.ui.continue` | "continue" | buttons: { | - | setpieces | setpieces.js |
| `setpieces.ui.leave_city` | "leave city" | }, | - | setpieces | setpieces.js |
| `setpieces.ui.continue` | "continue" | buttons: { | - | setpieces | setpieces.js |
| `setpieces.ui.leave_city` | "leave city" | }, | - | setpieces | setpieces.js |
| `setpieces.ui.continue` | "continue" | buttons: { | - | setpieces | setpieces.js |
| `setpieces.ui.continue` | "continue" | buttons: { | - | setpieces | setpieces.js |
| `setpieces.ui.bird_must_have_liked_shiney_things_` | "bird must have liked shiney things." | 'end1': { | - | setpieces | setpieces.js |
| `setpieces.ui.some_good_stuff_woven_into_its_nest_` | "some good stuff woven into its nest." | text: [ | - | setpieces | setpieces.js |
| `setpieces.ui.leave_city` | "leave city" | buttons: { | - | setpieces | setpieces.js |
| `setpieces.ui.not_much_here_` | "not much here." | 'end2': { | - | setpieces | setpieces.js |
| `setpieces.ui.scavengers_must_have_gotten_to_this_place_already_` | "scavengers must have gotten to this place already." | text: [ | - | setpieces | setpieces.js |
| `setpieces.ui.leave_city` | "leave city" | buttons: { | - | setpieces | setpieces.js |
| `setpieces.ui.the_tunnel_opens_up_at_another_platform_` | "the tunnel opens up at another platform." | text: [ | - | setpieces | setpieces.js |
| `setpieces.ui.leave_city` | "leave city" | buttons: { | - | setpieces | setpieces.js |
| `setpieces.ui.the_small_military_outpost_is_well_supplied_` | "the small military outpost is well supplied." | 'end4': { | - | setpieces | setpieces.js |
| `setpieces.ui.arms_and_munitions_relics_from_the_war_are_neatly_arranged_on_the_store_room_floor_` | "arms and munitions, relics from the war, are neatly arranged on the store-room floor." | text: [ | - | setpieces | setpieces.js |
| `setpieces.ui.leave_city` | "leave city" | buttons: { | - | setpieces | setpieces.js |
| `setpieces.ui.searching_the_bodies_yields_a_few_supplies_` | "searching the bodies yields a few supplies." | 'end5': { | - | setpieces | setpieces.js |
| `setpieces.ui.more_soldiers_will_be_on_their_way_` | "more soldiers will be on their way." | text: [ | - | setpieces | setpieces.js |
| `setpieces.ui.leave_city` | "leave city" | buttons: { | - | setpieces | setpieces.js |
| `setpieces.ui.the_small_settlement_has_clearly_been_burning_a_while_` | "the small settlement has clearly been burning a while." | 'end6': { | - | setpieces | setpieces.js |
| `setpieces.ui.the_bodies_of_the_wanderers_that_lived_here_are_still_visible_in_the_flames_` | "the bodies of the wanderers that lived here are still visible in the flames." | text: [ | - | setpieces | setpieces.js |
| `setpieces.ui.leave_city` | "leave city" | buttons: { | - | setpieces | setpieces.js |
| `setpieces.ui.the_remaining_settlers_flee_from_the_violence_their_belongings_forgotten_` | "the remaining settlers flee from the violence, their belongings forgotten." | 'end7': { | - | setpieces | setpieces.js |
| `setpieces.ui.there_s_not_much_but_some_useful_things_can_still_be_found_` | "there's not much, but some useful things can still be found." | text: [ | - | setpieces | setpieces.js |
| `setpieces.ui.leave_city` | "leave city" | buttons: { | - | setpieces | setpieces.js |
| `setpieces.ui.the_young_settler_was_carrying_a_canvas_sack_` | "the young settler was carrying a canvas sack." | 'end8': { | - | setpieces | setpieces.js |
| `setpieces.ui.it_contains_travelling_gear_and_a_few_trinkets_` | "it contains travelling gear, and a few trinkets." | text: [ | - | setpieces | setpieces.js |
| `setpieces.ui.leave_city` | "leave city" | buttons: { | - | setpieces | setpieces.js |
| `setpieces.ui.inside_the_hut_a_child_cries_` | "inside the hut, a child cries." | 'end9': { | - | setpieces | setpieces.js |
| `setpieces.ui.a_few_belongings_rest_against_the_walls_` | "a few belongings rest against the walls." | text: [ | - | setpieces | setpieces.js |
| `setpieces.ui.leave_city` | "leave city" | buttons: { | - | setpieces | setpieces.js |
| `setpieces.ui.the_stench_of_rot_and_death_fills_the_operating_theatres_` | "the stench of rot and death fills the operating theatres." | 'end10': { | - | setpieces | setpieces.js |
| `setpieces.ui.a_few_items_are_scattered_on_the_ground_` | "a few items are scattered on the ground." | text: [ | - | setpieces | setpieces.js |
| `setpieces.ui.leave_city` | "leave city" | buttons: { | - | setpieces | setpieces.js |
| `setpieces.ui.a_pristine_medicine_cabinet_at_the_end_of_a_hallway_` | "a pristine medicine cabinet at the end of a hallway." | 'end11': { | - | setpieces | setpieces.js |
| `setpieces.ui.the_rest_of_the_hospital_is_empty_` | "the rest of the hospital is empty." | text: [ | - | setpieces | setpieces.js |
| `setpieces.ui.leave_city` | "leave city" | buttons: { | - | setpieces | setpieces.js |
| `setpieces.ui.someone_had_been_stockpiling_loot_here_` | "someone had been stockpiling loot here." | 'end12': { | - | setpieces | setpieces.js |
| `setpieces.ui.leave_city` | "leave city" | buttons: { | - | setpieces | setpieces.js |
| `setpieces.ui.the_tentacular_horror_is_defeated_` | "the tentacular horror is defeated." | 'end13': { | - | setpieces | setpieces.js |
| `setpieces.ui.inside_the_remains_of_its_victims_are_everywhere_` | "inside, the remains of its victims are everywhere." | text: [ | - | setpieces | setpieces.js |
| `setpieces.ui.leave_city` | "leave city" | buttons: { | - | setpieces | setpieces.js |
| `setpieces.ui.the_warped_man_lies_dead_` | "the warped man lies dead." | text: [ | - | setpieces | setpieces.js |
| `setpieces.ui.leave_city` | "leave city" | buttons: { | - | setpieces | setpieces.js |
| `setpieces.ui.the_old_man_had_a_small_cache_of_interesting_items_` | "the old man had a small cache of interesting items." | 'end15': { | - | setpieces | setpieces.js |
| `setpieces.ui.leave_city` | "leave city" | buttons: { | - | setpieces | setpieces.js |
| `setpieces.ui.an_old_house` | "An Old House" | }, | - | setpieces | setpieces.js |
| `setpieces.ui.go_inside` | "go inside" | buttons: { | - | setpieces | setpieces.js |
| `setpieces.ui.leave` | "leave" | }, | - | setpieces | setpieces.js |
| `setpieces.ui.the_house_is_abandoned_but_not_yet_picked_over_` | "the house is abandoned, but not yet picked over." | 'supplies': { | - | setpieces | setpieces.js |
| `setpieces.ui.still_a_few_drops_of_water_in_the_old_well_` | "still a few drops of water in the old well." | text: [ | - | setpieces | setpieces.js |
| `setpieces.ui.leave` | "leave" | buttons: { | - | setpieces | setpieces.js |
| `setpieces.ui.the_house_has_been_ransacked_` | "the house has been ransacked." | 'medicine': { | - | setpieces | setpieces.js |
| `setpieces.ui.but_there_is_a_cache_of_medicine_under_the_floorboards_` | "but there is a cache of medicine under the floorboards." | text: [ | - | setpieces | setpieces.js |
| `setpieces.ui.leave` | "leave" | buttons: { | - | setpieces | setpieces.js |
| `setpieces.ui.leave` | "leave" | buttons: { | - | setpieces | setpieces.js |
| `setpieces.ui.a_forgotten_battlefield` | "A Forgotten Battlefield" | }, | - | setpieces | setpieces.js |
| `setpieces.ui.a_battle_was_fought_here_long_ago_` | "a battle was fought here, long ago." | 'start': { | - | setpieces | setpieces.js |
| `setpieces.ui.battered_technology_from_both_sides_lays_dormant_on_the_blasted_landscape_` | "battered technology from both sides lays dormant on the blasted landscape." | text: [ | - | setpieces | setpieces.js |
| `setpieces.ui.leave` | "leave" | buttons: { | - | setpieces | setpieces.js |
| `setpieces.ui.a_huge_borehole` | "A Huge Borehole" | }, | - | setpieces | setpieces.js |
| `setpieces.ui.a_huge_hole_is_cut_deep_into_the_earth_evidence_of_the_past_harvest_` | "a huge hole is cut deep into the earth, evidence of the past harvest." | 'start': { | - | setpieces | setpieces.js |
| `setpieces.ui.they_took_what_they_came_for_and_left_` | "they took what they came for, and left." | text: [ | - | setpieces | setpieces.js |
| `setpieces.ui.leave` | "leave" | buttons: { | - | setpieces | setpieces.js |
| `setpieces.ui.a_crashed_ship` | "A Crashed Ship" | }, | - | setpieces | setpieces.js |
| `setpieces.ui.the_familiar_curves_of_a_wanderer_vessel_rise_up_out_of_the_dust_and_ash_` | "the familiar curves of a wanderer vessel rise up out of the dust and ash. " | }, | - | setpieces | setpieces.js |
| `setpieces.ui.lucky_that_the_natives_can_t_work_the_mechanisms_` | "lucky that the natives can't work the mechanisms." | text: [ | - | setpieces | setpieces.js |
| `setpieces.ui.with_a_little_effort_it_might_fly_again_` | "with a little effort, it might fly again." | _('the familiar curves of a wanderer vessel rise up out of the dust and ash. '), | - | setpieces | setpieces.js |
| `setpieces.ui.salvage` | "salvage" | buttons: { | - | setpieces | setpieces.js |
| `setpieces.ui.the_sulphur_mine` | "The Sulphur Mine" | }, | - | setpieces | setpieces.js |
| `setpieces.ui.attack` | "attack" | buttons: { | - | setpieces | setpieces.js |
| `setpieces.ui.leave` | "leave" | }, | - | setpieces | setpieces.js |
| `setpieces.ui.continue` | "continue" | buttons: { | - | setpieces | setpieces.js |
| `setpieces.ui.run` | "run" | }, | - | setpieces | setpieces.js |
| `setpieces.ui.continue` | "continue" | buttons: { | - | setpieces | setpieces.js |
| `setpieces.ui.run` | "run" | }, | - | setpieces | setpieces.js |
| `setpieces.ui.continue` | "continue" | buttons: { | - | setpieces | setpieces.js |
| `setpieces.ui.leave` | "leave" | buttons: { | - | setpieces | setpieces.js |
| `setpieces.ui.the_coal_mine` | "The Coal Mine" | }, | - | setpieces | setpieces.js |
| `setpieces.ui.attack` | "attack" | buttons: { | - | setpieces | setpieces.js |
| `setpieces.ui.leave` | "leave" | }, | - | setpieces | setpieces.js |
| `setpieces.ui.continue` | "continue" | buttons: { | - | setpieces | setpieces.js |
| `setpieces.ui.run` | "run" | }, | - | setpieces | setpieces.js |
| `setpieces.ui.continue` | "continue" | buttons: { | - | setpieces | setpieces.js |
| `setpieces.ui.run` | "run" | }, | - | setpieces | setpieces.js |
| `setpieces.ui.continue` | "continue" | buttons: { | - | setpieces | setpieces.js |
| `setpieces.ui.leave` | "leave" | buttons: { | - | setpieces | setpieces.js |
| `setpieces.ui.the_iron_mine` | "The Iron Mine" | }, | - | setpieces | setpieces.js |
| `setpieces.ui.an_old_iron_mine_sits_here_tools_abandoned_and_left_to_rust_` | "an old iron mine sits here, tools abandoned and left to rust." | 'start': { | - | setpieces | setpieces.js |
| `setpieces.ui.go_inside` | "go inside" | buttons: { | - | setpieces | setpieces.js |
| `setpieces.ui.leave` | "leave" | }, | - | setpieces | setpieces.js |
| `setpieces.ui.leave` | "leave" | buttons: { | - | setpieces | setpieces.js |
| `setpieces.ui.leave` | "leave" | buttons: { | - | setpieces | setpieces.js |
| `setpieces.ui.a_destroyed_village` | "A Destroyed Village" | "cache": { /* Cache - contains some of supplies from previous game */ | - | setpieces | setpieces.js |
| `setpieces.ui.a_destroyed_village_lies_in_the_dust_` | "a destroyed village lies in the dust." | 'start': { | - | setpieces | setpieces.js |
| `setpieces.ui.enter` | "enter" | buttons: { | - | setpieces | setpieces.js |
| `setpieces.ui.leave` | "leave" | }, | - | setpieces | setpieces.js |
| `setpieces.ui.a_shack_stands_at_the_center_of_the_village_` | "a shack stands at the center of the village." | 'underground': { | - | setpieces | setpieces.js |
| `setpieces.ui.there_are_still_supplies_inside_` | "there are still supplies inside." | text: [ | - | setpieces | setpieces.js |
| `setpieces.ui.take` | "take" | buttons: { | - | setpieces | setpieces.js |
| `setpieces.ui.all_the_work_of_a_previous_generation_is_here_` | "all the work of a previous generation is here." | 'exit': { | - | setpieces | setpieces.js |
| `setpieces.ui.ripe_for_the_picking_` | "ripe for the picking." | text: [ | - | setpieces | setpieces.js |
| `setpieces.ui.leave` | "leave" | buttons: { | - | setpieces | setpieces.js |

## Events Module

| Key | Text | Context | Variables | Module | File |
|-----|------|---------|-----------|---------|------|
| `events.ui.pause_` | "pause." | } | - | events | events.js |
| `events.ui.eat_meat` | "eat meat" | var btn = new Button.Button({ | - | events | events.js |
| `events.ui.use_meds` | "use meds" | var btn = new Button.Button({ | - | events | events.js |
| `events.ui.use_hypo` | "use hypo" | var btn = new Button.Button({ | - | events | events.js |
| `events.ui.shield` | "shield" | var btn = new Button.Button({ | - | events | events.js |
| `events.ui.boost` | "boost" | createStimButton: () => new Button.Button({ | - | events | events.js |
| `events.ui.leave` | "leave" | } | - | events | events.js |
| `events.ui.drop_` | "drop:" | $('#dropMenu').empty(); | - | events | events.js |
| `events.ui.nothing` | "nothing" | } | - | events | events.js |
| `events.ui.take` | "take" | var takeall = new Button.Button({ | - | events | events.js |
| `events.ui.take_` | "take:" | drawLoot: function(lootList) { | - | events | events.js |
| `events.ui.nothing_to_take` | "nothing to take" | Events.setTakeAll(lootButtons); | - | events | events.js |
| `events.ui.all` | "all" | takeAll.children('span').first().text(num); | - | events | events.js |
| `events.ui._and_` | " and " | if(takeAndLeave){ | - | events | events.js |
| `events.ui._event_` | "*** EVENT ***" | // every 3 seconds change title to '*** EVENT ***', then 1.5 seconds later, change it back to the original title. | - | events | events.js |

## Fabricator Module

| Key | Text | Context | Variables | Module | File |
|-----|------|---------|-----------|---------|------|
| `fabricator.ui.fabricator` | "Fabricator" | const Fabricator = { | - | fabricator | fabricator.js |
| `fabricator.ui.energy_blade` | "energy blade" | Craftables: { | - | fabricator | fabricator.js |
| `fabricator.ui.the_blade_hums_charged_particles_sparking_and_fizzing_` | "the blade hums, charged particles sparking and fizzing." | name: _('energy blade'), | - | fabricator | fabricator.js |
| `fabricator.ui.fluid_recycler` | "fluid recycler" | }, | - | fabricator | fabricator.js |
| `fabricator.ui.cargo_drone` | "cargo drone" | }, | - | fabricator | fabricator.js |
| `fabricator.ui.kinetic_armour` | "kinetic armour" | }, | - | fabricator | fabricator.js |
| `fabricator.ui.disruptor` | "disruptor" | }, | - | fabricator | fabricator.js |
| `fabricator.ui.hypo` | "hypo" | }, | - | fabricator | fabricator.js |
| `fabricator.ui.stim` | "stim" | }, | - | fabricator | fabricator.js |
| `fabricator.ui.plasma_rifle` | "plasma rifle" | }, | - | fabricator | fabricator.js |
| `fabricator.ui.glow_stone` | "glow stone" | }, | - | fabricator | fabricator.js |
| `fabricator.ui.a_whirring_fabricator` | "A Whirring Fabricator" | // Create the Fabricator tab | - | fabricator | fabricator.js |
| `fabricator.ui.a_whirring_fabricator` | "A Whirring Fabricator" | setTitle: () => { | - | fabricator | fabricator.js |
| `fabricator.ui.fabricate_` | "fabricate:" | let needsAppend = false; | - | fabricator | fabricator.js |
| `fabricator.ui.blueprints` | "blueprints" | if(blueprints.length === 0) { | - | fabricator | fabricator.js |

## Path Module

| Key | Text | Context | Variables | Module | File |
|-----|------|---------|-----------|---------|------|
| `path.ui.a_dusty_path` | "A Dusty Path" | // Create the path tab | - | path | path.js |
| `path.ui.supplies_` | "supplies:" | // Add the outfitting area | - | path | path.js |
| `path.ui.embark` | "embark" | new Button.Button({ | - | path | path.js |
| `path.ui.perks` | "perks" | if(perks.length === 0) { | - | path | path.js |
| `path.ui.leather` | "leather" | armour = _("iron"); | - | path | path.js |
| `path.ui.armour` | "armour" | if(aRow.length === 0) { | - | path | path.js |
| `path.ui.water` | "water" | if(wRow.length === 0) { | - | path | path.js |
| `path.ui.damage` | "damage" | if(store.type == 'weapon') { | - | path | path.js |
| `path.ui.weight` | "weight" | } | - | path | path.js |
| `path.ui.available` | "available" | $('<div>').addClass('row_key').text(_('weight')).appendTo(tt); | - | path | path.js |
| `path.ui.a_dusty_path` | "A Dusty Path" | setTitle: function() { | - | path | path.js |

## Ship Module

| Key | Text | Context | Variables | Module | File |
|-----|------|---------|-----------|---------|------|
| `ship.ui.ship` | "Ship" | BASE_HULL: 0, | - | ship | ship.js |
| `ship.ui.an_old_starship` | "An Old Starship" | // Create the Ship tab | - | ship | ship.js |
| `ship.ui.hull_` | "hull:" | // Draw the hull label | - | ship | ship.js |
| `ship.ui.engine_` | "engine:" | // Draw the thrusters label | - | ship | ship.js |
| `ship.ui.reinforce_hull` | "reinforce hull" | new Button.Button({ | - | ship | ship.js |
| `ship.ui.upgrade_engine` | "upgrade engine" | new Button.Button({ | - | ship | ship.js |
| `ship.ui.lift_off` | "lift off" | var b = new Button.Button({ | - | ship | ship.js |
| `ship.ui.an_old_starship` | "An Old Starship" | setTitle: function() { | - | ship | ship.js |
| `ship.ui.ready_to_leave_` | "Ready to Leave?" | if(!$SM.get('game.spaceShip.seenWarning')) { | - | ship | ship.js |
| `ship.ui.time_to_get_out_of_this_place_won_t_be_coming_back_` | "time to get out of this place. won't be coming back." | 'start': { | - | ship | ship.js |
| `ship.ui.lift_off` | "lift off" | buttons: { | - | ship | ship.js |
| `ship.ui.linger` | "linger" | }, | - | ship | ship.js |

## Space Module

| Key | Text | Context | Variables | Module | File |
|-----|------|---------|-----------|---------|------|
| `space.ui.hull_` | "hull: " | // Create the hull display | - | space | space.js |
| `space.ui.space` | "Space" | t = _("Exosphere"); | - | space | space.js |
| `space.ui.wait` | "wait" | Button.Button({ | - | space | space.js |
| `space.ui.restart_` | "restart." | $('<span>') | - | space | space.js |
| `space.ui.expanded_story_alternate_ending_behind_the_scenes_commentary_get_the_app_` | "expanded story. alternate ending. behind the scenes commentary. get the app." | $('<span>') | - | space | space.js |
| `space.ui.ios_` | "iOS." | $('<span>') | - | space | space.js |
| `space.ui.android_` | "android." | $('<span>') | - | space | space.js |

## World Module

| Key | Text | Context | Variables | Module | File |
|-----|------|---------|-----------|---------|------|
| `world.ui.rucksack` | "rucksack" | var t = _('pockets'); | - | world | world.js |
| `world.ui.a_barren_world` | "A Barren World" | setTitle: function() { | - | world | world.js |

