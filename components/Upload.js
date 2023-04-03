
function Upload() {
  return (
    <div class="flex justify-center">
      <div class="mb-3 w-72">
        <label
          for="formFileMultiple"
          class="mb-2 inline-block text-neutral-700 dark:text-neutral-200"
          >
        </label>
        <input
          class="border-2 relative m-0 block w-full min-w-0 flex-auto rounded border-solid bg-clip-padding py-[0.32rem] px-3 text-base font-normal transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:px-3 file:py-[0.32rem] file:transition file:duration-150 file:ease-in-out file:[margin-inline-end:0.75rem] file:[border-inline-end-width:1px] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-[0_0_0_1px] focus:shadow-primary focus:outline-none border-gray-600 text-neutral-200 file:bg-gray-800 file:text-neutral-100"
          type="file"
          id="formFileMultiple"
          multiple />
      </div>
    </div>
  )
}

export default Upload