<template>
  <div class="min-h-screen bg-gray-100 flex flex-col">
    <!-- Header -->
    <header class="fixed w-full top-0 text-center py-4 bg-white shadow">
      <h1 class="text-lg font-semibold text-gray-800">Ерии ҳуқуқӣ</h1>
    </header>

    <!-- Chatbot Card -->
    <main class="flex-1 flex flex-col items-center justify-start px-4 pt-32">
      <div class="bg-white rounded-3xl shadow-md w-full max-w-sm text-center p-6">
        <!-- Bot Avatar -->
        <div class="flex justify-center mb-4">
          <img
            src="../assets/bot-avatar.svg"
            alt="Robot Avatar"
            class="w-24 h-24 rounded-full "
          />
        </div>
        <!-- Bot Info -->
        <h2 class="text-xl font-semibold text-gray-800">Одил</h2>
        <p class="text-gray-500 text-sm mb-6">мушовири ҳуқуқӣ</p>

        <!-- Options -->
        <div class="flex flex-col space-y-3">
          <button class="bg-white border-mine2 text-color2 rounded-full px-4 py-2 text-sm font-medium hover:bg-cyan-50">
            how to register EP ?
          </button>
          <button class="bg-white border-mine2 text-color2 rounded-full px-4 py-2 text-sm font-medium hover:bg-cyan-50">
            what should i do if i`m arrested ?
          </button>
          <button class="bg-white border-mine2 text-color2 rounded-full px-4 py-2 text-sm font-medium hover:bg-cyan-50">
            how to get driver license ?
          </button>
          <button class="bg-white border-mine2 text-color2 rounded-full px-4 py-2 text-sm font-medium hover:bg-cyan-50">
            someone is offering me bribe ?
          </button>
        </div>
      </div>
    </main>

    <!-- Chat Input -->
    <footer class="w-full fixed bottom-0  px-4 py-3">
      <div class="flex items-center bg-white rounded-full shadow-md px-4 py-2">
        
        <textarea 
            placeholder="i am having a trouble with..."
            rows="1"
            class="flex-1 text-gray-700 placeholder-gray-400 bg-transparent focus:outline-none text-sm"
          ></textarea>
        <button class="p-2">
          <img src="../assets/send.svg" alt="">
        </button>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "ChatbotScreen",
};
</script>
