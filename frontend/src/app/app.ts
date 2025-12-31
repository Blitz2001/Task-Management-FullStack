import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaskService } from './services/task';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent implements OnInit {
  tasks: any[] = [];
  newTask = { Title: '', Description: '', IsCompleted: false, DueDate: '' };
  activeTab: 'pending' | 'completed' = 'pending';
  searchTerm: string = '';
  
  isEditing: boolean = false;
  editingTaskId: number | null = null;

  // Authentication State
  isLoggedIn: boolean = false;
  loginData = { username: '', password: '' };

  // Toast System
  showToast: boolean = false;
  toastMessage: string = '';
  toastType: 'success' | 'error' = 'success';

  constructor(
    private taskService: TaskService,
    private cdr: ChangeDetectorRef 
  ) {}

  ngOnInit() {
    
    if (this.isLoggedIn) {
      this.loadTasks();
    }
  }

  // --- Authentication Functions ---
  login() {
    
    if (this.loginData.username === 'admin' && this.loginData.password === 'password') {
      this.isLoggedIn = true;
      this.triggerToast('Login Successful!');
      this.loadTasks(); 
    } else {
      this.triggerToast('Invalid Credentials', 'error');
    }
  }

  logout() {
    this.isLoggedIn = false;
    this.loginData = { username: '', password: '' };
    this.triggerToast('Logged Out');
  }

  // --- Dashboard Logic ---
  get pendingCount() { return this.tasks.filter(t => !t.IsCompleted).length; }
  get completedCount() { return this.tasks.filter(t => t.IsCompleted).length; }

  get filteredTasks() {
    let filtered = this.tasks;
    if (this.activeTab === 'pending') {
      filtered = filtered.filter(t => !t.IsCompleted);
    } else {
      filtered = filtered.filter(t => t.IsCompleted);
    }
    if (this.searchTerm.trim()) {
      const search = this.searchTerm.toLowerCase();
      filtered = filtered.filter(t => 
        t.Title.toLowerCase().includes(search) || 
        (t.Description && t.Description.toLowerCase().includes(search))
      );
    }
    return filtered.sort((a, b) => {
      if (!a.DueDate) return 1;
      if (!b.DueDate) return -1;
      return new Date(a.DueDate).getTime() - new Date(b.DueDate).getTime();
    });
  }

  triggerToast(message: string, type: 'success' | 'error' = 'success') {
    this.toastMessage = message;
    this.toastType = type;
    this.showToast = true;
    setTimeout(() => { this.showToast = false; this.cdr.detectChanges(); }, 3000);
  }

  loadTasks() {
    this.taskService.getTasks().subscribe({
      next: (data) => {
        this.tasks = [...data]; 
        this.cdr.detectChanges(); 
      },
      error: (err) => this.triggerToast('Failed to load tasks', 'error')
    });
  }

  editTask(task: any) {
    this.isEditing = true;
    this.editingTaskId = task.Id;
    this.newTask = { 
      Title: task.Title, 
      Description: task.Description, 
      IsCompleted: task.IsCompleted,
      DueDate: task.DueDate ? task.DueDate.split('T')[0] : ''
    };
    this.cdr.detectChanges();
  }

  cancelEdit() {
    this.isEditing = false;
    this.editingTaskId = null;
    this.newTask = { Title: '', Description: '', IsCompleted: false, DueDate: '' };
  }

  saveTask() {
    if (this.newTask.Title && this.newTask.Title.trim()) {
      if (this.isEditing && this.editingTaskId) {
        const updatedTask = { ...this.newTask, Id: this.editingTaskId };
        this.taskService.updateTask(updatedTask).subscribe({
          next: () => {
            this.triggerToast('Task Updated!');
            this.cancelEdit();
            this.loadTasks();
          },
          error: () => this.triggerToast('Update Failed', 'error')
        });
      } else {
        this.taskService.addTask(this.newTask).subscribe({
          next: () => {
            this.triggerToast('Task Added!');
            this.newTask = { Title: '', Description: '', IsCompleted: false, DueDate: '' };
            this.loadTasks();
          },
          error: () => this.triggerToast('Save Failed', 'error')
        });
      }
    }
  }

  toggleStatus(task: any) {
    task.IsCompleted = !task.IsCompleted; 
    this.taskService.updateTask(task).subscribe({
      next: () => {
        this.triggerToast(task.IsCompleted ? 'Completed!' : 'Reopened');
        this.cdr.detectChanges();
      },
      error: (err) => {
        task.IsCompleted = !task.IsCompleted;
        this.cdr.detectChanges();
      }
    });
  }

  deleteTask(id: any) {
    if (!id) return;
    if (confirm('Delete this task?')) {
      this.taskService.deleteTask(id).subscribe({
        next: () => {
          this.triggerToast('Deleted');
          this.loadTasks();
        },
        error: () => this.triggerToast('Delete Failed', 'error')
      });
    }
  }
}