<template>
  <div class="timeline">
    <div class="events">
      <div
        class="event"
        v-for="(event, index) in sortedEvents"
        :key="event.timestamp"
      >
        <template
          v-if="
            index == 0 ||
            differentDate(event.timestamp, sortedEvents[index - 1].timestamp)
          "
        >
          <div></div>
          <div class="event-date">
            <span>{{ timestamptoDate(event.timestamp) }}</span>
            <div class="line"></div>
          </div>
          <div></div>
        </template>
        <div class="event-time">{{ timestampToTime(event.timestamp) }}</div>
        <div class="event-icon line-space">
          <div class="icon-container" :style="{ backgroundColor: event.color }">
            <FontAwesomeIcon
              :icon="event.icon"
              :style="{ color: event.iconColor }"
            />
          </div>
          <div class="line"></div>
        </div>
        <div class="event-title">{{ event.title }}</div>
        <div></div>
        <div class="line-space">
          <div class="line"></div>
        </div>
        <div class="event-content">
          <template v-if="typeof event.content === 'object'">
            <template v-for="content in event.content">
              {{ content }}<br :key="content" />
            </template>
          </template>
          <template v-else>
            {{ event.content }}
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);
var dayjs = require("dayjs");

export default {
  name: "VueTimeline",
  components: {
    FontAwesomeIcon,
  },
  props: {
    events: {
      type: Array,
      default: () => [],
    },
    order: {
      type: String,
      default: "asc",
      validator: function (value) {
        return ["asc", "desc"].indexOf(value) !== -1;
      },
    },
    timestampMajorFormat: {
      type: String,
      default: "D MMM",
    },
    timestampMinorFormat: {
      type: String,
      default: "h:mm A",
    },
  },
  computed: {
    sortedEvents: function () {
      var events = this.events;
      if (this.order === "asc") {
        events.sort((a, b) => {
          return b.timestamp > a.timestamp;
        });
      } else {
        events.sort((a, b) => {
          return b.timestamp < a.timestamp;
        });
      }
      return events;
    },
  },
  methods: {
    timestamptoDate: function (timestamp) {
      return dayjs(timestamp).format(this.timestampMajorFormat);
    },
    timestampToTime: function (timestamp) {
      return dayjs(timestamp).format(this.timestampMinorFormat);
    },
    differentDate: function (a, b) {
      return dayjs(a).diff(b, "day");
    },
  },
};
</script>

<style scoped lang="less">
.events {
  display: grid;
  grid-template-columns: max-content max-content max-content;
  font-size: 18px;

  .event {
    display: contents;
  }

  .line-space {
    position: relative;
    padding: 0 16px;
  }

  .line {
    width: 2px;
    height: 100%;
    position: absolute;
    left: calc(50% - 1px);
    top: 0;
    background-color: #d8d8d8;
    z-index: 1;
  }

  .event-date {
    text-align: center;
    color: #999999;
    font-size: 14px;
    position: relative;
    padding-top: 20px;

    span {
      position: relative;
      background-color: #ffffff;
      z-index: 2;
      padding: 6px 0;
    }
  }

  .event-time {
    color: #999999;
    display: flex;
    align-items: center;
    padding-top: 26px;
    font-size: 14px;
  }

  .event-title {
    color: #595959;
    display: flex;
    align-items: center;
    padding-top: 26px;
  }

  .event-icon {
    display: flex;
    align-items: center;
    padding-top: 26px;

    .icon-container {
      width: 26px;
      height: 26px;
      border-radius: 50%;
      background-color: #3199fa;
      color: #ffffff;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 2;

      svg {
        width: 16px;
        height: 16px;
      }
    }
  }

  .event-content {
    color: #6a6a6a;
    padding-top: 6px;
    font-size: 14px;
    line-height: 20px;
  }
}
</style>
