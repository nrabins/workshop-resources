import axios from 'axios'
import { ref, watch } from '@vue/composition-api'

export default function (url, delay) {
  const data = ref({});
  const isPending = ref(true);
  const error = ref(null);

  const fetch = () => {
    isPending.value = true;
    axios.get(url.value)
      .then(response => {
        error.value = null;
        data.value = response.data;
        isPending.value = false;
      })
      .catch(er => {
        error.value = er;
        isPending.value = false;
        data.value = {}
      })
  }

  watch(url, () => {
    setTimeout(fetch, delay);
  });

  return {
    isPending,
    data,
    refresh: fetch, 
    error,
  }

}
