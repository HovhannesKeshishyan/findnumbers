<template>
  <main class="game-section main">
    <div class="table-and-row-results">
      <div class="numbers_block">
        <div v-for="(col, col_index) in state" class="numbers_column" :key="col_index">
          <div @click="increaseNumber(col_index, row_index)" v-for="(row, row_index) in col" class="number"
               :key="`${col_index}-${row_index}`">
            <span>{{ row }}</span>
          </div>
        </div>
      </div>

      <div class="rows-results">
        <div v-for="row_result in results.rows" class="result-item-wrapper" :key="row_result">
          <div class="rows-results__item result-item" :key="row_result">
            {{ row_result }}
          </div>
        </div>
      </div>
    </div>

    <div class="cols-results">
      <div v-for="col_result in results.cols" class="result-item-wrapper" :key="col_result">
        <div class="cols-results__item result-item" :key="col_result">
          {{ col_result }}
        </div>
      </div>
    </div>

    <div class="buttons-block">
      <div class="attempts">
        <span>Attempts left:  </span>
        <span class="attempts_left">{{ attempts_left }}</span>
      </div>
      <div class="buttons">
        <BaseButton @click="reset" label="Reset" type="warning"/>
        <BaseButton @click="check" label="Check"/>
      </div>
    </div>
  </main>
</template>

<script>
import BaseButton from "../../utils/BaseButton.vue";

export default {
  name: "GameSection",
  components: {BaseButton},

  data() {
    return {
      state: [
        [1, 0, 0],
        [0, 2, 0],
        [0, 0, 3]
      ],
      attempts_left: 10,
      results: {
        rows: {
          1: 2,
          2: 0,
          3: 1
        },
        cols: {
          1: 1,
          2: 3,
          3: 0
        }
      }
    }
  },

  methods: {
    increaseNumber(col_index, row_index) {
      let value = this.state[col_index][row_index] + 1;
      if (value > 9) value = 0;
      this.state[col_index][row_index] = value;
    },

    check() {
      console.log("check")
    },

    reset() {
      console.log("reset")
    }
  }
}
</script>

<style scoped lang="scss">
$rect-size: 120px;
$rect-size-md: 100px;
$rect-size-sm: 50px;

.game-section {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  background-color: inherit;

  .table-and-row-results {
    display: flex;
    gap: 2rem;
    padding: 1.5rem 3rem;
  }

  .numbers_block {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .numbers_column {
      display: flex;
      gap: 1rem;
    }
  }

  .rows-results {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .number,
  .result-item {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 4rem;
    background-color: white;
    user-select: none;
  }

  .number,
  .result-item-wrapper {
    width: $rect-size;
    height: $rect-size;
  }

  .result-item-wrapper {
    padding: 20px;
  }

  .result-item {
    width: 100%;
    height: 100%;
    border-radius: 100%;
  }

  .number {
    border: 10px double green;
    color: green;
  }



  .cols-results {
    display: flex;
    gap: 1rem;
    justify-items: center;
    align-items: center;
    padding-left: 3rem;

    .cols-results__item {
      background-color: white;
    }
  }
}

@media only screen and (max-width: 750px) {
  .game-section {
    .table-and-row-results {
      gap: 0;
    }

    .result-item-wrapper,
    .numbers_block .number {
      width: $rect-size-md;
      height: $rect-size-md;
    }
  }
}

@media only screen and (max-width: 550px) {
  .game-section {
    align-items: center;

    .table-and-row-results {
      padding: 1rem 1rem 0 1rem;
    }

    .cols-results {
      padding: 0 1rem;
      margin-right: 50px;
    }

    .numbers_block .number {
      border: 2px solid green;
    }

    .numbers_block .number,
    .result-item-wrapper {
      width: $rect-size-sm;
      height: $rect-size-sm;
      font-size: 2rem;
    }

    .result-item-wrapper {
      padding: 5px;
      .result-item {
        font-size: 1.8rem;
      }
    }

    .buttons-block {
      justify-content: center;
    }
  }
}


.buttons-block {
  display: flex;
  margin-top: 2rem;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 2rem;
  border-top: 1px solid white;
  padding: 1.5rem 3rem;

  .attempts {
    font-size: 3rem;
    color: #fff;

    .attempts_left {
      margin-left: 1rem;
    }
  }

  .buttons {
    display: flex;
    justify-content: space-around;
    gap: 1rem;
  }

  @media only screen and (max-width: 450px) {
    .attempts {
      width: 100%;
      text-align: center;
      font-size: 2rem;
    }
    .buttons {
      flex-direction: column;
      width: 100%;
    }
  }

  @media only screen and (max-width: 350px) {
    .buttons {
      flex-direction: column;
      width: 100%;
    }
  }
}
</style>