use wasm_bindgen::prelude::wasm_bindgen;

#[wasm_bindgen]
pub fn sum(num: i32) -> i32 {
    num + 1
}
