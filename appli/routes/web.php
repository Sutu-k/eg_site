<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Routes du site vitrine EG Conseil
Route::get('/', function () {
    return Inertia::render('Home');
})->name('home');

Route::get('/a-propos', function () {
    return Inertia::render('About');
})->name('about');

Route::get('/domaines', function () {
    return Inertia::render('Domains');
})->name('domains');

Route::get('/domaines/{domain}', function ($domain) {
    return Inertia::render('DomainDetail', [
        'domain' => $domain,
    ]);
})->name('domain.detail');

Route::get('/services', function () {
    return Inertia::render('Services');
})->name('services');

Route::get('/realisations', function () {
    return Inertia::render('Achievements');
})->name('achievements');

Route::get('/actualites', function () {
    return Inertia::render('News');
})->name('news');

Route::get('/actualites/{slug}', function ($slug) {
    return Inertia::render('NewsDetail', [
        'slug' => $slug,
    ]);
})->name('news.detail');

Route::get('/contact', function () {
    return Inertia::render('Contact');
})->name('contact');

// Routes d'administration (protégées par authentification)
Route::middleware(['auth', 'verified'])->prefix('admin')->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
