// Imports are from the demo-util folder in the repo
// https://github.com/torch2424/wasm-by-example/blob/master/demo-util/
import { wasmBrowserInstantiate } from "./instantiateWasm.js";

const go = new Go(); // Defined in wasm_exec.js. Don't forget to add this in your index.html.

const runWasmAdd = async (a, b) => {
  // Get the importObject from the go instance.
  const importObject = go.importObject;

  // Instantiate our wasm module
  const wasmModule = await wasmBrowserInstantiate("/wasm/add.wasm", importObject);

  // Allow the wasm_exec go instance, bootstrap and execute our wasm module
  go.run(wasmModule.instance);

  // Call the Add function export from wasm, save the result
  const addResult = wasmModule.instance.exports.add(a, b);

  return addResult;
};

async function add(){
    console.log("start add");
    //1つ目の入力ボックスの値を取得する
    var value1 = document.getElementById("num1").value;
    //2つ目の入力ボックスの値を取得する
    var value2 = document.getElementById("num2").value;
    //足算する
    var result = await runWasmAdd(parseInt(value1), parseInt(value2));
    //値を設定する
    document.querySelector('.result').innerHTML = result ;
    console.log("end add");
};

// グローバルオブジェクトである window に add 関数を登録する
window.add = add;
