<template>
  <main class="game-section main">
    <SectionLoader v-if="is_loading"/>

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
        <div v-for="(row_result, index) in resultsRows" class="result-item-wrapper" :key="index">
          <div :class="row_result.class_name">
            {{ row_result.value }}
          </div>
        </div>
      </div>
    </div>

    <div class="cols-results">
      <div v-for="(col_result, index) in resultsCols" class="result-item-wrapper" :key="index">
        <div :class="col_result.class_name">
          {{ col_result.value }}
        </div>
      </div>
    </div>

    <div class="buttons-block">
      <div class="attempts">
        <span>Attempts left:  </span>
        <span :class="attemptsLeft.class_name">{{ attemptsLeft.attempts_left }}</span>
      </div>
      <div class="buttons">
        <BaseButton @click="restartGame" label="Restart" type="warning"/>
        <BaseButton @click="checkResult" label="Check"/>
      </div>
    </div>
  </main>
</template>

<script>
import BaseButton from "@/utils/BaseButton.vue";
import SectionLoader from "@/utils/SectionLoader.vue";
import {checkGameResult, startGame} from "@/services/https-service.js";

export default {
  name: "GameSection",
  components: {SectionLoader, BaseButton},

  created() {
    this.getGameData();
  },

  data() {
    return {
      game_id: null,
      is_winner: false,
      is_loading: false,
      state: [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
      ],
      attempts_left: 0,

      results: {
        rows: {
          1: 0,
          2: 0,
          3: 0
        },
        cols: {
          1: 0,
          2: 0,
          3: 0
        }
      },

      result_items_class_names: {
        0: "none",
        1: "low",
        2: "mid",
        3: "completed",
      }
    }
  },

  computed: {
    resultsCols() {
      return this.transformResultsObject(this.results.cols);
    },

    resultsRows() {
      return this.transformResultsObject(this.results.rows);
    },

    attemptsLeft() {
      const class_name = this.attempts_left > 7 ? "success" : this.attempts_left > 3 ? "warning" : "danger";
      return {
        class_name: class_name + " attempts_left",
        attempts_left: this.attempts_left
      }
    }
  },

  methods: {
    increaseNumber(col_index, row_index) {
      let value = this.state[col_index][row_index] + 1;
      if (value > 9) value = 0;
      this.state[col_index][row_index] = value;
    },

    transformResultsObject(data) {
      const transformedData = [];
      for (let key in data) {
        const value = data[key];
        const class_name = this.result_items_class_names[value] + " result-item";
        transformedData.push({key, value, class_name});
      }
      return transformedData;
    },

    async getGameData() {
      this.is_loading = true;
      this.$emit("loading-change", true);
      try {
        const {data} = await startGame();
        this.game_id = data.id;
        this.attempts_left = data.attempts;
      } catch (err) {
        this.$emit("on-error", err);
      }
      this.$emit("loading-change", false);
      this.is_loading = false;
    },

    async checkResult() {
      this.is_loading = true;
      try {
        const {data} = await checkGameResult(this.game_id, this.state);
        this.is_winner = data.is_winner;
        this.results.rows = data.rows;
        this.results.cols = data.cols;
        this.attempts_left = data.attempts;

        if (data.is_winner) {
          //todo
        } else if (data.attempts === 0) {
          //todo
        }
      } catch (err) {
        this.$emit("on-error", err);
      }
      this.is_loading = false;
    },

    async restartGame() {
      this.is_loading = true;
      console.log("reset");
      this.is_loading = false;
    }
  }
}
</script>

<style scoped lang="scss">
@import "@/styles/colors.scss";
@import "@/styles/utils.scss";

$rect-size: 120px;
$rect-size-md: 100px;
$rect-size-sm: 50px;

.game-section {
  position: relative;
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
    @include flex-center;
    font-size: 4rem;
    background-color: $white;
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
    color: $white;

    &.none {
      background-color: $danger;
    }

    &.low {
      background-color: $warning;
    }

    &.mid {
      background-color: $primary;
    }

    &.completed {
      background-color: $persian-green;
    }
  }

  .number {
    border: 10px double $jungle-green;
    color: $jungle-green;
    cursor: pointer;
  }


  .cols-results {
    display: flex;
    gap: 1rem;
    align-items: center;
    padding-left: 3rem;
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
      border: 2px solid $jungle-green;
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
  border-top: 1px solid $white;
  padding: 1.5rem 3rem;

  .attempts {
    font-size: 3rem;
    color: $white;

    .attempts_left {
      margin-left: 1rem;

      &.success {
        color: $jungle-green;
      }

      &.warning {
        color: $warning;
      }

      &.danger {
        color: $danger;
      }
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