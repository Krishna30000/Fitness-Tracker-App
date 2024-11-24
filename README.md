### **Fitness Tracker App**

A simple fitness tracking application built using **Next.js**. The app includes the following features:

- **My Progress Page**: 
  - Displays steps, calories burned, and workouts completed using progress rings.
  - Shows walking patterns (hourly steps), sleep patterns (weekly hours), and weekly progress in an interactive dashboard.
- **Friends Page**:
  - Displays a list of friends and their progress (steps, calories, and workouts).
  - Includes hover effects for better visualization.

---

### **Features**

1. **Real-Time Visualizations**:
   - Progress rings to track progress against goals.
   - Bar and line charts for activity patterns.
2. **Interactive Design**:
   - Hover effects for better user engagement.
3. **Modular Components**:
   - Reusable components for charts and progress tracking.

---

### **Technologies Used**

- **Next.js** (Framework)
- **React Chart.js 2** (Charts and visualizations)
- **Tailwind CSS** (Styling)

---

### **How to Run Locally**

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/fitness-tracker.git
   cd fitness-tracker
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open the app**:
   - Go to `http://localhost:3000` in your browser.

---

### **Pages**

1. **`/` - My Progress Page**:
   - View personal progress, walking patterns, sleep patterns, and weekly overview.
2. **`/friends` - Friends Progress Page**:
   - View friends' progress with interactive hover effects.

---

### **Folder Structure**

```
src/
├── app/
│   ├── page.tsx          # Home page (My Progress)
│   ├── friends/page.tsx  # Friends page
├── components/
│   ├── ProgressRing.tsx  # Progress ring component
│   ├── BarChart.tsx      # Bar chart component
│   ├── LineChart.tsx     # Line chart component
│   ├── CalendarGrid.tsx  # Weekly overview component
│   └── FriendsList.tsx   # Friends list component
```

---

### **Future Enhancements**

- Add backend integration for real-time data updates.
- Enable user authentication and personalized data.
- Improve chart interactivity and tooltips.

---

Let me know if you'd like to refine the README further! 🚀